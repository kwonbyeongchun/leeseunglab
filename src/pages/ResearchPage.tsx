import { DetailPageLayout } from '@/components/templates/DetailPageLayout';
import { GridSection } from '@/components/templates/GridSection';
import { ContentSection } from '@/components/templates/ContentSection';
import { ResearchThemeCard } from '@/components/organisms/ResearchThemeCard';
import { BigQuestionCard } from '@/components/organisms/BigQuestionCard';
import { Paragraph } from '@/components/atoms/Paragraph';
import { researchThemes } from '@/data/researchThemes';
import { bigQuestions } from '@/data/bigQuestions';

export function ResearchPage() {
  return (
    <DetailPageLayout
      title="Research"
      subtitle="Our research focuses on understanding terrestrial carbon dynamics and developing natural climate solutions."
    >
      {/* Introduction */}
      <ContentSection background="white" padding="md">
        <div className="max-w-3xl">
          <Paragraph color="light" size="lg" className="leading-relaxed">
            The Terrer Lab advances knowledge about the ecological dynamics impacting
            terrestrial carbon storage in a climate change context. We combine experimental
            data synthesis with modeling approaches to reduce key uncertainties about the
            terrestrial carbon sink.
          </Paragraph>
        </div>
      </ContentSection>

      {/* Research Themes */}
      <GridSection
        title="Research Themes"
        columns={2}
        gap="lg"
        background="light"
        padding="lg"
      >
        {researchThemes.map((theme, index) => (
          <ResearchThemeCard
            key={theme.id}
            {...theme}
            index={index}
          />
        ))}
      </GridSection>

      {/* Big Questions */}
      <GridSection
        title="Big Questions"
        subtitle="The fundamental questions driving our research"
        columns={2}
        gap="md"
        background="white"
        padding="lg"
      >
        {bigQuestions.map((question, index) => (
          <BigQuestionCard
            key={question.id}
            {...question}
            index={index}
          />
        ))}
      </GridSection>
    </DetailPageLayout>
  );
}
