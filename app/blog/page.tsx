import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, User } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog | SwiftShip Logistics',
  description: 'Latest news, tips, and insights about international shipping and logistics.',
}

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  readTime: string
}

export default function BlogPage() {
  const posts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of International Shipping: What to Expect in 2024',
      excerpt: 'Discover emerging technologies and trends that are reshaping the global logistics industry.',
      content: 'Lorem ipsum dolor sit amet...',
      author: 'Sarah Johnson',
      date: '2024-03-20',
      category: 'Industry News',
      readTime: '5 min read',
    },
    {
      id: '2',
      title: 'How to Optimize Your Supply Chain Costs',
      excerpt: 'Practical tips to reduce shipping expenses while maintaining quality and speed.',
      content: 'Lorem ipsum dolor sit amet...',
      author: 'Michael Chen',
      date: '2024-03-18',
      category: 'Tips & Advice',
      readTime: '7 min read',
    },
    {
      id: '3',
      title: 'Understanding Customs Clearance Procedures',
      excerpt: 'A comprehensive guide to navigating international customs requirements.',
      content: 'Lorem ipsum dolor sit amet...',
      author: 'Emma Davis',
      date: '2024-03-15',
      category: 'Guides',
      readTime: '8 min read',
    },
    {
      id: '4',
      title: 'Case Study: How XYZ Company Reduced Shipping Times by 40%',
      excerpt: 'Learn how our logistics solutions helped a leading e-commerce company scale faster.',
      content: 'Lorem ipsum dolor sit amet...',
      author: 'James Wilson',
      date: '2024-03-12',
      category: 'Case Studies',
      readTime: '6 min read',
    },
    {
      id: '5',
      title: 'Sustainability in Logistics: Our Green Shipping Initiative',
      excerpt: 'Discover how SwiftShip is working towards carbon-neutral shipping solutions.',
      content: 'Lorem ipsum dolor sit amet...',
      author: 'Rachel Green',
      date: '2024-03-10',
      category: 'Sustainability',
      readTime: '5 min read',
    },
    {
      id: '6',
      title: 'Top 5 Common Shipping Mistakes and How to Avoid Them',
      excerpt: 'Don\'t let preventable errors impact your business. Learn from these common pitfalls.',
      content: 'Lorem ipsum dolor sit amet...',
      author: 'David Park',
      date: '2024-03-08',
      category: 'Tips & Advice',
      readTime: '6 min read',
    },
  ]

  const categories = Array.from(new Set(posts.map(p => p.category)))

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Logistics Insights & News
          </h1>
          <p className="text-lg text-muted-foreground">
            Stay updated with the latest industry trends, shipping tips, and insights from SwiftShip.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {posts.map((post) => (
                  <article
                    key={post.id}
                    className="border-b border-border pb-8 last:border-0"
                  >
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-3">
                        {post.category}
                      </span>
                      <h2 className="text-2xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer mb-3">
                        <Link href={`/blog/${post.id}`}>
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <User size={16} />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </div>
                      <span>{post.readTime}</span>
                    </div>

                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                    >
                      Read Article <ArrowRight size={18} />
                    </Link>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Categories */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className="block w-full text-left px-3 py-2 rounded-lg hover:bg-primary/10 hover:text-primary text-muted-foreground transition-colors"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-sm opacity-90 mb-4">
                  Get the latest shipping tips and industry insights delivered to your inbox.
                </p>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-3 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/70 focus:outline-none focus:border-primary-foreground/40"
                  />
                  <button
                    type="submit"
                    className="w-full px-3 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Popular Articles */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Popular Articles</h3>
                <div className="space-y-4">
                  {posts.slice(0, 3).map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.id}`}
                      className="block hover:text-primary transition-colors"
                    >
                      <p className="text-sm font-medium text-foreground hover:text-primary">
                        {post.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Improve Your Shipping Strategy?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Our experts can help you optimize your logistics operations.
          </p>
          <Link
            href="/quote"
            className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Get Started <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
