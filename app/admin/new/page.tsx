import { redirect } from "next/navigation"
import type { Metadata } from "next"

import { PostEditor } from "@/components/admin/post-editor"
import { checkAuth } from "@/lib/auth"

export const metadata: Metadata = {
  title: "Create New Post | Admin Dashboard",
  description: "Create a new blog post",
}

export default async function NewPostPage() {
  const isAuthenticated = await checkAuth()

  if (!isAuthenticated) {
    redirect("/admin/login")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold font-serif mb-8">Create New Post</h1>
      <PostEditor />
    </div>
  )
}
