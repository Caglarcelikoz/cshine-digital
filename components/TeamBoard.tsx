"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

/* The board's content is deliberately English in every locale: that's how
   real dev teams' boards look, and it reads as authentic, not as copy. */

type Label = "Frontend" | "Backend" | "DevOps";
type Card = {
  id: string;
  title: string;
  key: string;
  label: Label;
  owner: string;
  /** Owned by the embedded C-Shine developer. */
  ours?: boolean;
};
type ColumnId = "todo" | "doing" | "live";
type Board = Record<ColumnId, string[]>;

const CARDS: Record<string, Card> = {
  ci: {
    id: "ci",
    title: "Speed up CI pipeline with caching",
    key: "APP-414",
    label: "DevOps",
    owner: "CS",
    ours: true,
  },
  onboarding: {
    id: "onboarding",
    title: "Mobile app onboarding flow",
    key: "APP-412",
    label: "Frontend",
    owner: "TJ",
  },
  redesign: {
    id: "redesign",
    title: "Customer dashboard redesign",
    key: "APP-405",
    label: "Frontend",
    owner: "CS",
    ours: true,
  },
  timezone: {
    id: "timezone",
    title: "Fix timezone bug in date filter",
    key: "APP-401",
    label: "Frontend",
    owner: "LV",
  },
  currencies: {
    id: "currencies",
    title: "Currencies endpoint with daily exchange rates",
    key: "APP-393",
    label: "Backend",
    owner: "MK",
  },
  webhooks: {
    id: "webhooks",
    title: "Payment status webhooks",
    key: "APP-386",
    label: "Backend",
    owner: "LV",
  },
};

const COLUMNS: { id: ColumnId; title: string }[] = [
  { id: "todo", title: "To do" },
  { id: "doing", title: "In progress" },
  { id: "live", title: "Live" },
];

/* The loop: the redesign ships, the CI work gets picked up, then reset. */
const STATES: Board[] = [
  {
    todo: ["ci", "onboarding"],
    doing: ["redesign", "timezone"],
    live: ["currencies", "webhooks"],
  },
  {
    todo: ["ci", "onboarding"],
    doing: ["timezone"],
    live: ["redesign", "currencies", "webhooks"],
  },
  {
    todo: ["onboarding"],
    doing: ["ci", "timezone"],
    live: ["redesign", "currencies", "webhooks"],
  },
];
const STEP_MS = 2600;

const columnOf = (board: Board, id: string) =>
  (Object.keys(board) as ColumnId[]).find((c) => board[c].includes(id));

/** Per column, the cards of the state where that column is fullest. */
const SIZER = Object.fromEntries(
  (["todo", "doing", "live"] as ColumnId[]).map((c) => [
    c,
    STATES.reduce((a, b) => (b[c].length > a[c].length ? b : a))[c],
  ]),
) as Board;

const TEAM = ["LV", "TJ", "MK"];
const TOOLS = ["Jira", "GitHub", "Slack", "Daily standup 09:30"];

const LABEL_STYLES: Record<Label, string> = {
  Frontend: "bg-cshine-blue-500/10 text-cshine-blue-700",
  Backend: "bg-midnight-500/[0.08] text-midnight-500",
  DevOps: "bg-accent-500/15 text-accent-700",
};

const Avatar = ({
  initials,
  ours,
  small,
}: {
  initials: string;
  ours?: boolean;
  small?: boolean;
}) => (
  <span
    className={`flex flex-shrink-0 items-center justify-center rounded-full font-bold ring-2 ring-white ${
      small ? "h-[22px] w-[22px] text-[9px]" : "h-8 w-8 text-[11px]"
    } ${
      ours
        ? "bg-gradient-to-br from-cshine-blue-500 to-cyan-500 text-midnight-900 shadow-[0_0_0_4px_#04c4d4]"
        : "bg-neutral-100 text-neutral-700"
    }`}
  >
    {initials}
  </span>
);

