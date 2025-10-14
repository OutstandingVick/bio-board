import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='font-crimson bg-gradient-to-r from-violet-800 to-blue-950 px-6 py-4 shadow-md'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <div className='flex items-center space-x-2'>
          <div className='bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg'>
            <span className='text-white font-bold'>🎟️</span>
          </div>
          <h1 className='text-white font-crimson font-semibold text-2xl'>
            RetailChain
          </h1>
        </div>

        <div className='text-lg font-varela hidden md:flex space-x-8 text-white font-semibold'>
          <a href='/' className='hover:text-purple-300'>
            Home
          </a>
          <a href='/' className='hover:text-purple-300'>
            Features
          </a>
          <a href='/' className='hover:text-purple-300'>
            Dashboard
          </a>
          <a href='/' className='hover:text-purple-300'>
            About
          </a>
        </div>

        <div className='hidden md:block'>
          <button className='font-belanosima font-bold text-lg border border-purple-400 text-purple-300 px-8 py-2 rounded-full hover:bg-purple-500 hover:text-white transition'>
            Sign in
          </button>
        </div>

        <div className='md:hidden bg-transparent'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className='text-white w-7 h-7' />
            ) : (
              <Menu className='text-white w-7 h-7' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden mt-4 space-y-3 text-center text-white font-varela font-semibold'>
          <a href='/' className='block hover:text-purple-300'>
            Features
          </a>
          <a href='/' className='block hover:text-purple-300'>
            Earn
          </a>
          <a href='/' className='block hover:text-purple-300'>
            Marketplace
          </a>
          <a href='/' className='block hover:text-purple-300'>
            About
          </a>
          <button className='border border-purple-400 text-purple-300 px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white transition'>
            Sign in
          </button>
        </div>
      )}
    </nav>
  );
}
