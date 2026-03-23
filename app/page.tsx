import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Globe, Zap, Shield, BarChart3, Smartphone, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'SwiftShip - Global Logistics & Shipping Solutions',
  description: 'Reliable and efficient logistics solutions for your business. International shipping, freight services, and real-time tracking. 99.2% on-time delivery.',
  keywords: 'international shipping, logistics, freight services, express delivery, supply chain',
}

export default function Home() {
  const features = [
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Access to 180+ countries with our extensive international shipping network.',
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Express shipping options for time-sensitive shipments worldwide.',
    },
    {
      icon: Shield,
      title: 'Full Protection',
      description: 'Comprehensive insurance coverage and real-time tracking for peace of mind.',
    },
    {
      icon: BarChart3,
      title: 'Cost Effective',
      description: 'Competitive rates with no hidden fees. Transparent pricing always.',
    },
    {
      icon: Smartphone,
      title: 'Easy Integration',
      description: 'Seamless API integration for automated shipping and tracking.',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to assist with any inquiry.',
    },
  ]

  const services = [
    {
      name: 'International Shipping',
      description: 'Door-to-door delivery to any destination worldwide',
      href: '/services/international',
    },
    {
      name: 'Freight Services',
      description: 'Heavy cargo and bulk shipment specialists',
      href: '/services/freight',
    },
    {
      name: 'Express Delivery',
      description: 'Next-day and 2-day delivery options',
      href: '/services/express',
    },
    {
      name: 'Customs Clearance',
      description: 'Expert handling of international customs documentation',
      href: '/services/customs',
    },
    {
      name: 'Warehousing',
      description: 'Secure storage with managed inventory services',
      href: '/services/warehousing',
    },
    {
      name: 'Supply Chain',
      description: 'End-to-end supply chain solutions and management',
      href: '/services/supply-chain',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center gap-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-foreground">
                Global Logistics Made <span className="text-primary">Simple</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Fast, reliable, and transparent shipping solutions for businesses of all sizes. Track your shipments in real-time with our advanced platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Get a Quote <ArrowRight size={20} />
              </Link>
              <Link
                href="/tracking"
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
              >
                Track Shipment
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 mt-8 border-t border-border w-full">
              <div>
                <p className="text-3xl font-bold text-primary">50K+</p>
                <p className="text-sm text-muted-foreground">Shipments Handled</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">180+</p>
                <p className="text-sm text-muted-foreground">Countries Served</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">99.2%</p>
                <p className="text-sm text-muted-foreground">On-Time Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose SwiftShip?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine industry expertise with cutting-edge technology to deliver exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="p-6 border border-border rounded-lg hover:border-primary hover:shadow-md transition-all bg-card"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive logistics solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="p-6 bg-card border border-border rounded-lg hover:border-primary hover:shadow-lg transition-all group"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="flex items-center text-primary font-medium text-sm">
                  Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              View All Services <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Simplify Your Shipping?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Join thousands of businesses that trust SwiftShip for their logistics needs. Get your free quote today.
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
