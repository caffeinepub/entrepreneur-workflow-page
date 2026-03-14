const skills = [
  {
    icon: "🎨",
    title: "Branding",
    tags: ["Identity", "Logo", "Voice"],
    desc: "Crafting distinctive brand identities that resonate with your target audience and stand out in competitive markets.",
  },
  {
    icon: "📈",
    title: "Digital Marketing",
    tags: ["SEO", "Social", "Ads"],
    desc: "Data-driven campaigns that grow your online presence, generate leads, and convert audiences into loyal customers.",
  },
  {
    icon: "💻",
    title: "Web Design",
    tags: ["UX", "UI", "Responsive"],
    desc: "Beautiful, conversion-optimized websites that tell your brand story and drive measurable business results.",
  },
  {
    icon: "🎯",
    title: "Business Strategy",
    tags: ["Planning", "Growth", "KPIs"],
    desc: "Strategic frameworks that align your vision with actionable roadmaps for sustainable business growth.",
  },
  {
    icon: "🛒",
    title: "E-Commerce",
    tags: ["Shopify", "Sales", "CRO"],
    desc: "End-to-end e-commerce solutions that maximize revenue through optimized user journeys and smart merchandising.",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" data-ocid="skills.section" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span
            className="text-xs font-semibold tracking-widest text-[#B8960C] uppercase block mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Services
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#1A1A1A]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What I Deliver
          </h2>
          <p className="mt-4 text-[#6B5B45] max-w-xl mx-auto text-base leading-relaxed">
            A comprehensive suite of services designed to elevate your brand and
            accelerate business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={skill.title}
              data-ocid={`skills.card.${idx + 1}`}
              className="skill-card bg-white border border-[#EDE8DE] rounded-2xl p-7 cursor-default"
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3
                className="text-xl font-semibold text-[#1A1A1A] mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {skill.title}
              </h3>
              <p
                className="text-sm text-[#6B5B45] leading-relaxed mb-5"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {skill.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-[#F5F0E8] text-[#6B5B45] font-medium"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
