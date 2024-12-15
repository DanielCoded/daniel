"use client"

import { motion } from 'framer-motion'
import { Code, Video, PenTool } from 'lucide-react'

const skills = [
  {
    title: "Software Development",
    icon: Code,
    description: "Proficient in various programming languages and frameworks, with a focus on creating efficient and scalable applications.",
    technologies: ["React", "Next.js", "Node.js", "Python", "JavaScript", "TypeScript"]
  },
  {
    title: "Video Editing",
    icon: Video,
    description: "Experienced in crafting compelling visual narratives through expert video editing techniques and industry-standard software.",
    technologies: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Final Cut Pro"]
  },
  {
    title: "Graphic Design",
    icon: PenTool,
    description: "Skilled in creating visually stunning designs that effectively communicate ideas and captivate audiences.",
    technologies: ["Adobe Photoshop", "Illustrator", "InDesign", "Figma", "Sketch"]
  }
]

export default function Skills() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
        >
          My Skills
        </motion.h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              <skill.icon className="w-12 h-12 text-purple-400 mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">{skill.title}</h2>
              <p className="text-gray-300 mb-4">{skill.description}</p>
              <h3 className="text-lg font-semibold text-white mb-2">Technologies:</h3>
              <ul className="list-disc list-inside text-gray-300">
                {skill.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

