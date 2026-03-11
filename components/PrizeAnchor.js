'use client';

const prizes = [
  { label: 'Claude Pro 1년치', amount: '≈ 340,000원' },
  { label: 'Cursor Pro 6개월치', amount: '≈ 170,000원' },
  { label: 'ChatGPT Plus 3개월치', amount: '≈ 80,000원' },
  { label: '남는 돈으로 커피챗 10번', amount: null },
];

export default function PrizeAnchor() {
  const handleCTA = () => {
    const el = document.getElementById('apply');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      style={{
        background: 'var(--ink)',
        padding: '80px 24px',
      }}
    >
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        {/* Section label */}
        <p
          style={{
            color: 'var(--stone)',
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            marginBottom: 16,
          }}
        >
          이번 루프 상금 풀
        </p>

        {/* Large prize number */}
        <p
          style={{
            color: 'var(--hatch-yellow)',
            fontSize: 'clamp(56px, 10vw, 96px)',
            fontWeight: 600,
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            marginBottom: 12,
          }}
        >
          ₩ 360,000
        </p>

        {/* Calculation line */}
        <p
          style={{
            color: 'var(--stone)',
            fontSize: 13,
            fontWeight: 300,
            marginBottom: 32,
          }}
        >
          참가자 24명 × 15,000원 × 80% = 이번 주 상금
        </p>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: 'rgba(255,255,255,0.08)',
            marginBottom: 32,
          }}
        />

        {/* Grid heading */}
        <p
          style={{
            color: 'var(--shell-white)',
            fontSize: 15,
            fontWeight: 600,
            marginBottom: 20,
          }}
        >
          1등이 받으면 살 수 있는 것들
        </p>

        {/* Prize grid */}
        <div className="grid-2" style={{ marginBottom: 32 }}>
          {prizes.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
              <span style={{ color: 'var(--sage)', fontSize: 15, fontWeight: 500 }}>
                ✓
              </span>
              <span>
                <span
                  style={{
                    color: 'var(--shell-white)',
                    fontSize: 15,
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </span>
                {item.amount && (
                  <span
                    style={{
                      color: 'var(--stone)',
                      fontSize: 15,
                      fontWeight: 300,
                      marginLeft: 6,
                    }}
                  >
                    {item.amount}
                  </span>
                )}
              </span>
            </div>
          ))}
        </div>

        {/* Price note */}
        <p
          style={{
            color: 'var(--stone)',
            fontSize: 11,
            fontWeight: 300,
            marginBottom: 24,
            opacity: 0.6,
          }}
        >
          * 가격은 월 $20 기준, 환율 1,400원/USD 기준 추정치입니다.
        </p>

        {/* Expected value message */}
        <p
          style={{
            color: 'var(--stone)',
            fontSize: 13,
            fontWeight: 300,
            textAlign: 'center',
            marginBottom: 40,
          }}
        >
          참가비 15,000원의 기댓값은 충분히 플러스입니다.
        </p>

        {/* CTA button */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={handleCTA}
            style={{
              background: 'var(--yolk-orange)',
              color: 'var(--shell-white)',
              fontSize: 16,
              fontWeight: 600,
              padding: '16px 32px',
              borderRadius: 8,
              border: 'none',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--orange-hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--yolk-orange)')}
          >
            지금 루프에 올라타기 →
          </button>
        </div>
      </div>
    </section>
  );
}
