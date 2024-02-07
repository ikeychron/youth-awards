import Navbar from '../molecules/Navbar';
// import { pageName } from "@/data";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full flex justify-center flex-col bg-hero bg-cover bg-left sm:bg-center"
    >
      <div className="w-full h-full bg-black bg-opacity-40 text-white min-h-screen flex flex-col ">
        <Navbar />
        <div className="container px-4 mx-auto flex flex-col items-center flex-1 py-28">
          <div className="font-bold font-righteous">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl">Premios</h2>
            <h1 className="text-7xl sm:text-8xl lg:text-9xl leading-none">
              Juventud
            </h1>
          </div>

          <div className="mt-auto text-center max-w-xs sm:max-w-lg">
            <p className="text-xs sm:text-base font-medium">
              Los jovenes de la Misión Guanare 63 te invitan a disfrutar de este
              gran evento.
            </p>

            <p className="sm:text-lg font-bold mt-5">18 de febrero de 2024</p>
            {/* <p className="sm:text-lg font-bold">
              En La Iglesia Luz Del Mundo Misión Guanare 63
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

