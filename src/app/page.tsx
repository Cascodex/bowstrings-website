import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <section className="bg-amber-500 py-16 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4">
          Ready for a string built just for you?
        </h2>
        <p className="text-stone-800 mb-8">
          Fill out the order form and I&apos;ll get back to you within 1–2 business days.
        </p>
        <Link
          href="/order"
          className="bg-stone-900 hover:bg-stone-800 text-amber-400 font-semibold px-8 py-3 rounded-md transition-colors"
        >
          Place an Order
        </Link>
      </section>
    </>
  );
}
