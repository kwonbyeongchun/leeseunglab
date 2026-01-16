import { DetailPageLayout } from '@/components/templates/DetailPageLayout';
import { GridSection } from '@/components/templates/GridSection';
import { ContentSection } from '@/components/templates/ContentSection';
import { NewsItem } from '@/components/organisms/NewsItem';
import { Paragraph } from '@/components/atoms/Paragraph';
import type { NewsItemData } from '@/types';

// Sample news data
const newsItems: NewsItemData[] = [
  {
    id: '1',
    title: 'New Nature Paper on Forest Carbon Storage',
    date: '2024-01-15',
    excerpt: 'Our latest research reveals new insights into how forests store carbon under changing climate conditions.',
    image: '/images/terrerlab/653e68e5acd2104c5fe71745_1.jpg',
    href: '/news/nature-paper-2024',
  },
  {
    id: '2',
    title: 'César Terrer Receives Research Award',
    date: '2024-01-10',
    excerpt: 'Dr. César Terrer has been recognized for his outstanding contributions to climate science research.',
    image: '/images/terrerlab/653e693d87d06c306e0cac92_2.jpg',
    href: '/news/research-award',
  },
  {
    id: '3',
    title: 'New PhD Students Join the Lab',
    date: '2023-12-20',
    excerpt: 'We welcome three new PhD students to the Terrer Lab this semester.',
    image: '/images/terrerlab/65538c95d24377262e6a84ef_jason-goodman-Oalh2MojUuk-unsplash.jpg',
    href: '/news/new-phd-students',
  },
  {
    id: '4',
    title: 'MIT Climate Symposium Presentation',
    date: '2023-12-05',
    excerpt: 'Lab members presented their research at the annual MIT Climate Symposium.',
    href: '/news/mit-symposium',
  },
  {
    id: '5',
    title: 'Collaboration with Stanford University',
    date: '2023-11-20',
    excerpt: 'New research collaboration announced with Stanford Earth Sciences.',
    href: '/news/stanford-collaboration',
  },
  {
    id: '6',
    title: 'Publication in Nature Climate Change',
    date: '2023-11-10',
    excerpt: 'Our analysis of nutrient limitations on global carbon uptake published.',
    image: '/images/terrerlab/653e693de9279c39048540c7_3.jpg',
    href: '/news/ncc-publication',
  },
];

export function NewsPage() {
  const featuredNews = newsItems[0];
  const otherNews = newsItems.slice(1);

  return (
    <DetailPageLayout
      title="News"
      subtitle="Stay updated with the latest news and announcements from the Terrer Lab."
    >
      {/* Featured News */}
      <ContentSection background="white" padding="md">
        <NewsItem
          {...featuredNews}
          variant="featured"
        />
      </ContentSection>

      {/* Other News */}
      <GridSection
        title="Recent Updates"
        columns={3}
        gap="md"
        background="light"
        padding="lg"
      >
        {otherNews.map((news, index) => (
          <NewsItem
            key={news.id}
            {...news}
            index={index}
          />
        ))}
      </GridSection>

      {/* Archive Notice */}
      <ContentSection background="white" padding="md">
        <div className="text-center">
          <Paragraph color="muted" size="sm">
            For older news items, please visit our archive or contact us.
          </Paragraph>
        </div>
      </ContentSection>
    </DetailPageLayout>
  );
}
