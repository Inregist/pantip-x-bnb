/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { FaPlusCircle, FaSearch } from 'react-icons/fa';

import { Button } from './Button';
import Input from './Input';

export const Navbar = () => {
  return (
    <nav className="flex justify-between border-b px-4 py-2 shadow-sm">
      <Link href="#">
        <img src="https://f.ptcdn.info/638/070/000/qfim6h5mh9reodAy9r4K-o.png" alt="logo" className="h-8 w-12 rounded-full bg-pantip-800" />
      </Link>

      <Input decorRight={<FaSearch className="size-3 h-full text-gray-500" />} className="hidden sm:flex" />

      <div className="flex items-center gap-4 align-middle">
        <Button>
          <FaPlusCircle className="size-3" />
          <span>
            ตั้งกระทู้
          </span>
        </Button>
        <Button>Login</Button>
      </div>
    </nav>
  );
};
