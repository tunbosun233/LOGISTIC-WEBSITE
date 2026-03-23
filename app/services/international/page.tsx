import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'International Shipping Services | SwiftShip',
  description: 'Reliable door-to-door international shipping to 180+ countries with full tracking and insurance.',
}

export default function InternationalShippingPage() {
  const benefits = [
    'Door-to-door delivery to any country',
    'Real-time GPS tracking',
    'Full insurance coverage available',
    'Customs clearance assistance',
    'Multiple shipping speed options',
    'Competitive international rates',
  ]

  const process = [
    { step: 1, title: 'Get Quote', description: 'Provide shipment details and receive an instant quote.' },
    { step: 2, title: 'Schedule Pickup', description: 'Book your pickup at a time convenient for you.' },
    { step: 3, title: 'Pack & Ship', description: 'We handle packing and prepare your shipment for transport.' },
    { step: 4, title: 'Track Shipment', description: 'Monitor your package in real-time with live updates.' },
    { step: 5, title: 'Delivery', description: 'Your shipment arrives safely at its destination.' },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <Link href="/services" className="text-primary hover:text-primary/80 mb-4 inline-flex items-center gap-1">
            ← Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            International Shipping
          </h1>
          <p className="text-lg text-muted-foreground">
            Fast, reliable, and affordable shipping to 180+ countries worldwide. Get your packages delivered safely with full tracking and insurance.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose Our International Shipping?</h2>
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={16} className="text-primary" />
                    </div>
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Service Highlights</h3>
              <div className="space-y-4">
                <div className="border-b border-border pb-4">
                  <p className="text-sm text-muted-foreground font-semibold mb-1">COVERAGE</p>
                  <p className="text-foreground font-medium">All 180+ countries</p>
                </div>
                <div className="border-b border-border pb-4">
                  <p className="text-sm text-muted-foreground font-semibold mb-1">DELIVERY TIME</p>
                  <p className="text-foreground font-medium">5-21 business days depending on destination</p>
                </div>
                <div className="border-b border-border pb-4">
                  <p className="text-sm text-muted-foreground font-semibold mb-1">TRACKING</p>
                  <p className="text-foreground font-medium">24/7 real-time tracking</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-semibold mb-1">INSURANCE</p>
                  <p className="text-foreground font-medium">Optional full-value coverage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">How It Works</h2>
          <div className="space-y-6">
            {process.map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {item.step}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our rates are competitive and transparent. No hidden fees, just honest pricing based on weight, destination, and shipping speed.
          </p>
          <div className="bg-card border border-border rounded-lg p-8">
            <p className="text-muted-foreground mb-6">
              Get a free quote in minutes. Our pricing includes pickup, transport, and delivery to your customer's door.
            </p>
            <Link
              href="/quote"
              className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              Get a Free Quote <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Ship Internationally?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Let's get your packages to customers around the world safely and efficiently.
          </p>
          <Link
            href="/quote"
            className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Start Shipping <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
