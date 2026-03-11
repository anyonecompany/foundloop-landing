import { BRAND } from '@/lib/constants';
import CopyButton from './CopyButton';
import TallyForm from './TallyForm';

const checklist = [
  '아이디어 한 줄 정리',
  'Claude / Cursor / v0 설치',
  'Discord 설치 (링크는 카톡으로 발송)',
];

export default function ApplySection() {
  return (
    <section
      id="apply"
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
            textAlign: 'center',
          }}
        >
          LOOP 1 참가 신청
        </h2>
        <p
          style={{
            color: 'var(--stone)',
            fontSize: 13,
            fontWeight: 300,
            textAlign: 'center',
            marginBottom: 40,
          }}
        >
          입금 안내는 폼 제출 후 안내됩니다
        </p>

        {/* Payment info card */}
        <div
          style={{
            maxWidth: 480,
            margin: '0 auto 40px',
            background: 'var(--surface)',
            border: '1.5px solid var(--hatch-yellow)',
            borderRadius: 10,
            padding: '20px 24px',
          }}
        >
          <div style={{ marginBottom: 12 }}>
            <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink)' }}>
              참가비{' '}
            </span>
            <span
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: 'var(--yolk-orange)',
                letterSpacing: '-0.04em',
              }}
            >
              {BRAND.fee.toLocaleString()}원
            </span>
          </div>

          <div style={{ marginBottom: 8 }}>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--stone)', marginBottom: 4 }}>
              {BRAND.account.holder}
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <p style={{ fontSize: 15, fontWeight: 500, color: 'var(--ink)' }}>
                {BRAND.account.bank} {BRAND.account.number}
              </p>
              <CopyButton text={BRAND.account.number} />
            </div>
          </div>

          <p
            style={{
              fontSize: 13,
              fontWeight: 300,
              color: 'var(--stone)',
              marginTop: 12,
            }}
          >
            ⚠ 입금자명을 폼에 입력한 이름과 동일하게 해주세요.
          </p>
        </div>

        {/* Tally form */}
        <TallyForm />

        {/* Checklist */}
        <div style={{ maxWidth: 480, margin: '40px auto 0' }}>
          <p
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: 'var(--stone)',
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              marginBottom: 12,
            }}
          >
            준비하세요
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {checklist.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ color: 'var(--sage)', fontSize: 16, fontWeight: 500 }}>✓</span>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 300,
                    color: 'var(--ink)',
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
