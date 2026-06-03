import Hero from '@/src/components/Hero';
import GradeCards from '@/src/components/GradeCards';
import PopularTextbooks from '@/src/components/PopularTextbooks';
import Roadmap from '@/src/components/Roadmap';
import ExamPrepBanner from '@/src/components/ExamPrepBanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <GradeCards />
      <PopularTextbooks />
      <Roadmap />
      <ExamPrepBanner />
    </>
  );
}
