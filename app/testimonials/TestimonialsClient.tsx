'use client';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Link from 'next/link';

const testimonials = [
  { name: 'Marcus T.', location: 'Chicago, IL', story: 'I found faith through a video that appeared on my feed one sunday night. I wasn't looking for God, but He found me. Never expected Him to show up in my scroll.' },
  { name: 'Sofia L.', location: 'Miami, FL', story: 'It was 2am and I was searching for anything to fill the emptiness. The content I found online led me to Jesus and everything changed.' },
  { name: 'David W.', location: 'Atlanta, GA', story: 'A simple ad came on my phone and shared the gospel in a way I$d never heard before. Now I share it with others.' },
  { name: 'Priya R.', location: 'Dallas, TX', story: 'I grew up in a non-Christian home. I started watching online content about Jesus out of curiosity. One year later I am baptized.' },
  { name: 'James H.', location: 'Seattle, WA', story: 'I was an atheist who challenged an online community and walked away a believer. God used a Reddit thread to save me.' },
  { name: 'Angela M.', location: 'Phoenix, AZ', story: 'In the middle of depression I found a livestream of someone praying. I watched for 4 hours. That night I prayed for the first time.' },
];

export default function TestimonialsClient() {
  useScrollAnimation();

  return (
    <>
      {/* Header */}
      <section className="relative pt-40 pb-24 md:pt-56 wall-marble overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-[#D4CABC] text-xs tracking-[6px] uppercase mb-6 fade-up">God Is Moving</p>
          <h1 className="font-display text-[clamp(3rem,10vw,8rem)] leading-none text-white uppercase tracking-widest fade-up stagger-1">Stories</h1>
        </div>
      </section>

      {/* Grid */}
      <section className="section max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="glass p-8 rounded-sm card-hover fade-up">
              <p className="text-[#D4CABC] text-4xl mb-4 font-display leading-none">&#8220;</p>
              <p className="text-white/70 text-base leading-relaxed mb-8">{t.story}</p>
              <div className="divider mb-6" />
              <div>
                <p className="text-white font-display text-sm">{t.name}</p>
                <p className="text-white/30 text-xs tracking-[2px]">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section text-center max-w-3xl mx-auto">
        <h2 className="font-display text-[clamp(2rem,5vw,4rem)] text-white mb-8 fade-up">
          Your Story Could Be Next
        </h2>
        <Link href="/start-here" className="btn-primary fade-up stagger-1">Start Here</Link>
      </section>
    </>
  );
}