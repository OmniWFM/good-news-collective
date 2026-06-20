import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">
          {/* Logo + Mission */}
          <div className="flex flex-col gap-6 max-w-xs">
            <div>
              <p className="text-white font-display text-2xl tracking-widest uppercase">GOOD NEWS</p>
              <p className="text-[#D4CABC] italic text-lg tracking-[8px] font-light">Collective</p>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Making Jesus known through the digital mission field.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col gap-4">
            <p className="text-[#D4CABC] text-xs tracking-[3Px] uppercase mb-2">Explore</p>
            <Link href="/" className="text-white/60 hover:text-white text-sm transition-colors">Home</Link>
            <Link href="/about" className="text-white/60 hover:text-white text-sm transition-colors">About</Link>
            <Link href="/testimonials" className="text-white/60 hover:text-white text-sm transition-colors">Stories</Link>
            <Link href="/start-here" className="text-white/60 hover:text-white text-sm transition-colors">Start Here</Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <p className="text-[#D4CABC] text-xs tracking-[3px] uppercase mb-2">Connect</p>
            <a href="mailto:hello@goodnewscollective.com" className="text-white/60 hover:text-white text-sm transition-colors">hello@goodnewscollective.com</a>
            <a href="tel:8169165053" className="text-white/60 hover:text-white text-sm transition-colors">816-916-5053</a>
            <a href="https://www.instagram.com/goodnews.collective" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-sm transition-colors">@goodnews.collective</a>
          </div>
        </div>

        <div className="divider my-12" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs tracking-[2px]">
            &copy; {new Date().getFullYear()} Good News Collective. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {/* Subtle Partner link for believers */}
            <Link
              href="/partner"
              className="text-white/20 hover:text-white/50 text-xs tracking-[2px] transition-colors"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}