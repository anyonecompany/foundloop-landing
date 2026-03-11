'use client';

import { BRAND } from '@/lib/constants';
import Countdown from './Countdown';

export default function Hero() {
  const remainingSlots = BRAND.totalSlots;

  return (
    <section
      style={{
        background: 'var(--ink)',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 32px',
      }}
    >
      <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
        {/* Badge */}
        <div
          style={{
            display: 'inline-block',
            background: 'var(--hatch-yellow)',
            color: 'var(--ink)',
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: 'var(--ls-label)',
            borderRadius: 4,
            padding: '5px 14px',
            marginBottom: 32,
          }}
        >
          LOOP 1&nbsp; &middot;&nbsp; 2026.03.27 FRI &mdash; 03.29 SUN
        </div>

        {/* Headline */}
        <h1
          className="text-hero"
          style={{
            color: 'var(--shell-white)',
            marginBottom: 20,
            whiteSpace: 'pre-line',
          }}
        >
          {'창업의 '}
          <span
            style={{
              textDecoration: 'underline',
              textDecorationColor: 'var(--hatch-yellow)',
              textUnderlineOffset: 4,
              textDecorationThickness: 2,
            }}
          >
            루프
          </span>
          {',\n이번 주말에 올라타세요.'}
        </h1>

        {/* Sub copy */}
        <p
          style={{
            color: 'var(--stone)',
            fontSize: 17,
            fontWeight: 300,
            lineHeight: 1.7,
            whiteSpace: 'pre-line',
            marginBottom: 36,
          }}
        >
          {'15,000원으로\n팀원 · 피드백 · 상금을 한 번에.'}
        </p>

        {/* CTA button */}
        <a
          href="#apply"
          style={{
            display: 'inline-block',
            background: 'var(--yolk-orange)',
            color: 'var(--shell-white)',
            fontSize: 16,
            fontWeight: 600,
            padding: '16px 32px',
            borderRadius: 8,
            textDecoration: 'none',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--orange-hover)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--yolk-orange)')}
        >
          루프 1기 참가하기 &rarr;
        </a>

        {/* Caption */}
        <p
          style={{
            color: 'var(--stone)',
            fontSize: 12,
            fontWeight: 300,
            marginTop: 12,
            marginBottom: 40,
          }}
        >
          (잔여 슬롯 {remainingSlots}개 &middot; 마감 3월 26일 자정)
        </p>

        {/* Countdown */}
        <Countdown />
      </div>
    </section>
  );
}
