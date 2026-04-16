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
        <p>
          I grew up in rural Nova Scotia, and archery found me early. My first bow was a cheap
          compound at age 12 — but shooting with a sight never felt right. I stripped them off
          and started shooting instinctive before I even knew what that meant.
        </p>
        <p>
          I shot for years until post-secondary pushed everything else to the margins. Archery
          sat in the corner and collected dust for longer than I&apos;d like to admit.
        </p>
        <p>
          Years later, an old friend pulled me back in. He&apos;d gone deep into traditional
          archery — recurves, proper form, the whole thing. He helped me buy my first recurve
          and taught me what he knew. Something clicked, and I&apos;ve been shooting every
          chance I get since.
        </p>
        <p>
          My first strings came from Grizzly Jim — a name a lot of traditional archers will
          remember. When he shut down, I decided to figure it out myself. I dove into flemish
          twist construction, built a jig, and haven&apos;t looked back. Those strings have
          since carried me into the Nova Scotian woods, where I&apos;ve taken my first Black
          bear and Whitetail deer.
        </p>
        <p>
          Maritime Bowstrings is a small, made-to-order operation. Every string is built to
          your specs, pre-stretched up to 100 lbs, and shipped anywhere in Canada. I take
          pride in the work and want to deliver something Canadian archers can rely on.
        </p>
        <p className="text-amber-600 font-medium">— Gregory Begin</p>
        <p>
          Questions before you order?{' '}
          <a href="mailto:hello@maritimebowstrings.ca" className="text-amber-600 hover:underline">
            hello@maritimebowstrings.ca
          </a>
        </p>
      </div>
    </main>
  );
}
