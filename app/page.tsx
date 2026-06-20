'use client';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Link from 'next/link';

export default function HomePage() {
  useScrollAnimation();

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center wall-marble overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <p className="text-[#D4CABC] text-xs tracking-[6px] uppercase mb-8 fade-up">
            Digital Mission Field
          </p>
          <h1 className="font-display text-[clamp(5rem,15vw,14rem)] leading-none tracking-widest uppercase text-white text-gradient mb-4 fade-up stagger-1">
            GOOD<br?/>NEWS
          </h1>
          <p className="italic text-[#D4CABC] text-[clamp(1.5rem,4vw,3rem)] tracking-[12px] font-light mb-12 fade-up stagger-2">Collective</p>
          <div className="divider max-w-xs mx-auto mb-12 fade-up stagger-3" />
          <p className="text-white/60 text-lg md:text-xl max-w-md mx-auto leading-relaxed mb-12 fade-up stagger-3">
            Making Jesus known through the digital mission field.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up stagger-4">
            <Link href="/start-here" className="btn-primary">Start Here</Link>
            <Link href="/about" className="btn-outline">Our Mission</Link>
          </div>
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section className="section max-w-4xl mx-auto text-center">
        <p className="text-[#D4CABC] text-xs tracking-[5px] uppercase mb-6 fade-up">Our Purpose</p>
        <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-tight text-white mb-8 fade-up stagger-1">
          The Digital World Is the Mission Field
        </h2>
        <p className="text-white/50 text-lg leading-relaxed mb-12 fade-up stagger-2">
          Billions of people are online every day &mdash; searching, scrolling, seeking. We believe God is calling His people to meet them there.
        </p>
        <div className="divider max-w-xs mx-auto fade-up stagger-3" />
      </section>

      {/* STATS */}
      <section className="section bg-white/3 border-y-border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: '4.7B+', label: 'People Online Daily' },
            { num: '70B+', label: 'Videos Watched Daily' },
            { num: '3.5B+', label: 'Searches Per Day' },
            { num: '100M+', label: 'Open To Faith Online' },
          ].map((stat, i) => (
            <div key={i} className="text-center fade-up">
              <p className="font-display text-[clamp(2.5rem,5vw,4rem)] text-gradient">{stat.num}</p>
              <p className="text-white/40 text-xs tracking-[3px] uppercase mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STORIES PREVIEUÿ" */}
      <section className="section max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#D4CABC] text-xs tracking-[5px] uppercase mb-4 fade-up">Stories of Transformation</p>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] text-white fade-up stagger-1">Real People. Real Faith.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Marcus T.', quote: 'I found faith through a video that appeared on my feed. Never expected God to find me online.', location: 'Chicago, IL' },
            { name: 'Sofia L.', quote: 'I was searching for answers at 2am. The content I found led me to Jesus.', location: 'Miami, FL' },
            { name: 'David W.', quote: 'A simple ad shared the gospel with me. Now I share it with others.', location: 'Atlanta, GA' },
          ].map((t, i) => (
            <div key={i} className="glass p-8 rounded-sm card-hover fade-up">
              <p className="text-[#D4CABC] text-3xl mb-4 font-display">&#8220;</p>
              <p className="text-white/70 text-base leading-relaxed mb-6">{t.quote}</p>
              <div>
                <p className="text-white text-sm font-display">{t.name}</p>
                <p className="text-white/30 text-xs tracking-[2px]">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/testimonials" className="btn-outline">Read More Stories</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="section text-center max-w-3xl mx-auto">
        <p className="text-[#D4CABC] text-xs tracking-[5px] uppercase mb-6 fade-up">Ready To Begin?</p>
        <h2 className="font-display text-[clamp(2rem,5vw,4rem)] text-white mb-8 fade-up stagger-1">
          Your Journey Starts Here
        </h2>
        <Link href="/start-here" className="btn-primary fade-up stagger-2">
          Start Here
        </Link>
      </section>
    </>
  );
}