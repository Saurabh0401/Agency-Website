import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Demo = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const demoSteps = [
    {
      id: 1,
      title: 'Scan Database',
      description: 'AI analyzes your talent pool to find perfect candidate matches',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      details: [
        'Scans 10,000+ candidate profiles in seconds',
        'Identifies skill gaps and perfect matches',
        'Surfaces dormant candidates for new roles'
      ]
    },
    {
      id: 2,
      title: 'Send Outreach',
      description: 'Personalized messages crafted using public profile data',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      details: [
        'Unique opening lines for each candidate',
        '85% higher response rates than generic messages',
        'Automated follow-up sequences'
      ]
    },
    {
      id: 3,
      title: 'Summarize Interview',
      description: 'AI converts interviews into actionable insights and recommendations',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      details: [
        'Transcribes and analyzes interview content',
        'Highlights key skills and red flags',
        'Shareable summaries for client teams'
      ]
    },
    {
      id: 4,
      title: 'Automate Onboarding',
      description: 'Seamless transition from offer to first day productivity',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      details: [
        'Automated paperwork and document collection',
        'Scheduled orientation and training sessions',
        'Resource sharing and progress tracking'
      ]
    }
  ]

  // Auto-advance steps
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % demoSteps.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, demoSteps.length])

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="demo" className="py-20 lg:py-32 bg-dark-bg">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
            See AI Automations in <span className="text-gradient">Action</span>
          </h2>
          <p className="text-lg lg:text-xl text-dark-text-secondary max-w-3xl mx-auto leading-relaxed">
            Watch how our AI transforms your recruiting workflow from candidate discovery to successful placement
          </p>
        </motion.div>

        {/* Demo Container */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Animated Mockup */}
            <div className="relative">
              <div className="bg-dark-surface border border-dark-border rounded-lg p-8 h-96 flex items-center justify-center relative overflow-hidden">
                {/* Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 bg-opacity-5 to-transparent"></div>
                
                {/* Current Step Display */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="text-center z-10"
                  >
                    <div className="w-24 h-24 bg-primary-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-400">
                      {demoSteps[currentStep].icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {demoSteps[currentStep].title}
                    </h3>
                    <p className="text-dark-text-secondary max-w-md">
                      {demoSteps[currentStep].description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Progress Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {demoSteps.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        index === currentStep ? 'bg-primary-500' : 'bg-dark-border'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Step Details */}
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-white">Workflow Steps</h3>
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isAutoPlaying
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-dark-surface text-dark-text-secondary hover:text-white border border-dark-border'
                  }`}
                >
                  {isAutoPlaying ? 'Pause' : 'Play'}
                </button>
              </div>

              {demoSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-lg border cursor-pointer transition-all duration-300 ${
                    currentStep === index
                      ? 'bg-primary-500 bg-opacity-10 border-primary-500'
                      : 'bg-dark-surface border-dark-border hover:border-primary-500 hover:bg-opacity-50'
                  }`}
                  onClick={() => {
                    setCurrentStep(index)
                    setIsAutoPlaying(false)
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                      currentStep === index
                        ? 'bg-primary-500 bg-opacity-20 text-primary-300'
                        : 'bg-dark-bg text-dark-text-secondary'
                    }`}>
                      <span className="text-xl font-bold">{step.id}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-lg font-semibold mb-2 ${
                        currentStep === index ? 'text-primary-300' : 'text-white'
                      }`}>
                        {step.title}
                      </h4>
                      <p className="text-dark-text-secondary text-sm mb-3">
                        {step.description}
                      </p>
                      <ul className="space-y-1">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start text-xs text-dark-text-muted">
                            <svg
                              className="w-3 h-3 text-primary-500 mt-0.5 mr-2 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="pt-8 text-center"
              >
                <button
                  onClick={scrollToContact}
                  className="btn-primary text-lg px-8 py-4 hover-lift"
                >
                  Request Demo
                </button>
                <p className="text-dark-text-muted text-sm mt-4">
                  See these automations working with your data
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Integration Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-20 text-center"
        >
          <div className="bg-dark-surface bg-opacity-50 border border-dark-border rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">
              Integrates with Your Existing Tools
            </h3>
            <p className="text-dark-text-secondary mb-6">
              Our AI automations work seamlessly with popular ATS platforms and recruiting tools. 
              No need to change your workflow — we enhance what you already use.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-dark-text-muted">
              <span className="px-4 py-2 bg-dark-bg rounded-md text-sm">Workday</span>
              <span className="px-4 py-2 bg-dark-bg rounded-md text-sm">Greenhouse</span>
              <span className="px-4 py-2 bg-dark-bg rounded-md text-sm">Lever</span>
              <span className="px-4 py-2 bg-dark-bg rounded-md text-sm">BambooHR</span>
              <span className="px-4 py-2 bg-dark-bg rounded-md text-sm">LinkedIn Recruiter</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Demo
