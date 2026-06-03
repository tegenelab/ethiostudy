import Hero from '@/src/components/Hero';
import GradeCards from '@/src/components/GradeCards';
import PopularTextbooks from '@/src/components/PopularTextbooks';
import Roadmap from '@/src/components/Roadmap';
import ExamPrepBanner from '@/src/components/ExamPrepBanner';

export const metadata = {
  title: 'EthioStudy - Free Ethiopian Study Materials & Textbooks',
  description: 'Download free Ethiopian textbooks, past exams, and study guides for Grades 8-12. PDF books for Natural and Social streams.',
  alternates: {
    canonical: 'https://ethiostudy.vercel.app',
  },
  openGraph: {
    title: 'EthioStudy - Free Ethiopian Study Materials & Textbooks',
    description: 'Download free Ethiopian textbooks, past exams, and study guides for Grades 8-12.',
    url: 'https://ethiostudy.vercel.app',
  },
  twitter: {
    title: 'EthioStudy - Free Ethiopian Study Materials & Textbooks',
    description: 'Download free Ethiopian textbooks, past exams, and study guides for Grades 8-12.',
  },
};

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
