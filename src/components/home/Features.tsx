const features = [
  {
    title: 'Made to Order',
    description:
      'No shelved strings. Every bowstring is twisted specifically for your bow.',
    icon: '🏹',
  },
  {
    title: 'Quality Materials',
    description:
      'Currently stocking BCY D97, a high-performance blend of Dyneema and Vectran AKA "Hybrid". Other materials can be sourced on request.',
    icon: '🧵',
  },
  {
    title: 'Custom Colors',
    description:
      'Mix and match strand colors and serving options to make a string that suits your style.',
    icon: '🎨',
  },
  {
    title: 'Pre-Stretched',
    description:
      'Every string is pre-stretched to 100 lbs before it ships, so it settles in faster and shoots more consistently right from the start.',
    icon: '🎯',
  },
];

export default function Features() {
  return (
    <section className="py-20 px-4 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-stone-800 text-center mb-12">
          Why Maritime Bowstrings?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-stone-800 mb-2">{feature.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
