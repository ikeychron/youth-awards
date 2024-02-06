'use client';
import Link from 'next/link';
import { navbarOptions } from '@/data';
import Button from '../atoms/Button';
import { usePathname } from 'next/navigation';
// import { twJoin } from 'tailwind-merge';
// import { PiStarOfDavidLight } from 'react-icons/pi';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full py-4 text-sm text-white">
      <div className="container px-4 mx-auto flex justify-between items-center h-full">
        <Link href="/" className="text-lg font-righteous">
          {/* <div className="flex items-center gap-3"> */}
          <p>Misión Guanare 63</p>
          {/* <PiStarOfDavidLight /> */}
          {/* </div> */}
        </Link>

        <ul className="hidden sm:flex gap-3 sm:gap-12 md:gap-16 xl:gap-20 text-[9px] text-xs">
          {navbarOptions.map((item, i) => (
            <li key={item.href}>
              <Link href={item.href} className={'uppercase font-medium'}>
                {item.name}
              </Link>
              {item.href === pathname && (
                <div className="w-3.5 h-0.5 mt-px rounded-full bg-white mx-auto" />
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link href="/votos">
            <Button label="Votar" variant="white" className="uppercase" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

