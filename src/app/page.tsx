import Footer from '@/components/molecules/Footer';
import Hero from '@/components/organisms/Hero';
import Categories from '@/components/organisms/Categories';
import OldWinners from '@/components/organisms/OldWinners';

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <OldWinners />
      <Footer />
    </main>
  );
}

