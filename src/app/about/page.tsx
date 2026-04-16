import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Heritage Strings',
  description: 'About the maker behind Heritage Strings.',
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-stone-800 mb-6">About Heritage Strings</h1>
      <div className="space-y-5 text-stone-600 leading-relaxed">
        <p>
          I&apos;ve been shooting traditional bows for years — longbows, recurves, instinctive
          shooting in the woods and on the range. After going through enough factory strings to know
          what I was missing, I started learning to make my own.
        </p>
        <p>
          Every string I make is twisted by hand on a traditional jig, inspected carefully, and shot
          before it ships. I care about the quality because I shoot these myself.
        </p>
        <p>
          Heritage Strings is a small, made-to-order operation. That means no inventory, no rush, no
          compromises. Your string is made for your bow, to your specs, when you need it.
        </p>
        <p>
          Have a question before you order? Feel free to reach out directly at{' '}
          <a
            href="mailto:hello@heritagestrings.com"
            className="text-amber-600 hover:underline"
          >
            hello@heritagestrings.com
          </a>
          .
        </p>
      </div>
    </main>
  );
}
