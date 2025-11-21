import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#0b1120] text-white">

      {/* Background Image (with reserved height to prevent flash) */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/upscalemedia-transformed.png"
          alt="LawFair Background"
          fill
          priority
          className="object-cover object-center opacity-100 will-change-transform"
        />
      </div>

      {/* Solid dark base layer (prevents initial flash) */}
      <div className="absolute inset-0 -z-30 bg-[#0b1120]" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-[#0b1120]/85" />

      {/* Navbar */}
      <header className="w-full absolute top-0 left-0 z-10 will-change-transform">
        <div className="max-w-7xl mx-auto px-3 py-5 flex justify-center relative">

          {/* Reserved height prevents CLS */}
          <div className="h-[80px] flex items-center justify-center mt-4">
            <Image
              src="/logo.png"
              alt="LawFair Logo"
              width={180}
              height={80}
              priority
              className="object-contain"
            />
          </div>

          {/* Optional Right Side (future menu) */}
          <nav className="absolute right-4 top-1/2 -translate-y-1/2"></nav>

        </div>
      </header>

      {/* Hero Content */}
      <section className="flex flex-col justify-center items-center text-center min-h-screen px-6 max-w-4xl mx-auto">

        <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 mt-24">
          Legal Intelligence.
          <br />
          <span className="text-blue-400">Reinvented.</span>
        </h1>

        <p className="text-lg lg:text-xl text-gray-300 mb-10 max-w-2xl">
          AI-powered document analysis, case management, and legal workflow
          automation — built for professionals who demand speed, accuracy,
          and control.
        </p>

        {/* App Store Button */}
        <a href="#" className="hover:opacity-80 transition">
          <Image
            src="/app-store.svg"
            alt="Download on the App Store"
            width={200}
            height={64}
            priority
          />
        </a>
      </section>

      {/* Footer */}
      <footer className="absolute bottom-6 text-center w-full text-gray-400 text-sm">
        © {new Date().getFullYear()} LawFair. All rights reserved.
      </footer>

    </main>
  );
}
