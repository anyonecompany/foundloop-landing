import { BRAND } from '@/lib/constants';

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--ink)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: '60px 24px 40px',
      }}
    >
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 12 }}>
          <img
            src="/FOUNDLOOP_logo.png"
            alt="FOUNDLOOP"
            style={{ height: 18, filter: 'invert(1)' }}
          />
          <span style={{ color: 'var(--hatch-yellow)', fontSize: 18, fontWeight: 600 }}>.</span>
        </div>

        {/* Slogan */}
        <p
          style={{
            color: 'var(--stone)',
            fontSize: 13,
            fontWeight: 300,
            marginBottom: 32,
          }}
        >
          {BRAND.tagline}
        </p>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: 'rgba(255,255,255,0.08)',
            marginBottom: 24,
          }}
        />

        {/* Business info — 2 column grid */}
        <div
          className="grid-2"
          style={{ marginBottom: 24, gap: 24 }}
        >
          {/* Left */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <p style={{ color: 'var(--stone)', fontSize: 13, fontWeight: 500 }}>
              주식회사 애니원컴퍼니
            </p>
            <p style={{ color: 'var(--stone)', fontSize: 12, fontWeight: 300 }}>
              사업자등록번호: 752-88-03329
            </p>
            <p style={{ color: 'var(--stone)', fontSize: 12, fontWeight: 300 }}>
              대표: 이건용, 당현송
            </p>
            <p style={{ color: 'var(--stone)', fontSize: 12, fontWeight: 300 }}>
              문의: {BRAND.contact}
            </p>
          </div>

          {/* Right */}
          <div>
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--stone)',
                fontSize: 12,
                fontWeight: 300,
                textDecoration: 'underline',
                textUnderlineOffset: 3,
              }}
            >
              인스타그램: @foundloop.kr
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: 'rgba(255,255,255,0.08)',
            marginBottom: 24,
          }}
        />

        {/* Copyright */}
        <p
          style={{
            color: 'var(--stone)',
            fontSize: 12,
            fontWeight: 300,
            letterSpacing: 'var(--ls-label)',
            textAlign: 'center',
            opacity: 0.5,
          }}
        >
          &copy; 2026 ANYONECOMPANY., CO. LTD. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
