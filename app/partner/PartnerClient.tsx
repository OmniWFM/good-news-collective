'use client';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function PartnerClient() {
  useScrollAnimation();

  return (
    <>
      {/* Header */}
      <section className="relative pt-40 pb-24 md:pt-56 wall-marble overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-[#D4CABC] text-xs tracking-[6px] uppercase mb-6 fade-up">Join The Mission</p>
          <h1 className="font-display text-[clamp(3rem,10vw,8rem)] leading-none text-white uppercase tracking-widest fade-up stagger-1">Partner<br?/>With Us</h1>
        </div>
      </section>

      {/* Why Partner */}
      <section className="section max-w-4xl mx-auto text-center">
        <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-white mb-8 fade-up">
          Fund the Digital Mission Field
        </h2>
        <p className="text-white/50 text-lg leading-relaxed mb-6 fade-up stagger-1">
          Every dollar you give goes directly toward putting the gospel in front of people who need it most. We run digital campaigns, create content, and measure real impact.
        </p>
        <p className="text-white/50 text-lg leading-relaxed mb-12 fade-up stagger-2">
          We are believers building for believers. Transparent, faithful, and committed to the mission.
        </p>
      </section>

      {/* Contact */}
      <section className="section max-w-2xl mx-auto">
        <div className="glass p-12 rounded-sm fade-up">
          <h2 className="font-display text-2xl text-white mb-8">Get In Touch</h2>
          <div className="flex flex-col gap-6">
            <div>
              <label className="text-[#D4CABC] text-xs tracking-[3px] uppercase mb-2 block">Name</label>
              <input type="text" className="w-full bg-white/5 padding-4 text-white placeholder-white/30 border border-white/10 focus:outline-none focus:border-white/30" placeholder="Your name" />
            </div>
            <div>
              <label className="text-[#D4CABC] text-xs tracking-[3px] uppercase mb-2 block">Email</label>
              <input type="email" className="w-full bg-white/5 padding-4 text-white placeholder-white/30 border border-white/10 focus:outline-none focus:border-white/30" placeholder="your@email.com" />
            </div>
            <div>
              <label className="text-[#D4CABC] text-xs tracking-[3px] uppercase mb-2 block">Message</label>
              <textarea rows={5} className="wfull bg-white/5 padding-4 text-white placeholder-white/30 border border-white/10 focus:outline-none focus:border-white/30 resize-none" placeholder="Tell us how you feel led to partner..." />
            </div>
            <button type="submit" className="btn-primary w-full justify-center">Send Message</button>
          </div>
        </div>
      </section>
    </>
  );
}