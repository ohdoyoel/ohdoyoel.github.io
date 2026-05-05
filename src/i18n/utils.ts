import { ui, defaultLang, type Lang, type UIKey } from './ui';

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

const baseWithSlash = () => import.meta.env.BASE_URL.replace(/\/?$/, '/');

export function localizedHome(lang: Lang): string {
  return pageLink(lang, '');
}

export function pageLink(lang: Lang, slug: string = ''): string {
  const base = baseWithSlash();
  const langPrefix = lang === 'en' ? '' : 'ko/';
  const path = slug ? `${slug}/` : '';
  return `${base}${langPrefix}${path}`;
}

export function assetLink(filename: string): string {
  return `${baseWithSlash()}${filename}`;
}
