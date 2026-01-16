import type { ReactNode } from 'react';

// Common Props
export interface BaseProps {
  className?: string;
  children?: ReactNode;
}

// Size variants
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

// Color variants
export type ColorVariant = 'primary' | 'secondary' | 'accent' | 'text' | 'light' | 'muted' | 'white' | 'dark';

// Text variants
export type TextVariant = 'body' | 'caption' | 'label' | 'overline';

// Heading levels
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

// Button variants
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';

// Link variants
export type LinkVariant = 'default' | 'nav' | 'footer' | 'button' | 'primary' | 'muted' | 'white';

// Team Member
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  scholarUrl?: string;
  email: string;
  type: 'team' | 'alumni';
}

// Big Question
export interface BigQuestion {
  id: number;
  question: string;
  content: string[];
  highlights: string[];
  bulletPoints: string[];
  icon: string;
}

// Publication
export interface Publication {
  id: string;
  year: number;
  authors: string;
  title: string;
  journal: string;
  doi?: string;
  pdfUrl?: string;
}

// News Item
export interface NewsItemData {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  image?: string;
  href: string;
}

// Navigation Item
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// Research Theme
export interface ResearchTheme {
  id: string;
  title: string;
  description: string;
  href: string;
}

// Affiliation
export interface Affiliation {
  id: string;
  name: string;
  logo: string;
  url: string;
}

// Social Platform types
export type SocialPlatform = 'twitter' | 'google' | 'github' | 'linkedin' | 'email';
