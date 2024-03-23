import Navbar from '@/components/Navbar/Navbar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between ">
     <Navbar />
    </main>
  );
}
