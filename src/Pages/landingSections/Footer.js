import React from 'react';
import { Rocket } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const footerLinks = [
  { title: 'Product', links: ['Features', 'Pricing', 'Testimonials', 'FAQ'] },
  { title: 'Company', links: ['About', 'Careers', 'Press', 'News'] },
  { title: 'Resources', links: ['Blog', 'Newsletter', 'Events', 'Help center'] },
  { title: 'Legal', links: ['Terms', 'Privacy', 'Cookies', 'Licenses'] },
];

const socialLinks = [
  { name: 'Facebook', icon: FaFacebook, href: '#' },
  { name: 'Twitter', icon: FaTwitter, href: '#' },
  { name: 'Instagram', icon: FaInstagram, href: '#' },
  { name: 'LinkedIn', icon: FaLinkedin, href: '#' },
  { name: 'GitHub', icon: FaGithub, href: '#' },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center space-x-2">
              <Rocket className="text-blue-500" />
              <span className="text-2xl font-bold text-white">FlowSync</span>
            </div>
            <p className="text-sm leading-6">
              Transforming workflows with intelligent automation.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {footerLinks.slice(0, 2).map((column) => (
                <div key={column.title}>
                  <h3 className="text-sm font-semibold leading-6 text-white">{column.title}</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {column.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {footerLinks.slice(2).map((column) => (
                <div key={column.title}>
                  <h3 className="text-sm font-semibold leading-6 text-white">{column.title}</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {column.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-xs leading-5 text-gray-400 mb-4 lg:mb-0">
            &copy; 2023 FlowSync, Inc. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <p className="text-sm leading-6 text-gray-300">Subscribe to our newsletter</p>
            <form className="sm:flex sm:max-w-md">
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full min-w-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:w-64 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <div className="mt-4 sm:mt-0 sm:ml-4 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
