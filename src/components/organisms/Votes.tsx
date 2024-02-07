import Label from '../atoms/Label';

const Votes = () => {
  return (
    <section className="min-h-screen py-20 flex flex-col container mx-auto px-4">
      <Label labelTop="Lista de" labelUnder="votos" />

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
            <tr className="bg-white text-black">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap"
              >
                1
              </th>
              <td className="px-6 py-4">Juan Carlos Barrios</td>
              <td className="px-6 py-4">06-02-2024 02:00 PM</td>
            </tr>
            <tr className="bg-white text-black">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap"
              >
                2
              </th>
              <td className="px-6 py-4">Dionelvy Aguilera</td>
              <td className="px-6 py-4">07-02-2024 01:30 PM</td>
            </tr>
          </tbody>
          <tfoot className="bg-black">
            <tr className="font-semibold">
              <th scope="row" className="px-6 py-3">
                2 votos
              </th>
              <td className="px-6 py-3"></td>
              <td className="px-6 py-3"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
};

export default Votes;

