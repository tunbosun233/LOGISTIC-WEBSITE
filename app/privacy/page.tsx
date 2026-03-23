import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | SwiftShip',
  description: 'Privacy policy and data protection information for SwiftShip logistics services.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Privacy Policy</h1>

        <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
            <p>
              SwiftShip ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
            <p>We may collect information about you in a variety of ways, including:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Information you voluntarily provide (name, email, phone, shipment details)</li>
              <li>Information collected automatically (IP address, browser type, pages visited)</li>
              <li>Information from third parties (payment processors, shipping partners)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Process your shipping requests and quotes</li>
              <li>Communicate with you about your shipments</li>
              <li>Improve our services and user experience</li>
              <li>Send promotional materials (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Information Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at: privacy@swiftship.com
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
