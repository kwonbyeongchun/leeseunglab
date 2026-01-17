import { motion } from 'framer-motion';
import { DetailPageLayout } from '@/components/templates/DetailPageLayout';
import { ContentSection } from '@/components/templates/ContentSection';
import { Container } from '@/components/atoms/Container';
import { TextBlock } from '@/components/atoms/TextBlock';
import { JoinUsCallToAction } from '@/components/molecules/JoinUsCallToAction';
import { SectionHeader } from '@/components/molecules/SectionHeader';
import { BelongingStatement } from '@/components/molecules/BelongingStatement';

export function JoinUsPage() {
  return (
    <DetailPageLayout
      title="Join Us"
      subtitle="Be a part of the Terrer Lab at MIT"
      heroImage="/images/terrerlab/joinus-hero.jpg"
      heroHeight={830}
    >
      <div style={{ height: 60 }} />

      {/* Call to Action */}
      <ContentSection background="white" padding="lg" style={{ paddingBottom: 76 }}>
        <Container maxWidth="none" className="max-w-[840px]">
          <JoinUsCallToAction />
        </Container>
      </ContentSection>

      {/* Values Section */}
      <ContentSection background="light" padding="lg" style={{ paddingBottom: 76 }}>
        <Container maxWidth="none" className="max-w-[840px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeader
              title="VALUES"
              headingClassName="text-[#00380A]"
              headingStyle={{ fontWeight: 700, letterSpacing: '0.05em', marginBottom: 20 }}
              style={{ marginBottom: 36 }}
            />
            <TextBlock>
              Inclusion in science starts by inclusion in the lab.
            </TextBlock>
            <br />
            <TextBlock style={{ marginBottom: 25 }}>
              Climate change is a global challenge, but its impacts and solutions are different around the world. We believe diversity is a key factor to provide solutions to tackle this challenge worldwide. Thus, the Terrer Lab embrace diversity as a necessity and an advantage for our common goal.
            </TextBlock>
            <img
              src="/leeseunglab/images/terrerlab/valuemit.png"
              alt="MIT Values"
              className="w-full rounded-lg"
            />
          </motion.div>
        </Container>
      </ContentSection>

      {/* Belonging Statement */}
      <ContentSection background="light" padding="lg" style={{ paddingBottom: 120 }}>
        <Container maxWidth="none" className="max-w-[840px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <BelongingStatement />
          </motion.div>
        </Container>
      </ContentSection>
    </DetailPageLayout>
  );
}
