import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution built with React and Node.js',
    category: 'Software Development',
    image: '/placeholder.svg',
    details: 'This e-commerce platform features user authentication, product catalog, shopping cart, and secure checkout process. Built with React for the frontend and Node.js for the backend, it demonstrates my ability to create complex, full-stack applications.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API']
  },
  {
    id: 2,
    title: 'Corporate Promo Video',
    description: 'An engaging promotional video for a tech startup',
    category: 'Video Editing',
    image: '/placeholder.svg',
    details: 'This promotional video showcases the key features and benefits of a tech startup's product. Using a combination of live footage, motion graphics, and carefully selected music, the video effectively communicates the company's value proposition.',
    technologies: ['Adobe Premiere Pro', 'After Effects', 'Audition']
  },
  {
    id: 3,
    title: 'Brand Identity Design',
    description: 'Complete brand identity package for a local business',
    category: 'Graphic Design',
    image: '/placeholder.svg',
    details: 'This comprehensive brand identity project included logo design, color palette selection, typography choices, and the creation of various branded materials such as business cards, letterheads, and social media assets.',
    technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign']
  },
]

export default function Project({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === parseInt(params.id))

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">{project.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={project.image} alt={project.title} className="w-full h-auto rounded-lg mb-4" />
          <p className="text-lg mb-4">{project.description}</p>
          <p className="mb-4">{project.details}</p>
          <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
          <ul className="list-disc list-inside mb-4">
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Project Highlights</h2>
          {/* Add project-specific highlights or features here */}
          <p className="mb-4">
            This project showcases my skills in {project.category}. It demonstrates my ability to [add specific skills or achievements related to this project].
          </p>
          <Button asChild>
            <Link href="/projects">Back to Projects</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

