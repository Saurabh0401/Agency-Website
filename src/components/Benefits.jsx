import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Counter = ({ end, duration = 2000, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now()
    const startValue = 0

    const updateCount = () => {
      const currentTime = Date.now()
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(startValue + (end - startValue) * easeOutQuart)

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(updateCount)
      }
    }

    requestAnimationFrame(updateCount)
  }, [isVisible, end, duration])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsVisible(true)}
      className="text-center"
    >
      <div className="text-4xl lg:text-5xl font-bold text-primary-400 mb-2">
        {prefix}{count}{suffix}
      </div>
    </motion.div>
  )
}

const Benefits = () => {
  const metrics = [
    {
      value: 70,
      suffix: '%',
      label: 'Time saved per hire',
      description: 'Reduce manual recruiting tasks'
    },
    {
      value: 85,
      suffix: '%',
      label: 'Reply rate lift',
      description: 'With personalized outreach'
    },
    {
      value: 3,
      suffix: 'x',
      label: 'Faster offers',
      description: 'From AI interview insights'
    },
    {
      value: 60,
      suffix: '%',
      label: 'DB activation rate',
      description: 'Reactivate cold candidates'
    }
  ]

  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Faster Time-to-Fill',
      description: 'Automated candidate sourcing and reactivation cuts your time-to-fill by finding perfect matches instantly.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Higher Quality Placements',
      description: 'AI-powered interview summaries and candidate insights ensure better matches and successful placements.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Improved Client Satisfaction',
      description: 'Automated progress reports and transparent communication keep clients informed and happy.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Scale Your Team',
      description: 'Handle more requisitions without hiring more recruiters. Our AI scales with your business growth.'
    }
  ]

  return (
    <section id="benefits" className="py-20 lg:py-32 bg-gradient-to-br from-dark-surface to-dark-bg">
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
            Measurable <span className="text-gradient">Impact</span>
          </h2>
          <p className="text-lg lg:text-xl text-dark-text-secondary max-w-3xl mx-auto leading-relaxed">
            See the real results when AI automations transform your recruiting workflow
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16 lg:mb-20">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Counter
                end={metric.value}
                suffix={metric.suffix}
                duration={2000 + index * 200}
              />
              <h3 className="text-lg font-semibold text-white mb-2">
                {metric.label}
              </h3>
              <p className="text-sm text-dark-text-secondary">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4 p-6 bg-dark-bg bg-opacity-50 rounded-lg border border-dark-border hover:bg-opacity-70 transition-all duration-200"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary-500 bg-opacity-20 rounded-lg flex items-center justify-center text-primary-400">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-dark-text-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="bg-dark-bg bg-opacity-50 backdrop-blur-sm border border-dark-border rounded-lg p-8 lg:p-12">
            <h3 className="text-2xl font-semibold text-white mb-6">
              How It Works
            </h3>
            <p className="text-lg text-dark-text-secondary leading-relaxed mb-6">
              Desi Automations plugs into your ATS and workflows to reduce manual steps, keep candidate data fresh, 
              and improve candidate & client experience. Our AI learns from your recruiting patterns to deliver 
              increasingly better results over time.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-primary-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-400 font-bold text-lg">1</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Connect</h4>
                <p className="text-sm text-dark-text-secondary">Integrate with your existing ATS and tools</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-400 font-bold text-lg">2</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Automate</h4>
                <p className="text-sm text-dark-text-secondary">AI handles sourcing, outreach, and admin tasks</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-400 font-bold text-lg">3</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Scale</h4>
                <p className="text-sm text-dark-text-secondary">Focus on high-value activities while AI handles the rest</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits
