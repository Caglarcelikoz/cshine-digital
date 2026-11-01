import { useTranslations } from "next-intl";
import {
  CalendarDaysIcon,
  RocketLaunchIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

/** The headline figures, shown in the homepage Partners section (dark). */
const Stats = ({ className = "" }: { className?: string }) => {
  const t = useTranslations("Stats");

  const stats = [
    { icon: RocketLaunchIcon, value: "10+", label: t("projects") },
    { icon: StarIcon, value: "100%", label: t("satisfaction") },
    { icon: CalendarDaysIcon, value: "6+", label: t("years") },
  ];

  return (
    <dl className={`grid gap-3 sm:grid-cols-3 ${className}`}>
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3.5
            transition-colors duration-200 hover:border-cshine-blue-500/30"
        >
          <div className="flex h-9 w-9 flex-none items-center justify-center rounded-lg border border-cshine-blue-500/20 bg-cshine-blue-500/10 sm:h-10 sm:w-10">
            <stat.icon
              className="h-5 w-5 text-cshine-blue-400"
              aria-hidden="true"
            />
          </div>
          <div className="min-w-0 text-left">
            <dd
              className="text-lg font-bold leading-tight tracking-tight text-white sm:text-xl"
              style={{ fontVariantNumeric: "tabular-nums" }}
            >
              {stat.value}
            </dd>
            <dt className="text-xs leading-snug text-white/60">{stat.label}</dt>
          </div>
        </div>
      ))}
    </dl>
  );
};

export default Stats;
