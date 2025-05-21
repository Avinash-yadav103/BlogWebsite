import Image from "next/image"
import Link from "next/link"
import { CalendarDays, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { formatDate } from "@/lib/utils"
import type { Post } from "@/lib/types"

interface FeaturedPostProps {
  post: Post
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <article className="grid gap-4 md:grid-cols-2 md:gap-8 rounded-lg border overflow-hidden">
      <div className="relative h-64 md:h-full min-h-[300px] overflow-hidden">
        <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        <div className="absolute top-4 left-4 rounded bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
          {post.category}
        </div>
      </div>

      <div className="flex flex-col justify-center p-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
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

        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">{post.title}</h2>
        <p className="text-muted-foreground mb-6">{post.excerpt}</p>

        <Link href={`/blog/${post.slug}`} passHref>
          <Button className="w-fit font-serif">Read Article</Button>
        </Link>
      </div>
    </article>
  )
}
