'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaUpload, FaEdit, FaDownload, FaMagic } from 'react-icons/fa'

const steps = [
  {
    name: 'Upload',
    description: 'Select and upload your image to our platform.',
    icon: FaUpload,
    color: 'bg-blue-500',
  },
  {
    name: 'Edit',
    description: 'Use our powerful tools to enhance and transform your image.',
    icon: FaEdit,
    color: 'bg-green-500',
  },
  {
    name: 'Enhance',
    description: 'Apply AI-powered enhancements to perfect your image.',
    icon: FaMagic,
    color: 'bg-purple-500',
  },
  {
    name: 'Download',
    description: 'Save your creation and share it with the world.',
    icon: FaDownload,
    color: 'bg-red-500',
  },
]

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-gray-50 to-white" id="how-it-works">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Transform your images in just a few simple steps.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
          <div className="relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-12 flex items-center"
              >
                <div className={`flex-shrink-0 w-12 h-12 rounded-full ${step.color} flex items-center justify-center text-white`}>
                  <step.icon className="w-6 h-6" />
                </div>
                <div className={`ml-6 w-full max-w-md bg-white rounded-lg shadow-lg p-6 ${index === activeStep ? 'ring-2 ring-blue-500' : ''}`}>
                  <h3 className="text-lg font-semibold mb-2">{step.name}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            {steps.map((step, index) => (
              <button
                key={step.name}
                className={`
                  px-4 py-2 text-sm font-medium
                  ${index === activeStep ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}
                  ${index === 0 ? 'rounded-l-md' : ''}
                  ${index === steps.length - 1 ? 'rounded-r-md' : ''}
                  border border-gray-200
                `}
                onClick={() => setActiveStep(index)}
              >
                {step.name}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-16">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div className="aspect-w-16 aspect-h-9">
              <ProcessVisualization activeStep={activeStep} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProcessVisualization({ activeStep }) {
  const IconComponent = steps[activeStep].icon;

  return (
    <div className="w-full h-full bg-gray-100 flex items-center justify-center p-8">
      <div className="relative w-full max-w-3xl">
        <img
          src="/placeholder.svg?height=400&width=600"
          alt="Sample image"
          className="w-full h-auto rounded-lg shadow-lg"
        />
        {activeStep > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <div className="text-white text-center">
              <IconComponent className="w-16 h-16 mx-auto mb-4" />
              <h4 className="text-2xl font-bold mb-2">{steps[activeStep].name}</h4>
              <p>{steps[activeStep].description}</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

