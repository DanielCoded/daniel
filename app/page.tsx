"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Code, Video, PenTool } from 'lucide-react'
import Link from 'next/link'

const skills = [
  { title: "Software Development", icon: Code, color: "text-blue-400" },
  { title: "Video Editing", icon: Video, color: "text-green-400" },
  { title: "Graphic Design", icon: PenTool, color: "text-purple-400" }
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="flex items-center justify-center px-6 py-20 h-screen">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Daniel Oche Ochowechi
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Creative Professional
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Crafting digital experiences through code, motion, and design.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href="/skills"
                className="inline-flex items-center px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors group"
              >
                Explore My Skills
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-gradient-to-br from-purple-500 to-blue-500 opacity-20 blur-2xl absolute inset-0" />
            <img
              src="/placeholder.svg"
              alt="Creative Work Visualization"
              className="relative z-10 w-full h-auto rounded-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-black/30">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
          >
            My Expertise
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:shadow-lg transition-all duration-300"
              >
                <skill.icon className={`w-12 h-12 ${skill.color} mb-4`} />
                <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
                <p className="text-gray-300">
                  Expert in {skill.title.toLowerCase()} with years of experience in creating impactful digital solutions.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Ready to bring your ideas to life?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-8"
          >
            Let's collaborate and create something amazing together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors group"
            >
              Get in Touch
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

