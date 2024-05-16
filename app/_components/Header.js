"use client";

import { useState } from 'react';
import Link from 'next/link'; // Import Link component


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='p-5 shadow-sm flex justify-between'>
      <div className='flex items-center gap-8'>
        {/* Your logo and navigation links */}
      </div>
      <div className='md:hidden'>
        <button onClick={toggleMenu}>
          {/* Icon for menu */}
        </button>
        {isMenuOpen && (
          <div className='absolute top-16 right-5 bg-white p-4 shadow-md'>
            <ul>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/services'>Services</Link>
              </li>
              <li>
                <Link href='/about'>About us</Link>
              </li>
              <li>
                <Link href='https://blackwoodbarber.setmore.com/beta'>Book</Link>
              </li>
              {/* Check session and show appropriate items */}
            </ul>
          </div>
        )}
      </div>
      {/* Render menu for larger screens */}
      <div className='hidden md:block'>
        <ul className='flex gap-6'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/services'>Services</Link>
          </li>
          <li>
            <Link href='/about'>About us</Link>
          </li>
          <li>
            <Link href='https://blackwoodbarber.setmore.com/beta'>Book</Link>
          </li>
          {/* Check session and show appropriate items */}
        </ul>
      </div>
    </div>
  );
}

export default Header;
