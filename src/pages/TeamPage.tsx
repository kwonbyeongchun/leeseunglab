import { DetailPageLayout } from '@/components/templates/DetailPageLayout';
import { ContentSection } from '@/components/templates/ContentSection';
import { Container } from '@/components/atoms/Container';
import { TeamMemberCard } from '@/components/organisms/TeamMemberCard';
import { AlumniCard } from '@/components/organisms/AlumniCard';
import { SectionHeader } from '@/components/molecules/SectionHeader';
import { teamMembers, alumni } from '@/data/teamMembers';

export function TeamPage() {
  return (
    <DetailPageLayout
      title="Meet the Terrer Lab"
      heroImage="/images/terrerlab/people-hero.png"
      heroHeight={830}
    >
      {/* Team Section */}
      <ContentSection background="white" padding="lg" style={{ paddingTop: 100 }}>
        <Container maxWidth="none" className="max-w-[950px]">
          <SectionHeader title="Team" />
          <div>
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={member.id}
                {...member}
                index={index}
              />
            ))}
          </div>
        </Container>
      </ContentSection>

      {/* Alumni */}
      {alumni.length > 0 && (
        <ContentSection
          background="white"
          padding="lg"
          style={{ paddingTop: 120, paddingBottom: 240 }}
        >
          <Container maxWidth="none" className="max-w-[950px]">
            <SectionHeader title="Alumni" style={{ marginBottom: 40 }} />
            <div className="flex flex-wrap gap-6">
              {alumni.map((member, index) => (
                <AlumniCard
                  key={member.id}
                  {...member}
                  index={index}
                />
              ))}
            </div>
          </Container>
        </ContentSection>
      )}
    </DetailPageLayout>
  );
}
