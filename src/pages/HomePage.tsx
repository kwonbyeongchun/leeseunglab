import { PageLayout } from '@/components/templates/PageLayout';
import { ContentSection } from '@/components/templates/ContentSection';
import { GridSection } from '@/components/templates/GridSection';
import { LandingHero } from '@/components/organisms/LandingHero';
import { AboutContent } from '@/components/organisms/AboutContent';
import { ResearchCard } from '@/components/organisms/ResearchCard';
import { DecoratedSectionHeader } from '@/components/organisms/DecoratedSectionHeader';
import { BigQuestionCard } from '@/components/organisms/BigQuestionCard';
import { AffiliationsSection } from '@/components/organisms/AffiliationsSection';
import { Spacer } from '@/components/atoms/Spacer';
import { researchThemes } from '@/data/researchThemes';
import { bigQuestions } from '@/data/bigQuestions';

export function HomePage() {
  // Show all 8 questions in a 4-column grid (like original site)
  const displayedQuestions = bigQuestions;

  return (
    <PageLayout>
      {/* Hero Section */}
      <LandingHero />

      <Spacer size="4xl" />

      {/* About Section - Lab Introduction */}
      <ContentSection
        id="about"
        background="white"
        padding="xl"
      >
        <AboutContent
          image="/images/terrerlab/test-homepage.jpg"
          imageAlt="Terrer Lab"
          title="Terrer Lab"
          description="The focus of the Terrer Lab is terrestrial ecosystem ecology. We study how climate change and anthropogenic activities affect ecosystems, and, conversely, how ecosystem dynamics modulate climate change. We synthesize large datasets of field observations and remote sensing data using meta-analysis, machine learning, and other statistical methods to better understand the global functioning of terrestrial ecosystems."
        />
      </ContentSection>

      <Spacer size="4xl" />

      {/* Research Themes Section */}
      <GridSection
        id="research"
        title="Research Themes"
        subtitle="OUR INTERSECTED STUDIES"
        columns={2}
        customGap={40}
        background="white"
        padding="xl"
        containerMaxWidth={1153}
      >
        {researchThemes.map((theme, index) => (
          <ResearchCard
            key={theme.id}
            id={theme.id}
            title={theme.title}
            description={theme.description}
            backgroundImage={theme.backgroundImage || '/images/terrerlab/hero-background.jpg'}
            href={theme.href}
            index={index}
          />
        ))}
      </GridSection>


      <Spacer size="4xl" />

      {/* Big Questions Section */}
      <ContentSection
        id="big-questions"
        background="white"
        padding="xl"
      >
        <DecoratedSectionHeader
          title="Our Big Questions"
          subtitle="RESEARCH INTERESTS"
        />
        <Spacer size="2xl" />

        {/* First row - 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {displayedQuestions.slice(0, 4).map((question, index) => (
            <BigQuestionCard
              key={question.id}
              {...question}
              index={index}
            />
          ))}
        </div>

        {/* Divider lines */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto" style={{ marginTop: 20, marginBottom: 20 }}>
          <div className="w-full h-[1px] bg-[#84889A]" />
          <div className="w-full h-[1px] bg-[#84889A]" />
          <div className="w-full h-[1px] bg-[#84889A]" />
          <div className="w-full h-[1px] bg-[#84889A]" />
        </div>

        {/* Second row - 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {displayedQuestions.slice(4, 8).map((question, index) => (
            <BigQuestionCard
              key={question.id}
              {...question}
              index={index + 4}
            />
          ))}
        </div>

        {/* Bottom divider lines */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto" style={{ marginTop: 20 }}>
          <div className="w-full h-[1px] bg-[#84889A]" />
          <div className="w-full h-[1px] bg-[#84889A]" />
          <div className="w-full h-[1px] bg-[#84889A]" />
          <div className="w-full h-[1px] bg-[#84889A]" />
        </div>
      </ContentSection>

      {/* Affiliations Section */}
      <AffiliationsSection />
    </PageLayout>
  );
}
