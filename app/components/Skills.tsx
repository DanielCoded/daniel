import { Code, Video, PenTool } from 'lucide-react'

const skills = [
  {
    title: "Software Development",
    icon: Code,
    description: "Proficient in various programming languages and frameworks, with a focus on creating efficient and scalable applications."
  },
  {
    title: "Video Editing",
    icon: Video,
    description: "Experienced in crafting compelling visual narratives through expert video editing techniques and industry-standard software."
  },
  {
    title: "Graphic Design",
    icon: PenTool,
    description: "Skilled in creating visually stunning designs that effectively communicate ideas and captivate audiences."
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <skill.icon className="w-12 h-12 mb-4 text-indigo-600" />
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

