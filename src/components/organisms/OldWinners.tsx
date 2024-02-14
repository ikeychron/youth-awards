'use client';
import Image from 'next/image';
import { useAppSelector } from '@/lib/hooks';
import { getCategoryByNameId } from '@/utils/category';
import Label from '../atoms/Label';
import { INominated } from '@/interfaces';
import NominatedItem from '../molecules/NominatedItem';

interface IOldWinner {
  year: string;
  winners: INominated[];
}

const OldWinners = ({ data }: { data: IOldWinner[] }) => {
  const categories = useAppSelector((state) => state.nominateds.categories);

  return (
    <section className="min-h-screen py-20 flex flex-col container mx-auto px-4">
      <Label labelTop="Antiguos" labelUnder="ganadores" />

      {data.map((oldWinners) => (
        <>
          <div
            className="first:mt-8 mt-20 uppercase text-primaryDark text-sm"
            key={oldWinners.year}
          >
            <p>Ganadores de Premios Juventud {oldWinners.year}:</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 w-full gap-3 sm:gap-4 text-center mt-10">
            {oldWinners.winners.map((item, i) => (
              <NominatedItem
                key={i}
                nominated={item}
                showVotes
                showCategory={
                  getCategoryByNameId(item.category, categories)?.name
                }
              />
            ))}
          </div>
        </>
      ))}
    </section>
  );
};

export default OldWinners;

