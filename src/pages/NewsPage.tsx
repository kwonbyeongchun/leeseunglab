import { DetailPageLayout } from '@/components/templates/DetailPageLayout';
import { GridSection } from '@/components/templates/GridSection';
import { ContentSection } from '@/components/templates/ContentSection';
import { NewsItem } from '@/components/organisms/NewsItem';
import { Paragraph } from '@/components/atoms/Paragraph';
import type { NewsItemData } from '@/types';

// News data from original terrerlab.com
const newsItems: NewsItemData[] = [
  {
    id: '1',
    title: 'Congrats graduates!',
    date: 'May 2024',
    excerpt: 'Congratulations to Sydney and Jenna for graduating from the MEng program.',
    image: 'https://cdn.prod.website-files.com/651cf640a849b854a8f6617b/6659e8989285cd66d79b98b7_IMG_0508.jpeg',
    href: '/news/congrats-graduates',
  },
  {
    id: '2',
    title: 'Evan participates in MCSC panel',
    date: 'November 2023',
    excerpt: 'Researcher Evan participated as a panelist in the "Biodiversity Metrics" session at the MIT Climate and Sustainability Consortium Annual Meeting.',
    image: 'https://cdn.prod.website-files.com/651cf640a849b854a8f6617b/65696211f04fb39f72d083ff_EVAN_TL.png',
    href: '/news/mcsc-panel',
  },
  {
    id: '3',
    title: 'New lab members join the team',
    date: 'September 2023',
    excerpt: 'We welcome new graduate students and researchers to the Terrer Lab.',
    image: '/images/terrerlab/65538c95d24377262e6a84ef_jason-goodman-Oalh2MojUuk-unsplash.jpg',
    href: '/news/new-members',
  },
  {
    id: '4',
    title: 'Publication in Nature',
    date: 'August 2023',
    excerpt: 'Our latest research on ecosystem carbon dynamics published in Nature.',
    image: '/images/terrerlab/653e68e5acd2104c5fe71745_1.jpg',
    href: '/news/nature-publication',
  },
];

export function NewsPage() {
  const featuredNews = newsItems[0];
  const otherNews = newsItems.slice(1);

  return (
    <DetailPageLayout
      title="News & Events"
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
