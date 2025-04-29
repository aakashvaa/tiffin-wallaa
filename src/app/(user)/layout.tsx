import Navbar from '@/components/Navbar';

export default async function MainScreenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex w-full  divide-x-2 divide-[#d3d3d3]  h-screen min-h-screen'>
      <Navbar />
      {children}
    </div>
  );
}
