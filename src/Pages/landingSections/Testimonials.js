'use client'

import { useState, forwardRef } from 'react'
import { Transition } from '@headlessui/react'
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const testimonials = [
  {
    content: "This app has completely transformed how I edit my photos. It's so intuitive and powerful!",
    author: {
      name: 'Emily Johnson',
      role: 'Professional Photographer',
      image: '/placeholder.svg?height=100&width=100',
    },
  },
  {
    content: "I've tried many photo editing apps, but this one stands out. The custom filters are a game-changer.",
    author: {
      name: 'Michael Chen',
      role: 'Graphic Designer',
      image: '/placeholder.svg?height=100&width=100',
    },
  },
  {
    content: "As a social media manager, this app has saved me so much time. The instant sharing feature is incredibly convenient.",
    author: {
      name: 'Sarah Thompson',
      role: 'Social Media Manager',
      image: '/placeholder.svg?height=100&width=100',
    },
  },
]

const TestimonialContent = forwardRef(
  ({ testimonial }, ref) => (
    <div ref={ref} className="relative bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
      <FaQuoteLeft className="absolute top-4 left-4 text-4xl text-indigo-200 opacity-50" />
      <blockquote className="text-xl font-medium leading-8 text-gray-900 sm:text-2xl sm:leading-9 mb-6 relative z-10">
        <p>"{testimonial.content}"</p>
      </blockquote>
      <figcaption className="flex items-center space-x-4">
        <img
          className="h-14 w-14 rounded-full border-2 border-indigo-500"
          src={testimonial.author.image}
          alt={testimonial.author.name}
        />
        <div className="text-left">
          <div className="text-lg font-semibold text-gray-900">{testimonial.author.name}</div>
          <div className="text-base text-indigo-600">{testimonial.author.role}</div>
        </div>
      </figcaption>
    </div>
  )
)

TestimonialContent.displayName = 'TestimonialContent'

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-pink-50"></div>
      <div className="absolute inset-0 bg-grid-indigo-200/25 bg-grid-repeat"></div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Users Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Don't just take our word for it - hear from some of our satisfied customers!
          </p>
        </div>
        <div className="relative mx-auto max-w-4xl">
          <div className="relative h-80 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <Transition
                key={index}
                show={currentTestimonial === index}
                enter="transition-all duration-500"
                enterFrom="opacity-0 translate-x-full"
                enterTo="opacity-100 translate-x-0"
                leave="transition-all duration-500"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 -translate-x-full"
                className="absolute inset-0"
              >
                <TestimonialContent testimonial={testimonial} />
              </Transition>
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-between">
            <button
              onClick={prevTestimonial}
              className="bg-white/80 rounded-full p-2 text-gray-800 hover:bg-white hover:text-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="sr-only">Previous</span>
              <FaChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-white/80 rounded-full p-2 text-gray-800 hover:bg-white hover:text-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="sr-only">Next</span>
              <FaChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div className="mt-10 flex justify-center space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`h-3 w-3 rounded-full ${
                currentTestimonial === index ? 'bg-indigo-600' : 'bg-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
            >
              <span className="sr-only">Testimonial {index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

