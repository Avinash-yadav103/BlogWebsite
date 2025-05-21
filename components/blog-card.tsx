import Image from "next/image"
import Link from "next/link"
import { CalendarDays, Clock } from "lucide-react"

import { formatDate } from "@/lib/utils"
import type { Post } from "@/lib/types"

interface BlogCardProps {
  post: Post
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md">
      <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-10">
        <span className="sr-only">View {post.title}</span>
      </Link>

      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.coverImage || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 left-2 rounded bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
          {post.category}
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <h3 className="font-serif text-xl font-bold leading-tight mb-2">{post.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{post.excerpt}</p>
        </div>

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center">
            <CalendarDays className="mr-1 h-3 w-3" />
            {formatDate(post.date)}
          </div>
          <div className="flex items-center">
            <Clock className="mr-1 h-3 w-3" />
            {post.readingTime} min read
          </div>
        </div>
      </div>
    </article>
  )
}
