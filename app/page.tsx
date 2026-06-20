import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="text-[#D4CABC] text-xs tracking-[6px] uppercase mb-8">Making Jesus Known</p>
          <h1 className="text-6xl md:text-9xl font-bold text-white mb-6 leading-none">
            GOOD NEWS
          </h1>
          <p className="text-[#D4CABC] text-3xl md:text-5xl font-light italic mb-12">Collective</p>
          <p className="text-[#D4CABC] text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Making Jesus known through the digital mission field. 1 billion unbelievers reached in 5 years.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/partner" className="bg-[#501A26] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#501A26]/80 transition-all inline-block">
              Join The Mission
            </Link>
            <Link href="/testimonials" className="border border-[#D4CABC] text-[#D4CABC] px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/5 transition-all inline-block">
              Stories of Faith
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#501A26] py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[
            { number: '1B', label: 'Unbelievers to Reach' },
            { number: '5', label: 'Years to Do It' },
            { number: '7', label: 'Continents' },
            { number: '∞', label: 'Lives Changed' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-5xl md:text-6xl font-bold mb-2">{stat.number}</p>
              <p className="text-[#D4CABC] text-sm uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <p className="text-[#D4CABC] text-xs tracking-[6px] uppercase mb-6">Our Vision</p>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
          The Digital Mission Field Is the Largest Unreached Mission Field in History.
        </h2>
        <p className="text-[#616456] text-xl leading-relaxed max-w-3xl">
          Billions of people scroll every day — searching for meaning, hope, and truth. We meet them where they are with the gospel of Jesus Christ through creative, authentic digital content.
        </p>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#D4CABC]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">Ready to Make Heaven Crowded?</h2>
          <p className="text-[#616456] text-xl mb-10">Partner with us and be part of the greatest digital revival in history.</p>
          <Link href="/partner" className="bg-black text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#501A26] transition-all inline-block">
            Partner With Us
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white font-bold">GOOD NEWS <span className="text-[#D4CABC] font-light italic">Collective</span></p>
          <p className="text-[#616456] text-sm">hello@goodnewscollective.com · 816-916-5053</p>
          <p className="text-[#616456] text-sm">@goodnews.collective</p>
        </div>
      </footer>
    </main>
  );
}
