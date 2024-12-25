"use client";
import { motion } from "framer-motion";
import {
  UserIcon,
  ClipboardListIcon,
  CodeIcon,
  CubeTransparentIcon,
  SupportIcon,
  ChartBarIcon,
} from "@heroicons/react/outline";
import BackgroundPattern from "./layout/BackgroundPattern";

const ProcessStep = ({
  number,
  title,
  description,
  Icon,
}: {
  number: string;
  title: string;
  description: string;
  Icon: any;
}) => (
  <div className="relative">
    <div className="absolute -left-4 md:left-0">
      <div className="relative">
        <div className="w-16 h-16 bg-gradient-to-r from-cshine-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-cshine-blue-500">
          <span className="text-base font-bold bg-gradient-to-r from-cshine-blue-500 to-cyan-500 bg-clip-text text-transparent">
            {number}
          </span>
        </div>
      </div>
    </div>

    <div className="pl-20 md:pl-28 pb-12">
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>

    <div className="absolute left-[2rem] md:left-[2rem] top-16 bottom-0 w-[2px] bg-gradient-to-b from-cshine-blue-500/50 to-transparent" />
  </div>
);

const Experience = () => {
  const workflowSteps = [
    {
      number: "1",
      title: "Listen & Analyze",
      description:
        "We listen to your needs and analyze your requirements thoroughly to understand your business goals.",
      Icon: UserIcon,
    },
    {
      number: "2",
      title: "Plan & Design",
      description:
        "Based on the analysis, we design and plan the implementation process ensuring alignment with your goals.",
      Icon: ChartBarIcon,
    },
    {
      number: "3",
      title: "Proposal & Agreement",
      description:
        "We present our solution proposal and establish clear agreements on deliverables and timelines.",
      Icon: ClipboardListIcon,
    },
    {
      number: "4",
      title: "Development",
      description:
        "Our expert team develops your solution using the latest technologies and best practices.",
      Icon: CodeIcon,
    },
    {
      number: "5",
      title: "Deliver & Quality Assurance",
      description:
        "We ensure seamless delivery of the developed solutions, adhering to quality standards and timelines.",
      Icon: CubeTransparentIcon,
    },
    {
      number: "6",
      title: "Ongoing Support",
      description:
        "Our support doesn't end with delivery. We provide ongoing maintenance to ensure smooth operation.",
      Icon: SupportIcon,
    },
  ];

  return (
    <BackgroundPattern variant="dark" className="py-24">
      <div className="container relative mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-white/80">
              A systematic approach to turning your ideas into reality
            </p>
          </div>

          <div className="relative pl-4 md:pl-8">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <ProcessStep {...step} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </BackgroundPattern>
  );
};

export default Experience;
