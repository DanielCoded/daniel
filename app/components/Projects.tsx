"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    category: "Software Development",
    image: "/placeholder.svg"
  },
  {
    title: "Corporate Promo Video",
    description: "An engaging promotional video for a tech startup",
    category: "Video Editing",
    image: "/placeholder.svg"
  },
  {
    title: "Brand Identity Design",
    description: "Complete brand identity package for a local business",
    category: "Graphic Design",
    image: "/placeholder.svg"
  },
  // Add more projects as needed
]

export default function Projects() {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="flex justify-center space-x-4 mb-8">
          {["All", "Software Development", "Video Editing", "Graphic Design"].map((category) => (
            <Button 
              key={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? "default" : "outline"}
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
                <p>{project.description}</p>
              </CardContent>
              <CardFooter>
                <Button>View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

