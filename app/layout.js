import localFont from 'next/font/local';
import './globals.css';

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
  weight: '45 920',
});

export const metadata = {
  title: 'FOUNDLOOP — 창업의 루프가 매주 돌아온다',
  description: '15,000원으로 팀원·피드백·상금을 한 번에. 3월 27일 LOOP 1 시작.',
  openGraph: {
    title: 'FOUNDLOOP — LOOP 1',
    description: '54시간 안에 아이디어를 세상에 꺼내는 바이브코딩 해커톤',
    images: ['/og-image.png'],
    locale: 'ko_KR',
    type: 'website',
  },
  keywords: ['해커톤', '바이브코딩', '예비창업가', '창업', 'FOUNDLOOP', '파운드루프'],
  themeColor: '#1A1A18',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body style={{ fontFamily: 'var(--font-pretendard), -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
