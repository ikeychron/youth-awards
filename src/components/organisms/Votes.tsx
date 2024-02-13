'use client';
import Link from 'next/link';
import { useAppSelector } from '@/lib/hooks';
import Button from '../atoms/Button';
import Label from '../atoms/Label';
import { useEffect, useState } from 'react';
import { getVotes } from '@/services/firebaseService';
import { IVote } from '@/interfaces';
import dayjs from 'dayjs';

const Votes = () => {
  const [votes, setVotes] = useState<IVote[]>([]);

  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const isReady = useAppSelector((state) => state.auth.isReady);

  const isAuth = isAuthenticated && isReady;

  useEffect(() => {
    const unsubscribe = getVotes((snapshot) => {
      const newVotes = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setVotes(newVotes as IVote[]);
    });

    // Clean listener
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <section className="min-h-screen py-20 flex flex-col container mx-auto px-4">
      <Label labelTop="Lista de" labelUnder="votos" />
      <div className="uppercase text-primaryDark text-sm mt-8">
        <p>Vota por tus favoritos</p>
      </div>

      <div className="relative overflow-x-auto mt-10">
        <table className="w-full text-sm text-left rtl:text-right text-white">
          <thead className="text-xs text-black uppercase bg-primary">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Nombres y Apellidos
              </th>
              <th scope="col" className="px-6 py-3">
                Fecha
              </th>
            </tr>
          </thead>
          <tbody>
            {votes.map((item, i) => (
              <tr
                className="bg-white text-black border-b border-gray-200"
                key={item.id}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap"
                >
                  {i + 1}
                </th>
                <td className="px-6 py-4">{item.fullname}</td>
                <td className="px-6 py-4">
                  {dayjs(item.created).format('DD-MM-YYYY hh:mm A')}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-black">
            <tr className="font-semibold">
              <th scope="row" className="px-6 py-3"></th>
              <td className="px-6 py-3"></td>
              <td className="px-6 py-3">
                {votes.length > 0
                  ? `${votes.length} votos`
                  : 'No hay votos aún'}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="flex items-center gap-3 mt-10">
        <Link href="/nuevo-voto">
          <Button label="Nuevo voto" variant="white" />
        </Link>
        {isAuth && (
          <>
            <Button label="Generar resultado" />
            <Link href="/crear-nominado">
              <Button label="Crear nominado" variant="secondary" />
            </Link>
          </>
        )}
      </div>
    </section>
  );
};

export default Votes;

