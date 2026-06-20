'use client';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Link from 'next/link';

export default function StartHereClient() {
  useScrollAnimation();

  const steps = [
    {
      num: '01',
      title: 'Who Is Jesus?',
      body: 'Jesus is not just a historical figure or moral teacher. He is the Son of God who came to earth, died for your sins, and rose from the dead. His life changes everything.',
    },
    {
      num: '02',
      title: 'WhyDoes It Matter?',
      body: 'Every person has a deep need for forgiveness, purpose, and connection. Jesus offers all three. Not as a religion, but as a relationship.',
    },
    {
      num: '03',
      title: 'What Is the Gospel?',
      body: 'God loved the world so much He sent Jesus to die for our failures and rise again. When we trust Him, we are forgiven and made new.',
    },
    {
      num: '04',
      title: 'How Do I Respond?',
      body: 'Faith is not a performance. It is a trust. If you believe Jesus is who He said He is, pray a simple prayer and take your next step.',
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="relative pt-40 pb-24 md:pt-56 wall-marble overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-[#D4CABC] text-xs tracking-[6px] uppercase mb-6 fade-up">New Here?</p>
          <h1 className="font-display text-[clamp(3rem,10vw,8rem)] leading-none text-white uppercase tracking-widest fade-up stagger-1">Start<br />Here</h1>
        </div>
      </section>

      {/* Steps */}
      <section className="section max-w-4xl mx-auto">
        <div className="flex flex-col gap-16">
          {steps.map((s, i) => (
            <div key={i} className="flex gap-8 items-start fade-up">
              <span className="font-display text-[clamp(3rem,6vw,5rem)] text-white/10 leading-none flex-shrink-0">{s.num}</span>
              <div>
                <div className="divider mb-4" />
                <h2 className="font-display text-[clamp(1.5rem,4vw,2.5rem)] text-white mb-4">{s.title}</h2>
                <p className="text-white/50 text-lg leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Prayer */}
      <section className="section max-w-3xl mx-auto text-center">
        <p className="text-[#D4CABC] text-xs tracking-[5px] uppercase mb-6 fade-up">A Simple Prayer</p>
        <h2 className="font-display text-[clamp(2rem,5vw,4rem)] text-white mb-8 fade-up stagger-1">
          Ready To Take A Step?
        </h2>
        <div className="glass p-10 rounded-sm text-left mb-12 fade-up stagger-2">
          <p className="text-white/80 text-lg leading-relaxed italic font-display">
            &ldquo;Jesus, I believe You are the Son of God. I believe You died for my sins and rose again. I want to follow You. Forgive me and make me new. Amen.&rdquo;
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up stagger-3">
          <Link href="/testimonials" className="btn-primary">Read Stories of Faith</Link>
          <Link href="/about" className="btn-outline">Learn About Us</Link>
        </div>
      </section>
    </>
  );
}