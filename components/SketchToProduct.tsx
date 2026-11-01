"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import { Caveat } from "next/font/google";
import {
  FaArrowsAltH,
  FaBell,
  FaCheck,
  FaCreditCard,
  FaExternalLinkAlt,
  FaFileAlt,
  FaFileInvoice,
  FaFolder,
  FaPalette,
  FaRoute,
  FaThLarge,
  FaVideo,
} from "react-icons/fa";

const caveat = Caveat({ subsets: ["latin"], weight: ["500", "700"] });

export type SketchCopy = {
  logo: string;
  menu: string;
  user: string;
  greeting: string;
  preview: string;
  progress: string;
  milestones: string;
  demo: string;
  updates: string;
  stats: string;
  annotation: string;
};

export type MockCopy = {
  brand: string;
  product: string;
  nav: string[];
  client: string;
  clientRole: string;
  greeting: string;
  project: string;
  preview: string;
  progressLabel: string;
  progress: string;
  sprint: string;
  milestones: string[];
  demoLabel: string;
  demoWhen: string;
  demoMeta: string;
  demoCta: string;
  updatesLabel: string;
  updates: { title: string; when: string }[];
  speedLabel: string;
  speed: string;
  uptimeLabel: string;
  uptime: string;
};

type SketchToProductProps = {
  sketch: SketchCopy;
  mock: MockCopy;
  sketchLabel: string;
  productLabel: string;
  hint: string;
  sliderLabel: string;
};

type SceneProps = { s: boolean; sketch: SketchCopy; mock: MockCopy };

/* ---------- Shared bits ---------- */

/** Hand-drawn box: wobbly corners, pencil stroke. */
const SK =
  "border-2 border-[#3b3b3b] [border-radius:14px_6px_12px_8px/8px_12px_6px_14px]";
const PAPER = "#fbfaf6";
const PENCIL = "#3b3b3b";

const NAV_ICONS = [FaThLarge, FaRoute, FaBell, FaFolder, FaFileInvoice];
const UPDATE_ICONS = [FaCheck, FaCreditCard, FaPalette, FaFileAlt];
const DONE_MILESTONES = 2; // Idea and Proposal done, Build in progress

/** The site's dot-grid motif, for dark surfaces. */
const DotGrid = ({ className = "" }: { className?: string }) => (
  <div
    className={`pointer-events-none absolute inset-0 opacity-20 ${className}`}
    style={{
      backgroundImage:
        "radial-gradient(circle at center, #04C4D4 0.8px, transparent 0.8px)",
      backgroundSize: "18px 18px",
    }}
    aria-hidden="true"
  />
);

/** Gradient icon tile, as used across the C-Shine site. */
const IconTile = ({
  icon: Icon,
  size = 32,
}: {
  icon: typeof FaCheck;
  size?: number;
}) => (
  <span
    className="flex flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cshine-blue-500 to-cyan-500 text-white shadow-md shadow-cshine-blue-500/20"
    style={{ width: size, height: size }}
  >
    <Icon style={{ width: size * 0.42, height: size * 0.42 }} />
  </span>
);

/** Logo with the brand name, and the product name stacked underneath. */
const Logo = ({ mock, size = 30 }: { mock: MockCopy; size?: number }) => (
  <span className="flex items-center gap-2.5">
    <Image
      src="/images/logo_img_transparent.png"
      alt=""
      width={size * 1.38}
      height={size}
    />
    <span className="flex flex-col leading-none">
      <span className="whitespace-nowrap text-[15px] font-bold tracking-tight text-white">
        {mock.brand}
      </span>
      <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-cshine-blue-400">
        {mock.product}
      </span>
    </span>
  </span>
);

