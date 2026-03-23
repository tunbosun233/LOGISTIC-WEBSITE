import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

export default function FreightPage() {
  const features = [
    'Specialized equipment for various cargo types',
    'Full load (FTL) and less than truck load (LTL) options',
    'Heavy lifting and oversized cargo handling',
    'Temperature-controlled containers available',
    'Expert logistics planning and route optimization',
    'Comprehensive cargo insurance coverage',
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
            Freight Services
          </h1>
          <p className="text-lg text-muted-foreground">
            Specialized handling for heavy cargo, bulk shipments, and oversized freight. From FTL to LTL solutions, we've got your freight covered.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Freight Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={16} className="text-primary" />
                </div>
                <p className="text-muted-foreground">{feature}</p>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-lg p-8 mt-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Why Choose SwiftShip for Freight?</h3>
            <p className="text-muted-foreground mb-4">
              Our dedicated freight team has decades of combined experience handling complex logistics challenges. We understand that every freight shipment is unique and requires careful planning and execution.
            </p>
            <p className="text-muted-foreground">
              Whether you need FTL (Full Truck Load) for large shipments or LTL (Less Than Truck Load) for smaller consignments, we have the equipment, expertise, and network to deliver your cargo safely and on time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Freight Solutions?
          </h2>
          <Link
            href="/quote"
            className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Get a Freight Quote <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
