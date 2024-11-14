/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { FaPlusCircle } from 'react-icons/fa';

import { Button } from './Button';

export const Navbar = () => {
  return (
    <nav className="sticky flex justify-between border-b bg-pantip-800 px-4 py-2 shadow-sm">
      <Link href="#">
        <img src="https://f.ptcdn.info/638/070/000/qfim6h5mh9reodAy9r4K-o.png" alt="logo" className="h-8 w-12 rounded-full bg-pantip-800" />
      </Link>

      <div className="flex items-center gap-4 align-middle">
        <Button className="text-white">
          <FaPlusCircle className="size-3" />
          <span>
            ตั้งกระทู้
          </span>
        </Button>
        <Button className="text-white">Login</Button>
      </div>
    </nav>
  );
};
