const criteria = [
  {
    num: '01',
    title: '실현 가능성',
    pct: '35%',
    desc: '54시간 안에 실제로 작동하는가?',
  },
  {
    num: '02',
    title: '문제 선명도',
    pct: '30%',
    desc: '"누가, 왜 쓰는가"를 1분 안에 설명할 수 있는가?',
  },
  {
    num: '03',
    title: '루프 지속성',
    pct: '35%',
    desc: '이 팀이 다음 달에도 이 아이디어를 들고 있을 것 같은가?',
  },
];

export default function JudgingCriteria() {
  return (
    <section
      style={{
        background: 'var(--surface)',
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
          루프는 이렇게 심사합니다
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {criteria.map((c, i) => (
            <div
              key={c.num}
              style={{
                display: 'flex',
                gap: 20,
                alignItems: 'flex-start',
                padding: '28px 0',
                borderBottom: i < criteria.length - 1 ? '1px solid var(--border)' : 'none',
              }}
            >
              <span
                style={{
                  color: 'var(--hatch-yellow)',
                  fontSize: 40,
                  fontWeight: 600,
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                  flexShrink: 0,
                }}
              >
                {c.num}
              </span>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: 12,
                    marginBottom: 6,
                  }}
                >
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      color: 'var(--ink)',
                      letterSpacing: '-0.025em',
                    }}
                  >
                    {c.title}
                  </h3>
                  <span
                    style={{
                      color: 'var(--yolk-orange)',
                      fontSize: 15,
                      fontWeight: 500,
                    }}
                  >
                    {c.pct}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 300,
                    color: 'var(--stone)',
                    lineHeight: 1.6,
                  }}
                >
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Meta info */}
        <div
          style={{
            marginTop: 32,
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          <p style={{ color: 'var(--stone)', fontSize: 13, fontWeight: 300 }}>
            심사위원: 참가자 전원 크로스 심사 + 외부 심사위원 1인
          </p>
          <p style={{ color: 'var(--stone)', fontSize: 13, fontWeight: 300 }}>
            결과 발표: 3월 29일(일) 오후 5시 · 전원 공개
          </p>
        </div>
      </div>
    </section>
  );
}
