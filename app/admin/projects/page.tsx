"use client"

import { useState, useEffect } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface Project {
  id: string;
  name: string;
  description: string;
  photoUrl: string;
  projectLink: string;
}

export default function ManageProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [newProject, setNewProject] = useState({ name: '', description: '', photoUrl: '', projectLink: '' });
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const projectsCollection = collection(db, 'projects');
    const projectsSnapshot = await getDocs(projectsCollection);
    const projectsList = projectsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Project));
    setProjects(projectsList);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (editingProject) {
      setEditingProject({ ...editingProject, [name]: value });
    } else {
      setNewProject({ ...newProject, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProject) {
      await updateDoc(doc(db, 'projects', editingProject.id), editingProject);
      setEditingProject(null);
    } else {
      await addDoc(collection(db, 'projects'), newProject);
      setNewProject({ name: '', description: '', photoUrl: '', projectLink: '' });
    }
    fetchProjects();
  };

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, 'projects', id));
    fetchProjects();
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
  };

  return (
    <AdminLayout>
      <h1 className="text-3xl font-semibold mb-6">Manage Projects</h1>
      <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">{editingProject ? 'Edit Project' : 'Add New Project'}</h2>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={editingProject ? editingProject.name : newProject.name}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              id="description"
              required
              value={editingProject ? editingProject.description : newProject.description}
              onChange={handleInputChange}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            ></textarea>
          </div>
          <div>
            <label htmlFor="photoUrl" className="block text-sm font-medium text-gray-700">Photo URL</label>
            <input
              type="url"
              name="photoUrl"
              id="photoUrl"
              required
              value={editingProject ? editingProject.photoUrl : newProject.photoUrl}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="projectLink" className="block text-sm font-medium text-gray-700">Project Link</label>
            <input
              type="url"
              name="projectLink"
              id="projectLink"
              required
              value={editingProject ? editingProject.projectLink : newProject.projectLink}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>
        <div className="mt-6">
          <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            {editingProject ? 'Update Project' : 'Add Project'}
          </button>
          {editingProject && (
            <button
              type="button"
              onClick={() => setEditingProject(null)}
              className="ml-3 inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {projects.map((project) => (
            <li key={project.id}>
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-indigo-600 truncate">{project.name}</h3>
                  <div className="ml-2 flex-shrink-0 flex">
                    <button
                      onClick={() => handleEdit(project)}
                      className="mr-2 font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(project.id)}
                      className="font-medium text-red-600 hover:text-red-500"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <p className="mt-1 text-sm text-gray-600">{project.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </AdminLayout>
  );
}

