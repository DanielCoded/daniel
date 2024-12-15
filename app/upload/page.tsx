"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { uploadProject } from "../actions/uploadProject"

export default function UploadProject() {
  const [uploading, setUploading] = useState(false)
  const router = useRouter()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setUploading(true)

    const formData = new FormData(event.currentTarget)
    const response = await uploadProject(formData)

    setUploading(false)

    if (response.success) {
      router.push("/projects")
    } else {
      alert("Failed to upload project")
    }
  }

  return (
    <div className="container mx-auto max-w-2xl py-20">
      <h1 className="text-3xl font-bold mb-8">Upload New Project</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block mb-2">Project Title</label>
          <Input id="title" name="title" required />
        </div>
        <div>
          <label htmlFor="description" className="block mb-2">Description</label>
          <Textarea id="description" name="description" required />
        </div>
        <div>
          <label htmlFor="category" className="block mb-2">Category</label>
          <Select name="category">
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Software Development">Software Development</SelectItem>
              <SelectItem value="Video Editing">Video Editing</SelectItem>
              <SelectItem value="Graphic Design">Graphic Design</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="image" className="block mb-2">Project Image</label>
          <Input id="image" name="image" type="file" accept="image/*" required />
        </div>
        <Button type="submit" disabled={uploading}>
          {uploading ? "Uploading..." : "Upload Project"}
        </Button>
      </form>
    </div>
  )
}

