import type { NavItem } from '@/types';

export const mainNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Research', href: '/#Research' },
  { label: 'Publications', href: '/pages/publications' },
];

export const peopleDropdownItems: NavItem[] = [
  { label: 'Our Team', href: '/pages/people' },
  { label: 'Join Us', href: '/pages/join-us' },
];

export const newsDropdownItems: NavItem[] = [
  { label: 'News & Updates', href: '/pages/news' },
  { label: 'Climate Snacks', href: '/pages/climate-snacks' },
  { label: 'Blog', href: '/pages/blog' },
];
