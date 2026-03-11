'use client';

import { useState, useEffect } from 'react';
import { differenceInDays } from 'date-fns';
import { DATES } from '@/lib/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [daysLeft, setDaysLeft] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    setDaysLeft(Math.max(0, differenceInDays(new Date(DATES.deadline), new Date())));
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        height: 60,
        padding: '0 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(26, 26, 24, 0.85)' : 'var(--ink)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'background 0.3s, backdrop-filter 0.3s',
      }}
    >
      {/* Logo */}
      <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 2 }}>
        <img
          src="/FOUNDLOOP_logo.png"
          alt="FOUNDLOOP"
          style={{ height: 18, filter: 'invert(1)' }}
        />
        <span
          style={{
            color: 'var(--hatch-yellow)',
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          .
        </span>
      </a>

      {/* Right side */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        {daysLeft !== null && (
          <span
            className="navbar-dday"
            style={{
              color: 'var(--stone)',
              fontSize: 13,
              fontWeight: 300,
              letterSpacing: 'var(--ls-normal)',
            }}
          >
            마감까지 D-{daysLeft}일
          </span>
        )}

        {/* CTA */}
        <a
          href="#apply"
          style={{
            display: 'inline-block',
            background: 'var(--yolk-orange)',
            color: 'var(--shell-white)',
            fontSize: 13,
            fontWeight: 600,
            padding: '10px 20px',
            borderRadius: 6,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--orange-hover)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--yolk-orange)')}
        >
          지금 참가하기 &rarr;
        </a>
      </div>
    </nav>
  );
}
