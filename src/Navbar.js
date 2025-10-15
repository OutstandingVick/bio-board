import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='font-lato text-support bg-main px-12 py-2 shadow-md'>
      <div className='max-w-7xl flex items-center justify-between'>
        <div className='flex items-center space-x-2'>
          <div className='pl-12 p-2'>
            <img
              className='rounded-full w-12 h-12 bg-no-repeat bg-center bg-cover'
              src={`${process.env.PUBLIC_URL}/img/prof.jpg`}
              alt='Profile'
            />
          </div>
          <h1 className='font-crimson font-semibold text-xl hover:text-side'>
            Oustandingvick
          </h1>
        </div>

        <div className='text-lg font-varela hidden md:flex space-x-8 font-semibold'>
          <a
            href='/'
            className='hover:text-side hover:underline underline-offset-4'
          >
            Works
          </a>
          <a
            href='/'
            className='hover:text-side hover:underline underline-offset-4'
          >
            Services
          </a>
          <a
            href='/'
            className='hover:text-side hover:underline underline-offset-4'
          >
            Experience
          </a>
          <a
            href='/'
            className='hover:text-side hover:underline underline-offset-4'
          >
            Contact
          </a>
        </div>

        <div className='md:hidden bg-transparent'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className='hover:text-side text-support w-7 h-7' />
            ) : (
              <Menu className='hover:text-side text-support w-7 h-7' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden mt-4 space-y-3 text-center text-support font-lato font-semibold'>
          <a
            href='/'
            className='block hover:text-side hover:underline underline-offset-4'
          >
            Works
          </a>
          <a
            href='/'
            className='block hover:text-side hover:underline underline-offset-4'
          >
            Services
          </a>
          <a
            href='/'
            className='block hover:text-side hover:underline underline-offset-4'
          >
            Experience
          </a>
          <a
            href='/'
            className='block hover:text-side hover:underline underline-offset-4'
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
