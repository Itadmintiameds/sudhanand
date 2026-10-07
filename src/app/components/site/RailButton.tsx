/** Previous / next arrow for a sideways-scrolling card rail. */
export default function RailButton({
  dir,
  onClick,
}: Readonly<{ dir: -1 | 1; onClick: () => void }>) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === -1 ? 'Previous' : 'Next'}
      className="w-12 h-12 rounded-full border border-ink flex items-center justify-center transition-colors duration-300 hover:bg-ink hover:text-paper"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d={dir === -1 ? 'M10 3L5 8l5 5' : 'M6 3l5 5-5 5'}
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
