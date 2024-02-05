import Footer from '@/components/molecules/Footer';
import Hero from '@/components/organisms/Hero';
import OldWinners from '@/components/organisms/OldWinners';
import { getOldWinners } from '@/services/firebaseService';

export default async function Home() {
  const data = await getOldWinners();

  console.log(data);

  return (
    <main>
      <Hero />
      <OldWinners oldWinners={data || []} />
      <Footer />
    </main>
  );
}

