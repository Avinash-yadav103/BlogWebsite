import { redirect, notFound } from "next/navigation"
import type { Metadata } from "next"

import { PostEditor } from "@/components/admin/post-editor"
import { checkAuth } from "@/lib/auth"
import { getPostBySlug } from "@/lib/blog-data"

interface EditPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: EditPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found",
    }
  }

  return {
    title: `Edit: ${post.title} | Admin Dashboard`,
    description: `Edit blog post: ${post.title}`,
  }
}

export default async function EditPostPage({ params }: EditPostPageProps) {
  const isAuthenticated = await checkAuth()

  if (!isAuthenticated) {
    redirect("/admin/login")
  }

  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold font-serif mb-8">Edit Post</h1>
      <PostEditor post={post} />
    </div>
  )
}
