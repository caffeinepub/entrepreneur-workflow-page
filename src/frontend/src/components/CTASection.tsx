export default function CTASection() {
  return (
    <section id="contact" data-ocid="cta.section" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C4A882]" />
            <span className="text-2xl" aria-hidden="true">
              💬
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C4A882]" />
          </div>

          <h2
            className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Start Your{" "}
            <span className="italic text-[#B8960C]">Journey?</span>
          </h2>

          <p
            className="text-lg text-[#6B5B45] leading-relaxed mb-10 max-w-xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Let&apos;s connect and turn your vision into reality. I&apos;m just
            a message away — let&apos;s build something extraordinary together.
          </p>

          <a
            data-ocid="cta.primary_button"
            href="https://wa.me/923068449319?text=Hi%20I%20am%20interested%20in%20your%20product"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-bold text-lg"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="WhatsApp"
            >
              <title>WhatsApp</title>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Chat on WhatsApp
          </a>

          <div className="mt-12 flex items-center justify-center gap-8 flex-wrap">
            {[
              { icon: "⚡", label: "Quick Response" },
              { icon: "🔒", label: "100% Confidential" },
              { icon: "✅", label: "Free Consultation" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="text-lg" aria-hidden="true">
                  {icon}
                </span>
                <span
                  className="text-sm text-[#9A8570] font-medium"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
