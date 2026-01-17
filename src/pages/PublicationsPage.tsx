import { useMemo } from 'react';
import { DetailPageLayout } from '@/components/templates/DetailPageLayout';
import { ContentSection } from '@/components/templates/ContentSection';
import { PublicationYearSection } from '@/components/organisms/PublicationYearSection';
import { Container } from '@/components/atoms/Container';
import type { Publication } from '@/types';

// Sample publications data - grouped by year
const publications: Publication[] = [
  // 2024
  {
    id: '1',
    title: 'Anthromes and forest carbon responses to global change',
    authors: 'JA Hogan, et al.',
    journal: 'Plants, People, Planet',
    year: 2024,
    doi: '10.1002/ppp3.10456',
    abstractUrl: '#',
  },
  {
    id: '2',
    title: 'Contrasting drought tolerance traits of woody plants is associated with mycorrhizal types at the global scale',
    authors: 'X Liu, et al.',
    journal: 'New Phytologist',
    year: 2024,
    doi: '10.1111/nph.19234',
    abstractUrl: '#',
  },
  {
    id: '3',
    title: 'Global patterns of nitrogen saturation in forests',
    authors: 'X Cen, et al.',
    journal: 'One Earth',
    year: 2024,
    doi: '10.1016/j.oneear.2024.01.001',
    abstractUrl: '#',
  },
  {
    id: '4',
    title: 'Carbon restoration potential on global land under water resource constraints',
    authors: 'S Peng, et al.',
    journal: 'Nature Water',
    year: 2024,
    doi: '10.1038/s44221-024-00001-0',
    abstractUrl: '#',
  },
  {
    id: '5',
    title: 'Future soil organic carbon stocks in China under climate change',
    authors: 'J Wu, et al.',
    journal: 'Cell Reports Sustainability',
    year: 2024,
    doi: '10.1016/j.crsus.2024.100001',
    abstractUrl: '#',
  },
  // 2023
  {
    id: '6',
    title: 'The role of mycorrhizal fungi in carbon and nutrient cycling',
    authors: 'C Terrer, et al.',
    journal: 'Nature Reviews Earth & Environment',
    year: 2023,
    doi: '10.1038/s43017-023-00451-2',
    abstractUrl: '#',
  },
  {
    id: '7',
    title: 'Global ecosystem carbon storage capacity',
    authors: 'Y Chen, et al.',
    journal: 'Science',
    year: 2023,
    doi: '10.1126/science.abq5678',
    abstractUrl: '#',
  },
  // 2022
  {
    id: '8',
    title: 'A global-scale expert assessment of drivers and risks associated with pollinator decline',
    authors: 'L Dicks, et al.',
    journal: 'Nature Ecology & Evolution',
    year: 2022,
    doi: '10.1038/s41559-022-01938-1',
    abstractUrl: '#',
  },
  // 2021
  {
    id: '9',
    title: 'A trade-off between plant and soil carbon storage under elevated CO2',
    authors: 'C Terrer, et al.',
    journal: 'Nature',
    year: 2021,
    doi: '10.1038/s41586-021-03306-8',
    abstractUrl: '#',
  },
  {
    id: '10',
    title: 'The global forest carbon budget',
    authors: 'NL Harris, et al.',
    journal: 'Nature Climate Change',
    year: 2021,
    doi: '10.1038/s41558-020-00976-6',
    abstractUrl: '#',
  },
];

export function PublicationsPage() {
  // Group publications by year
  const publicationsByYear = useMemo(() => {
    const grouped = publications.reduce((acc, pub) => {
      if (!acc[pub.year]) {
        acc[pub.year] = [];
      }
      acc[pub.year].push(pub);
      return acc;
    }, {} as Record<number, Publication[]>);

    // Sort years descending
    const sortedYears = Object.keys(grouped)
      .map(Number)
      .sort((a, b) => b - a);

    return sortedYears.map(year => ({
      year,
      publications: grouped[year],
    }));
  }, []);

  return (
    <DetailPageLayout
      title="Publications"
      subtitle="Terrer Lab | Climate + Ecology"
      heroImage="/images/terrerlab/publications-hero.jpg"
    >
      <div style={{ height: 60 }} />
      <ContentSection background="white" padding="lg">
        <Container maxWidth="none" className="max-w-[920px]">
          {publicationsByYear.map(({ year, publications: pubs }, groupIndex) => (
            <PublicationYearSection
              key={year}
              year={year}
              publications={pubs}
              style={groupIndex > 0 ? { marginTop: 30 } : undefined}
              baseIndex={groupIndex * 10}
            />
          ))}
          <div style={{ height: 60 }} />
        </Container>
      </ContentSection>
    </DetailPageLayout>
  );
}
