import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Users, Target, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About SwiftShip | Global Logistics Company',
  description: 'Learn about SwiftShip, a leading international logistics provider with 20+ years of experience serving businesses worldwide.',
}

export default function AboutPage() {
  const stats = [
    { number: '20+', label: 'Years in Business' },
    { number: '500+', label: 'Team Members' },
    { number: '50K+', label: 'Annual Shipments' },
    { number: '180+', label: 'Countries Served' },
  ]

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every shipment and customer interaction.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Your success is our success. We work closely with our clients as partners.',
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'Continuous improvement and adoption of cutting-edge logistics technology.',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About SwiftShip
          </h1>
          <p className="text-lg text-muted-foreground">
            Leading the logistics industry with innovation, reliability, and customer-first service.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Story</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              SwiftShip was founded in 2003 with a simple mission: to make international logistics accessible and reliable for businesses of all sizes. What started as a small operation with a handful of employees has grown into a global logistics powerhouse.
            </p>
            <p>
              Over the past two decades, we've built a reputation for excellence by combining industry expertise with innovative technology. Our commitment to customer service and operational efficiency has earned us partnerships with thousands of companies worldwide.
            </p>
            <p>
              Today, SwiftShip operates a global network spanning 180+ countries with state-of-the-art facilities, advanced tracking systems, and a dedicated team of logistics professionals. We continue to invest in technology and talent to deliver the best possible service.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-card rounded-lg border border-border">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Global Team</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Our diverse team of 500+ professionals brings together years of expertise in logistics, supply chain management, technology, and customer service. We operate distribution centers and offices in major cities worldwide, ensuring local expertise with global standards.
          </p>
          <div className="bg-card border border-border rounded-lg p-8">
            <p className="text-muted-foreground mb-4">
              We're committed to building an inclusive workplace where every team member can grow and contribute. Whether you're passionate about logistics, technology, or customer service, we'd love to hear from you.
            </p>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              View Career Opportunities <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience SwiftShip?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Contact our team today to discuss your logistics needs.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Get in Touch <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
