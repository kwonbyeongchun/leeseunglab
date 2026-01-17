import { DetailPageLayout } from '@/components/templates/DetailPageLayout';
import { ContentSection } from '@/components/templates/ContentSection';
import { Container } from '@/components/atoms/Container';
import { DecoratedSectionHeader } from '@/components/organisms/DecoratedSectionHeader';
import { NewsCard } from '@/components/molecules/NewsCard';
import { useLanguage } from '@/contexts/LanguageContext';
import type { NewsItemData } from '@/types';

// News data from original terrerlab.com
const newsItems: NewsItemData[] = [
  {
    id: '1',
    title: 'Congrats graduates!',
    date: 'May 2024',
    excerpt: 'Congratulations to Sydney and Jenna on graduating from the MEng program! Sydney will start as a water resources engineer at Weston & Sampson in the Boston area. Jenna will travel to Padua, Italy, on a Fulbright Scholarship to study wetland carbon storage.',
    image: 'https://cdn.prod.website-files.com/651cf640a849b854a8f6617b/6659e8989285cd66d79b98b7_IMG_0508-p-1080.jpeg',
    href: '/news/congrats-graduates',
  },
  {
    id: '2',
    title: 'Evan participates in MCSC panel',
    date: 'November 2023',
    excerpt: 'Evan served as a panelist at MIT Climate and Sustainability Consortium\'s annual meeting, discussing "Incorporating biodiversity into corporate goal setting through metrics, monitoring, and assessment" with corporate sustainability officers and researchers.',
    image: 'https://cdn.prod.website-files.com/651cf640a849b854a8f6617b/65696211f04fb39f72d083ff_EVAN_TL.png',
    href: '/news/mcsc-panel',
  },
];

export function NewsPage() {
  const { t } = useLanguage();

  return (
    <DetailPageLayout
      title={t('news.title')}
      subtitle={t('news.subtitle')}
      heroImage="/leeseunglab/images/terrerlab/hero-background.jpg"
      heroHeight={830}
    >
      {/* Latest News Header */}
      <ContentSection background="white" padding="lg" style={{ paddingTop: 100, paddingBottom: 100 }}>
        <Container maxWidth="none" className="max-w-[840px]">
          <DecoratedSectionHeader title={t('news.latestNews')} subtitle="TERRER LAB" />
        </Container>
      </ContentSection>

      {/* News List */}
      <ContentSection background="white" padding="lg" style={{ paddingBottom: 120 }}>
        <Container maxWidth="none" className="max-w-[1100px]">
          <div className="flex flex-col" style={{ gap: 52 }}>
            {newsItems.map((news, index) => (
              <NewsCard
                key={news.id}
                {...news}
                index={index}
              />
            ))}
          </div>
        </Container>
      </ContentSection>
    </DetailPageLayout>
  );
}
