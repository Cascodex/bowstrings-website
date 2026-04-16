import { STRING_MATERIALS } from '@/lib/constants';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Strings | Maritime Bowstrings',
  description: 'Browse handmade bowstring options — materials, colors, and configurations.',
};

const steps: [string, string][] = [
  [
    'You place an order',
    'Fill out the order form with your bow type, AMO length, material, and color preferences.',
  ],
  [
    'I confirm the details',
    "Within 1\u20132 business days, I'll reach out to confirm specs, timeline, and pricing.",
  ],
  [
    'String is hand-twisted',
    'Your string is flemish twist construction, made by hand on a traditional jig \u2014 12 strands, no shortcuts.',
  ],
  [
    'Pre-stretched up to 100 lbs',
    'Before shipping, every string is pre-stretched. This dramatically reduces creep \u2014 your string will still settle slightly over the first few shots, but stabilises much faster than an un-prestretched string.',
  ],
  [
    'Inspected and shipped',
    'The string is checked over and shipped directly to you anywhere in Canada.',
  ],
];

export default function StringsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-stone-800 mb-2">Our Strings</h1>
      <p className="text-stone-500 mb-12">
        Every string starts as raw material and ends as something made specifically for your bow.
        Here&apos;s a breakdown of what goes into each one.
      </p>

      {/* Materials */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-stone-800 mb-2">Material</h2>
        <p className="text-stone-500 text-sm mb-6">
          BCY D97 is currently stocked. Other materials can be sourced on request \u2014 just note it in your special requests and expect a longer lead time.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {STRING_MATERIALS.map((m) => (
            <div
              key={m.value}
              className="border border-amber-200 rounded-lg p-6 bg-white shadow-sm"
            >
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-stone-800">{m.label}</h3>
                <span className="text-xs bg-amber-100 text-amber-700 font-medium px-2 py-0.5 rounded-full">In Stock</span>
              </div>
              <p className="text-stone-500 text-sm">{m.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-stone-800 mb-6">The Process</h2>
        <ol className="space-y-4">
          {steps.map(([step, desc], i) => (
            <li key={i} className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-400 text-stone-900 font-bold text-sm flex items-center justify-center">
                {i + 1}
              </span>
              <div>
                <p className="font-semibold text-stone-800">{step}</p>
                <p className="text-stone-500 text-sm">{desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <div className="text-center">
        <Link
          href="/order"
          className="bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold px-8 py-3 rounded-md transition-colors inline-block"
        >
          Order Your String
        </Link>
      </div>
    </main>
  );
}
