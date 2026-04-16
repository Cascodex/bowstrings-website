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
          Growing up in rural Nova Scotia, archery found me early. My first bow was a youth
          compound, but shooting with a sight never felt right. I stripped it down
          and started shooting instinctive before I even knew what that meant.
        </p>
        <p>
          I shot for years until post-secondary pushed everything else to the margins. Sadly, archery
          sat in the corner and collected dust.
        </p>
        <p>
          Years later, an old friend reconnected me with the sport. He&apos;d gone deep into traditional
          archery and helped me buy my first recurve.
          He taught me everything he knew and since then, I&apos;ve been shooting every
          chance I get.
        </p>
        <p>
          My first strings came from Grizzly Jim, a name I&apos;m sure a lot of traditional archers
          know. When he shut down, I decided to figure it out myself. I dove into flemish
          twist construction, built a jig, and haven&apos;t looked back. Those strings have
          since carried me into the Nova Scotian woods, where I&apos;ve taken my first Black
          bear and Whitetail deer.
        </p>
        <p>
          Maritime Bowstrings is a small, made-to-order operation. I take
          pride in my work and want to deliver something Canadian archers can rely on.
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
