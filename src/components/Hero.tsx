import logo from '../assets/logo.jpg'

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0A1E3C] py-20 md:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D4B982" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-12 text-center">
          {/* Logo */}
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-[#D4B982] md:h-40 md:w-40">
            <img
              src={logo}
              alt="Digital Dental Lab Logo"

              className="object-cover"
            />
          </div>

          {/* Animated Text */}
        <h1 className="text-4xl font-bold ">Digital Dental Lab</h1>

          {/* Tagline */}
          <p className="max-w-2xl text-lg text-white/80 md:text-xl">
            Precision craftsmanship meets cutting-edge technology for exceptional dental solutions
          </p>

          {/* Animated Tooth Icon */}
          <div className="tooth-animation my-6 h-20 w-20">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
              <path
                d="M50 10C60 10 70 15 75 25C80 35 85 50 80 65C75 80 65 90 50 90C35 90 25 80 20 65C15 50 20 35 25 25C30 15 40 10 50 10Z"
                stroke="#D4B982"
                strokeWidth="3"
                className="animate-pulse"
              />
              <path
                d="M50 20C55 20 60 25 60 35C60 45 55 50 50 50C45 50 40 45 40 35C40 25 45 20 50 20Z"
                stroke="#D4B982"
                strokeWidth="3"
                className="animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
            </svg>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="bg-[#D4B982] text-[#0A1E3C] hover:bg-[#D4B982]/90">Our Services</button>
            <button  className="border-[#D4B982] text-white hover:bg-[#D4B982]/10 hover:text-white">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="#D4B982"
            fillOpacity="0.1"
          />
        </svg>
      </div>
    </section>
  )
}
