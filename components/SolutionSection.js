const solutions = [
  {
    num: '01',
    title: '팀 빌딩 루프',
    desc: '혼자 왔어도 괜찮습니다. 아이디어와 역할로 팀을 만들어드립니다. 금요일 밤, 낯선 팀원과 54시간을 시작합니다.',
  },
  {
    num: '02',
    title: '피드백 루프',
    desc: '만든 것을 세상에 내놓는 경험. "좋아요" 대신 "이 부분이 왜 필요해요?"',
  },
  {
    num: '03',
    title: '상금 루프',
    desc: '이번 주 예상 1등: ₩360,000\nAI 구독 6개월치.',
  },
];

export default function SolutionSection() {
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
          15,000원으로 올라타는
          <br />
          3가지 루프
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {solutions.map((s, i) => (
            <div
              key={s.num}
              style={{
                display: 'flex',
                gap: 20,
                alignItems: 'flex-start',
                padding: '32px 0',
                borderBottom: i < solutions.length - 1 ? '1px solid var(--border)' : 'none',
              }}
            >
              <span
                style={{
                  color: 'var(--yolk-orange)',
                  fontSize: 'clamp(40px, 6vw, 56px)',
                  fontWeight: 600,
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                  flexShrink: 0,
                }}
              >
                {s.num}
              </span>
              <div>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: 'var(--ink)',
                    letterSpacing: '-0.025em',
                    marginBottom: 8,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    color: 'var(--stone)',
                    fontSize: 15,
                    fontWeight: 300,
                    lineHeight: 1.75,
                    letterSpacing: '-0.01em',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
