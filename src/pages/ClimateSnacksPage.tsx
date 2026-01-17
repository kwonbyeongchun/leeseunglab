import { motion } from 'framer-motion';
import { DetailPageLayout } from '@/components/templates/DetailPageLayout';
import { ContentSection } from '@/components/templates/ContentSection';
import { Paragraph } from '@/components/atoms/Paragraph';
import { Spacer } from '@/components/atoms/Spacer';
import { climateSnacksSessions } from '@/data/climateSnacks';

export function ClimateSnacksPage() {
  return (
    <DetailPageLayout
      title="Climate Snacks"
      subtitle="Accessible conversations about climate change"
    >
      {/* Introduction */}
      <ContentSection background="white" padding="lg">
        <div className="max-w-3xl mx-auto text-center">
          <Paragraph size="lg" color="text">
            Climate Snacks are designed to engage diverse audiences including curious non-academics,
            academics from other disciplines, and specialists. Each session features leading researchers
            sharing their insights on pressing climate topics.
          </Paragraph>
        </div>
      </ContentSection>

      <Spacer size="xl" />

      {/* Sessions List */}
      <ContentSection background="light" padding="xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-8">Previous Sessions</h2>

          <div className="space-y-6">
            {climateSnacksSessions.map((session, index) => (
              <motion.div
                key={session.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#1a1a1a] mb-1">
                      {session.speaker}
                      {session.affiliation && (
                        <span className="text-gray-500 font-normal text-base ml-2">
                          ({session.affiliation})
                        </span>
                      )}
                    </h3>
                    <h4 className="text-lg text-[#2B5329] font-medium mb-3">
                      {session.topic}
                    </h4>
                    <Paragraph color="muted" size="md">
                      {session.description}
                    </Paragraph>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ContentSection>

      <Spacer size="xl" />

      {/* Footer Note */}
      <ContentSection background="white" padding="md">
        <div className="text-center">
          <Paragraph color="muted" size="sm">
            Stay tuned for upcoming Climate Snacks sessions. Follow us for announcements.
          </Paragraph>
        </div>
      </ContentSection>
    </DetailPageLayout>
  );
}
