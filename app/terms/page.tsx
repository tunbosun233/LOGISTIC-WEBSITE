import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | SwiftShip',
  description: 'Terms of Service and legal agreement for using SwiftShip logistics services.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Terms of Service</h1>

        <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing and using the SwiftShip website and services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Shipping Services</h2>
            <p>
              SwiftShip provides international and domestic shipping services. All shipments are subject to our standard rates, terms, and conditions. We reserve the right to refuse any shipment that violates applicable laws or our policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Prohibited Items</h2>
            <p>
              You agree not to ship any items that are illegal, hazardous, or prohibited by law, including but not limited to weapons, explosives, dangerous goods, and counterfeit merchandise.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Liability Limitation</h2>
            <p>
              SwiftShip's liability for any claim arising from the use of our services shall not exceed the shipping charges paid. We are not liable for indirect, incidental, or consequential damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Insurance</h2>
            <p>
              Optional insurance coverage is available for an additional fee. Without insurance, SwiftShip's liability is limited to the declared value of the shipment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Dispute Resolution</h2>
            <p>
              Any disputes arising from these Terms shall be governed by applicable laws and subject to binding arbitration.
            </p>
          </section>

          <section>
            <p className="text-sm text-muted-foreground">
              Last updated: March 2024
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
