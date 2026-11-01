"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import type { IconType } from "react-icons";
import {
  FaGlobe,
  FaIdCard,
  FaPlug,
  FaShieldAlt,
  FaUserPlus,
} from "react-icons/fa";

export type RequestItem = {
  id: string;
  title: string;
  /** Day the client asked; absent for work C-Shine Digital scheduled itself. */
  day?: string;
  planned?: boolean;
  result: string;
};

export type RequestsCopy = {
  heading: string;
  portal: string;
  stats: string[];
  open: string;
  done: string;
  newStatus: string;
  plannedBy: string;
  items: RequestItem[];
};

const ICONS: Record<string, IconType> = {
  integration: FaPlug,
  mailbox: FaUserPlus,
  security: FaShieldAlt,
  renewal: FaGlobe,
  cards: FaIdCard,
};

const STEP_MS = 2200;

/**
 * Board state for step n: the first n requests are resolved, newest on top.
 * One extra step resets everything back to "new" before looping.
 */
const resolvedAt = (step: number, items: RequestItem[]) =>
  items
    .slice(0, step)
    .map((item) => item.id)
    .reverse();

const Request = ({
  item,
  resolved,
  copy,
  nodeRef,
}: {
  item: RequestItem;
  resolved: boolean;
  copy: RequestsCopy;
  nodeRef?: (el: HTMLDivElement | null) => void;
}) => {
  const Icon = ICONS[item.id] ?? FaPlug;
  return (
    <div
      ref={nodeRef}
      className={`relative grid grid-cols-[auto_1fr_auto] items-center gap-x-3 gap-y-0.5 rounded-[10px] bg-white p-2.5 text-[12.5px] font-medium text-midnight-900 ${
        item.planned
          ? "z-10 shadow-[0_0_0_1.5px_#04c4d4,0_8px_18px_-12px_rgba(4,196,212,0.6)]"
          : "ring-1 ring-neutral-200"
      }`}
    >
      <span className="row-span-2 flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cshine-blue-500 to-cyan-500 text-white shadow-md shadow-cshine-blue-500/20">
        <Icon className="h-3 w-3" aria-hidden="true" />
      </span>
      <span>{item.title}</span>
      <span
        className={`row-span-2 text-right text-[11px] ${
          resolved ? "font-semibold text-success" : "text-neutral-500"
        }`}
      >
        {resolved ? item.result : copy.newStatus}
      </span>
      <span
        className={`col-start-2 text-[11px] ${
          item.planned
            ? "font-semibold text-cshine-blue-700"
            : "font-normal text-neutral-500"
        }`}
      >
        {item.planned ? copy.plannedBy : item.day}
      </span>
    </div>
  );
};

/**
 * The client's requests in the C-Shine Digital portal: questions the client
 * asked plus work C-Shine Digital scheduled itself (cyan), moving from "new"
 * to "resolved" on a loop. Cards slide into place (FLIP) and, on desktop, an
 * invisible sizer keeps the lanes one height.
 */
const RequestsBoard = ({
  copy,
  label,
}: {
  copy: RequestsCopy;
  label: string;
}) => {
  const { items } = copy;
  const [step, setStep] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const nodes = useRef(new Map<string, HTMLElement>());
  const before = useRef(new Map<string, DOMRect>());

  const resolved = resolvedAt(step, items);
  const open = items.filter((item) => !resolved.includes(item.id));
  const byId = new Map(items.map((item) => [item.id, item]));

  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    let timer: ReturnType<typeof setInterval> | undefined;
    const io = new IntersectionObserver(([entry]) => {
      clearInterval(timer);
      if (!entry.isIntersecting) return;
      timer = setInterval(() => {
        before.current = new Map(
          [...nodes.current].map(([id, el]) => [
            id,
            el.getBoundingClientRect(),
          ]),
        );
        setStep((s) => (s + 1) % (items.length + 1));
      }, STEP_MS);
    });
    io.observe(root);
    return () => {
      io.disconnect();
      clearInterval(timer);
    };
  }, [items.length]);

  useLayoutEffect(() => {
    const prev = before.current;
    if (!prev.size) return;
    before.current = new Map();
    nodes.current.forEach((el, id) => {
      const a = prev.get(id);
      if (!a) return;
      const b = el.getBoundingClientRect();
      const dx = a.left - b.left;
      const dy = a.top - b.top;
      if (!dx && !dy) return;
      el.animate(
        [{ transform: `translate(${dx}px, ${dy}px)` }, { transform: "none" }],
        {
          duration: Math.abs(dx) > 40 ? 700 : 450,
          easing: "cubic-bezier(.5,0,.2,1)",
        },
      );
    });
  }, [step]);

  const track = (id: string) => (el: HTMLDivElement | null) => {
    if (el) nodes.current.set(id, el);
    else nodes.current.delete(id);
  };

  const lane = (title: string, ids: string[], isDone: boolean) => (
    <div className="flex flex-col gap-2 rounded-xl bg-neutral-50 p-2.5">
      <h4
        className={`flex justify-between px-0.5 text-[11px] font-semibold uppercase tracking-[0.1em] ${
          isDone ? "text-success" : "text-neutral-500"
        }`}
      >
        {title}
        <span>{ids.length}</span>
      </h4>
      <div className="grid">
        {/* Desktop only: a lane holding every request sets the height. */}
        <div className="invisible col-start-1 row-start-1 hidden flex-col gap-2 md:flex">
          {items.map((item) => (
            <Request key={item.id} item={item} resolved={isDone} copy={copy} />
          ))}
        </div>
        <div className="col-start-1 row-start-1 flex flex-col gap-2">
          {ids.map((id) => (
            <Request
              key={id}
              item={byId.get(id)!}
              resolved={isDone}
              copy={copy}
              nodeRef={track(id)}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div
      ref={rootRef}
      role="img"
      aria-label={label}
      className="rounded-2xl bg-white p-4 md:p-5 ring-1 ring-neutral-200 shadow-sm"
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-midnight-900 shadow-[0_8px_18px_-10px_rgba(4,5,12,0.6)]">
            <Image
              src="/images/logo_img_transparent.png"
              alt=""
              width={34}
              height={25}
            />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold text-midnight-900">
              {copy.heading}
            </span>
            <span className="text-xs text-neutral-500">{copy.portal}</span>
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {copy.stats.map((stat) => (
            <span
              key={stat}
              className="rounded-full bg-neutral-50 px-2.5 py-1 text-[11.5px] font-semibold text-neutral-700 ring-1 ring-inset ring-neutral-200"
            >
              {stat}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-2.5 md:grid-cols-2" aria-hidden="true">
        {lane(
          copy.open,
          open.map((item) => item.id),
          false,
        )}
        {lane(copy.done, resolved, true)}
      </div>
    </div>
  );
};

export default RequestsBoard;
