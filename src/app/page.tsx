import Footer from '@/components/molecules/Footer';
import Hero from '@/components/organisms/Hero';
import Categories from '@/components/organisms/Categories';
import CurrentWinners from '@/components/organisms/CurrentWinners';
import OldWinners from '@/components/organisms/OldWinners';
import oldWinners2022 from '@/data/oldWinners2022';
import oldWinners2023 from '@/data/oldWinners2023';
import { INominated } from '@/interfaces';

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      {/* <CurrentWinners /> */}

      <OldWinners
        data={[
          { year: '2023', winners: oldWinners2023 as INominated[] },
          { year: '2022', winners: oldWinners2022 as INominated[] },
        ]}
      />

      <Footer />
    </main>
  );
}

