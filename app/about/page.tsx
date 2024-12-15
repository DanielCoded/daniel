"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
        >
          About Me
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/placeholder.svg"
              alt="Daniel Oche Ochowechi"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-gray-300 mb-6">
              Hello! I'm Daniel Oche Ochowechi, a passionate creative professional with a diverse skill set spanning software development, video editing, and graphic design. My journey in the world of technology and creativity has equipped me with a unique perspective that allows me to approach projects holistically.
            </p>
            <p className="text-gray-300 mb-6">
              With a strong foundation in software development, I bring ideas to life through clean, efficient code. My experience in video editing allows me to craft compelling visual narratives, while my graphic design skills ensure that every project not only functions flawlessly but looks stunning as well.
            </p>
            <p className="text-gray-300 mb-6">
              I believe in the power of continuous learning and staying updated with the latest technologies and design trends. This commitment to growth enables me to deliver cutting-edge solutions that meet and exceed client expectations.
            </p>
            <p className="text-gray-300">
              When I'm not coding, editing videos, or designing, you can find me exploring new technologies, contributing to open-source projects, or seeking inspiration in art and nature.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

