import Link from "next/link"
import { Facebook, Instagram, Twitter, Github } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t py-12 md:py-16">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <h3 className="text-lg font-bold font-serif">My Blog</h3>
          <p className="text-sm text-muted-foreground">
            A personal blog about technology, design, and everything in between.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-bold font-serif">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="text-muted-foreground hover:text-foreground">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-foreground">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-bold font-serif">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog?category=technology" className="text-muted-foreground hover:text-foreground">
                Technology
              </Link>
            </li>
            <li>
              <Link href="/blog?category=design" className="text-muted-foreground hover:text-foreground">
                Design
              </Link>
            </li>
            <li>
              <Link href="/blog?category=development" className="text-muted-foreground hover:text-foreground">
                Development
              </Link>
            </li>
            <li>
              <Link href="/blog?category=lifestyle" className="text-muted-foreground hover:text-foreground">
                Lifestyle
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-bold font-serif">Subscribe</h3>
          <p className="mb-4 text-sm text-muted-foreground">Subscribe to our newsletter to get updates on new posts.</p>
          <form className="space-y-2">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <button
              type="submit"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="container mt-8 border-t pt-8">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} My Blog. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
