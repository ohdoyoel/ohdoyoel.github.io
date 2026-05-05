import type { Lang } from '../i18n/ui';

export type Localized<T = string> = Record<Lang, T>;

export type Author = {
  name: Localized;
  self?: boolean;
  href?: string;
};

export type Entry = {
  period: string;
  position?: Localized;
  title: Localized;
  subtitle?: Localized;
  authors?: Author[];
  description?: Localized;
  link?: { href: string; internal?: boolean };
  image?: { src: string; alt?: Localized };
};

export type BlogPost = {
  id: number;
  period: string;
  title: Localized;
  description?: Localized;
};

export type Project = Entry & { id: number };

export type IntroLink = {
  to: string;
  label: Localized;
};

export type IntroLine = {
  text: Localized;
  link?: IntroLink;
};
