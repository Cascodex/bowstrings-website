import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Maritime Bowstrings',
  description: 'About the maker behind Maritime Bowstrings.',
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-stone-800 mb-6">About Maritime Bowstrings</h1>
      <div className="space-y-5 text-stone-600 leading-relaxed">
        <p>
          Based out of Nova Scotia, Canada, I&apos;ve been fascinated by traditional archery and the
          craft behind it. Making strings by hand is part of connecting with that tradition — every
          twist is intentional.
        </p>
        <p>
          Every string is flemish twist construction, made by hand on a traditional jig. Before it
          ships, each string is pre-stretched up to 100 lbs. This means less creep out of the box
          — your string will still settle in over the first few shots, but it gets there much faster
          than an un-prestretched string.
        </p>
        <p>
          Maritime Bowstrings is a small, made-to-order operation out of Nova Scotia. No inventory,
          no rush, no shortcuts. Your string is made to your specs, when you need it.
        </p>
        <p>
          Have a question before you order? Feel free to reach out directly at{' '}
          <a
            href="mailto:hello@maritimebowstrings.ca"
            className="text-amber-600 hover:underline"
          >
            hello@maritimebowstrings.ca
          </a>
          .
        </p>
      </div>
    </main>
  );
}
