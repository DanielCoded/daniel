"use server"

import { revalidatePath } from "next/cache"

export async function uploadProject(formData: FormData) {
  // Simulate saving to a database
  const title = formData.get("title")
  const description = formData.get("description")
  const category = formData.get("category")
  const image = formData.get("image")

  // In a real application, you would save this data to a database
  // and handle file uploads to a storage service

  console.log("New project:", { title, description, category, image })

  // Revalidate the projects page to show the new project
  revalidatePath("/projects")

  return { success: true, message: "Project uploaded successfully" }
}

