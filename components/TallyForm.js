'use client';

import { useEffect } from 'react';
import { BRAND } from '@/lib/constants';

export default function TallyForm() {
  useEffect(() => {
    const existing = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
    if (!existing) {
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div style={{ maxWidth: 600, margin: '0 auto' }}>
      <iframe
        data-tally-src={`${BRAND.tallyFormUrl}?transparentBackground=1`}
        width="100%"
        height="auto"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="FOUNDLOOP LOOP 1 참가 신청"
        style={{ border: 'none', minHeight: 520 }}
      />
    </div>
  );
}
