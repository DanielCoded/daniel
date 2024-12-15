"use client"

import AdminLayout from '@/components/AdminLayout';
import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-semibold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/admin/projects" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Manage Projects</h2>
          <p className="text-gray-600">Add, edit, or delete projects</p>
        </Link>
        <Link href="/admin/messages" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">View Messages</h2>
          <p className="text-gray-600">Check messages from the contact form</p>
        </Link>
      </div>
    </AdminLayout>
  );
}

