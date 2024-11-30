'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaImage, FaPalette, FaShare, FaCloud } from 'react-icons/fa'

const features = [
  {
    name: 'Easy Upload',
    description: 'Drag and drop your images or select from your device with our intuitive interface.',
    icon: FaCloud,
    color: 'bg-blue-500',
  },
  {
    name: 'Advanced Editing',
    description: 'Powerful tools for enhancing and transforming your photos with professional-grade features.',
    icon: FaImage,
    color: 'bg-green-500',
  },
  {
    name: 'Custom Filters',
    description: 'Create and apply unique filters to make your images stand out from the crowd.',
    icon: FaPalette,
    color: 'bg-purple-500',
  },
  {
    name: 'Instant Sharing',
    description: 'Share your creations directly to social media or via link with just a few clicks.',
    icon: FaShare,
    color: 'bg-red-500',
  },
]

export default function Features() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-gray-50 to-white" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Powerful Features for Your Creativity
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Unlock your creative potential with our intuitive and powerful image editing tools.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <FeatureCard key={feature.name} feature={feature} />
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-full overflow-hidden bg-white shadow-lg rounded-xl transition-shadow hover:shadow-xl">
        <div className="flex h-full flex-col p-6">
          <div className={`absolute inset-0 ${feature.color} opacity-10 transition-opacity duration-300 ${isHovered ? 'opacity-20' : ''}`} />
          <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-lg ${feature.color} text-white`}>
            <feature.icon className="h-6 w-6" aria-hidden="true" />
          </div>
          <motion.div
            animate={isHovered ? { y: -5 } : { y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <h3 className="text-lg font-semibold leading-7 text-gray-900">{feature.name}</h3>
            <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
      </div>
    </motion.div>
  )
}
