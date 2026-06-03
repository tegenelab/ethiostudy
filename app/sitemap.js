import { folders } from '@/lib/data';

export default function sitemap() {
  const base = 'https://ethiostudy.vercel.app';
  const urls = [
    { url: base, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/books`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    ...folders.map((f) => ({
      url: `${base}/books/${f.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    })),
  ];
  return urls;
}
