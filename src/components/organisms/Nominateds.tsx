'use client';
import { useMemo } from 'react';
import Image from 'next/image';
import { useAppSelector } from '@/lib/hooks';
import { getNominatedsByCategory } from '@/utils/category';
import Label from '../atoms/Label';
import { TNominatedsByCategory } from '@/interfaces';

const Nominateds = () => {
  const nominateds = useAppSelector((state) => state.nominateds.nominateds);
  const categories = useAppSelector((state) => state.nominateds.categories);

  const nominatedsByCategory = useMemo<TNominatedsByCategory>(() => {
    return getNominatedsByCategory(nominateds, categories);
  }, [nominateds]);

  return (
    <section className="min-h-screen py-20 flex flex-col container mx-auto px-4">
      <Label labelTop="Nuestros" labelUnder="nominados" />

      {nominatedsByCategory.map((items) => (
        <div className="flex flex-col mt-14" key={items.category.id}>
          <div className="uppercase text-primaryDark text-sm">
            <p>Nominados a {items.category.name}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 w-full mt-4 gap-3 sm:gap-4 text-center">
            {items.nominateds.map((item, i) => (
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
                  <p className="font-bold text-primary text-xl font-righteous">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Nominateds;

