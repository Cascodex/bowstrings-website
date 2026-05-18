'use client';

export type VisualizerFocus = 'length' | 'colors' | null;

const STRAND_COLOR_MAP: Record<string, string> = {
  Black: '#1c1917',
  'Neon Pink': '#ff2d92',
  'Neon Green': '#39e639',
  'Deep Purple': '#5b21b6',
  Red: '#dc2626',
};

const SERVING_COLOR_MAP: Record<string, [string, string]> = {
  'White/Black': ['#f5f5f4', '#1c1917'],
  'Red/Black': ['#dc2626', '#1c1917'],
};

interface Props {
  focus: VisualizerFocus;
  primaryColor: string;
  secondaryColor: string;
  servingColor: string;
  amoLength: string;
}

export default function StringVisualizer({
  focus,
  primaryColor,
  secondaryColor,
  servingColor,
  amoLength,
}: Props) {
  const primary = STRAND_COLOR_MAP[primaryColor] ?? '#1c1917';
  const secondary = secondaryColor
    ? STRAND_COLOR_MAP[secondaryColor] ?? primary
    : primary;
  const [serv1, serv2] = SERVING_COLOR_MAP[servingColor] ?? ['#f5f5f4', '#1c1917'];

  // viewBox switches between zoomed-out (full string + dimension bar) and zoomed-in (center serving).
  const viewBox =
    focus === 'colors' ? '270 88 260 64' : '0 0 800 240';

  const lengthLabel = amoLength ? `AMO Length: ${amoLength}"` : 'AMO Length';

  return (
    <div className="rounded-lg border border-stone-200 bg-stone-50 overflow-hidden">
      <svg
        viewBox={viewBox}
        preserveAspectRatio="xMidYMid meet"
        className="w-full block transition-all duration-500 ease-out"
        style={{ height: 200 }}
      >
        {/* Left loop */}
        <ellipse
          cx="42"
          cy="120"
          rx="24"
          ry="14"
          fill="none"
          stroke={primary}
          strokeWidth="6"
        />
        {/* Right loop */}
        <ellipse
          cx="758"
          cy="120"
          rx="24"
          ry="14"
          fill="none"
          stroke={primary}
          strokeWidth="6"
        />

        {/* String body — two intertwined strand bundles */}
        <path
          d="M 66 120 Q 200 108, 340 120 T 620 120 T 734 120"
          fill="none"
          stroke={primary}
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          d="M 66 120 Q 200 132, 340 120 T 620 120 T 734 120"
          fill="none"
          stroke={secondary}
          strokeWidth="7"
          strokeLinecap="round"
        />

        {/* Center serving */}
        <g>
          <rect x="338" y="104" width="124" height="32" fill={serv1} rx="2" />
          {Array.from({ length: 26 }).map((_, i) => (
            <line
              key={i}
              x1={338 + i * 5}
              y1={104}
              x2={343 + i * 5}
              y2={136}
              stroke={serv2}
              strokeWidth="2.6"
            />
          ))}
          {/* serving edge highlights */}
          <line x1="338" y1="104" x2="462" y2="104" stroke="#00000022" strokeWidth="1" />
          <line x1="338" y1="136" x2="462" y2="136" stroke="#00000022" strokeWidth="1" />
        </g>

        {/* Dimension bar — visible in length focus */}
        <g
          style={{
            opacity: focus === 'length' ? 1 : 0,
            transition: 'opacity 300ms ease',
          }}
        >
          {/* Guide lines from loops down to dimension bar */}
          <line x1="42" y1="140" x2="42" y2="200" stroke="#a8a29e" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="758" y1="140" x2="758" y2="200" stroke="#a8a29e" strokeWidth="1" strokeDasharray="3 3" />
          {/* Dimension line */}
          <line x1="42" y1="200" x2="758" y2="200" stroke="#57534e" strokeWidth="1.6" />
          {/* Arrow heads */}
          <polyline points="56,192 42,200 56,208" fill="none" stroke="#57534e" strokeWidth="1.6" strokeLinecap="round" />
          <polyline points="744,192 758,200 744,208" fill="none" stroke="#57534e" strokeWidth="1.6" strokeLinecap="round" />
          {/* Label */}
          <rect x="328" y="186" width="144" height="26" rx="4" fill="#fafaf9" stroke="#e7e5e4" />
          <text
            x="400"
            y="204"
            textAnchor="middle"
            fontSize="14"
            fontWeight="600"
            fill="#44403c"
            fontFamily="Arial, Helvetica, sans-serif"
          >
            {lengthLabel}
          </text>
        </g>
      </svg>

      <div className="px-4 py-2 text-xs text-stone-500 bg-white border-t border-stone-200 min-h-[2rem]">
        {focus === 'length' &&
          'AMO length is measured loop to loop along the full string — the spec your bow is sized for.'}
        {focus === 'colors' &&
          'The wrapped center section is the serving — where the arrow nocks and your fingers grip. Strand colors run the rest of the string.'}
        {!focus &&
          'Hover or tap the length and color fields below to see what each one controls.'}
      </div>
    </div>
  );
}
