import Image from "next/image"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CalendarDays, Clock, Share2, Tag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getPostBySlug, getAllPosts } from "@/lib/blog-data"
import { formatDate } from "@/lib/utils"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found",
    }
  }

  return {
    title: `${post.title} | My Blog`,
    description: post.excerpt,
    openGraph: {
      images: [{ url: post.coverImage }],
    },
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span className="font-medium">{post.category}</span>
          <span>•</span>
          <span className="flex items-center">
            <CalendarDays className="mr-1 h-4 w-4" />
            {formatDate(post.date)}
          </span>
          <span>•</span>
          <span className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            {post.readingTime} min read
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6">{post.title}</h1>

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Avatar className="h-10 w-10 mr-3">
              <AvatarImage src="/placeholder.svg" alt={post.author.name} />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{post.author.name}</p>
              <p className="text-sm text-muted-foreground">{post.author.title}</p>
            </div>
          </div>

          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>
      </div>

      <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
        <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
      </div>

      <div
        className="blog-content prose prose-lg max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className="mt-8 pt-8 border-t">
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <div key={tag} className="flex items-center bg-secondary px-3 py-1 rounded-full text-sm">
              <Tag className="mr-1 h-4 w-4" />
              {tag}
            </div>
          ))}
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <div className="flex items-center gap-4 mb-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/placeholder.svg" alt={post.author.name} />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-bold font-serif">{post.author.name}</p>
              <p className="text-sm text-muted-foreground">{post.author.title}</p>
            </div>
          </div>
          <p className="text-sm">{post.author.bio}</p>
        </div>
      </div>
    </article>
  )
}
