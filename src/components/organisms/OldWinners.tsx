'use client';
import Image from 'next/image';
import { useAppSelector } from '@/lib/hooks';
import { getCategoryByNameId } from '@/utils/category';
import Label from '../atoms/Label';

const OldWinners = () => {
  const oldWinners = useAppSelector((state) => state.nominateds.oldWinners);
  const categories = useAppSelector((state) => state.nominateds.categories);

  return (
    <section className="min-h-screen py-20 flex flex-col container mx-auto px-4">
      <Label labelTop="Antiguos" labelUnder="ganadores" />

      <div className="mt-8 uppercase text-primaryDark text-sm">
        <p>Ganadores de Premios Juventud 2023:</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 w-full mt-14 gap-3 sm:gap-4 text-center">
        {oldWinners.map((item, i) => (
          <div
            className="border border-primary flex flex-col hover:shadow-md"
            key={i}
          >
            <Image
              src={item.image}
              alt="Wine image"
              width={400}
              height={600}
              className="h-80 w-full object-center object-cover"
            />

            <div className="p-5 flex flex-col items-center justify-center gap-2 text-sm capitalize font-light">
              <p className="capitalize">
                {getCategoryByNameId(item.category, categories)?.name}
              </p>
              <p className="font-bold text-primary text-xl font-righteous">
                {item.name}
              </p>
              <p>Con {item.votes} votos</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OldWinners;

