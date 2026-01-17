import type { NavItem } from '@/types';

export const mainNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Research', href: '/#research' },
  { label: 'Publications', href: '/publications' },
];

export const peopleDropdownItems: NavItem[] = [
  { label: 'Our Team', href: '/team' },
  { label: 'Join Us', href: '/join-us' },
];

export const newsDropdownItems: NavItem[] = [
  { label: 'News & Updates', href: '/news' },
  { label: 'Climate Snacks', href: '/climate-snacks' },
];
