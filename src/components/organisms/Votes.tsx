// import Link from 'next/link';
// import Button from '../atoms/Button';
import Label from '../atoms/Label';

const Votes = () => {
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
            <tr className="bg-white text-black border-b border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap"
              >
                1
              </th>
              <td className="px-6 py-4">Carlos Barrios</td>
              <td className="px-6 py-4">06-02-2024 02:00 PM</td>
            </tr>
          </tbody>
          <tfoot className="bg-black">
            <tr className="font-semibold">
              <th scope="row" className="px-6 py-3"></th>
              <td className="px-6 py-3"></td>
              <td className="px-6 py-3">1 votos</td>
            </tr>
          </tfoot>
        </table>
      </div>
      {/* 
      <div className="flex items-center gap-3 mt-10">
         <Link href="/nuevo-voto">
          <Button label="Nuevo voto" variant="white" />
        </Link>
        <Button label="Generar resultado" />
        <Link href="/nuevo-nominado">
          <Button label="Crear nominado" variant="secondary" />
        </Link> 
      </div>
      */}
    </section>
  );
};

export default Votes;

