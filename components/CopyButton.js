'use client';

import { useState } from 'react';

export default function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* fallback: do nothing */
    }
  };

  return (
    <button
      onClick={handleCopy}
      style={{
        background: copied ? 'var(--sage-bg)' : 'var(--yolk-orange)',
        color: copied ? 'var(--ink)' : 'var(--shell-white)',
        border: 'none',
        borderRadius: 6,
        padding: '6px 14px',
        fontSize: 13,
        fontWeight: 500,
        cursor: 'pointer',
        transition: 'all 0.15s',
        letterSpacing: 'var(--ls-normal)',
      }}
    >
      {copied ? '복사됨 ✓' : '복사 📋'}
    </button>
  );
}
