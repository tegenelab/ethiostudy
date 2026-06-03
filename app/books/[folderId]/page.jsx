import { notFound } from 'next/navigation';
import { folders } from '@/lib/data';
import { books } from '@/lib/data';
import BooksFolderView from '@/src/components/BooksFolderView';

export async function generateStaticParams() {
  return folders.map((f) => ({ folderId: f.id }));
}

export async function generateMetadata({ params }) {
  const folder = folders.find((f) => f.id === params.folderId);
  if (!folder) return { title: 'Not Found' };
  return {
    title: `${folder.label} Textbooks - Free PDF Download`,
    description: `Download free ${folder.label} textbooks and study materials for Ethiopian students.`,
    openGraph: {
      title: `${folder.label} Textbooks - EthioStudy`,
      description: `Free ${folder.label} PDF textbooks for Ethiopian students.`,
    },
  };
}

export default function FolderPage({ params }) {
  const folder = folders.find((f) => f.id === params.folderId);
  if (!folder) notFound();

  const folderBooks = books.filter((b) => b.folderId === params.folderId);

  return <BooksFolderView folder={folder} books={folderBooks} />;
}
