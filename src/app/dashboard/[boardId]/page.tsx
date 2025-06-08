import { Boards } from '@/data';
import { notFound } from 'next/navigation';

export default function BoardPage({ params }: { params: { boardId: string } }) {
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
