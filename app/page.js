import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PrizeAnchor from '@/components/PrizeAnchor';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import Schedule from '@/components/Schedule';
import SocialProof from '@/components/SocialProof';
import ResultsSection from '@/components/ResultsSection';
import JudgingCriteria from '@/components/JudgingCriteria';
import FAQ from '@/components/FAQ';
import ApplySection from '@/components/ApplySection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PrizeAnchor />
      <ProblemSection />
      <SolutionSection />
      <Schedule />
      <SocialProof />
      <ResultsSection />
      <JudgingCriteria />
      <FAQ />
      <ApplySection />
      <Footer />
    </>
  );
}
