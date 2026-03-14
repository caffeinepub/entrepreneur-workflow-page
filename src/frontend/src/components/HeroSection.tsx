import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

function FloatingShape() {
  const meshRef = useRef<Mesh>(null);
  const time = useRef(0);

  useFrame((_, delta) => {
    time.current += delta;
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.rotation.x = Math.sin(time.current * 0.3) * 0.15;
      meshRef.current.position.y = Math.sin(time.current * 0.8) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} castShadow>
      <torusKnotGeometry args={[1.2, 0.38, 128, 16]} />
      <meshStandardMaterial
        color="#C4A882"
        metalness={0.35}
        roughness={0.38}
        envMapIntensity={1.2}
      />
    </mesh>
  );
}

function InnerSphere() {
  const meshRef = useRef<Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.x =
        Math.sin(state.clock.elapsedTime * 0.5) * 1.8;
      meshRef.current.position.z =
        Math.cos(state.clock.elapsedTime * 0.5) * 1.8;
      meshRef.current.position.y =
        Math.cos(state.clock.elapsedTime * 0.7) * 0.5;
    }
  });
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.18, 32, 32]} />
      <meshStandardMaterial color="#B8960C" metalness={0.8} roughness={0.2} />
    </mesh>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      data-ocid="hero.section"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FFFFFF 0%, #F5F0E8 50%, #EDE8DE 100%)",
      }}
    >
      <div
        className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #C4A882 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #B8960C 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center pt-16">
        {/* Left: Text */}
        <div className="flex flex-col gap-6">
          <div className="animate-fade-in-up">
            <span
              className="text-xs font-semibold tracking-widest text-[#B8960C] uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Portfolio &amp; Services
            </span>
          </div>
          <h1
            className="text-5xl lg:text-6xl font-bold leading-tight text-[#1A1A1A] animate-fade-in-up delay-100"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Build Something{" "}
            <span className="italic text-[#B8960C]">Extraordinary</span>
          </h1>
          <p
            className="text-lg text-[#6B5B45] leading-relaxed max-w-md animate-fade-in-up delay-200"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Turning bold ideas into market-ready products and brands. Expert
            craftsmanship meets strategic thinking.
          </p>
          <div className="flex items-center gap-4 animate-fade-in-up delay-300">
            <a
              href="#skills"
              className="px-7 py-3 rounded-full text-white font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #C4A882, #8B6F47)",
              }}
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-full text-[#6B5B45] font-semibold text-sm border border-[#C4A882] hover:bg-[#F5F0E8] transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
          <div className="flex items-center gap-6 animate-fade-in-up delay-500">
            {["10+ Projects", "5 Years", "98% Satisfaction"].map((stat) => (
              <div key={stat} className="flex flex-col">
                <span className="text-sm font-bold text-[#1A1A1A]">
                  {stat.split(" ")[0]}
                </span>
                <span className="text-xs text-[#9A8570]">
                  {stat.split(" ").slice(1).join(" ")}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: 3D Canvas */}
        <div className="relative flex items-center justify-center animate-fade-in delay-300">
          <div
            className="relative"
            style={{
              width: "500px",
              height: "500px",
              maxWidth: "100%",
              filter: "drop-shadow(0 20px 60px rgba(196,168,130,0.4))",
            }}
          >
            <Canvas
              camera={{ position: [0, 0, 5], fov: 45 }}
              style={{ background: "transparent" }}
              shadows
            >
              <Suspense fallback={null}>
                <ambientLight intensity={0.6} />
                <directionalLight
                  position={[5, 5, 5]}
                  intensity={1.2}
                  castShadow
                />
                <directionalLight
                  position={[-3, -2, -3]}
                  intensity={0.4}
                  color="#C4A882"
                />
                <FloatingShape />
                <InnerSphere />
                <Environment preset="sunset" />
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  autoRotate={false}
                />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-[#9A8570] tracking-widest uppercase">
          Scroll
        </span>
        <div className="animate-scroll-bounce" aria-hidden="true">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="text-[#C4A882]"
            role="img"
            aria-label="Scroll down"
          >
            <title>Scroll down</title>
            <path
              d="M10 3v14M5 12l5 5 5-5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
