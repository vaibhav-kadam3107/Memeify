'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Features', href: '#features' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Pricing', href: '#pricing' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/sign-in'); // Redirects to the Sign-In page
  };

  const handleSignUp = () => {
    navigate('/sign-up'); // Redirects to the Sign-Up page
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img className="h-8 w-auto" src={Logo} alt="Your Company Logo" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
          <button
            onClick={handleLogin}
            className="text-sm font-semibold leading-6 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-500"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </button>
          <button
            onClick={handleSignUp}
            className="text-sm font-semibold leading-6 text-gray-800 hover:text-indigo-600 transition-all underline underline-offset-2"
          >
            New user? <span className="text-indigo-600">Sign up</span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${mobileMenuOpen ? '' : 'hidden'}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <img className="h-8 w-auto" src={Logo} alt="Your Company Logo" />
            </a>
            <button
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <button
                  onClick={handleLogin}
                  className="block w-full text-center rounded-lg px-3 py-2.5 text-base font-semibold leading-7 bg-indigo-600 text-white hover:bg-indigo-500"
                >
                  Log in
                </button>
                <button
                  onClick={handleSignUp}
                  className="block w-full text-center rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-800 hover:text-indigo-600 transition-all underline underline-offset-2 mt-4"
                >
                  New user? <span className="text-indigo-600">Sign up</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
