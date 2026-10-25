import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  tone?: "light" | "dark" | "glass";
  icon?: ReactNode;
  className?: string;
};

const Eyebrow = ({
  children,
  tone = "light",
  icon,
  className = "",
}: EyebrowProps) => {
  if (tone === "glass") {
    return (
      <span
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-cshine-blue-400/30 text-cshine-blue-100 text-sm font-semibold ${className}`}
      >
        {icon}
        {children}
      </span>
    );
  }

  const toneClasses =
    tone === "dark"
      ? "from-cshine-blue-500/15 to-cyan-500/15 text-cshine-blue-400"
      : "from-cshine-blue-500/10 to-cyan-500/10 text-cshine-blue-700";

  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r text-sm font-semibold ${toneClasses} ${className}`}
    >
      {icon}
      {children}
    </div>
  );
};

export default Eyebrow;
