import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Daniel Oche Ochowechi</h1>
        <p className="text-xl mb-8">Software Developer | Video Editor | Graphic Designer</p>
        <Button asChild>
          <a href="#contact">Get in Touch</a>
        </Button>
      </div>
    </section>
  )
}

