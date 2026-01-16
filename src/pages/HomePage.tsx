import { PageLayout } from '@/components/templates/PageLayout';
import { ContentSection } from '@/components/templates/ContentSection';
import { GridSection } from '@/components/templates/GridSection';
import { LandingHero } from '@/components/organisms/LandingHero';
import { AboutContent } from '@/components/organisms/AboutContent';
import { ResearchThemeCard } from '@/components/organisms/ResearchThemeCard';
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
  // Get first team member (César Terrer) as featured
  const featuredMember = teamMembers[0];
  const displayedQuestions = bigQuestions.slice(0, 6);

  return (
    <PageLayout>
      {/* Hero Section */}
      <LandingHero />

      {/* About Section */}
      <ContentSection
        id="about"
        background="white"
        padding="xl"
      >
        <AboutContent
          image={featuredMember.image}
          imageAlt={featuredMember.name}
          title={`About ${featuredMember.name.split(' ')[0]}`}
          description={featuredMember.bio}
        />
      </ContentSection>

      {/* Research Themes Section */}
      <GridSection
        id="research"
        title="Research Themes"
        subtitle="Our core research areas focus on understanding and predicting the terrestrial carbon cycle"
        columns={2}
        gap="lg"
        background="light"
        padding="xl"
      >
        {researchThemes.map((theme, index) => (
          <ResearchThemeCard
            key={theme.id}
            {...theme}
            index={index}
          />
        ))}
      </GridSection>

      {/* Big Questions Section */}
      <GridSection
        id="big-questions"
        title="Big Questions"
        subtitle="The fundamental questions driving our research"
        columns={3}
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

      {/* View All Questions Link */}
      <ContentSection background="white" padding="sm">
        <div className="text-center">
          <Link
            href="/big-questions"
            variant="primary"
            className="inline-flex items-center gap-2 text-lg font-medium"
          >
            View all big questions
            <span>→</span>
          </Link>
        </div>
      </ContentSection>

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
