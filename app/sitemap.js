import { folders } from '@/lib/data';

export default function sitemap() {
  const base = 'https://ethiostudy.vercel.app';
  const lastModified = new Date('2025-06-03');
  const urls = [
    { url: base, lastModified, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/books`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    ...folders.map((f) => ({
      url: `${base}/books/${f.id}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.6,
    })),
  ];
  return urls;
}
