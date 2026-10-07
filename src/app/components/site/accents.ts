/**
 * Sector colours. `solid` is a muted, dark tone that carries white display
 * type (5.9:1 or better) and paints whole panels; `tint` is its quiet panel
 * partner (a faint hue shift over the ground, in both modes); `bar` is a
 * lighter version for tiny marks on top of photos, where the dark `solid`
 * would disappear. Full class strings live here so Tailwind can see them.
 */
export const ACCENTS = {
  red: {
    solid: 'bg-sec-red',
    bar: 'bg-[#e5575c]',
    tint: 'bg-blush',
    rowHover: 'hover:bg-blush/60',
    arrowHover: 'group-hover:bg-sec-red group-hover:border-sec-red group-hover:text-white',
  },
  blue: {
    solid: 'bg-sec-blue',
    bar: 'bg-[#4aa3dc]',
    tint: 'bg-sky',
    rowHover: 'hover:bg-sky/60',
    arrowHover: 'group-hover:bg-sec-blue group-hover:border-sec-blue group-hover:text-white',
  },
  amber: {
    solid: 'bg-amber',
    bar: 'bg-[#e0a050]',
    tint: 'bg-sun',
    rowHover: 'hover:bg-sun/60',
    arrowHover: 'group-hover:bg-amber group-hover:border-amber group-hover:text-white',
  },
  green: {
    solid: 'bg-green',
    bar: 'bg-[#4cb88f]',
    tint: 'bg-mint',
    rowHover: 'hover:bg-mint/60',
    arrowHover: 'group-hover:bg-green group-hover:border-green group-hover:text-white',
  },
  teal: {
    solid: 'bg-teal',
    bar: 'bg-[#43b3bd]',
    tint: 'bg-aqua',
    rowHover: 'hover:bg-aqua/60',
    arrowHover: 'group-hover:bg-teal group-hover:border-teal group-hover:text-white',
  },
  violet: {
    solid: 'bg-violet',
    bar: 'bg-[#9a88e0]',
    tint: 'bg-lilac',
    rowHover: 'hover:bg-lilac/60',
    arrowHover: 'group-hover:bg-violet group-hover:border-violet group-hover:text-white',
  },
} as const;

export type Accent = keyof typeof ACCENTS;

/** Pale tints to cycle through for runs of cards that aren't tied to a sector. */
export const TINTS = ['bg-sky', 'bg-blush', 'bg-sun', 'bg-mint', 'bg-lilac'];
