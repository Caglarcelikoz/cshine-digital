import {
  CodeBracketIcon,
  ShoppingCartIcon,
  Squares2X2Icon,
  ServerStackIcon,
  PaintBrushIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";
import BackgroundPattern from "./layout/BackgroundPattern";
import Eyebrow from "./Eyebrow";

type Capability = {
  id?: string;
  title: string;
  description: string;
  icon: typeof CodeBracketIcon;
  highlight?: boolean;
};

const capabilities: Capability[] = [
  {
    title: "Web & app development",
    description:
      "Fast, accessible web apps and sites built on a modern stack, from marketing pages to full products.",
    icon: CodeBracketIcon,
  },
  {
    title: "E-commerce",
    description:
      "Online stores that are easy to run and easy to buy from, wired up to the payment and shipping tools you need.",
    icon: ShoppingCartIcon,
  },
  {
    title: "CMS integration",
    description:
      "Content you can edit yourself, with no developer required for every copy change or new page.",
    icon: Squares2X2Icon,
  },
  {
    title: "Hosting, domains & email",
    description:
      "The infrastructure behind the scenes (hosting, domains and business email) set up and kept running.",
    icon: ServerStackIcon,
  },
  {
    title: "Branding & identity",
    description:
      "Logo, colours and brand guidelines so everything you ship looks like it belongs to you.",
    icon: PaintBrushIcon,
  },
  {
    id: "ai-integration",
    title: "AI integration",
    description:
      "We build AI into your product where it earns its place (assistants, automation, smart search) and into our own delivery. Practical AI with real engineering discipline, not hype.",
    icon: CpuChipIcon,
    highlight: true,
  },
];

const Capabilities = () => {
  return (
    <BackgroundPattern variant="light" className="py-20">
      <div className="container relative mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Eyebrow className="mb-6">The capabilities behind them</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold text-midnight-900 mb-6">
            What we actually build
          </h2>
          <p className="text-lg leading-relaxed text-neutral-600">
            Whichever way you work with us, this is the toolkit behind it: the
            things we design, build and run.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              id={cap.id}
              className={`group relative flex flex-col rounded-2xl border p-7 transition-all duration-300
                ${
                  cap.highlight
                    ? "border-cshine-blue-500/40 bg-gradient-to-br from-cshine-blue-500/[0.04] to-cyan-500/[0.04] shadow-sm scroll-mt-28"
                    : "border-neutral-200 bg-white shadow-sm"
                }
                hover:-translate-y-1 hover:border-cshine-blue-500/30 hover:shadow-xl`}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl mb-5
                  bg-gradient-to-br from-cshine-blue-500 to-cyan-500 text-white
                  shadow-md shadow-cshine-blue-500/20
                  group-hover:scale-110 transition-transform duration-300"
              >
                <cap.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-midnight-900 mb-2">
                {cap.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </BackgroundPattern>
  );
};

export default Capabilities;
