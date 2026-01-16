import { PageLayout } from '@/components/templates/PageLayout';
import { ContentSection } from '@/components/templates/ContentSection';
import { GridSection } from '@/components/templates/GridSection';
import { LandingHero } from '@/components/organisms/LandingHero';
import { AboutContent } from '@/components/organisms/AboutContent';
import { ResearchAccordion } from '@/components/organisms/ResearchAccordion';
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

      {/* About Section - Lab Introduction */}
      <ContentSection
        id="about"
        background="white"
        padding="xl"
      >
        <AboutContent
          image={featuredMember.image}
          imageAlt={featuredMember.name}
          title="Terrer Lab"
          description="The focus of the Terrer Lab is terrestrial ecosystem ecology. We study how climate change and anthropogenic activities affect ecosystems, and, conversely, how ecosystem dynamics modulate climate change. We synthesize large datasets of field observations and remote sensing data using meta-analysis, machine learning, and other statistical methods to better understand the global functioning of terrestrial ecosystems."
        />
      </ContentSection>

      {/* Research Themes Section */}
      <ContentSection
        id="research"
        background="light"
        padding="xl"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center font-lato text-3xl font-bold text-[#1a1a1a] md:text-4xl">
            Research Themes
          </h2>
          <p className="mb-8 text-center font-open-sans text-lg text-gray-600">
            Our core research areas focus on understanding and predicting the terrestrial carbon cycle
          </p>
          <div className="divide-y divide-gray-200 border-t border-gray-200">
            {researchThemes.map((theme, index) => (
              <ResearchAccordion
                key={theme.id}
                {...theme}
                index={index}
              />
            ))}
          </div>
        </div>
      </ContentSection>

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
