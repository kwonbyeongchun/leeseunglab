/**
 * 뉴스 데이터 로더
 * /content/news/ 폴더의 YAML 파일을 로드합니다.
 */

import type { NewsItemData } from '@/types';

// YAML 파일 import
import newsData from '@content/news/news.yaml';

// YAML에서 로드된 데이터의 raw 타입
interface RawNewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
  href: string;
}

// Raw 데이터를 NewsItemData 타입으로 변환
function transformNews(raw: RawNewsItem[]): NewsItemData[] {
  return raw.map((item) => ({
    id: item.id,
    title: item.title,
    date: item.date,
    excerpt: item.excerpt,
    image: item.image,
    href: item.href,
  }));
}

// 뉴스 목록 (최신순)
export const newsItems: NewsItemData[] = transformNews(newsData as RawNewsItem[]);
