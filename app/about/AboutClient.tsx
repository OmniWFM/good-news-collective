'use client';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Link from 'next/link';

export default function AboutClient() {
  useScrollAnimation();

  return (
    <>
      {/* Page Header */}
      <section className="relative pt-40 pb-24 md:pt-56 wall-marble overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-[#D4CABC] text-xs tracking-[6px] uppercase mb-6 fade-up">Who We Are</p>
          <h1 className="font-display text-[clamp(3rem,10vw,8rem)] leading-none text-white uppercase tracking-widest fade-up stagger-1">About</h1>
        </div>
      </section>

      {/* MISSION */}
      <section className="section max-w-4xl mx-auto text-center">
        <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-white mb-8 fade-up">
          We Believe God Is On Move Online
        </h2>
        <p className="text-white/50 text-lg md:text-xl leading-relaxed mb-6 fade-up stagger-1">
          Good News Collective exists to make Jesus known through the digital mission field. We create content, run campaigns, and build community to reach people where they are &mdash; online.
        </p>
        <p className="text-white/50 text-lg md:text-xl leading-relaxed fade-up stagger-2">
          We are not a church &mdash; we are a mission team. We partner with churches and believers to put the gospel in front of millions of people who might never walk through a church door.
        </p>
      </section>

      {/* VALUES */}
      <section className="section max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#D4CABC] text-xs tracking-[5px] uppercase mb-4 fade-up">What We Stand For</p>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] text-white fade-up stagger-1">Our Values</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Gospel First', body: 'Everything we do is rooted in the good news of Jesus Christ. The message never changes.' },
            { title: 'Digital First', body: 'We put the gospel where people are - optimizing for social, search, and video platforms.' },
            { title: 'Authentic Stories', body: 'Real people, real change. We prioritize authentic testimonies over polished marketing.' },
          ].map((v, i) => (
            <div key={i} className="glass p-8 rounded-sm card-hover fade-up">
              <div className="divider mb-6" />
              <h3 className="font-display text-xl text-white mb-4">{v.title}</h3>
              <p className="text-white/50 text-base leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section text-center max-w-3xl mx-auto">
        <h2 className="font-display text-[clamp(2rem,5vw,4rem)] text-white mb-8 fade-up">
          Want To Join The Mission?
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up stagger-1">
          <Link href="/start-here" className="btn-primary">Start Here</Link>
          <Link href="/partner" className="btn-outline">Partner With Us</Link>
        </div>
      </section>
    </>
  );
}