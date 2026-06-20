'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-xl tracking-tight">
          GOOD NEWS <span className="text-[#D4CABC] font-light italic">Collective</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/testimonials" className="text-[#D4CABC] hover:text-white transition-colors text-sm font-medium tracking-wide">
            Testimonials
          </Link>
          <Link href="/partner" className="text-[#D4CABC] hover:text-white transition-colors text-sm font-medium tracking-wide">
            Partner
          </Link>
          <Link href="/partner" className="bg-[#501A26] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#501A26]/80 transition-colors">
            Join The Mission
          </Link>
        </div>
      </div>
    </nav>
  );
}
