import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function SupplyChainPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <Link href="/services" className="text-primary hover:text-primary/80 mb-4 inline-flex items-center gap-1">
            ← Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Supply Chain Solutions
          </h1>
          <p className="text-lg text-muted-foreground">
            End-to-end supply chain optimization and management to maximize efficiency and reduce costs.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Supply Chain Services</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>✓ Supply chain consulting and strategy</li>
              <li>✓ Procurement optimization</li>
              <li>✓ Vendor management services</li>
              <li>✓ Demand forecasting and planning</li>
              <li>✓ Network optimization</li>
              <li>✓ Performance analytics and reporting</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Optimize Your Supply Chain</h2>
          <Link
            href="/contact"
            className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Schedule Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
