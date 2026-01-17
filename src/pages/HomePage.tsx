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
import { useLanguage } from '@/contexts/LanguageContext';

export function HomePage() {
  const { t } = useLanguage();

  // 번역된 연구 주제 데이터
  const translatedResearchThemes = researchThemes.map((theme) => ({
    ...theme,
    title: t(`research.${theme.id === 'terrestrial-carbon' ? 'terrestrialCarbon' : 'naturalClimate'}.title`),
    description: t(`research.${theme.id === 'terrestrial-carbon' ? 'terrestrialCarbon' : 'naturalClimate'}.description`),
  }));

  // 번역된 Big Questions 데이터
  const translatedQuestions = bigQuestions.map((q, index) => ({
    ...q,
    question: t(`home.bigQuestions.q${index + 1}`),
  }));

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
          title={t('home.about.title')}
          description={t('home.about.description')}
        />
      </ContentSection>

      <Spacer size="4xl" />

      {/* Research Themes Section */}
      <GridSection
        id="research"
        title={t('home.research.title')}
        subtitle={t('home.research.subtitle')}
        columns={2}
        customGap={40}
        background="white"
        padding="xl"
        containerMaxWidth={1153}
      >
        {translatedResearchThemes.map((theme, index) => (
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
        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-6xl">
            <DecoratedSectionHeader
              title={t('home.bigQuestions.title')}
              subtitle={t('home.bigQuestions.subtitle')}
            />
          </div>
          <Spacer size="2xl" />

          {/* First row - 4 cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl">
            {translatedQuestions.slice(0, 4).map((question, index) => (
              <BigQuestionCard
                key={question.id}
                {...question}
                index={index}
              />
            ))}
          </div>

          {/* Divider lines */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl" style={{ marginTop: 20, marginBottom: 20 }}>
            <div className="w-full h-[1px] bg-[#84889A]" />
            <div className="w-full h-[1px] bg-[#84889A]" />
            <div className="w-full h-[1px] bg-[#84889A]" />
            <div className="w-full h-[1px] bg-[#84889A]" />
          </div>

          {/* Second row - 4 cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl">
            {translatedQuestions.slice(4, 8).map((question, index) => (
              <BigQuestionCard
                key={question.id}
                {...question}
                index={index + 4}
              />
            ))}
          </div>

          {/* Bottom divider lines */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl" style={{ marginTop: 20 }}>
            <div className="w-full h-[1px] bg-[#84889A]" />
            <div className="w-full h-[1px] bg-[#84889A]" />
            <div className="w-full h-[1px] bg-[#84889A]" />
            <div className="w-full h-[1px] bg-[#84889A]" />
          </div>
        </div>
      </ContentSection>

      {/* Affiliations Section */}
      <AffiliationsSection />
    </PageLayout>
  );
}
