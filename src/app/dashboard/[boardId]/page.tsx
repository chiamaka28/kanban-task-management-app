import { Boards } from '@/data';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface BoardPageProps {
  params: {
    boardId: string;
  };
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
}

export async function generateMetadata({
  params,
}: BoardPageProps): Promise<Metadata> {
  const board = Boards.find((b) => b?.id === params.boardId);
  return {
    title: board?.title || 'Board not found',
  };
}

export default function BoardPage({ params }: BoardPageProps) {
  const board = Boards.find((b) => b?.id === params.boardId);

  if (!board) return notFound();

  return (
    <>
      <div className='bg-white border-b border-grey py-6 pl-6'>
        <h1 className='text-2xl font-bold '>{board.title}</h1>
      </div>
      <p>Board content will appear here</p>
    </>
  );
}
