import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Maritime Bowstrings',
  description: 'About the maker behind Maritime Bowstrings.',
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-stone-800 mb-2">About Maritime Bowstrings</h1>
      <p className="text-amber-600 font-medium mb-10">Made by Greg, Nova Scotia</p>
      <div className="space-y-5 text-stone-600 leading-relaxed">
        <p>
          I grew up in Nova Scotia, and archery found me early. My first bow was a compound —
          but I stripped the sights off almost immediately and shot it instinctive. My friends
          thought I was out of my mind. I didn&apos;t care much.
        </p>
        <p>
          I shot for years purely for the love of it, until university did what university does
          and pushed everything else to the margins. Archery sat in the corner and collected dust
          for longer than I&apos;d like to admit.
        </p>
        <p>
          It came back through an old friend. We reconnected years later and he&apos;d gone deep
          into traditional archery — recurves, proper form, the whole thing. He handed me a
          recurve and walked me through what he knew. Something clicked. I&apos;ve been shooting
          every chance I get ever since.
        </p>
        <p>
          I&apos;ve always been a tinkerer. For years I bought my strings from Grizzly Jim — a
          name a lot of traditional archers in the Maritimes will remember. When he shut down,
          I had a choice: find another supplier, or figure it out myself. I figured it out myself.
          I dove into flemish twist construction, built a jig, and haven&apos;t looked back.
        </p>
        <p>
          Those strings have since carried me into the Nova Scotia woods, where I&apos;ve taken
          my first Black bear and Whitetail deer — both on strings I made with my own hands.
          That means something to me.
        </p>
        <p>
          Maritime Bowstrings is a small, made-to-order operation. No inventory, no production
          line. Every string is built to your specs, pre-stretched up to 100 lbs, and shipped
          anywhere in Canada. I take pride in the work, and I want to deliver a product that
          Canadian archers can rely on.
        </p>
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
