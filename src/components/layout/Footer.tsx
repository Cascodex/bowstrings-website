import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 text-sm mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <p className="text-amber-400 font-semibold mb-1">Heritage Strings</p>
          <p>Handmade bowstrings for traditional archers.</p>
        </div>
        <nav className="flex flex-col gap-2">
          <Link href="/" className="hover:text-stone-100 transition-colors">Home</Link>
          <Link href="/strings" className="hover:text-stone-100 transition-colors">Our Strings</Link>
          <Link href="/order" className="hover:text-stone-100 transition-colors">Order</Link>
          <Link href="/about" className="hover:text-stone-100 transition-colors">About</Link>
        </nav>
        <div>
          <p>Questions?</p>
          <a
            href="mailto:hello@heritagestrings.com"
            className="hover:text-stone-100 transition-colors"
          >
            hello@heritagestrings.com
          </a>
        </div>
      </div>
      <div className="border-t border-stone-700 text-center py-4 text-xs text-stone-500">
        © {new Date().getFullYear()} Heritage Strings. All rights reserved.
      </div>
    </footer>
  );
}
