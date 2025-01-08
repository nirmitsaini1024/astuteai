'use client'

import { motion } from 'framer-motion'
import { FaLightbulb, FaBullhorn, FaChartLine } from 'react-icons/fa'

const steps = [
  {
    icon: <FaLightbulb />,
    title: 'Highlight',
    subtitle: 'Showcase your products',
    description: 'Design a website that works as hard as you do! SEO-optimized, visually striking, and packed with seamless user experiences to boost engagement.'
  },
  {
    icon: <FaBullhorn />,
    title: 'Advertise',
    subtitle: 'Revitalize your Marketing',
    description: 'Streamline your content with AI! Effortlessly generate blogs, social media posts, and ads that grab attention and drive engagement!'
  },
  {
    icon: <FaChartLine />,
    title: 'Analyse',
    subtitle: 'Unlock Actionable Insights',
    description: 'Gain real-time insights with multilingual analytics! Monitor your business performance, decode trends, and refine strategies for continuous growth.'
  }
]

const AnimatedTimeline = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center p-4 md:p-8">
      <motion.h1 
        className="text-3xl md:text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        How we bring it to Life
      </motion.h1>
      <motion.h2 
        className="text-xl md:text-2xl mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Transform your business with our three-step process
      </motion.h2>
      <div className="w-full max-w-4xl">
        {steps.map((step, index) => (
          <motion.div 
            key={index}
            className="flex flex-col md:flex-row items-center mb-16 relative"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
          >
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white text-black flex items-center justify-center text-2xl mb-4 md:mb-0 md:mr-8">
              {step.icon}
            </div>
            <div className="flex-grow md:ml-4">
              <h3 className="text-2xl font-semibold mb-2">Step {index + 1}: {step.title}</h3>
              <h4 className="text-xl text-gray-300 mb-2">{step.subtitle}</h4>
              <p className="text-gray-400">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <motion.div 
                className="absolute left-8 top-16 bottom-0 w-0.5 bg-white hidden md:block"
                initial={{ height: 0 }}
                animate={{ height: '100%' }}
                transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AnimatedTimeline

