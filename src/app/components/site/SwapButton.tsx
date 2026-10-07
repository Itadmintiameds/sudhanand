'use client';

import Link from 'next/link';
import React from 'react';

type Variant = 'solid' | 'ghost' | 'paper';

const VARIANT: Record<Variant, string> = {
  solid: '',
  ghost: 'btn--ghost',
  paper: 'btn--paper',
};

/**
 * Pill button. Give it a `hoverLabel` and the resting text rides up and out
 * while the hover text rises into its place (both share one grid cell so the
 * pill never resizes); without one the label simply stays put.
 */
export default function SwapButton({
  label,
  hoverLabel,
  href,
  onClick,
  variant = 'solid',
  dot = true,
  className = '',
  external = false,
}: Readonly<{
  label: string;
  hoverLabel?: string;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  dot?: boolean;
  className?: string;
  external?: boolean;
}>) {
  const inner = (
    <>
      {dot && <span className="btn__dot" />}
      {hoverLabel ? (
        <span className="btn__swap">
          <span>{label}</span>
          <span aria-hidden>{hoverLabel}</span>
        </span>
      ) : (
        label
      )}
    </>
  );

  const cls = `btn ${VARIANT[variant]} ${className}`;

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={cls}>
      {inner}
    </button>
  );
}