/** Milestones along a line: done, current (pulsing), still to come. */
const Milestones = ({
  s,
  labels,
  compact = false,
}: {
  s: boolean;
  labels: string[];
  compact?: boolean;
}) => (
  <div
    className="relative grid"
    style={{ gridTemplateColumns: `repeat(${labels.length}, 1fr)` }}
  >
    <span
      className={`absolute left-[12.5%] right-[12.5%] ${compact ? "top-[9px]" : "top-[11px]"} h-0.5 ${s ? "border-t-2 border-dashed border-[#3b3b3b]" : "bg-neutral-200"}`}
    />
    {!s && (
      <span
        className={`absolute left-[12.5%] ${compact ? "top-[9px]" : "top-[11px]"} h-0.5 bg-cshine-blue-500`}
        style={{ width: `${(DONE_MILESTONES / (labels.length - 1)) * 75}%` }}
      />
    )}
    {labels.map((label, i) => {
      const done = i < DONE_MILESTONES;
      const current = i === DONE_MILESTONES;
      const dot = compact ? 20 : 24;
      return (
        <div
          key={label}
          className="relative flex flex-col items-center gap-1.5"
        >
          <span
            className="flex items-center justify-center rounded-full"
            style={{
              width: dot,
              height: dot,
              background: s ? PAPER : done ? "#04c4d4" : "#fff",
              boxShadow: s
                ? `inset 0 0 0 2px ${PENCIL}`
                : done
                  ? "none"
                  : current
                    ? "inset 0 0 0 2px #04c4d4, 0 0 0 5px rgba(4,196,212,.15)"
                    : "inset 0 0 0 2px #d0dadc",
            }}
          >
            {!s && done && (
              <FaCheck className="h-2.5 w-2.5 text-midnight-900" />
            )}
            {!s && current && (
              <span className="h-2 w-2 rounded-full bg-cshine-blue-500" />
            )}
            {s && done && <span className="text-[14px] leading-none">✓</span>}
          </span>
          {!s && (
            <span
              className={`${compact ? "text-[10.5px]" : "text-[12px]"} font-medium ${current ? "text-midnight-900" : "text-neutral-500"}`}
            >
              {label}
            </span>
          )}
        </div>
      );
    })}
  </div>
);

