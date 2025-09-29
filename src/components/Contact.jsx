import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    role: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const roles = [
    'Recruiting Manager',
    'Talent Acquisition',
    'HR Director',
    'Staffing Agency Owner',
    'In-house Recruiter',
    'Operations Manager',
    'Other'
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company is required'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    
    try {
      // Simulate form submission - replace with actual Netlify/Formspree endpoint
      await new Promise(resolve => setTimeout(resolve, 1500))
      setIsSubmitted(true)
    } catch (error) {
      console.error('Form submission error:', error)
      // Handle error - could show error message
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      role: '',
      message: ''
    })
    setIsSubmitted(false)
    setErrors({})
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-dark-surface to-dark-bg">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-md mx-auto text-center"
          >
            <div className="bg-dark-surface border border-primary-500 rounded-lg p-8">
              <div className="w-16 h-16 bg-primary-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
              <p className="text-dark-text-secondary mb-6">
                Thanks for your interest! We'll get back to you within 24 hours to schedule your demo.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:info@desiautomations.dev"
                  className="btn-secondary w-full justify-center"
                >
                  Or email us directly
                </a>
                <button
                  onClick={resetForm}
                  className="text-primary-400 hover:text-primary-300 text-sm transition-colors duration-200"
                >
                  Send another message
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-dark-surface to-dark-bg">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Ready to <span className="text-gradient">Transform</span> Your Recruiting?
              </h2>
              <p className="text-lg text-dark-text-secondary mb-8 leading-relaxed">
                Get a personalized 10-minute demo and see how AI automations can streamline your recruiting workflow, 
                reduce time-to-hire, and improve candidate quality.
              </p>

              {/* Benefits List */}
              <div className="space-y-4 mb-8">
                {[
                  'See live automations with your data',
                  'Custom integration planning',
                  'ROI calculation for your team',
                  'No commitment required'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center text-dark-text-secondary">
                    <svg
                      className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0"
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
                  </div>
                ))}
              </div>

              {/* Contact Details */}
              <div className="bg-dark-bg bg-opacity-50 border border-dark-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-dark-text-secondary">
                    <svg className="w-5 h-5 mr-3 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:info@desiautomations.dev" className="hover:text-primary-400 transition-colors duration-200">
                      info@desiautomations.dev
                    </a>
                  </div>
                  <div className="flex items-center text-dark-text-secondary">
                    <svg className="w-5 h-5 mr-3 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <a href="https://www.linkedin.com/in/saurabh-sisodiya-b89367233?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BIYeq3vF%2BTzy0wj8M%2F%2FuHmg%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors duration-200">
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form
                onSubmit={handleSubmit}
                data-netlify="true"
                name="contact"
                method="POST"
                className="bg-dark-surface border border-dark-border rounded-lg p-8"
              >
                {/* Hidden field for Netlify */}
                <input type="hidden" name="form-name" value="contact" />
                
                <h3 className="text-xl font-semibold text-white mb-6">Get Your Demo</h3>
                
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-text-primary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-dark-bg border rounded-md text-white placeholder-dark-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-200 ${
                        errors.name ? 'border-red-500' : 'border-dark-border focus:border-primary-500'
                      }`}
                      placeholder="John Smith"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-dark-text-primary mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-dark-bg border rounded-md text-white placeholder-dark-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-200 ${
                        errors.company ? 'border-red-500' : 'border-dark-border focus:border-primary-500'
                      }`}
                      placeholder="ACME Recruiting"
                    />
                    {errors.company && <p className="text-red-400 text-sm mt-1">{errors.company}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-text-primary mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-dark-bg border rounded-md text-white placeholder-dark-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-200 ${
                        errors.email ? 'border-red-500' : 'border-dark-border focus:border-primary-500'
                      }`}
                      placeholder="john@acmerecruiting.com"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>

                  {/* Role */}
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-dark-text-primary mb-2">
                      Your Role
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    >
                      <option value="">Select your role</option>
                      {roles.map((role) => (
                        <option key={role} value={role}>{role}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark-text-primary mb-2">
                      Tell us about your recruiting challenges *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-dark-bg border rounded-md text-white placeholder-dark-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none transition-colors duration-200 ${
                        errors.message ? 'border-red-500' : 'border-dark-border focus:border-primary-500'
                      }`}
                      placeholder="We're looking to automate our candidate sourcing and improve our time-to-fill..."
                    />
                    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`btn-primary flex-1 justify-center ${
                        isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover-lift'
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                    <a
                      href="mailto:info@desiautomations.dev?subject=Demo Request&body=Hi, I'd like to schedule a demo for Desi Automations."
                      className="btn-secondary flex-1 justify-center hover-lift"
                    >
                      Get Demo
                    </a>
                  </div>

                  <p className="text-dark-text-muted text-xs text-center">
                    We respect your privacy. Your information will only be used to schedule your demo.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
