'use client';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Link from 'next/link';

export default function PartnerClient() {
  useScrollAnimation();
  return (
    <main className="bg-black min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-[#D4CABC] text-xs tracking-[6px] uppercase mb-6">Join The Mission</p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">Partner With Us</h1>
        <p className="text-[#D4CABC] text-xl mb-16 leading-relaxed">
          We are believing God for 1 billion unbelievers reached in 5 years. That takes a collective. Will you be part of it?
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { title: 'Monthly Partner', amount: '$25/mo', desc: 'Sustain long-term outreach and keep the mission funded.' },
            { title: 'Mission Sponsor', amount: '$100/mo', desc: 'Fund evangelistic content reaching thousands monthly.' },
            { title: 'Kingdom Builder', amount: '$500/mo', desc: 'Directly fund events, campaigns, and creator teams.' },
          ].map((tier) => (
            <div key={tier.title} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#501A26] transition-colors">
              <p className="text-[#D4CABC] text-sm uppercase tracking-widest mb-2">{tier.title}</p>
              <p className="text-white text-3xl font-bold mb-4">{tier.amount}</p>
              <p className="text-[#616456] leading-relaxed">{tier.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href="mailto:hello@goodnewscollective.com" className="bg-[#501A26] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#501A26]/80 transition-colors inline-block">
            Become a Partner
          </a>
        </div>
      </div>
    </main>
  );
}
