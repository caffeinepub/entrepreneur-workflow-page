import { useState } from "react";

const steps = [
  {
    num: 1,
    icon: "🔍",
    title: "Discovery",
    desc: "Deep-dive research into your market, competition, and ideal customer to uncover powerful insights.",
  },
  {
    num: 2,
    icon: "📋",
    title: "Strategy",
    desc: "Building a rock-solid strategic foundation with clear goals, KPIs, and a winning roadmap.",
  },
  {
    num: 3,
    icon: "🎨",
    title: "Design",
    desc: "Translating strategy into stunning visuals and intuitive experiences that captivate your audience.",
  },
  {
    num: 4,
    icon: "🚀",
    title: "Launch",
    desc: "Executing a precision go-to-market plan that creates buzz and drives immediate traction.",
  },
  {
    num: 5,
    icon: "📊",
    title: "Growth",
    desc: "Continuous optimization using data analytics to scale what works and amplify your results.",
  },
];

const aiSuggestions: Record<number, { next: string; explore: string[] }> = {
  1: {
    next: "Market Research",
    explore: ["Competitor Analysis", "Customer Personas"],
  },
  2: {
    next: "Business Model Canvas",
    explore: ["Revenue Streams", "Value Proposition"],
  },
  3: {
    next: "Brand Guidelines",
    explore: ["UI Component Library", "Style Guide"],
  },
  4: {
    next: "Go-to-Market Strategy",
    explore: ["Launch Checklist", "PR Outreach"],
  },
  5: {
    next: "Performance Analytics",
    explore: ["Retention Strategies", "Upsell Funnels"],
  },
};

export default function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(1);
  const suggestion = aiSuggestions[activeStep];

  return (
    <section
      id="workflow"
      data-ocid="workflow.section"
      className="py-24"
      style={{ background: "#F5F0E8" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span
            className="text-xs font-semibold tracking-widest text-[#B8960C] uppercase block mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            How I Work
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#1A1A1A]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            My Process
          </h2>
          <p className="mt-4 text-[#6B5B45] max-w-xl mx-auto text-base leading-relaxed">
            A proven 5-step methodology that transforms your vision into
            tangible results.
          </p>
        </div>

        <div className="relative">
          <div
            className="hidden lg:block absolute top-8 left-0 right-0 border-t-2 border-dashed border-[#C4A882] z-0"
            style={{ top: "32px" }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step) => (
              <button
                type="button"
                key={step.num}
                data-ocid={`workflow.item.${step.num}`}
                onClick={() => setActiveStep(step.num)}
                className={`workflow-step flex flex-col items-center text-center gap-3 p-4 rounded-2xl transition-all duration-300 ${
                  activeStep === step.num
                    ? "bg-white shadow-md"
                    : "hover:bg-white/60"
                }`}
              >
                <div
                  className={`step-circle w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-300 ${
                    activeStep === step.num
                      ? "bg-[#B8960C] text-white shadow-lg scale-110"
                      : "bg-[#C4A882]/30 text-[#6B5B45]"
                  }`}
                >
                  {step.icon}
                </div>
                <div>
                  <p
                    className={`text-xs font-semibold uppercase tracking-wider mb-0.5 ${
                      activeStep === step.num
                        ? "text-[#B8960C]"
                        : "text-[#9A8570]"
                    }`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Step {step.num}
                  </p>
                  <h3
                    className={`text-base font-bold ${
                      activeStep === step.num
                        ? "text-[#1A1A1A]"
                        : "text-[#6B5B45]"
                    }`}
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-xs text-[#9A8570] leading-relaxed mt-1 hidden lg:block"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {step.desc}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* AI Suggestions Panel */}
        <div
          data-ocid="workflow.panel"
          className="ai-panel mt-12 rounded-2xl p-8 relative z-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-base"
              style={{
                background: "linear-gradient(135deg, #C4A882, #B8960C)",
              }}
            >
              ✨
            </div>
            <div>
              <p
                className="text-xs font-bold uppercase tracking-widest text-[#B8960C]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                AI Suggestions
              </p>
              <p
                className="text-xs text-[#9A8570]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Based on{" "}
                <span className="font-semibold text-[#6B5B45]">
                  {steps.find((s) => s.num === activeStep)?.title}
                </span>{" "}
                phase
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#F5F0E8] rounded-xl p-5">
              <p
                className="text-xs uppercase tracking-widest text-[#9A8570] mb-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Next Recommended Skill
              </p>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#B8960C]" />
                <p
                  className="text-lg font-semibold text-[#1A1A1A]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {suggestion.next}
                </p>
              </div>
              <p
                className="text-xs text-[#9A8570] mt-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Highly recommended for this stage of your journey.
              </p>
            </div>

            <div className="bg-[#F5F0E8] rounded-xl p-5">
              <p
                className="text-xs uppercase tracking-widest text-[#9A8570] mb-3"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Other Products to Explore
              </p>
              <div className="flex flex-col gap-2">
                {suggestion.explore.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="text-[#C4A882]" aria-hidden="true">
                      →
                    </span>
                    <span
                      className="text-sm font-medium text-[#6B5B45]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
