import type { Post } from "./types"

// This is a mock database - in a real app, you would use a database
let posts: Post[] = [
  {
    title: "Getting Started with Next.js 14",
    slug: "getting-started-with-nextjs-14",
    excerpt: "Learn how to build modern web applications with Next.js 14, the React framework for production.",
    content: `
      <h2>Introduction to Next.js 14</h2>
      <p>Next.js is a React framework that enables server-side rendering, static site generation, and more. Version 14 brings significant improvements to the developer experience and performance.</p>
      
      <h3>Key Features</h3>
      <p>Here are some of the key features that make Next.js 14 stand out:</p>
      <ul>
        <li>Improved App Router</li>
        <li>Server Components</li>
        <li>Streaming</li>
        <li>Turbopack (beta)</li>
        <li>Enhanced Image Optimization</li>
      </ul>
      
      <h3>Getting Started</h3>
      <p>To create a new Next.js 14 project, run the following command:</p>
      <pre><code>npx create-next-app@latest my-app</code></pre>
      
      <p>This will set up a new Next.js project with all the latest features. Follow the prompts to configure your project according to your preferences.</p>
      
      <h3>Conclusion</h3>
      <p>Next.js 14 represents a significant step forward in the evolution of React frameworks. Its focus on performance, developer experience, and modern web standards makes it an excellent choice for building production-ready applications.</p>
    `,
    coverImage: "/placeholder.svg",
    date: "2023-11-15T12:00:00Z",
    author: {
      name: "John Doe",
      title: "Frontend Developer",
      bio: "John is a frontend developer with a passion for React and Next.js. He loves sharing his knowledge with the community.",
    },
    category: "development",
    tags: ["nextjs", "react", "javascript", "web-development"],
    readingTime: 5,
  },
  {
    title: "Mastering CSS Grid Layout",
    slug: "mastering-css-grid-layout",
    excerpt: "A comprehensive guide to CSS Grid Layout, with practical examples and best practices.",
    content: `
      <h2>Understanding CSS Grid Layout</h2>
      <p>CSS Grid Layout is a two-dimensional layout system designed for the web. It lets you lay out items in rows and columns, and has many features that make building complex layouts straightforward.</p>
      
      <h3>Basic Concepts</h3>
      <p>To get started with CSS Grid, you need to understand a few key concepts:</p>
      <ul>
        <li>Grid Container: The element on which <code>display: grid</code> is applied</li>
        <li>Grid Items: The children of the grid container</li>
        <li>Grid Lines: The horizontal and vertical lines that divide the grid</li>
        <li>Grid Tracks: The space between two adjacent grid lines (rows or columns)</li>
        <li>Grid Cell: The intersection of a row and a column</li>
        <li>Grid Area: A rectangular area bounded by four grid lines</li>
      </ul>
      
      <h3>Creating a Basic Grid</h3>
      <p>Here's how to create a simple grid with three columns and two rows:</p>
      <pre><code>.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 200px;
  gap: 20px;
}</code></pre>
      
      <h3>Advanced Techniques</h3>
      <p>CSS Grid becomes even more powerful when you start using features like:</p>
      <ul>
        <li>minmax() function</li>
        <li>auto-fill and auto-fit</li>
        <li>grid-template-areas</li>
        <li>grid-auto-flow</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>CSS Grid Layout has revolutionized how we build layouts on the web. With its two-dimensional approach and powerful features, it's an essential tool in every web developer's toolkit.</p>
    `,
    coverImage: "/placeholder.svg",
    date: "2023-10-28T10:30:00Z",
    author: {
      name: "Jane Smith",
      title: "CSS Specialist",
      bio: "Jane is a CSS enthusiast who loves creating beautiful and responsive web designs. She regularly writes about modern CSS techniques.",
    },
    category: "design",
    tags: ["css", "web-design", "layout", "responsive-design"],
    readingTime: 8,
  },
  {
    title: "The Future of AI in Web Development",
    slug: "future-of-ai-in-web-development",
    excerpt:
      "Explore how artificial intelligence is transforming the field of web development and what it means for developers.",
    content: `
      <h2>AI's Growing Role in Web Development</h2>
      <p>Artificial Intelligence is rapidly changing how we approach web development. From code generation to design assistance, AI tools are becoming an integral part of the development workflow.</p>
      
      <h3>Code Generation and Assistance</h3>
      <p>AI-powered tools like GitHub Copilot and ChatGPT are revolutionizing how developers write code. These tools can:</p>
      <ul>
        <li>Suggest code completions based on context</li>
        <li>Generate entire functions or components</li>
        <li>Help debug existing code</li>
        <li>Explain complex code snippets</li>
      </ul>
      
      <h3>Design and User Experience</h3>
      <p>AI is also making significant inroads in web design:</p>
      <ul>
        <li>Generating design mockups based on text descriptions</li>
        <li>Creating personalized user experiences</li>
        <li>Optimizing layouts for better conversion rates</li>
        <li>Automating responsive design adjustments</li>
      </ul>
      
      <h3>Performance Optimization</h3>
      <p>AI algorithms are increasingly being used to optimize website performance:</p>
      <ul>
        <li>Predictive loading of resources</li>
        <li>Automated image and asset optimization</li>
        <li>Smart caching strategies</li>
        <li>Performance bottleneck identification</li>
      </ul>
      
      <h3>The Future Landscape</h3>
      <p>As AI continues to evolve, we can expect even deeper integration with web development workflows. However, this doesn't mean developers will become obsolete. Instead, the role will shift toward higher-level problem-solving, creativity, and AI prompt engineering.</p>
      
      <h3>Conclusion</h3>
      <p>The fusion of AI and web development is creating exciting new possibilities. Developers who embrace these tools and adapt their workflows will be well-positioned to thrive in this new landscape.</p>
    `,
    coverImage: "/placeholder.svg",
    date: "2023-11-05T14:15:00Z",
    author: {
      name: "Alex Johnson",
      title: "Tech Futurist",
      bio: "Alex specializes in emerging technologies and their impact on software development. He has been working with AI tools since their early days.",
    },
    category: "technology",
    tags: ["ai", "machine-learning", "web-development", "future-tech"],
    readingTime: 10,
  },
  {
    title: "Building a Personal Brand as a Developer",
    slug: "building-personal-brand-as-developer",
    excerpt: "Learn how to establish your personal brand as a developer and stand out in a competitive industry.",
    content: `
      <h2>Why Personal Branding Matters for Developers</h2>
      <p>In today's competitive tech landscape, technical skills alone aren't enough to stand out. Building a personal brand helps you showcase your expertise, connect with opportunities, and establish yourself as an authority in your field.</p>
      
      <h3>Define Your Unique Value Proposition</h3>
      <p>Start by identifying what makes you unique as a developer:</p>
      <ul>
        <li>What technologies or domains are you passionate about?</li>
        <li>What problems do you enjoy solving?</li>
        <li>What perspective do you bring that others might not?</li>
        <li>What's your coding philosophy or approach?</li>
      </ul>
      
      <h3>Create and Share Valuable Content</h3>
      <p>Content creation is one of the most effective ways to build your brand:</p>
      <ul>
        <li>Start a technical blog</li>
        <li>Contribute to open source projects</li>
        <li>Share insights on social media</li>
        <li>Speak at meetups or conferences</li>
        <li>Create tutorials or courses</li>
      </ul>
      
      <h3>Build a Professional Online Presence</h3>
      <p>Establish your digital footprint:</p>
      <ul>
        <li>Create a personal website or portfolio</li>
        <li>Maintain an up-to-date GitHub profile</li>
        <li>Be active on platforms like Twitter, LinkedIn, or Dev.to</li>
        <li>Engage thoughtfully in developer communities</li>
      </ul>
      
      <h3>Network Strategically</h3>
      <p>Connect with others in your field:</p>
      <ul>
        <li>Attend industry events and conferences</li>
        <li>Participate in online communities</li>
        <li>Offer help and mentorship</li>
        <li>Collaborate on projects with other developers</li>
      </ul>
      
      <h3>Consistency is Key</h3>
      <p>Building a personal brand takes time and consistency. Focus on steady progress rather than overnight success. Stay authentic and true to your values throughout the process.</p>
      
      <h3>Conclusion</h3>
      <p>A strong personal brand can open doors to new opportunities, help you build valuable connections, and establish you as a thought leader in your area of expertise. Start small, be consistent, and let your unique perspective shine through.</p>
    `,
    coverImage: "/placeholder.svg",
    date: "2023-10-12T09:45:00Z",
    author: {
      name: "Sarah Chen",
      title: "Developer Advocate",
      bio: "Sarah helps developers build their personal brands and connect with opportunities. She has worked with hundreds of developers to enhance their professional presence.",
    },
    category: "lifestyle",
    tags: ["career", "personal-branding", "professional-development", "networking"],
    readingTime: 7,
  },
  {
    title: "Understanding TypeScript Generics",
    slug: "understanding-typescript-generics",
    excerpt: "A deep dive into TypeScript generics and how they can make your code more flexible and reusable.",
    content: `
      <h2>Introduction to TypeScript Generics</h2>
      <p>Generics are one of TypeScript's most powerful features, allowing you to create reusable components that work with a variety of types rather than a single one. They help you build flexible and scalable code while maintaining type safety.</p>
      
      <h3>The Basics of Generics</h3>
      <p>At its core, a generic is a way to pass types as parameters. Here's a simple example:</p>
      <pre><code>function identity&lt;T&gt;(arg: T): T {
  return arg;
}

// Usage
const output = identity&lt;string&gt;("hello"); // Type of output will be 'string'
const output2 = identity(42); // Type inference works too! Type of output2 will be 'number'</code></pre>
      
      <h3>Generic Interfaces and Classes</h3>
      <p>Generics aren't limited to functions. You can use them with interfaces and classes too:</p>
      <pre><code>interface Box&lt;T&gt; {
  contents: T;
}

class Container&lt;T&gt; {
  private item: T;
  
  constructor(item: T) {
    this.item = item;
  }
  
  getItem(): T {
    return this.item;
  }
}</code></pre>
      
      <h3>Constraints on Generics</h3>
      <p>Sometimes you want to limit the types that can be used with your generic. You can do this with constraints:</p>
      <pre><code>interface Lengthwise {
  length: number;
}

function logLength&lt;T extends Lengthwise&gt;(arg: T): T {
  console.log(arg.length); // Now we know it has a .length property
  return arg;
}</code></pre>
      
      <h3>Using Multiple Type Parameters</h3>
      <p>You can use multiple type parameters when needed:</p>
      <pre><code>function pair&lt;T, U&gt;(first: T, second: U): [T, U] {
  return [first, second];
}

const result = pair("hello", 42); // Type is [string, number]</code></pre>
      
      <h3>Real-World Use Cases</h3>
      <p>Generics are especially useful for:</p>
      <ul>
        <li>Creating reusable data structures (like linked lists, trees, etc.)</li>
        <li>Building flexible API clients</li>
        <li>Implementing type-safe event systems</li>
        <li>Creating utility functions that work with various types</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>Mastering generics is a key step in becoming proficient with TypeScript. They enable you to write code that's both flexible and type-safe, reducing the need for type assertions and duplicate code.</p>
    `,
    coverImage: "/placeholder.svg",
    date: "2023-09-28T16:20:00Z",
    author: {
      name: "Michael Park",
      title: "TypeScript Expert",
      bio: "Michael has been working with TypeScript since its early days and loves helping developers write more type-safe code.",
    },
    category: "development",
    tags: ["typescript", "javascript", "programming", "web-development"],
    readingTime: 9,
  },
]

export async function getAllPosts(): Promise<Post[]> {
  // Sort posts by date (newest first)
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  return posts.find((post) => post.slug === slug)
}

export async function savePost(postData: Partial<Post>, isEdit: boolean): Promise<void> {
  // In a real app, this would save to a database
  if (isEdit) {
    // Update existing post
    posts = posts.map((post) => (post.slug === postData.slug ? ({ ...post, ...postData } as Post) : post))
  } else {
    // Create new post
    posts.push(postData as Post)
  }

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return Promise.resolve()
}

export async function deletePost(slug: string): Promise<void> {
  // In a real app, this would delete from a database
  posts = posts.filter((post) => post.slug !== slug)

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return Promise.resolve()
}
