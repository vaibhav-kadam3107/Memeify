import { FaPlay } from 'react-icons/fa';
import Dashboard from '../../assets/dashboard.png';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Decorative background elements */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
          <div className="absolute top-5 right-5 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-4000"></div>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          {/* Text Content */}
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Transform Your Ideas Into Reality
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Create stunning designs, collaborate seamlessly, and bring your vision to life with our intuitive platform.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform duration-300 ease-in-out hover:bg-indigo-500 hover:scale-105 hover:shadow-lg"
              >
                Start Creating Free
              </a>
              <a
                href="#"
                className="inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-md transition-transform duration-300 ease-in-out hover:bg-gray-50 hover:scale-105 hover:shadow-lg"
              >
                <FaPlay className="mr-2 h-4 w-4 text-indigo-600" />
                Watch Demo
              </a>
            </div>
            
            {/* Stats Section */}
            <div className="mt-12 grid grid-cols-3 gap-x-6 sm:gap-x-8">
              <div>
                <dt className="text-sm font-medium text-gray-500">Active Users</dt>
                <dd className="mt-2 text-3xl font-bold tracking-tight text-indigo-600">100K+</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Templates</dt>
                <dd className="mt-2 text-3xl font-bold tracking-tight text-indigo-600">5000+</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Countries</dt>
                <dd className="mt-2 text-3xl font-bold tracking-tight text-indigo-600">150+</dd>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <img
              src={Dashboard}
              alt="App dashboard preview"
              className="relative z-10 transform rounded-xl shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105"
            />
            {/* Floating Gradient Elements */}
            <div className="absolute -top-6 -right-6 w-96 h-96 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
            <div className="absolute -bottom-6 -left-6 w-96 h-96 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white"></div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
