import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { BlogCard } from "@/components/blog-card"
import { SearchBar } from "@/components/search-bar"
import { FeaturedPost } from "@/components/featured-post"
import { getAllPosts } from "@/lib/blog-data"

export default async function Home() {
  const posts = await getAllPosts()
  const featuredPost = posts[0]
  const recentPosts = posts.slice(1, 7)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4 md:mb-0">Latest Articles</h1>
          <SearchBar />
        </div>
        <div className="h-px bg-border w-full my-4" />
      </div>

      {featuredPost && <FeaturedPost post={featuredPost} />}

      <div className="my-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold font-serif">Recent Articles</h2>
          <Link href="/blog" passHref>
            <Button variant="link" className="font-serif">
              View all articles <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>

      <div className="my-12 p-8 border rounded-lg bg-muted/50">
        <h2 className="text-2xl font-bold font-serif mb-4">Subscribe to the Newsletter</h2>
        <p className="mb-4 text-muted-foreground">Get the latest posts delivered right to your inbox.</p>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="Your email address"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
          <Button className="font-serif">Subscribe</Button>
        </div>
      </div>
    </div>
  )
}
