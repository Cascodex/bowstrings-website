import OrderForm from '@/components/order/OrderForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Order a Bowstring | Maritime Bowstrings',
  description: 'Order a custom handmade bowstring for your longbow or recurve.',
};

export default function OrderPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-stone-800 mb-2">Order a Custom Bowstring</h1>
      <p className="text-stone-500 mb-10">
        Fill out the form below with your specs. I&apos;ll follow up by email to confirm details,
        timeline, and pricing before anything is made.
      </p>
      <OrderForm />
    </main>
  );
}
