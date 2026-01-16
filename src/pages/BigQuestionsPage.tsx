import { DetailPageLayout } from '@/components/templates/DetailPageLayout';
import { GridSection } from '@/components/templates/GridSection';
import { ContentSection } from '@/components/templates/ContentSection';
import { BigQuestionCard } from '@/components/organisms/BigQuestionCard';
import { Paragraph } from '@/components/atoms/Paragraph';
import { bigQuestions } from '@/data/bigQuestions';

export function BigQuestionsPage() {
  return (
    <DetailPageLayout
      title="Big Questions"
      subtitle="The fundamental questions driving our research into terrestrial carbon dynamics."
    >
      {/* Introduction */}
      <ContentSection background="white" padding="md">
        <div className="max-w-3xl">
          <Paragraph color="light" size="lg" className="leading-relaxed">
            Our research is driven by fundamental questions about how terrestrial ecosystems
            function and respond to global change. These &quot;big questions&quot; guide our
            investigations into carbon storage, nutrient cycling, and climate feedbacks.
          </Paragraph>
        </div>
      </ContentSection>

      {/* Questions Grid */}
      <GridSection
        columns={2}
        gap="lg"
        background="light"
        padding="xl"
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
