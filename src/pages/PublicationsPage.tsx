import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { DetailPageLayout } from '@/components/templates/DetailPageLayout';
import { ContentSection } from '@/components/templates/ContentSection';
import { PublicationItem } from '@/components/organisms/PublicationItem';
import { Button } from '@/components/atoms/Button';
import { Heading } from '@/components/atoms/Heading';
import { Spacer } from '@/components/atoms/Spacer';
import type { Publication } from '@/types';

// Sample publications data
const publications: Publication[] = [
  {
    id: '1',
    title: 'A trade-off between plant and soil carbon storage under elevated CO2',
    authors: 'Terrer C, Jackson RB, Prentice IC, et al.',
    journal: 'Nature',
    year: 2021,
    doi: '10.1038/s41586-021-03306-8',
    pdfUrl: '#',
  },
  {
    id: '2',
    title: 'Nitrogen and phosphorus constrain the CO2 fertilization of global plant biomass',
    authors: 'Terrer C, Jackson RB, Prentice IC, et al.',
    journal: 'Nature Climate Change',
    year: 2019,
    doi: '10.1038/s41558-019-0545-2',
    pdfUrl: '#',
  },
  {
    id: '3',
    title: 'Ecosystem responses to elevated CO2 governed by plant-soil interactions and the cost of nitrogen acquisition',
    authors: 'Terrer C, Vicca S, Hungate BA, et al.',
    journal: 'New Phytologist',
    year: 2016,
    doi: '10.1111/nph.13872',
    pdfUrl: '#',
  },
  {
    id: '4',
    title: 'The global forest carbon budget',
    authors: 'Harris NL, Gibbs DA, Baccini A, Birdsey RA, et al.',
    journal: 'Nature Climate Change',
    year: 2021,
    doi: '10.1038/s41558-020-00976-6',
    pdfUrl: '#',
  },
  {
    id: '5',
    title: 'Carbon storage potential of terrestrial ecosystems',
    authors: 'Cook-Patton SC, Leavitt SM, Gibbs D, et al.',
    journal: 'Nature',
    year: 2020,
    doi: '10.1038/s41586-020-2686-x',
    pdfUrl: '#',
  },
];

export function PublicationsPage() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Get unique years
  const years = useMemo(() => {
    const uniqueYears = [...new Set(publications.map(p => p.year))];
    return uniqueYears.sort((a, b) => b - a);
  }, []);

  // Filter publications
  const filteredPublications = useMemo(() => {
    let filtered = selectedYear
      ? publications.filter(p => p.year === selectedYear)
      : publications;

    if (!showAll && !selectedYear) {
      filtered = filtered.slice(0, 10);
    }

    return filtered;
  }, [selectedYear, showAll]);

  return (
    <DetailPageLayout
      title="Publications"
      subtitle="Terrer Lab | Climate + Ecology"
      heroImage="/images/terrerlab/publications-hero.jpg"
    >
      {/* Year Filter */}
      <ContentSection background="white" padding="md">
        <div className="flex flex-wrap items-center gap-2">
          <Button
            variant={selectedYear === null ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setSelectedYear(null)}
          >
            All Years
          </Button>
          {years.map(year => (
            <Button
              key={year}
              variant={selectedYear === year ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </Button>
          ))}
        </div>
      </ContentSection>

      {/* Publications List */}
      <ContentSection background="light" padding="lg">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-lg shadow-md p-6 md:p-8"
        >
          <Heading level={3} color="text" className="mb-6">
            {selectedYear
              ? `Publications from ${selectedYear}`
              : 'Recent Publications'}
          </Heading>

          <div className="divide-y divide-[var(--color-border)]">
            {filteredPublications.map((publication, index) => (
              <PublicationItem
                key={publication.id}
                {...publication}
                index={index}
              />
            ))}
          </div>

          {!selectedYear && publications.length > 10 && (
            <>
              <Spacer size="lg" />
              <div className="text-center">
                <Button
                  variant="outline"
                  onClick={() => setShowAll(!showAll)}
                >
                  {showAll ? 'Show Less' : `Show All ${publications.length} Publications`}
                </Button>
              </div>
            </>
          )}
        </motion.div>
      </ContentSection>

      {/* Google Scholar Link */}
      <ContentSection background="white" padding="md">
        <div className="text-center">
          <Button
            variant="outline"
            as="a"
            href="https://scholar.google.com/citations?user=HKJBpMAAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all on Google Scholar →
          </Button>
        </div>
      </ContentSection>
    </DetailPageLayout>
  );
}
