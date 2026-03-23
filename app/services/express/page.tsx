import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

export default function ExpressPage() {
  const options = [
    {
      name: 'Next-Day Delivery',
      description: 'Same city delivery within 24 hours',
      price: 'Starting from $50',
    },
    {
      name: '2-Day Express',
      description: 'Cross-country delivery in 2 business days',
      price: 'Starting from $75',
    },
    {
      name: 'Overnight International',
      description: 'Selected international routes with overnight delivery',
      price: 'Starting from $150',
    },
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
            Express Delivery
          </h1>
          <p className="text-lg text-muted-foreground">
            When time is critical, trust our express delivery options. Fast, reliable, and guaranteed delivery times for your urgent shipments.
          </p>
        </div>
      </section>

      {/* Options Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Express Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {options.map((option) => (
              <div key={option.name} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{option.name}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{option.description}</p>
                <p className="text-lg font-bold text-primary">{option.price}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-accent/10 border border-accent/20 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Express Guarantee</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="text-accent mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-foreground">Guaranteed Delivery Times</p>
                  <p className="text-sm text-muted-foreground">Arrive by committed date or receive a partial refund</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-accent mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-foreground">Priority Handling</p>
                  <p className="text-sm text-muted-foreground">Your packages are flagged for priority processing</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-accent mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-foreground">Proactive Updates</p>
                  <p className="text-sm text-muted-foreground">Real-time SMS and email notifications</p>
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
            Need Express Delivery Today?
          </h2>
          <Link
            href="/quote"
            className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Request Express Service <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
