"use client"

import { useState, useEffect } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export default function ViewMessages() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const messagesCollection = collection(db, 'messages');
    const messagesSnapshot = await getDocs(messagesCollection);
    const messagesList = messagesSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt.toDate().toLocaleString()
    } as Message));
    setMessages(messagesList);
  };

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, 'messages', id));
    fetchMessages();
  };

  return (
    <AdminLayout>
      <h1 className="text-3xl font-semibold mb-6">View Messages</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {messages.map((message) => (
            <li key={message.id}>
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-indigo-600 truncate">{message.name}</h3>
                  <div className="ml-2 flex-shrink-0 flex">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {message.email}
                    </span>
                    <button
                      onClick={() => handleDelete(message.id)}
                      className="ml-2 font-medium text-red-600 hover:text-red-500"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <p className="mt-1 text-sm text-gray-600">{message.message}</p>
                <p className="mt-1 text-xs text-gray-500">{message.createdAt}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </AdminLayout>
  );
}

