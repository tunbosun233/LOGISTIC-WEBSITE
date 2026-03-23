'use client'

import { useState } from 'react'
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    origin: '',
    destination: '',
    weight: '',
    dimensions: '',
    shipmentType: 'standard',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Quote request submitted:', formData)
    setSubmitted(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      origin: '',
      destination: '',
      weight: '',
      dimensions: '',
      shipmentType: 'standard',
      message: '',
    })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get a Free Shipping Quote
          </h1>
          <p className="text-lg text-muted-foreground">
            Instant quote in minutes. No obligation, no hidden fees.
          </p>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border rounded-lg p-8">
                {submitted && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-semibold">
                      Thank you! Your quote request has been submitted. We'll contact you within 24 hours.
                    </p>
                  </div>
                )}

                <h2 className="text-2xl font-semibold text-foreground mb-6">Shipment Details</h2>

                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Phone and Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      placeholder="Your Company Name"
                    />
                  </div>
                </div>

                {/* Origin and Destination */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="origin" className="block text-sm font-semibold text-foreground mb-2">
                      Origin (Country/City) *
                    </label>
                    <input
                      type="text"
                      id="origin"
                      name="origin"
                      value={formData.origin}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      placeholder="New York, USA"
                    />
                  </div>
                  <div>
                    <label htmlFor="destination" className="block text-sm font-semibold text-foreground mb-2">
                      Destination (Country/City) *
                    </label>
                    <input
                      type="text"
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      placeholder="London, UK"
                    />
                  </div>
                </div>

                {/* Weight and Dimensions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="weight" className="block text-sm font-semibold text-foreground mb-2">
                      Weight (kg) *
                    </label>
                    <input
                      type="number"
                      id="weight"
                      name="weight"
                      value={formData.weight}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      placeholder="10"
                      step="0.1"
                    />
                  </div>
                  <div>
                    <label htmlFor="dimensions" className="block text-sm font-semibold text-foreground mb-2">
                      Dimensions (L×W×H cm)
                    </label>
                    <input
                      type="text"
                      id="dimensions"
                      name="dimensions"
                      value={formData.dimensions}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      placeholder="50×30×20"
                    />
                  </div>
                </div>

                {/* Shipment Type */}
                <div>
                  <label htmlFor="shipmentType" className="block text-sm font-semibold text-foreground mb-2">
                    Shipment Type *
                  </label>
                  <select
                    id="shipmentType"
                    name="shipmentType"
                    value={formData.shipmentType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  >
                    <option value="standard">Standard Shipping</option>
                    <option value="express">Express Shipping</option>
                    <option value="overnight">Overnight Delivery</option>
                    <option value="freight">Freight/Heavy Cargo</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none"
                    placeholder="Tell us more about your shipment..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  Get Quote <ArrowRight size={20} />
                </button>
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-6">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-semibold text-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-semibold text-foreground">quotes@swiftship.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-sm text-muted-foreground">Address</p>
                      <p className="font-semibold text-foreground">123 Commerce St, Port City, PC 12345</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Why Choose Us?</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Instant quotes</li>
                  <li>✓ No hidden fees</li>
                  <li>✓ Real-time tracking</li>
                  <li>✓ 24/7 support</li>
                  <li>✓ 99.2% on-time delivery</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
