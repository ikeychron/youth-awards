import Image from 'next/image';
import { TOldWinners } from '@/interfaces';

const OldWinners = ({ oldWinners }: { oldWinners: TOldWinners }) => {
  return (
    <section
      id="wines"
      className="min-h-screen py-20 flex flex-col container mx-auto px-4"
    >
      <div className="text-4xl font-righteous text-primary font-bold">
        <h1 className="text-primaryDark">Antiguos</h1>
        <h1 className="text-7xl leading-none -mt-5">ganadores</h1>
      </div>

      <div className="mt-8 uppercase text-primary text-sm">
        <p>Ganadores de Premios Juventud 2023:</p>
      </div>

      <div className="grid grid-cols-4 w-full mt-14 gap-x-8 gap-y-4">
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

            <div className="p-5 flex flex-col items-center justify-center gap-2">
              <p className="text-sm">{item.category}</p>
              <p className="font-bold text-primary text-xl font-righteous">
                {item.name}
              </p>
              <p className="font-light text-sm">Con {item.votes} votos</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OldWinners;

