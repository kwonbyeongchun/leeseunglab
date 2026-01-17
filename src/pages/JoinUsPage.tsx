import { motion } from 'framer-motion';
import { DetailPageLayout } from '@/components/templates/DetailPageLayout';
import { ContentSection } from '@/components/templates/ContentSection';
import { Container } from '@/components/atoms/Container';
import { Heading } from '@/components/atoms/Heading';
import { Link } from '@/components/atoms/Link';

export function JoinUsPage() {
  return (
    <DetailPageLayout
      title="Join Us"
      subtitle="Be a part of the Terrer Lab at MIT."
      heroImage="/images/terrerlab/hero-background.jpg"
    >
      <div style={{ height: 60 }} />

      {/* Call to Action */}
      <ContentSection background="white" padding="lg">
        <Container maxWidth="none" className="max-w-[920px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Heading level={2} className="text-[#00380A] mb-6" style={{ fontWeight: 700 }}>
              Interested in being part of this journey?
            </Heading>
            <p className="text-[16px] text-[#444] leading-relaxed">
              We welcome unsolicited inquiries for those interested in joining the lab. If you would like to explore opportunities, please reach out to Professor Cesar Terrer at{' '}
              <Link href="mailto:cterrer@mit.edu" className="text-[#00380A] underline hover:text-[#004d0e]">
                cterrer@mit.edu
              </Link>
              {' '}with your interests and qualifications.
            </p>
          </motion.div>
        </Container>
      </ContentSection>

      {/* Values Section */}
      <ContentSection background="light" padding="lg">
        <Container maxWidth="none" className="max-w-[920px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Heading level={2} className="text-[#00380A] mb-6" style={{ fontWeight: 700, letterSpacing: '0.05em' }}>
              VALUES
            </Heading>
            <p className="text-[18px] text-[#00380A] font-semibold mb-4">
              Inclusion in science starts by inclusion in the lab.
            </p>
            <p className="text-[16px] text-[#444] leading-relaxed">
              Climate change affects different regions of the world differently, and addressing this global challenge requires diverse perspectives and approaches. We believe that diversity in our team helps us better understand and tackle these complex issues.
            </p>
          </motion.div>
        </Container>
      </ContentSection>

      {/* Diversity & Inclusion */}
      <ContentSection background="white" padding="lg">
        <Container maxWidth="none" className="max-w-[920px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Heading level={3} className="text-[#00380A] mb-6" style={{ fontWeight: 600 }}>
              Diversity & Inclusion
            </Heading>
            <p className="text-[16px] text-[#444] leading-relaxed mb-6">
              We believe that diverse backgrounds generate better ideas and more innovative solutions. Our lab welcomes individuals of all identities regardless of gender identity or expression, sexual orientation, religion, ethnicity, age, neurodiversity, disability status, or citizenship.
            </p>
          </motion.div>

          {/* Team Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8"
          >
            <img
              src="/images/terrerlab/people-hero.png"
              alt="Terrer Lab Team"
              className="w-full rounded-lg"
            />
          </motion.div>
        </Container>
      </ContentSection>

      {/* Belonging Statement */}
      <ContentSection background="light" padding="lg">
        <Container maxWidth="none" className="max-w-[920px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-sm"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-[#00380A] text-xl">•</span>
                <p className="text-[16px] text-[#444]">
                  <span className="font-semibold text-[#00380A]">We strive to foster belonging and empowerment</span> in our research environment.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#00380A] text-xl">•</span>
                <p className="text-[16px] text-[#444]">
                  <span className="font-semibold text-[#00380A]">We value the visible and invisible qualities that make you who you are.</span>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#00380A] text-xl">•</span>
                <p className="text-[16px] text-[#444]">
                  <span className="font-semibold text-[#00380A]">We listen and engage with our diverse communities</span> to continuously improve.
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </ContentSection>
    </DetailPageLayout>
  );
}
