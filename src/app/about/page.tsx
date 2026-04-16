import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Maritime Bowstrings',
  description: 'About the maker behind Maritime Bowstrings.',
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-stone-800 mb-2">About Maritime Bowstrings</h1>
      <div className="space-y-5 text-stone-600 leading-relaxed">
        <p> </p>
        <p>

          Based out of Nova Scotia, Canada, I&apos;m fascinated by traditional archery and the
          craft behind it, and besides fulfilling a need, making strings by hand is part of connecting with a long-standing tradition.

          I grew up in Rural Nova Scotia, and archery found me early. My first bow was a cheap compound at age 12 but
          shooting with a sight never quite felt right, I quickly stripped the sights off and began to shoot instinctive
          before I even knew what instinctive was.
        </p>
        <p>
          I continued shooting as a hobby with friends for years for the love of it, until post-secondary did what post-secondary does
          and pushed everything else to the margins. Archery sat in the corner and collected dust.
        </p>
        <p>
          Years later I reconnected with an old friend, and he&apos;d gone deep
          into traditional archery — recurves, proper form and shooting technique. He helped me purchase my first recurve
          and walked me through what he knew. Something clicked. I&apos;ve been shooting
          every chance I get..
        </p>
        <p>
          My first string I bought was from from Grizzly Jim — a
          name a lot of traditional archers will remember. But shortly after he shut down, I had a choice, and being a tinkerer, I decided
          to figure it out myself. I dove into flemish twist, built a jig, and haven&apos;t looked back. I&apos;ve produced several strings
          for myself and friends, including a compound string.
        </p>
        <p>
          Those strings have since carried me into the Nova Scotian woods, where I&apos;ve taken
          my first Black bear and Whitetail deer. 
        </p>
        <p>
          Maritime Bowstrings is a small, made-to-order operation. No inventory, no production
          line. Every string is built to your specs, pre-stretched up to 100 lbs, and shipped
          anywhere in Canada. I take pride in my work, and I want to deliver a product that
          Canadian archers can rely on.
        </p>
              <p className="text-amber-600 font-medium mb-10">- Gregory Begin</p>
        <p>
          Questions before you order? I&apos;m happy to talk.{' '}
          <a
            href="mailto:hello@maritimebowstrings.ca"
            className="text-amber-600 hover:underline"
          >
            hello@maritimebowstrings.ca
          </a>
        </p>
      </div>
    </main>
  );
}
