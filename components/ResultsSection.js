'use client';

const projects = [
  { team: 'Team Alpha', desc: 'AI 기반 식단 추천 앱', loop: 'LOOP 1기' },
  { team: 'Team Beta', desc: '소상공인 매출 분석 대시보드', loop: 'LOOP 1기' },
  { team: 'Team Gamma', desc: '반려동물 건강 관리 서비스', loop: 'LOOP 1기' },
];

export default function ResultsSection() {
  const handleCTA = () => {
    const el = document.getElementById('apply');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      style={{
        background: 'var(--shell-white)',
        padding: '80px 24px',
      }}
    >
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <h2
          className="text-heading"
          style={{
            color: 'var(--ink)',
            marginBottom: 48,
          }}
        >
          루프에서 만들 수 있는 것들
        </h2>

        <div className="grid-3" style={{ marginBottom: 48 }}>
          {projects.map((p, i) => (
            <div
              key={i}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                overflow: 'hidden',
              }}
            >
              {/* Placeholder thumbnail */}
              <div
                style={{
                  aspectRatio: '16/9',
                  background: 'var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ color: 'var(--stone)', fontSize: 13, fontWeight: 300 }}>
                  Coming Soon
                </span>
              </div>
              <div style={{ padding: '16px 20px' }}>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: 'var(--ink)',
                    letterSpacing: '-0.025em',
                    marginBottom: 4,
                  }}
                >
                  {p.team}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 300,
                    color: 'var(--stone)',
                    marginBottom: 12,
                  }}
                >
                  {p.desc}
                </p>
                <span
                  style={{
                    display: 'inline-block',
                    background: 'var(--hatch-yellow)',
                    color: 'var(--ink)',
                    fontSize: 11,
                    fontWeight: 500,
                    padding: '3px 10px',
                    borderRadius: 4,
                    letterSpacing: '0.02em',
                  }}
                >
                  {p.loop}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <p
            style={{
              color: 'var(--stone)',
              fontSize: 15,
              fontWeight: 300,
              marginBottom: 20,
            }}
          >
            다음 루프에서는 당신의 프로덕트가 여기 올라옵니다.
          </p>
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
            루프에 올라타기 &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
