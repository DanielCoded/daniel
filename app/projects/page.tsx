"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Project {
  id: string;
  name: string;
  description: string;
  photoUrl: string;
  projectLink: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsCollection = collection(db, 'projects');
      const projectsSnapshot = await getDocs(projectsCollection);
      const projectsList = projectsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Project));
      setProjects(projectsList);
    };

    fetchProjects();
  }, []);

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="bg-black/30 backdrop-blur-lg border-purple-500 hover:border-blue-400 transition-all transform hover:scale-105">
            <CardHeader>
              <CardTitle className="text-purple-400">{project.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={project.photoUrl} alt={project.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <p className="text-gray-300">{project.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-colors">
                <a href={project.projectLink} target="_blank" rel="noopener noreferrer">View Project</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

