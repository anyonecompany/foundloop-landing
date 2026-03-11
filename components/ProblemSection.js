const cards = [
  { icon: '\uD83D\uDCC2', text: '아이디어가 3개월째 노션에 있어요' },
  { icon: '\uD83D\uDE4B', text: '혼자 하려니 계속 미뤄져요' },
  { icon: '\uD83D\uDD0B', text: '퇴근하면 에너지가 없어요' },
];

export default function ProblemSection() {
  return (
    <section
      style={{
        background: 'var(--shell-white)',
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
            marginBottom: 32,
          }}
        >
          이런 루프, 반복되고 있지 않나요?
        </p>

        {/* Cards grid */}
        <div className="grid-3" style={{ marginBottom: 40 }}>
          {cards.map((card, i) => (
            <div
              key={i}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                padding: '28px 24px',
              }}
            >
              <div style={{ fontSize: 28, opacity: 0.6, marginBottom: 16 }}>
                {card.icon}
              </div>
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: 'var(--ink)',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.5,
                }}
              >
                {card.text}
              </p>
              <div
                style={{
                  width: 40,
                  height: 3,
                  background: 'var(--hatch-yellow)',
                  marginTop: 16,
                }}
              />
            </div>
          ))}
        </div>

        {/* Transition copy */}
        <p
          style={{
            color: 'var(--yolk-orange)',
            fontSize: 17,
            fontWeight: 600,
            textAlign: 'center',
          }}
        >
          이 루프, FOUNDLOOP에서 끊어냅니다.
        </p>
      </div>
    </section>
  );
}
