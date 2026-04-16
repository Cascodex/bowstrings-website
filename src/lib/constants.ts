export const STRING_MATERIALS = [
  {
    value: 'Dacron B50',
    label: 'Dacron B50',
    description: 'Classic choice for traditional wood bows. Forgiving on the limbs with slight stretch — ideal for self bows and older fiberglass limbs.',
  },
  {
    value: 'Fast Flight',
    label: 'Fast Flight',
    description: 'Low-stretch, high-performance. Check your bow\'s limb compatibility before ordering — not suitable for all traditional bows.',
  },
  {
    value: 'Dyneema',
    label: 'Dyneema',
    description: 'Extremely light and strong with minimal creep. Popular for modern recurves and higher-draw-weight longbows.',
  },
  {
    value: '8125G',
    label: '8125G',
    description: 'Competition-grade string material. Very low stretch, excellent durability, and consistent performance shot after shot.',
  },
] as const;

export const STRAND_COUNTS = ['10', '12', '14', '16', '18', '20'] as const;

export const STRING_COLORS = [
  'Black',
  'White',
  'Natural',
  'Red',
  'Burgundy',
  'Blue',
  'Royal Blue',
  'Forest Green',
  'Olive',
  'Yellow',
  'Orange',
  'Purple',
  'Brown',
  'Tan',
  'Gold',
  'Silver',
] as const;

export const SERVING_STYLES = [
  { value: 'standard', label: 'Standard Center Serving' },
  { value: 'full', label: 'Full-Length Serving' },
  { value: 'loop-only', label: 'Loop Serving Only' },
] as const;
