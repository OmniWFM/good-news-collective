'use client';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const testimonials = [
  { name: 'Marcus T.', location: 'Chicago, IL', story: 'I found faith through a video that appeared on my feed one Sunday night. I was not looking for God, but He found me.' },
  { name: 'Sofia L.', location: 'Miami, FL', story: 'It was 2am and I was searching for anything to fill the emptiness. The content I found online led me to Jesus.' },
  { name: 'David W.', location: 'Atlanta, GA', story: 'A simple ad came on my phone and shared the gospel in a way I had never heard before. Now I share it with others.' },
  { name: 'Priya R.', location: 'Dallas, TX', story: 'I grew up in a non-Christian home. I started watching content about Jesus out of curiosity. One year later I am baptized.' },
];

export default function TestimonialsClient() {
  useScrollAnimation();
  return (
    <main className="bg-black min-h-screen pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-16">Stories of Faith</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-[#D4CABC] text-lg mb-6 leading-relaxed">&ldquo;{t.story}&rdquo;</p>
              <div>
                <p className="text-white font-bold">{t.name}</p>
                <p className="text-[#616456] text-sm">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
