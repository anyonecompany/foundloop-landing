'use client';

import { useState, useEffect } from 'react';
import { DATES } from '@/lib/constants';

function getTimeRemaining(deadline) {
  const total = new Date(deadline).getTime() - Date.now();
  if (total <= 0) return null;

  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds };
}

function Segment({ value, label }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 48 }}>
      <span
        style={{
          color: 'var(--hatch-yellow)',
          fontSize: 48,
          fontWeight: 600,
          letterSpacing: 'var(--ls-tight)',
          lineHeight: 1,
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {String(value).padStart(2, '0')}
      </span>
      <span
        style={{
          color: 'var(--stone)',
          fontSize: 11,
          fontWeight: 300,
          letterSpacing: 'var(--ls-label)',
          marginTop: 6,
        }}
      >
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <span
      style={{
        color: 'var(--stone)',
        fontSize: 32,
        fontWeight: 300,
        alignSelf: 'flex-start',
        lineHeight: 1,
        opacity: 0.4,
        padding: '0 2px',
      }}
    >
      :
    </span>
  );
}

export default function Countdown() {
  const [mounted, setMounted] = useState(false);
  const [remaining, setRemaining] = useState(null);

  useEffect(() => {
    setMounted(true);
    setRemaining(getTimeRemaining(DATES.deadline));
    const id = setInterval(() => {
      setRemaining(getTimeRemaining(DATES.deadline));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) {
    return (
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
        <Segment value={0} label="DAYS" />
        <Separator />
        <Segment value={0} label="HRS" />
        <Separator />
        <Segment value={0} label="MIN" />
        <Separator />
        <Segment value={0} label="SEC" />
      </div>
    );
  }

  if (!remaining) {
    return (
      <p
        style={{
          color: 'var(--stone)',
          fontSize: 17,
          fontWeight: 300,
          letterSpacing: 'var(--ls-normal)',
        }}
      >
        마감되었습니다
      </p>
    );
  }

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
      <Segment value={remaining.days} label="DAYS" />
      <Separator />
      <Segment value={remaining.hours} label="HRS" />
      <Separator />
      <Segment value={remaining.minutes} label="MIN" />
      <Separator />
      <Segment value={remaining.seconds} label="SEC" />
    </div>
  );
}
