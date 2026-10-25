import { CheckIcon } from "@heroicons/react/24/solid";
import BackgroundPattern from "./layout/BackgroundPattern";
import Eyebrow from "./Eyebrow";

type Quality = {
  title: string;
  description: string;
};

// The qualities behind every build — "how well it's made", to sit under
// Capabilities ("what we build") on /services. Deliberately framework-agnostic:
// we pick the right tools per project, so no specific stack is named here.
const qualities: Quality[] = [
  {
    title: "Future-proof foundation",
    description:
      "Built on a modern, well-supported stack so it stays fast and easy to extend for years, not months.",
  },
  {
    title: "Fewer bugs, fewer surprises",
    description:
      "Type-safe, tested code catches errors before your users ever see them, so fewer outages and lower upkeep.",
  },
  {
    title: "Flawless on every screen",
    description:
      "Responsive layouts that look and work right on phones, tablets and desktops.",
  },
  {
    title: "Speed that keeps visitors",
    description:
      "Performance-tuned pages that load fast, because every extra second costs you conversions.",
  },
  {
    title: "Found by people and AI",
    description:
      "SEO structure and structured data so search engines and AI assistants (ChatGPT, Perplexity, AI Overviews) can understand and cite your content.",
  },
  {
    title: "Secure by default",
    description:
      "Security best practices built in from day one, protecting your data and your customers' trust.",
  },
  {
    title: "Built to grow with you",
    description:
      "Clean, maintainable architecture means adding features later is quick and affordable, not a costly rebuild.",
  },
  {
    title: "Data from launch",
    description:
      "Analytics-ready on day one, so you can see what visitors do and make decisions backed by real numbers.",
  },
];

const BuildQuality = () => {
  return (
    <BackgroundPattern variant="light" className="py-20">
      <div className="container relative mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Eyebrow className="mb-6">Under the hood</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold text-balance text-midnight-900 mb-4">
            The quality behind every build
          </h2>
          <p className="text-lg leading-relaxed text-neutral-600">
            What you don&rsquo;t see, but do feel: speed, reliability and room to
            grow. The standard we hold whatever we build.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-1 max-w-4xl mx-auto">
          {qualities.map((q) => (
            <li
              key={q.title}
              className="flex items-start gap-3.5 py-3.5 border-b border-neutral-200/70"
            >
              <span
                className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md
                  bg-cshine-blue-500/[0.12] text-cshine-blue-600"
              >
                <CheckIcon className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-midnight-900">
                  {q.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {q.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </BackgroundPattern>
  );
};

export default BuildQuality;
