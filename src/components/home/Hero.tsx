import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-stone-800 text-stone-100 py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
          Handcrafted in the USA
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Bowstrings Built for{' '}
          <span className="text-amber-400">Traditional Archers</span>
        </h1>
        <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto mb-10">
          Every string is hand-twisted to order — your choice of material, color, length, and strand
          count. Made for longbows and recurves by an archer who knows what a quality string means.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/order"
            className="bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold px-8 py-3 rounded-md transition-colors"
          >
            Order Your String
          </Link>
          <Link
            href="/strings"
            className="border border-stone-500 hover:border-amber-400 hover:text-amber-400 px-8 py-3 rounded-md transition-colors"
          >
            See Our Strings
          </Link>
        </div>
      </div>
    </section>
  );
}
