const events = [
  {
    date: '3/27 (금)',
    time: '밤 10시',
    title: '킥오프 + 팀 매칭',
    desc: '낯선 Looper들이 처음 만나는 순간',
    highlight: false,
  },
  {
    date: '3/28 (토)',
    time: '오후 2시',
    title: '중간 체크인',
    desc: '팀별 1분 현황 공유',
    highlight: false,
  },
  {
    date: '3/29 (일)',
    time: '오후 3시',
    title: '전체 데모 발표 (팀당 3분)',
    desc: '',
    highlight: false,
  },
  {
    date: '3/29 (일)',
    time: '오후 5시',
    title: '결과 발표 + 상금 즉시 송금',
    desc: '',
    highlight: true,
  },
];

export default function Schedule() {
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
            marginBottom: 8,
          }}
        >
          FOUNDLOOP — LOOP 1
        </h2>
        <p
          style={{
            color: 'var(--stone)',
            fontSize: 15,
            fontWeight: 300,
            marginBottom: 48,
          }}
        >
          2025년 3월 27일(금) ~ 29일(일)
        </p>

        <div style={{ position: 'relative', paddingLeft: 32 }}>
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: 4,
              top: 8,
              bottom: 8,
              width: 2,
              background: 'var(--hatch-yellow)',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
            {events.map((ev, i) => (
              <div key={i} style={{ position: 'relative' }}>
                {/* Dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: -32,
                    top: 6,
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: 'var(--hatch-yellow)',
                  }}
                />

                <div
                  style={{
                    background: ev.highlight ? 'var(--sage-bg)' : 'transparent',
                    borderRadius: ev.highlight ? 12 : 0,
                    padding: ev.highlight ? '20px 24px' : '0',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: 12,
                      marginBottom: 4,
                    }}
                  >
                    <span
                      style={{
                        color: 'var(--yolk-orange)',
                        fontSize: 13,
                        fontWeight: 500,
                        letterSpacing: '0.02em',
                      }}
                    >
                      {ev.date}
                    </span>
                    <span
                      style={{
                        color: 'var(--ink)',
                        fontSize: 13,
                        fontWeight: 500,
                      }}
                    >
                      {ev.time}
                    </span>
                  </div>
                  <h3
                    style={{
                      color: 'var(--ink)',
                      fontSize: 16,
                      fontWeight: 600,
                      letterSpacing: '-0.025em',
                      marginBottom: ev.desc ? 4 : 0,
                    }}
                  >
                    {ev.title}
                  </h3>
                  {ev.desc && (
                    <p
                      style={{
                        color: 'var(--stone)',
                        fontSize: 14,
                        fontWeight: 300,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {ev.desc}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p
          style={{
            color: 'var(--stone)',
            fontSize: 13,
            fontWeight: 300,
            marginTop: 40,
            textAlign: 'center',
          }}
        >
          전 일정 온라인 (Zoom / Discord) · 필요한 것: 노트북 1대, 아이디어 1개
        </p>
      </div>
    </section>
  );
}
