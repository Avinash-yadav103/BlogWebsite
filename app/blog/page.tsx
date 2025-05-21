import type { Metadata } from "next"

import { BlogCard } from "@/components/blog-card"
import { SearchBar } from "@/components/search-bar"
import { CategoryFilter } from "@/components/category-filter"
import { getAllPosts } from "@/lib/blog-data"

export const metadata: Metadata = {
  title: "Blog | My Personal Blog",
  description: "Browse all blog posts",
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold font-serif mb-6">All Articles</h1>
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <SearchBar />
          <CategoryFilter />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
