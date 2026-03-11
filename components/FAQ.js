'use client';

import { useState } from 'react';

const faqs = [
  {
    q: '개발 못 해도 루프에 올라탈 수 있나요?',
    a: '됩니다. 바이브코딩 툴(Claude, Cursor, v0, Bolt 등)이면 충분합니다. 기획자, 디자이너, 마케터 모두 환영합니다.',
  },
  {
    q: '개인으로만 신청 가능한가요?',
    a: '네, 모든 참가자는 개인 단위로 신청합니다. 킥오프 시간에 아이디어 피칭 후 역할 기반으로 팀을 매칭합니다. 신청자의 절반 이상이 혼자 옵니다.',
  },
  {
    q: '아이디어가 없어도 참가할 수 있나요?',
    a: '됩니다. 다른 참가자의 아이디어에 합류하면 됩니다. 팀의 실행 역할(개발, 디자인, 마케팅)로 참여 가능합니다.',
  },
  {
    q: '15,000원 송금 후 확정은 어떻게 되나요?',
    a: '신청 폼 제출 후, 안내된 계좌로 입금하시면 됩니다. 입금 확인 후 24시간 이내 카카오톡으로 연락드립니다. 입금자명을 신청 이름과 동일하게 해주세요.',
  },
  {
    q: '환불이 가능한가요?',
    a: '3월 25일(수) 자정 이전 취소 요청 시 전액 환불됩니다. 이후에는 상금 풀 구성 관계상 환불이 어렵습니다.',
  },
  {
    q: '대회가 오프라인인가요?',
    a: '전 일정 온라인입니다. Zoom + Discord로 진행됩니다. 어디서든 참여할 수 있습니다.',
  },
];

function FAQItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        borderBottom: '1px solid var(--border)',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          padding: '20px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          border: 'none',
          background: 'none',
          textAlign: 'left',
        }}
      >
        <span
          style={{
            fontSize: 16,
            fontWeight: 500,
            color: 'var(--ink)',
            letterSpacing: '-0.01em',
            flex: 1,
            paddingRight: 16,
          }}
        >
          {item.q}
        </span>
        <span
          style={{
            color: 'var(--yolk-orange)',
            fontSize: 20,
            fontWeight: 300,
            transition: 'transform 0.3s',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            flexShrink: 0,
          }}
        >
          &#x25BE;
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? 200 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        <p
          style={{
            fontSize: 14,
            fontWeight: 300,
            color: 'var(--stone)',
            lineHeight: 1.7,
            letterSpacing: '-0.01em',
            paddingBottom: 20,
          }}
        >
          {item.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section
      style={{
        background: 'var(--shell-white)',
        padding: '80px 24px',
      }}
    >
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <h2
          className="text-heading"
          style={{
            color: 'var(--ink)',
            marginBottom: 40,
          }}
        >
          자주 묻는 질문
        </h2>

        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} item={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
