"use client";

type BackgroundPatternProps = {
  variant?: "dark" | "light";
  children: React.ReactNode;
  className?: string;
};

const GRADIENTS = {
  dark: {
    main: "from-midnight-900 via-midnight-800 to-midnight-900",
    direction: "bg-gradient-to-b",
  },
  light: {
    main: "from-white via-gray-50/95 to-gray-100/90",
    direction: "bg-gradient-to-br",
  },
};

const RADIAL_GRADIENT =
  "radial-gradient(circle at center, #04C4D4 0.8px, transparent 0.3px)";

const BackgroundPattern = ({
  variant = "dark",
  children,
  className = "",
}: BackgroundPatternProps) => {
  const isDark = variant === "dark";
  const gradient = GRADIENTS[variant];

  return (
    <div
      className={`relative overflow-hidden ${gradient.direction} ${gradient.main} ${className}`}
    >
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 bg-gradient-to-b ${gradient.main}`} />

        {/* Light theme diagonal stripes */}
        {!isDark && (
          <>
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  35deg,
                  #04C4D4,
                  #04C4D4 1px,
                  transparent 100px,
                  transparent 200px
                )`,
              }}
            />
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  -55deg,
                  #04C4D4,
                  #04C4D4 1px,
                  transparent 100px,
                  transparent 200px
                )`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/100 via-transparent to-white/30" />
          </>
        )}

        {/* Common elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#04C4D4_0%,transparent_45%)] opacity-[0.1]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#04C4D4_0%,transparent_45%)] opacity-[0.1]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cshine-blue-500/30 to-transparent" />
      </div>

      {/* Dark theme grid pattern */}
      {isDark && (
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: RADIAL_GRADIENT,
            backgroundSize: "24px 24px",
          }}
        />
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundPattern;
