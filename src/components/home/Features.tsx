const features = [
  {
    title: 'Made to Order',
    description:
      'No shelf strings here. Every bowstring is twisted specifically for your bow — your specs, your colors, your style.',
    icon: '🏹',
  },
  {
    title: 'Quality Materials',
    description:
      'Choose from Dacron B50, Fast Flight, Dyneema, and 8125G. The right material for traditional and modern recurves alike.',
    icon: '🧵',
  },
  {
    title: 'Custom Colors',
    description:
      'Mix and match strand colors, serving thread, and loop style. Your string should reflect your archery.',
    icon: '🎨',
  },
  {
    title: 'Pre-Stretched',
    description:
      'Every string is pre-stretched up to 100 lbs before it ships, so it settles in faster and shoots more consistently right from the start.',
    icon: '🎯',
  },
];

export default function Features() {
  return (
    <section className="py-20 px-4 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-stone-800 text-center mb-12">
          Why Heritage Strings?
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
