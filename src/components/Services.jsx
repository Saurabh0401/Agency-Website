import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Candidate Reactivation System",
      summary: "Automatically scans your talent pool to surface perfect 'silver medalist' matches for new openings.",
      benefits: [
        "Reduce time-to-fill",
        "Increase qualified pipelines", 
        "Reactivate cold candidates intelligently"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2zm12-3c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2zM9 10l12-3" />
        </svg>
      )
    },
    {
      id: 2,
      title: "AI Interview Summarizer",
      summary: "Transcribes interviews and delivers scannable summaries with skills, highlights, and red flags.",
      benefits: [
        "Faster hiring decisions",
        "Better interviewer alignment",
        "Easy sharing with clients"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Personalized Cold Outreach",
      summary: "Writes a unique opening line for every candidate based on public data to boost reply rates.",
      benefits: [
        "Higher response rates",
        "Hyper-personalized outreach",
        "Saves sourcing time"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Market Intelligence Reporter",
      summary: "Realtime salary benchmarks & compensation insights for any role or market.",
      benefits: [
        "Manage client expectations",
        "Faster offer decisions",
        "Data-driven salary guidance"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "AI Profile Enricher",
      summary: "Keeps candidate records up-to-date by fetching latest public info from profiles.",
      benefits: [
        "Cleaner database",
        "Better shortlists",
        "Reduced manual research"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Automated Client Communication",
      summary: "Sends automated progress reports and candidate profiles to clients on your schedule.",
      benefits: [
        "Less status-email work",
        "Happier clients",
        "Transparent pipelines"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      id: 7,
      title: "Instant Resume Formatter",
      summary: "One-click resume transform into client-ready, branded templates.",
      benefits: [
        "Faster submission",
        "Consistent branding",
        "Improved client presentation"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: 8,
      title: "Onboarding Assistant",
      summary: "Automates new-hire paperwork, schedules orientation, and shares resources for seamless starts.",
      benefits: [
        "Better new-hire experience",
        "Reduced admin",
        "Faster time-to-productivity"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    }
  ]

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="py-20 lg:py-32 bg-dark-bg">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
            AI-Powered <span className="text-gradient">Recruiting Automations</span>
          </h2>
          <p className="text-lg lg:text-xl text-dark-text-secondary max-w-3xl mx-auto leading-relaxed">
            Transform every step of your recruiting workflow with intelligent automation. 
            Our AI tools integrate seamlessly with your ATS to streamline talent sourcing, 
            candidate engagement, and client communication.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover-lift group"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 bg-primary-500 bg-opacity-20 rounded-lg mb-4 text-primary-400 group-hover:text-primary-300 transition-colors duration-200">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-300 transition-colors duration-200">
                {service.title}
              </h3>

              {/* Summary */}
              <p className="text-dark-text-secondary mb-4 text-sm leading-relaxed">
                {service.summary}
              </p>

              {/* Benefits */}
              <ul className="space-y-2">
                {service.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start text-sm text-dark-text-secondary">
                    <svg
                      className="w-4 h-4 text-primary-500 mt-0.5 mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* SEO Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <p className="text-dark-text-secondary leading-relaxed">
            Our comprehensive recruitment AI agency solutions cover everything from candidate reactivation and 
            interview summarization to ATS automation and onboarding processes. Each tool is designed to integrate 
            seamlessly with your existing recruiting workflow, reducing manual tasks while improving candidate 
            experience and placement quality. Whether you're a staffing agency or in-house recruiting team, 
            our AI automations help you work smarter, not harder.
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={scrollToContact}
            className="btn-primary text-lg px-8 py-4 hover-lift"
          >
            Request Demo
          </button>
          <p className="text-dark-text-muted text-sm mt-4">
            See how these automations can transform your recruiting process
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
