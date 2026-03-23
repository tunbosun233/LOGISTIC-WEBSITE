import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Globe, Truck, Zap, FileCheck, Package, Boxes } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Shipping Services | SwiftShip Logistics',
  description: 'Explore our comprehensive logistics services including international shipping, freight, express delivery, customs clearance, warehousing, and supply chain solutions.',
}

export default function ServicesPage() {
  const services = [
    {
      icon: Globe,
      title: 'International Shipping',
      description: 'Door-to-door delivery to any destination worldwide with full tracking and insurance coverage.',
      href: '/services/international',
      features: ['Global Coverage', 'Real-time Tracking', 'Full Insurance', 'Door-to-Door Delivery'],
    },
    {
      icon: Truck,
      title: 'Freight Services',
      description: 'Specialized handling for heavy cargo and bulk shipments with dedicated transport solutions.',
      href: '/services/freight',
      features: ['Heavy Cargo', 'Bulk Shipments', 'Specialized Equipment', 'Dedicated Support'],
    },
    {
      icon: Zap,
      title: 'Express Delivery',
      description: 'Fast and reliable next-day and 2-day delivery options for time-sensitive shipments.',
      href: '/services/express',
      features: ['Next-Day Delivery', '2-Day Options', 'Priority Handling', 'Guaranteed Times'],
    },
    {
      icon: FileCheck,
      title: 'Customs Clearance',
      description: 'Expert handling of international customs documentation and regulatory compliance.',
      href: '/services/customs',
      features: ['Documentation', 'Compliance', 'Expert Guidance', 'Fast Processing'],
    },
    {
      icon: Package,
      title: 'Warehousing',
      description: 'Secure storage facilities with managed inventory and fulfillment services.',
      href: '/services/warehousing',
      features: ['Secure Storage', 'Inventory Management', 'Fulfillment', '24/7 Monitoring'],
    },
    {
      icon: Boxes,
      title: 'Supply Chain Solutions',
      description: 'End-to-end supply chain optimization and management for maximum efficiency.',
      href: '/services/supply-chain',
      features: ['End-to-End', 'Optimization', 'Cost Reduction', 'Technology Integration'],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive logistics solutions tailored to your business needs. From international shipping to supply chain optimization, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all flex flex-col"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-1">{service.description}</p>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-foreground mb-3">Key Features:</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all mt-auto"
                  >
                    Learn More <ArrowRight size={20} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why Choose Our Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Reliability</h3>
              <p className="text-muted-foreground">
                With 20+ years in the industry and 99.2% on-time delivery rate, you can trust us with your shipments.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Technology</h3>
              <p className="text-muted-foreground">
                Advanced tracking systems and real-time updates keep you informed every step of the way.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Cost Effective</h3>
              <p className="text-muted-foreground">
                Competitive rates with no hidden fees. Get transparent pricing and maximum value for your investment.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Global Network</h3>
              <p className="text-muted-foreground">
                Reach customers in 180+ countries with our extensive international logistics network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help Choosing the Right Service?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Our logistics experts are ready to help you find the perfect solution for your business.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Contact Our Team <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
