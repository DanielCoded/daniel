"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await addDoc(collection(db, 'messages'), {
        ...formData,
        createdAt: new Date()
      })
      setSubmitMessage('Thank you for your message. I will get back to you soon!')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitMessage('There was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
        >
          Get in Touch
        </motion.h1>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-lg rounded-lg p-8"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-white mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/5 text-white border border-white/20 focus:outline-none focus:border-purple-400"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-white mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/5 text-white border border-white/20 focus:outline-none focus:border-purple-400"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-white mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-white/5 text-white border border-white/20 focus:outline-none focus:border-purple-400"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
          >
            {isSubmitting ? 'Sending...' : (
              <>
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </>
            )}
          </button>
          {submitMessage && (
            <p className="mt-4 text-green-400 text-center">{submitMessage}</p>
          )}
        </motion.form>
      </div>
    </div>
  )
}