const Sparkline = ({ s }: { s: boolean }) => (
  <svg viewBox="0 0 80 28" className="h-7 w-20" fill="none" aria-hidden="true">
    {!s && (
      <path
        d="M0 22 L12 18 L22 20 L34 12 L46 14 L58 7 L70 9 L80 4 L80 28 L0 28 Z"
        fill="url(#spark-fill)"
      />
    )}
    <path
      d="M0 22 L12 18 L22 20 L34 12 L46 14 L58 7 L70 9 L80 4"
      stroke={s ? PENCIL : "#04c4d4"}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#04c4d4" stopOpacity=".25" />
        <stop offset="1" stopColor="#04c4d4" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

/** A white card in the product, or a pencil box in the sketch. */
const Card = ({
  s,
  className = "",
  children,
}: {
  s: boolean;
  className?: string;
  children: ReactNode;
}) => (
  <div
    className={`relative ${s ? SK : "rounded-2xl bg-white ring-1 ring-neutral-200 shadow-sm"} ${className}`}
  >
    {children}
  </div>
);

/** A dark card in the product, or a pencil box in the sketch. */
const DarkCard = ({
  s,
  className = "",
  children,
}: {
  s: boolean;
  className?: string;
  children: ReactNode;
}) => (
  <div
    className={`relative overflow-hidden ${s ? SK : "rounded-2xl bg-midnight-900 text-white"} ${className}`}
  >
    {!s && (
      <>
        <DotGrid />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,#04C4D4_0%,transparent_55%)] opacity-25" />
      </>
    )}
    <div className="relative h-full">{children}</div>
  </div>
);

const Label = ({
  s,
  children,
  sketchText,
}: {
  s: boolean;
  children: ReactNode;
  sketchText: string;
}) =>
  s ? (
    <span className="text-[22px] leading-none">{sketchText}</span>
  ) : (
    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-cshine-blue-700">
      {children}
    </span>
  );

const Paper = ({ s }: { s: boolean }) =>
  s ? (
    <div
      className="pointer-events-none absolute inset-0 opacity-60"
      style={{
        backgroundImage: "linear-gradient(#e7e3d6 1px, transparent 1px)",
        backgroundSize: "100% 28px",
      }}
    />
  ) : null;

/* ---------- Desktop: 1280 × 800 ---------- */

const DesktopScene = ({ s, sketch, mock }: SceneProps) => (
  <div
    className={`absolute inset-0 flex ${s ? caveat.className : ""}`}
    style={{
      width: 1280,
      height: 800,
      background: s ? PAPER : "#f4f7f8",
      color: s ? PENCIL : undefined,
    }}
  >
    <Paper s={s} />

    {/* Sidebar */}
    <aside
      className={`relative flex w-[232px] flex-col p-5 ${s ? "border-r-2 border-dashed border-[#3b3b3b]" : "overflow-hidden bg-midnight-900"}`}
    >
      {!s && (
        <>
          <DotGrid />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,#04C4D4_0%,transparent_50%)] opacity-15" />
        </>
      )}
      <div className="relative h-[34px] flex items-center">
        {s ? (
          <span className={`${SK} px-4 text-[22px] font-bold`}>
            {sketch.logo}
          </span>
        ) : (
          <Logo mock={mock} />
        )}
      </div>
      <nav className="relative mt-8 flex flex-col gap-1.5">
        {mock.nav.map((item, i) => {
          const Icon = NAV_ICONS[i];
          const active = i === 0;
          return (
            <span
              key={item}
              className={`flex h-[38px] items-center gap-3 px-3 ${
                s
                  ? `text-[21px] ${active ? SK : ""}`
                  : `rounded-lg text-[13.5px] font-medium ${active ? "bg-white/[0.07] text-white ring-1 ring-cshine-blue-500/30" : "text-white/55"}`
              }`}
            >
              {s ? (
                <>— {sketch.menu}</>
              ) : (
                <>
                  <Icon
                    className={`h-3.5 w-3.5 ${active ? "text-cshine-blue-400" : ""}`}
                  />
                  {item}
                </>
              )}
            </span>
          );
        })}
      </nav>
      <div
        className={`relative mt-auto flex items-center gap-3 p-2.5 ${s ? SK : "rounded-xl bg-white/[0.05] ring-1 ring-white/10"}`}
      >
        <span
          className={`flex h-9 w-9 items-center justify-center rounded-full text-[12px] font-bold ${s ? "border-2 border-[#3b3b3b]" : "bg-gradient-to-br from-cshine-blue-500 to-cyan-500 text-midnight-900"}`}
        >
          {s ? "" : "AN"}
        </span>
        {s ? (
          <span className="text-[21px]">{sketch.user}</span>
        ) : (
          <span className="flex flex-col leading-tight">
            <span className="text-[13px] font-semibold text-white">
              {mock.client}
            </span>
            <span className="text-[11px] text-white/50">{mock.clientRole}</span>
          </span>
        )}
      </div>
    </aside>

    {/* Main */}
    <main className="relative flex flex-1 flex-col p-8">
      {!s && (
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,#04C4D4_0%,transparent_40%)] opacity-[0.07]" />
      )}
      <header className="relative flex h-[52px] items-start justify-between">
        {s ? (
          <span className="text-[40px] font-bold leading-none underline decoration-wavy decoration-2 underline-offset-8">
            {sketch.greeting}
          </span>
        ) : (
          <div>
            <h3 className="text-[26px] font-bold leading-tight tracking-tight text-midnight-900">
              {mock.greeting}
            </h3>
            <p className="text-[13px] text-neutral-500">{mock.project}</p>
          </div>
        )}
        <span
          className={`flex h-[38px] items-center gap-2 px-4 ${
            s
              ? `${SK} text-[22px] font-bold`
              : "rounded-lg bg-cshine-blue-500 bg-gradient-to-b from-transparent to-midnight-900/[0.15] text-[13px] font-semibold text-midnight-900 shadow-glow"
          }`}
        >
          {s ? (
            sketch.preview
          ) : (
            <>
              {mock.preview}
              <FaExternalLinkAlt className="h-3 w-3" />
            </>
          )}
        </span>
      </header>

      {/* Row 1 */}
      <div
        className="relative mt-6 grid gap-5"
        style={{ gridTemplateColumns: "1fr 300px" }}
      >
        <Card s={s} className="h-[200px] p-6">
          <div className="flex items-center justify-between">
            <Label s={s} sketchText={sketch.progress}>
              {mock.progressLabel}
            </Label>
            {!s && (
              <span className="rounded-full bg-cshine-blue-500/10 px-2.5 py-1 text-[11px] font-semibold text-cshine-blue-700">
                {mock.sprint}
              </span>
            )}
          </div>
          <div className="mt-2 flex items-center gap-4">
            <span
              className={`w-[96px] ${s ? "text-[40px] font-bold" : "text-[40px] font-bold leading-none tracking-tight text-midnight-900"}`}
            >
              {s ? "?? %" : mock.progress}
            </span>
            <span
              className={`relative h-2.5 flex-1 overflow-hidden ${s ? "border-2 border-[#3b3b3b] rounded-full h-4" : "rounded-full bg-neutral-100"}`}
            >
              <span
                className={`absolute inset-y-0 left-0 ${s ? "" : "rounded-full bg-gradient-to-r from-cshine-blue-500 to-cyan-400"}`}
                style={{
                  width: "68%",
                  backgroundImage: s
                    ? `repeating-linear-gradient(45deg, ${PENCIL} 0 2px, transparent 2px 7px)`
                    : undefined,
                }}
              />
            </span>
          </div>
          <div className="mt-6">
            {s && (
              <span className="absolute right-6 top-[132px] text-[20px]">
                {sketch.milestones}
              </span>
            )}
            <Milestones s={s} labels={mock.milestones} />
          </div>
        </Card>

        <DarkCard s={s} className="h-[200px] p-6">
          <div className="flex h-full flex-col">
            {s ? (
              <>
                <span className="text-[24px]">{sketch.demo}</span>
                <span className="mt-3 grid h-[64px] w-[84px] grid-cols-3 gap-1 border-2 border-[#3b3b3b] p-1.5 [border-radius:8px_4px_9px_5px]">
                  {Array.from({ length: 6 }, (_, i) => (
                    <span
                      key={i}
                      className={
                        i === 4
                          ? "bg-[#3b3b3b]/60"
                          : "border border-[#3b3b3b]/50"
                      }
                    />
                  ))}
                </span>
                <span className={`${SK} mt-auto w-fit px-3 text-[20px]`}>
                  ok
                </span>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3">
                  <IconTile icon={FaVideo} size={34} />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/55">
                    {mock.demoLabel}
                  </span>
                </div>
                <span className="mt-4 text-[20px] font-bold leading-tight">
                  {mock.demoWhen}
                </span>
                <span className="text-[13px] text-white/55">
                  {mock.demoMeta}
                </span>
                <span className="mt-auto flex h-[34px] w-fit items-center rounded-lg border border-cshine-blue-500/50 px-3.5 text-[12.5px] font-semibold">
                  {mock.demoCta}
                </span>
              </>
            )}
          </div>
        </DarkCard>
        {s && (
          <span className="absolute -bottom-7 left-[44%] -rotate-3 text-[22px] text-[#c2410c]">
            ↑ {sketch.annotation}
          </span>
        )}
      </div>

      {/* Row 2 */}
      <div
        className="relative mt-5 grid flex-1 gap-5"
        style={{ gridTemplateColumns: "1fr 300px" }}
      >
        <Card s={s} className="p-6">
          <Label s={s} sketchText={sketch.updates}>
            {mock.updatesLabel}
          </Label>
          <ul className="mt-3">
            {mock.updates.map((u, i) => (
              <li
                key={u.title}
                className={`flex h-[52px] items-center gap-3 ${i ? (s ? "border-t-2 border-dashed border-[#3b3b3b]/40" : "border-t border-neutral-100") : ""}`}
              >
                {s ? (
                  <>
                    <span className="h-7 w-7 rounded-full border-2 border-[#3b3b3b]" />
                    <span className="h-[3px] w-[55%] rounded bg-[#3b3b3b]/70" />
                  </>
                ) : (
                  <>
                    <IconTile icon={UPDATE_ICONS[i]} size={30} />
                    <span className="flex-1 text-[14px] font-medium text-midnight-900">
                      {u.title}
                    </span>
                    <span className="text-[12px] text-neutral-500">
                      {u.when}
                    </span>
                  </>
                )}
              </li>
            ))}
          </ul>
        </Card>
        <div className="grid gap-4">
          <Card s={s} className="flex items-center justify-between p-4">
            {s ? (
              <span className="text-[22px]">{sketch.stats}</span>
            ) : (
              <span className="flex flex-col">
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-500">
                  {mock.speedLabel}
                </span>
                <span className="text-[24px] font-bold tracking-tight text-midnight-900">
                  {mock.speed}
                </span>
              </span>
            )}
            <Sparkline s={s} />
          </Card>
          <Card s={s} className="flex items-center justify-between p-4">
            {s ? (
              <span className="text-[22px]">{sketch.stats}</span>
            ) : (
              <span className="flex flex-col">
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-500">
                  {mock.uptimeLabel}
                </span>
                <span className="text-[24px] font-bold tracking-tight text-midnight-900">
                  {mock.uptime}
                </span>
              </span>
            )}
            <span
              className={`h-3 w-3 rounded-full ${s ? "border-2 border-[#3b3b3b]" : "bg-success shadow-[0_0_0_5px_rgba(47,158,111,0.15)]"}`}
            />
          </Card>
        </div>
      </div>
    </main>
  </div>
);

/* ---------- Phone: 380 × 600 ---------- */

const MobileScene = ({ s, sketch, mock }: SceneProps) => (
  <div
    className={`absolute inset-0 flex flex-col ${s ? caveat.className : ""}`}
    style={{
      width: 380,
      height: 600,
      background: s ? PAPER : "#f4f7f8",
      color: s ? PENCIL : undefined,
    }}
  >
    <Paper s={s} />
    <div
      className={`relative flex h-[58px] items-center justify-between px-4 ${s ? "border-b-2 border-dashed border-[#3b3b3b]" : "overflow-hidden bg-midnight-900"}`}
    >
      {!s && <DotGrid />}
      <span className="relative">
        {s ? (
          <span className={`${SK} px-3 text-[20px] font-bold`}>
            {sketch.logo}
          </span>
        ) : (
          <Logo mock={mock} size={26} />
        )}
      </span>
      <span
        className={`relative flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold ${s ? "border-2 border-[#3b3b3b]" : "bg-gradient-to-br from-cshine-blue-500 to-cyan-500 text-midnight-900"}`}
      >
        {s ? "" : "AN"}
      </span>
    </div>

    <div className="relative flex flex-1 flex-col px-4 pt-4">
      <div className="h-[46px]">
        {s ? (
          <span className="text-[32px] font-bold leading-none underline decoration-wavy decoration-2 underline-offset-8">
            {sketch.greeting}
          </span>
        ) : (
          <>
            <h3 className="text-[21px] font-bold leading-tight tracking-tight text-midnight-900">
              {mock.greeting}
            </h3>
            <p className="text-[11.5px] text-neutral-500">{mock.project}</p>
          </>
        )}
      </div>

      <Card s={s} className="mt-3 h-[158px] p-4">
        <div className="flex items-center justify-between">
          <Label s={s} sketchText={sketch.progress}>
            {mock.progressLabel}
          </Label>
          {!s && (
            <span className="rounded-full bg-cshine-blue-500/10 px-2 py-0.5 text-[10px] font-semibold text-cshine-blue-700">
              {mock.sprint}
            </span>
          )}
        </div>
        <div className="mt-1.5 flex items-center gap-3">
          <span
            className={`w-[76px] ${s ? "text-[32px] font-bold" : "text-[32px] font-bold leading-none tracking-tight text-midnight-900"}`}
          >
            {s ? "?? %" : mock.progress}
          </span>
          <span
            className={`relative flex-1 overflow-hidden ${s ? "h-4 rounded-full border-2 border-[#3b3b3b]" : "h-2 rounded-full bg-neutral-100"}`}
          >
            <span
              className={`absolute inset-y-0 left-0 ${s ? "" : "rounded-full bg-gradient-to-r from-cshine-blue-500 to-cyan-400"}`}
              style={{
                width: "68%",
                backgroundImage: s
                  ? `repeating-linear-gradient(45deg, ${PENCIL} 0 2px, transparent 2px 7px)`
                  : undefined,
              }}
            />
          </span>
        </div>
        <div className="mt-5">
          <Milestones s={s} labels={mock.milestones} compact />
        </div>
      </Card>

      <DarkCard s={s} className="mt-3 h-[84px] px-4">
        <div className="flex h-full items-center gap-3">
          {s ? (
            <>
              <span className="text-[22px]">{sketch.demo}</span>
              <span className="ml-auto text-[24px]">→</span>
            </>
          ) : (
            <>
              <IconTile icon={FaVideo} size={36} />
              <span className="flex flex-1 flex-col">
                <span className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-white/55">
                  {mock.demoLabel}
                </span>
                <span className="text-[15px] font-bold">{mock.demoWhen}</span>
                <span className="text-[11.5px] text-white/55">
                  {mock.demoMeta}
                </span>
              </span>
              <span className="text-cshine-blue-400">→</span>
            </>
          )}
        </div>
      </DarkCard>

      <Card s={s} className="mt-3 p-4">
        <Label s={s} sketchText={sketch.updates}>
          {mock.updatesLabel}
        </Label>
        <ul className="mt-2">
          {mock.updates.slice(0, 2).map((u, i) => (
            <li
              key={u.title}
              className={`flex h-[46px] items-center gap-3 ${i ? (s ? "border-t-2 border-dashed border-[#3b3b3b]/40" : "border-t border-neutral-100") : ""}`}
            >
              {s ? (
                <>
                  <span className="h-6 w-6 rounded-full border-2 border-[#3b3b3b]" />
                  <span className="h-[3px] w-[60%] rounded bg-[#3b3b3b]/70" />
                </>
              ) : (
                <>
                  <IconTile icon={UPDATE_ICONS[i]} size={28} />
                  <span className="flex flex-1 flex-col leading-tight">
                    <span className="text-[13px] font-medium text-midnight-900">
                      {u.title}
                    </span>
                    <span className="text-[11px] text-neutral-500">
                      {u.when}
                    </span>
                  </span>
                </>
              )}
            </li>
          ))}
        </ul>
      </Card>
      {s && (
        <span className="mt-2 -rotate-2 text-[19px] text-[#c2410c]">
          ↑ {sketch.annotation}
        </span>
      )}
    </div>

    <nav
      className={`relative mt-auto grid h-[62px] grid-cols-4 ${s ? "border-t-2 border-dashed border-[#3b3b3b]" : "border-t border-neutral-200 bg-white"}`}
    >
      {mock.nav.slice(0, 4).map((item, i) => {
        const Icon = NAV_ICONS[i];
        return (
          <span
            key={item}
            className="flex flex-col items-center justify-center gap-1"
          >
            {s ? (
              <span className={`h-6 w-6 ${SK}`} />
            ) : (
              <>
                <Icon
                  className={`h-4 w-4 ${i === 0 ? "text-cshine-blue-600" : "text-neutral-400"}`}
                />
                <span
                  className={`text-[10px] font-medium ${i === 0 ? "text-midnight-900" : "text-neutral-400"}`}
                >
                  {item}
                </span>
              </>
            )}
          </span>
        );
      })}
    </nav>
  </div>
);

/* ---------- Comparison frame ---------- */

/**
 * One comparison frame: the sketch underneath, the product on top, clipped at
 * the handle. Both layers share a fixed-size canvas scaled to the frame width,
 * so every pencil box sits exactly on the element it became.
 */
const CompareFrame = ({
  width,
  height,
  render,
  className,
  labels,
}: {
  width: number;
  height: number;
  render: (sketched: boolean) => ReactNode;
  className: string;
  labels: Omit<SketchToProductProps, "sketch" | "mock">;
}) => {
  const frameRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number | null>(null);
  const [pos, setPos] = useState(50);
  const touched = useRef(false);
  const dragging = useRef(false);

  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const measure = () => setScale(el.clientWidth / width);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [width]);

  // Gentle sweep until the visitor takes over, so the idea reads at a glance.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      if (touched.current) return;
      setPos(50 + Math.sin((t - start) / 1500) * 28);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const setFromPointer = (clientX: number) => {
    const el = frameRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100)));
  };

  const canvas = (sketched: boolean) => (
    <div
      className="absolute left-0 top-0 origin-top-left"
      style={{
        width,
        height,
        transform: `scale(${scale ?? 1})`,
        visibility: scale ? "visible" : "hidden",
      }}
    >
      {render(sketched)}
    </div>
  );

  return (
    <div className={className}>
      <div
        ref={frameRef}
        className="relative w-full cursor-ew-resize touch-none select-none overflow-hidden rounded-2xl bg-[#fbfaf6] shadow-[0_30px_70px_-35px_rgba(21,23,59,0.45)] ring-1 ring-neutral-200 md:rounded-3xl"
        style={{ aspectRatio: `${width} / ${height}` }}
        onPointerDown={(e) => {
          touched.current = true;
          dragging.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
          setFromPointer(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && setFromPointer(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
      >
        {canvas(true)}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
        >
          {canvas(false)}
        </div>

        <span className="absolute left-3 top-3 rounded-full bg-midnight-900/80 px-3 py-1 text-xs font-semibold text-white">
          {labels.sketchLabel}
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-cshine-blue-500 px-3 py-1 text-xs font-semibold text-midnight-900">
          {labels.productLabel}
        </span>

        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-cshine-blue-400 shadow-[0_0_18px_rgba(4,196,212,0.9)]"
          style={{ left: `${pos}%` }}
        />
        {/* The knob stays fully inside the frame, even at 0% and 100%. */}
        <button
          type="button"
          role="slider"
          aria-label={labels.sliderLabel}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          className="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-midnight-900 text-cshine-blue-300 shadow-[0_0_0_8px_rgba(4,196,212,0.18)] ring-2 ring-cshine-blue-400"
          style={{ left: `clamp(30px, ${pos}%, calc(100% - 30px))` }}
          onKeyDown={(e) => {
            if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
            e.preventDefault();
            touched.current = true;
            setPos((p) =>
              Math.max(0, Math.min(100, p + (e.key === "ArrowLeft" ? -5 : 5))),
            );
          }}
        >
          <FaArrowsAltH className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
      <p className="mt-3 text-center text-xs font-semibold uppercase tracking-wider text-neutral-500">
        {labels.hint}
      </p>
    </div>
  );
};

/** Sketch-to-product comparison: the desktop portal on md+, the phone version below. */
const SketchToProduct = ({ sketch, mock, ...labels }: SketchToProductProps) => (
  <>
    <CompareFrame
      className="hidden md:block"
      width={1280}
      height={800}
      labels={labels}
      render={(s) => <DesktopScene s={s} sketch={sketch} mock={mock} />}
    />
    <CompareFrame
      className="mx-auto max-w-sm md:hidden"
      width={380}
      height={600}
      labels={labels}
      render={(s) => <MobileScene s={s} sketch={sketch} mock={mock} />}
    />
  </>
);

export default SketchToProduct;
