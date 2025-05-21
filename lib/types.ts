export interface Author {
  name: string
  title: string
  bio: string
}

export interface Post {
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  date: string
  author: Author
  category: string
  tags: string[]
  readingTime: number
}
