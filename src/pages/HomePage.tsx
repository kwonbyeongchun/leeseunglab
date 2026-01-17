import { PageLayout } from '@/components/templates/PageLayout';
import { ContentSection } from '@/components/templates/ContentSection';
import { GridSection } from '@/components/templates/GridSection';
import { LandingHero } from '@/components/organisms/LandingHero';
import { AboutContent } from '@/components/organisms/AboutContent';
import { ResearchCard } from '@/components/organisms/ResearchCard';
import { BigQuestionCard } from '@/components/organisms/BigQuestionCard';
import { TeamMemberCard } from '@/components/organisms/TeamMemberCard';
import { AffiliationLogo } from '@/components/organisms/AffiliationLogo';
import { Spacer } from '@/components/atoms/Spacer';
import { Link } from '@/components/atoms/Link';
import { researchThemes } from '@/data/researchThemes';
import { bigQuestions } from '@/data/bigQuestions';
import { teamMembers } from '@/data/teamMembers';
import { affiliations } from '@/data/affiliations';

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
      <GridSection
        id="big-questions"
        title="Our Big Questions"
        subtitle="RESEARCH INTERESTS"
        columns={4}
        gap="md"
        background="white"
        padding="xl"
      >
        {displayedQuestions.map((question, index) => (
          <BigQuestionCard
            key={question.id}
            {...question}
            index={index}
          />
        ))}
      </GridSection>


      {/* Team Preview Section */}
      <GridSection
        id="team"
        title="Our Team"
        subtitle="Meet the researchers behind our work"
        columns={4}
        gap="md"
        background="light"
        padding="xl"
      >
        {teamMembers.slice(0, 8).map((member, index) => (
          <TeamMemberCard
            key={member.id}
            {...member}
            index={index}
            variant="compact"
          />
        ))}
      </GridSection>

      {/* View All Team Link */}
      <ContentSection background="light" padding="sm">
        <div className="text-center">
          <Link
            href="/team"
            variant="primary"
            className="inline-flex items-center gap-2 text-lg font-medium"
          >
            Meet the full team
            <span>→</span>
          </Link>
        </div>
      </ContentSection>

      <Spacer size="xl" />

      {/* Affiliations Section */}
      <ContentSection
        background="white"
        padding="lg"
      >
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {affiliations.map((affiliation, index) => (
            <AffiliationLogo
              key={affiliation.id}
              {...affiliation}
              index={index}
            />
          ))}
        </div>
      </ContentSection>
    </PageLayout>
  );
}