const Ticket = ({
  card,
  landed = false,
  onLanded,
  nodeRef,
}: {
  card: Card;
  landed?: boolean;
  onLanded?: () => void;
  nodeRef?: (el: HTMLDivElement | null) => void;
}) => (
  <div
    ref={nodeRef}
    onAnimationEnd={onLanded}
    className={`relative grid gap-2 rounded-[10px] bg-white p-2.5 text-[12.5px] font-medium text-midnight-900 ${
      card.ours
        ? "z-10 shadow-[0_0_0_1.5px_#04c4d4,0_8px_18px_-12px_rgba(4,196,212,0.6)]"
        : "ring-1 ring-neutral-200"
    } ${landed ? "animate-landed" : ""}`}
  >
    <span
      className={`justify-self-start rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.06em] ${LABEL_STYLES[card.label]}`}
    >
      {card.label}
    </span>
    {card.title}
    <span className="flex items-center justify-between text-[11px] font-normal text-neutral-500">
      {card.key}
      <Avatar initials={card.owner} ours={card.ours} small />
    </span>
  </div>
);

/**
 * A sprint board with the client's team and one embedded C-Shine developer
 * (cyan ring). C-Shine's tickets move column to column on a loop; the other
 * cards shift out of the way (FLIP), so nothing overlaps.
 */
const TeamBoard = ({ label }: { label: string }) => {
  const [step, setStep] = useState(0);
  const [landed, setLanded] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const nodes = useRef(new Map<string, HTMLElement>());
  const before = useRef(new Map<string, DOMRect>());
  const board = STATES[step];

  // Advance only while the board is on screen, and never for reduced motion.
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
        setStep((s) => (s + 1) % STATES.length);
      }, STEP_MS);
    });
    io.observe(root);
    return () => {
      io.disconnect();
      clearInterval(timer);
    };
  }, []);

  // FLIP: animate every card from where it was to where it is now.
  useLayoutEffect(() => {
    const prev = before.current;
    if (!prev.size) return;
    before.current = new Map();
    const prevBoard = STATES[(step + STATES.length - 1) % STATES.length];
    nodes.current.forEach((el, id) => {
      const a = prev.get(id);
      if (!a) return;
      const b = el.getBoundingClientRect();
      const dx = a.left - b.left;
      const dy = a.top - b.top;
      if (!dx && !dy) return;
      const moved = columnOf(prevBoard, id) !== columnOf(board, id);
      el.animate(
        [{ transform: `translate(${dx}px, ${dy}px)` }, { transform: "none" }],
        {
          duration: moved ? 700 : 450,
          easing: "cubic-bezier(.5,0,.2,1)",
        },
      );
      if (moved && CARDS[id].ours) setLanded(id);
    });
  }, [step, board]);

  return (
    <div
      ref={rootRef}
      role="img"
      aria-label={label}
      className="rounded-2xl bg-white p-4 md:p-5 ring-1 ring-neutral-200 shadow-sm"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex -space-x-2">
          {TEAM.map((t) => (
            <Avatar key={t} initials={t} />
          ))}
          <Avatar initials="CS" ours />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {TOOLS.map((tool) => (
            <span
              key={tool}
              className="rounded-full bg-neutral-50 px-2.5 py-1 text-[11.5px] font-semibold text-neutral-700 ring-1 ring-inset ring-neutral-200"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-2.5 md:grid-cols-3" aria-hidden="true">
        {COLUMNS.map((col) => (
          <div
            key={col.id}
            className="flex flex-col gap-2 rounded-xl bg-neutral-50 p-2.5"
          >
            <h4
              className={`flex justify-between px-0.5 text-[11px] font-semibold uppercase tracking-[0.1em] ${
                col.id === "live" ? "text-success" : "text-neutral-500"
              }`}
            >
              {col.title}
              <span>{board[col.id].length}</span>
            </h4>
            {/* The invisible sizer holds this column's fullest moment, so the
                board keeps one height while cards move. */}
            <div className="grid">
              <div className="invisible col-start-1 row-start-1 flex flex-col gap-2">
                {SIZER[col.id].map((id) => (
                  <Ticket key={id} card={CARDS[id]} />
                ))}
              </div>
              <div className="col-start-1 row-start-1 flex flex-col gap-2">
                {board[col.id].map((id) => (
                  <Ticket
                    key={id}
                    card={CARDS[id]}
                    landed={landed === id}
                    onLanded={() => setLanded(null)}
                    nodeRef={(el) => {
                      if (el) nodes.current.set(id, el);
                      else nodes.current.delete(id);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamBoard;
