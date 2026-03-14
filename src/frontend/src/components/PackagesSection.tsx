import { useState } from "react";

const packages = [
  {
    id: "plus",
    name: "PLUS",
    set: "SET 1",
    image: "/assets/uploads/WhatsApp-Image-2026-03-14-at-3.45.45-PM-2.jpeg",
    color: "from-blue-900 to-blue-700",
    badgeColor: "bg-blue-800",
    skills: [
      "Blogging (Basic)",
      "FaceBook Ads",
      "Youtube For Business (Basic)",
      "Video Editing",
      "Canva Graphic Design",
      "Public Speaking",
    ],
    free: [],
  },
  {
    id: "pro",
    name: "PRO",
    set: "SET 2",
    image: "/assets/uploads/WhatsApp-Image-2026-03-14-at-3.45.45-PM-1--3.jpeg",
    color: "from-slate-700 to-slate-500",
    badgeColor: "bg-slate-700",
    skills: [
      "Digital Marketing",
      "Video Marketing",
      "Reels Marketing",
      "LinkedIn Marketing",
      "Microsoft Excel (Basic)",
      "Sales Mastery",
      "English Speaking",
    ],
    free: ["PLUS Package"],
  },
  {
    id: "prime",
    name: "PRIME",
    set: "SET 3",
    image: "/assets/uploads/WhatsApp-Image-2026-03-14-at-3.45.46-PM-4.jpeg",
    color: "from-yellow-600 to-yellow-400",
    badgeColor: "bg-yellow-600",
    skills: [
      "Instagram Growth And Marketing",
      "Freelancing Workplaces",
      "Microsoft Excel (Advanced)",
      "Tally",
      "Ms Word",
      "Drop Shipping",
    ],
    free: ["PRO Package", "PLUS Package"],
  },
  {
    id: "premium",
    name: "PREMIUM",
    set: "SET 4",
    image: "/assets/uploads/WhatsApp-Image-2026-03-14-at-3.45.47-PM-1.jpeg",
    color: "from-orange-600 to-orange-400",
    badgeColor: "bg-orange-600",
    skills: [
      "Amazon Affiliate Full Business Model (Advanced)",
      "Google Ads",
      "Stock Market",
    ],
    free: ["PRIME Package", "PRO Package", "PLUS Package"],
  },
];

export default function PackagesSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="packages" className="py-20 bg-[#FDF9F3]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest text-[#B8960C] uppercase">
            Growbiz Network
          </span>
          <h2
            className="text-4xl font-bold text-[#1A1A1A] mt-2 mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Packages
          </h2>
          <p className="text-[#6B5B45] max-w-xl mx-auto text-sm">
            Choose the package that matches your growth stage. Each set builds
            on the previous — and higher sets include lower ones free.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              data-ocid={`packages.${pkg.id}.card`}
              className="group relative flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 bg-white border border-[#EDE8DE] cursor-pointer"
              style={{
                transform: hovered === pkg.id ? "translateY(-6px)" : "none",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={() => setHovered(pkg.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Set badge */}
              <div className="absolute top-3 right-3 z-10">
                <span className="bg-[#1A1A1A] text-white text-[10px] font-bold px-3 py-1 rounded-full">
                  {pkg.set}
                </span>
              </div>

              {/* Product image */}
              <div className="h-52 flex items-center justify-center bg-gradient-to-b from-[#F5F0E8] to-white p-4">
                <img
                  src={pkg.image}
                  alt={`${pkg.name} Package`}
                  className="h-full w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Package name */}
              <div className={`bg-gradient-to-r ${pkg.color} py-3 px-4`}>
                <h3 className="text-white font-extrabold text-lg tracking-wide text-center">
                  {pkg.name} PACKAGE
                </h3>
              </div>

              {/* Skills list */}
              <div className="flex-1 p-4 flex flex-col gap-2">
                <p className="text-[10px] font-semibold text-[#B8960C] uppercase tracking-widest mb-1">
                  Skills Included
                </p>
                {pkg.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 bg-orange-50 rounded-xl px-3 py-2 border border-orange-100"
                  >
                    <span className="w-2 h-2 rounded-full bg-orange-400 shrink-0" />
                    <span className="text-[#3D2B1F] text-xs font-medium">
                      {skill}
                    </span>
                  </div>
                ))}

                {/* Free bonus */}
                {pkg.free.length > 0 && (
                  <div className="mt-3 border-t border-dashed border-orange-200 pt-3">
                    <p className="text-[10px] font-semibold text-green-600 uppercase tracking-widest mb-1">
                      Free Bonus
                    </p>
                    {pkg.free.map((f) => (
                      <div
                        key={f}
                        className="flex items-center gap-2 bg-green-50 rounded-xl px-3 py-2 border border-green-100 mb-1"
                      >
                        <span className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
                        <span className="text-green-700 text-xs font-medium">
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
