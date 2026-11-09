// Variable Mapping: e -> item, r -> href, i -> badge, n -> active, s -> expanded, l -> setRef, a -> onMouseEnter, f -> onClick, p -> handleClick
'use client';

import { cn } from '@/libs/utils/className'; // NOTE: module id: 103746
import Link from 'next/link'; // NOTE: module id: 522016
import ButtonText from '@/features/animations/shared/ButtonText'; // NOTE: module id: 991642
import { NAV_SURFACE } from '@/components/navigation/NavLink'; // NOTE: module id: 520237

// NOTE: module id: 76624
export function NavDropdownTrigger({
  item,
  href,
  badge,
  active,
  expanded,
  setRef,
  onMouseEnter,
  onClick,
}) {
  const handleClick = onClick;

  return (
    <Link
      href={href || '#'}
      ref={setRef}
      aria-expanded={expanded || false}
      aria-haspopup="true"
      onMouseEnter={onMouseEnter}
      onClick={handleClick}
      data-active={expanded ? 'true' : undefined}
      className={cn(
        'group text-mono relative flex h-full cursor-pointer items-center justify-center text-center',
        'transition-[transform,color] duration-(--duration-quick) ease-(--ease-back-out)',
        'hover:scale-[0.95] data-[active=true]:scale-[0.95]',
        active || expanded ? 'text-foreground' : 'text-foreground-muted hover:text-foreground'
      )}
    >
      <span className={NAV_SURFACE}>
        <ButtonText>{item.label}</ButtonText>
        {badge ? (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-6 left-[calc(100%-12px)] -translate-y-full text-accent-2xs text-brand whitespace-nowrap"
          >
            {badge}
          </span>
        ) : null}
      </span>
    </Link>
  );
}
