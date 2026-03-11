const roles = [
  { label: '기획/아이디어', count: 5, total: 12 },
  { label: '디자인', count: 3, total: 12 },
  { label: '개발/바이브코딩', count: 3, total: 12 },
  { label: '마케팅/기타', count: 1, total: 12 },
];

const testimonials = [
  {
    quote: '저도 혼자 신청했는데 팀 생겼어요. 금요일 밤에 처음 만나서 일요일에 뭔가 만들었어요.',
    author: '최○○, 기획자, 직장인 4년차',
  },
];

export default function SocialProof() {
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
            marginBottom: 32,
          }}
        >
          지금 루프에 올라탄 파운더들
        </h2>

        {/* Participant count */}
        <p
          style={{
            fontSize: 'clamp(40px, 6vw, 64px)',
            fontWeight: 600,
            color: 'var(--ink)',
            letterSpacing: '-0.04em',
            lineHeight: 1,
            marginBottom: 8,
          }}
        >
          현재 12명 개인 참가 신청
        </p>

        {/* Badge */}
        <div
          style={{
            display: 'inline-block',
            background: 'var(--yolk-orange)',
            color: 'var(--shell-white)',
            fontSize: 13,
            fontWeight: 500,
            padding: '6px 16px',
            borderRadius: 4,
            marginBottom: 40,
          }}
        >
          개인 신청 → 킥오프에서 팀 매칭 · 지금 신청하면 매칭 가능
        </div>

        {/* Role distribution — individual bars */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          {roles.map((r, i) => (
            <div key={i}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: 6,
                }}
              >
                <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink)' }}>
                  {r.label}
                </span>
                <span style={{ fontSize: 13, fontWeight: 300, color: 'var(--stone)' }}>
                  {r.count}명
                </span>
              </div>
              <div
                style={{
                  height: 8,
                  borderRadius: 4,
                  background: 'var(--border)',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: `${(r.count / r.total) * 100}%`,
                    height: '100%',
                    background: 'var(--sage)',
                    borderRadius: 4,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        {testimonials.map((t, i) => (
          <div
            key={i}
            style={{
              background: 'var(--shell-white)',
              border: '1px solid var(--border)',
              borderRadius: 12,
              padding: '24px',
            }}
          >
            <span
              style={{
                color: 'var(--hatch-yellow)',
                fontSize: 24,
                lineHeight: 1,
              }}
            >
              &ldquo;
            </span>
            <p
              style={{
                color: 'var(--ink)',
                fontSize: 15,
                fontWeight: 300,
                lineHeight: 1.8,
                letterSpacing: '-0.01em',
                marginBottom: 12,
              }}
            >
              {t.quote}
            </p>
            <p
              style={{
                color: 'var(--stone)',
                fontSize: 13,
                fontWeight: 300,
              }}
            >
              — {t.author}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
