import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Daniel Oche Ochowechi</Link>
        <ul className="flex space-x-4">
          <li><Link href="/#about">About</Link></li>
          <li><Link href="/#skills">Skills</Link></li>
          <li><Link href="/#projects">Projects</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

