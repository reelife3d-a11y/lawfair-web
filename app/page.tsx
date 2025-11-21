import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden text-white">

      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/upscalemedia-transformed.png"
          alt="LawFair Background"
          fill
          priority
          className="object-cover object-center opacity-100"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-[#0b1120]/85"></div>

      {/* Navbar */}
<header className="w-full absolute top-0 left-0 z-10">
  <div className="max-w-7xl mx-auto px-3 py-5 flex items-center justify-center">

    <Image
      src="/logo.png"
      alt="LawFair Logo"
      width={160}
      height={160}
      className="rounded-md mt-6"
    />

  </div>


          {/* Optional Right Side (future) */}
          <nav>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition text-sm"
            >
              {/* Add Login or Dashboard later */}
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Content */}
      <section className="flex flex-col justify-center items-center text-center min-h-screen px-6 max-w-4xl mx-auto">

        <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 mt-20">
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
