'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-stone-900 text-stone-100 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-wide text-amber-400 hover:text-amber-300 transition-colors"
        >
          Heritage Strings
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <Link href="/strings" className="hover:text-amber-400 transition-colors">Our Strings</Link>
          <Link href="/order" className="hover:text-amber-400 transition-colors">Order</Link>
          <Link href="/about" className="hover:text-amber-400 transition-colors">About</Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-stone-100 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-stone-800 px-4 pb-4 flex flex-col gap-4 text-sm font-medium">
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-amber-400 transition-colors">Home</Link>
          <Link href="/strings" onClick={() => setMenuOpen(false)} className="hover:text-amber-400 transition-colors">Our Strings</Link>
          <Link href="/order" onClick={() => setMenuOpen(false)} className="hover:text-amber-400 transition-colors">Order</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-amber-400 transition-colors">About</Link>
        </div>
      )}
    </header>
  );
}
