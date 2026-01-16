import { DetailPageLayout } from '@/components/templates/DetailPageLayout';
import { GridSection } from '@/components/templates/GridSection';
import { ContentSection } from '@/components/templates/ContentSection';
import { TeamMemberCard } from '@/components/organisms/TeamMemberCard';
import { AlumniCard } from '@/components/organisms/AlumniCard';
import { Heading } from '@/components/atoms/Heading';
import { teamMembers, alumni } from '@/data/teamMembers';

export function TeamPage() {
  // Separate PI from other team members
  const pi = teamMembers[0]; // César Terrer
  const otherMembers = teamMembers.slice(1);

  // Group other members by position
  const postdocs = otherMembers.filter(m =>
    m.position.toLowerCase().includes('postdoc') ||
    m.position.toLowerCase().includes('research scientist')
  );
  const phdStudents = otherMembers.filter(m =>
    m.position.toLowerCase().includes('phd')
  );

  return (
    <DetailPageLayout
      title="Our Team"
      subtitle="Meet the researchers advancing our understanding of terrestrial carbon ecology."
    >
      {/* Principal Investigator */}
      <ContentSection background="white" padding="lg">
        <Heading level={2} color="text" className="text-center mb-8">
          Principal Investigator
        </Heading>
        <div className="max-w-4xl mx-auto">
          <TeamMemberCard
            {...pi}
            variant="featured"
          />
        </div>
      </ContentSection>

      {/* Postdocs & Research Scientists */}
      {postdocs.length > 0 && (
        <GridSection
          title="Postdocs & Research Scientists"
          columns={3}
          gap="md"
          background="light"
          padding="lg"
        >
          {postdocs.map((member, index) => (
            <TeamMemberCard
              key={member.id}
              {...member}
              index={index}
            />
          ))}
        </GridSection>
      )}

      {/* PhD Students */}
      {phdStudents.length > 0 && (
        <GridSection
          title="PhD Students"
          columns={3}
          gap="md"
          background="white"
          padding="lg"
        >
          {phdStudents.map((member, index) => (
            <TeamMemberCard
              key={member.id}
              {...member}
              index={index}
            />
          ))}
        </GridSection>
      )}

      {/* Alumni */}
      {alumni.length > 0 && (
        <ContentSection
          title="Alumni"
          background="light"
          padding="lg"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {alumni.map((member, index) => (
              <AlumniCard
                key={member.id}
                {...member}
                index={index}
              />
            ))}
          </div>
        </ContentSection>
      )}
    </DetailPageLayout>
  );
}
