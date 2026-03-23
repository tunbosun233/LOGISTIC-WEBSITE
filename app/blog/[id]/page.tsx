"use client";

import Link from 'next/link'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import { useEffect, useState } from 'react'

interface Props {
  params: {
    id: string
  }
}

export default function BlogArticlePage({ params }: Props) {
  const [currentUrl, setCurrentUrl] = useState('')

  useEffect(() => {
    setCurrentUrl(window.location.href)
  }, [])

  // Mock article data
  const articles: Record<string, any> = {
    '1': {
      title: 'The Future of International Shipping: What to Expect in 2024',
      author: 'Sarah Johnson',
      date: '2024-03-20',
      category: 'Industry News',
      readTime: '5 min read',
      content: `
        The logistics industry is undergoing rapid transformation, driven by technological innovation, changing consumer expectations, and evolving global trade patterns. As we move into 2024, several key trends are shaping the future of international shipping.

        ## AI and Automation

        Artificial intelligence and automation are revolutionizing how companies manage their supply chains. From route optimization to predictive maintenance, AI-powered solutions are helping logistics companies reduce costs and improve efficiency.

        ## Sustainability

        Environmental concerns are pushing the industry toward greener solutions. Companies are increasingly investing in electric vehicles, sustainable packaging, and carbon-neutral shipping options.

        ## Real-Time Visibility

        Modern supply chains demand real-time visibility. Advanced tracking systems using GPS, IoT sensors, and blockchain technology provide unprecedented transparency throughout the shipping journey.

        ## Conclusion

        The future of international shipping is bright, with technology enabling faster, cheaper, and more sustainable logistics solutions than ever before.
      `,
    },
    '2': {
      title: 'How to Optimize Your Supply Chain Costs',
      author: 'Michael Chen',
      date: '2024-03-18',
      category: 'Tips & Advice',
      readTime: '7 min read',
      content: `
        Supply chain costs can quickly spiral out of control if not properly managed. Here are practical strategies to optimize your shipping expenses without sacrificing quality.

        ## Consolidate Shipments

        Combining smaller shipments into larger ones can significantly reduce per-unit shipping costs.

        ## Negotiate Rates

        Don't accept the first quote. Work with multiple providers and negotiate volume discounts.

        ## Choose the Right Service Level

        Not every shipment needs overnight delivery. Analyzing which items need fast shipping can help reduce costs.

        ## Implement Technology

        Modern logistics software can help you identify inefficiencies and optimize routes in real-time.

        ## Build Partnerships

        Long-term relationships with reliable shipping partners often result in better rates and service.
      `,
    },
  }

  const article = articles[params.id]

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Article Not Found</h1>
          <Link href="/blog" className="text-primary hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  const handleShare = (platform: 'twitter' | 'linkedin') => {
    const text = encodeURIComponent(article.title)
    const url = encodeURIComponent(currentUrl)
    
    if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank')
    } else {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank')
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="text-primary hover:text-primary/80 mb-4 inline-flex items-center gap-1">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-1">
              <User size={16} />
              {article.author}
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              {new Date(article.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              {article.category}
            </span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-sm max-w-none text-muted-foreground">
            <div className="whitespace-pre-line leading-relaxed">
              {article.content}
            </div>
          </article>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-2">About the Author</h3>
            <p className="text-muted-foreground">
              {article.author} is a logistics expert with over 10 years of experience in the shipping industry.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm font-semibold text-foreground mb-4">Share this article:</p>
            <div className="flex gap-4">
              <button 
                onClick={() => handleShare('twitter')}
                className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors text-sm font-medium text-foreground"
              >
                Share on Twitter
              </button>
              <button 
                onClick={() => handleShare('linkedin')}
                className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors text-sm font-medium text-foreground"
              >
                Share on LinkedIn
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/blog/2" className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
              <h3 className="text-lg font-semibold text-foreground hover:text-primary mb-2">
                How to Optimize Your Supply Chain Costs
              </h3>
              <p className="text-sm text-muted-foreground">Michael Chen • 7 min read</p>
            </Link>
            <Link href="/blog/1" className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
              <h3 className="text-lg font-semibold text-foreground hover:text-primary mb-2">
                The Future of International Shipping
              </h3>
              <p className="text-sm text-muted-foreground">Sarah Johnson • 5 min read</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Improve Your Logistics?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Let's help you implement these strategies in your business.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}