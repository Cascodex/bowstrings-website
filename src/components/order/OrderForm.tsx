'use client';

import { useState } from 'react';
import { STRING_MATERIALS, STRAND_COUNTS, STRING_COLORS, SERVING_STYLES } from '@/lib/constants';
import type { OrderFormData } from '@/lib/types';

const defaultForm: OrderFormData = {
  name: '',
  email: '',
  phone: '',
  bowType: 'Longbow',
  amoLength: '',
  numStrands: '12',
  material: 'Dacron B50',
  primaryColor: 'Black',
  secondaryColor: '',
  servingColor: 'Black',
  servingStyle: 'standard',
  nockingPoint: false,
  notes: '',
};

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

export default function OrderForm() {
  const [form, setForm] = useState<OrderFormData>(defaultForm);
  const [submitState, setSubmitState] = useState<SubmitState>('idle');

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitState('submitting');
    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Submission failed');
      setSubmitState('success');
      setForm(defaultForm);
    } catch {
      setSubmitState('error');
    }
  }

  if (submitState === 'success') {
    return (
      <div className="text-center py-16">
        <div className="text-5xl mb-4">🎯</div>
        <h2 className="text-2xl font-bold text-stone-800 mb-2">Order Received!</h2>
        <p className="text-stone-500">
          Thank you! I&apos;ll be in touch within 1–2 business days to confirm your order details.
        </p>
      </div>
    );
  }

  const inputClass =
    'mt-1 block w-full border border-stone-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400';
  const labelClass = 'text-sm font-medium text-stone-700';

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Contact Info */}
      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold text-stone-800 border-b border-stone-200 pb-2 w-full">
          Your Contact Info
        </legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block">
            <span className={labelClass}>Full Name *</span>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className={inputClass}
            />
          </label>
          <label className="block">
            <span className={labelClass}>Email *</span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className={inputClass}
            />
          </label>
          <label className="block">
            <span className={labelClass}>Phone (optional)</span>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className={inputClass}
            />
          </label>
        </div>
      </fieldset>

      {/* Bow Details */}
      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold text-stone-800 border-b border-stone-200 pb-2 w-full">
          Bow Details
        </legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block">
            <span className={labelClass}>Bow Type *</span>
            <select
              name="bowType"
              required
              value={form.bowType}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="Longbow">Longbow</option>
              <option value="Recurve">Recurve</option>
            </select>
          </label>
          <label className="block">
            <span className={labelClass}>AMO String Length (inches) *</span>
            <input
              type="text"
              name="amoLength"
              required
              placeholder="e.g. 58, 60.5"
              value={form.amoLength}
              onChange={handleChange}
              className={inputClass}
            />
          </label>
        </div>
      </fieldset>

      {/* String Specs */}
      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold text-stone-800 border-b border-stone-200 pb-2 w-full">
          String Specifications
        </legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block">
            <span className={labelClass}>Material *</span>
            <select
              name="material"
              required
              value={form.material}
              onChange={handleChange}
              className={inputClass}
            >
              {STRING_MATERIALS.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.label}
                </option>
              ))}
            </select>
            <p className="text-xs text-stone-400 mt-1">
              {STRING_MATERIALS.find((m) => m.value === form.material)?.description}
            </p>
          </label>
          <label className="block">
            <span className={labelClass}>Strand Count *</span>
            <select
              name="numStrands"
              required
              value={form.numStrands}
              onChange={handleChange}
              className={inputClass}
            >
              {STRAND_COUNTS.map((s) => (
                <option key={s} value={s}>
                  {s} strands
                </option>
              ))}
            </select>
          </label>
        </div>
      </fieldset>

      {/* Colors */}
      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold text-stone-800 border-b border-stone-200 pb-2 w-full">
          Colors
        </legend>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <label className="block">
            <span className={labelClass}>Primary Color *</span>
            <select
              name="primaryColor"
              required
              value={form.primaryColor}
              onChange={handleChange}
              className={inputClass}
            >
              {STRING_COLORS.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className={labelClass}>Secondary Color (optional)</span>
            <select
              name="secondaryColor"
              value={form.secondaryColor}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">None</option>
              {STRING_COLORS.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className={labelClass}>Serving Color *</span>
            <select
              name="servingColor"
              required
              value={form.servingColor}
              onChange={handleChange}
              className={inputClass}
            >
              {STRING_COLORS.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </label>
        </div>
      </fieldset>

      {/* Serving & Options */}
      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold text-stone-800 border-b border-stone-200 pb-2 w-full">
          Serving &amp; Options
        </legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block">
            <span className={labelClass}>Serving Style *</span>
            <select
              name="servingStyle"
              required
              value={form.servingStyle}
              onChange={handleChange}
              className={inputClass}
            >
              {SERVING_STYLES.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
          </label>
          <label className="flex items-center gap-3 cursor-pointer mt-6">
            <input
              type="checkbox"
              name="nockingPoint"
              checked={form.nockingPoint}
              onChange={handleChange}
              className="w-4 h-4 accent-amber-500"
            />
            <span className={labelClass}>Add brass nocking point</span>
          </label>
        </div>
      </fieldset>

      {/* Notes */}
      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold text-stone-800 border-b border-stone-200 pb-2 w-full">
          Additional Notes
        </legend>
        <label className="block">
          <span className={labelClass}>Anything else I should know?</span>
          <textarea
            name="notes"
            rows={4}
            value={form.notes}
            onChange={handleChange}
            placeholder="Brace height, specific bow model, special requests..."
            className={inputClass}
          />
        </label>
      </fieldset>

      {submitState === 'error' && (
        <p className="text-red-600 text-sm">
          Something went wrong submitting your order. Please try again or email directly.
        </p>
      )}

      <button
        type="submit"
        disabled={submitState === 'submitting'}
        className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-60 text-stone-900 font-semibold px-8 py-3 rounded-md transition-colors"
      >
        {submitState === 'submitting' ? 'Sending...' : 'Submit Order Request'}
      </button>

      <p className="text-xs text-stone-400 text-center">
        Submitting this form does not guarantee an order. I&apos;ll confirm availability, timeline,
        and pricing via email before anything is made.
      </p>
    </form>
  );
}
