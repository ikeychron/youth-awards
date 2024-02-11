import Navbar from '@/components/molecules/Navbar';
import Footer from '@/components/molecules/Footer';
import NewNominatedForm from '@/components/organisms/NewNominatedForm';
import { getImagesNominateds } from '@/services/firebaseService';

export default async function NewNominatedPage() {
  const nominatedsImage = await getImagesNominateds();

  return (
    <main>
      <Navbar />
      <NewNominatedForm nominatedsImage={nominatedsImage} />
      <Footer />
    </main>
  );
}

