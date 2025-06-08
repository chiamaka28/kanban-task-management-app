export default function DashboardPage() {
  return (
    <div className='flex items-center justify-center h-full text-gray-500'>
      <div className='text-center'>
        <h3 className='mt-2 text-sm font-medium text-gray-900'>
          No board selected
        </h3>
        <p className='mt-1 text-sm text-gray-500'>
          Select a board from the sidebar to get started
        </p>
      </div>
    </div>
  );
}
