import { DetailPageLayout } from '@/components/templates/DetailPageLayout';
import { ContentSection } from '@/components/templates/ContentSection';
import { Container } from '@/components/atoms/Container';
import { SectionHeader } from '@/components/molecules/SectionHeader';
import { TextBlock } from '@/components/atoms/TextBlock';
import { ClimateSnacksCard } from '@/components/molecules/ClimateSnacksCard';
import { climateSnacksSessions } from '@/data/climateSnacks';

export function ClimateSnacksPage() {
  return (
    <DetailPageLayout
      title="Climate Snacks"
      subtitle="Climate Snacks are accessible conversations about climate change"
    >
      {/* Section Header */}
      <ContentSection background="white" padding="lg" style={{ paddingTop: 100, paddingBottom: 0 }}>
        <Container maxWidth="none" className="max-w-[1000px]">
          <SectionHeader title="Climate Snacks" style={{ marginBottom: 36 }} />
          <TextBlock>
            Our goal is to attract a wide audience, including curious non-academics, academics from other disciplines, and specialists. You can see the previous sessions recordings here:
          </TextBlock>
        </Container>
      </ContentSection>

      {/* Sessions Card List */}
      <ContentSection background="white" padding="lg" style={{ paddingTop: 60, paddingBottom: 120 }}>
        <Container maxWidth="none" className="max-w-[1100px]">
          <div className="flex flex-col items-center" style={{ gap: 52 }}>
            {climateSnacksSessions.map((session, index) => (
              <ClimateSnacksCard
                key={session.id}
                {...session}
                index={index}
              />
            ))}
          </div>
        </Container>
      </ContentSection>
    </DetailPageLayout>
  );
}
