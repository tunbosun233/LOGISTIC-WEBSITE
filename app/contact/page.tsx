'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    setSubmitted(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
    setTimeout(() => setSubmitted(false), 5000)
  }

  const offices = [
    {
      city: 'New York',
      country: 'USA',
      address: '123 Commerce Street, New York, NY 10001',
      phone: '+1 (555) 123-4567',
      email: 'ny@swiftship.com',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM EST',
    },
    {
      city: 'London',
      country: 'UK',
      address: '456 Trade Lane, London, EC1A 1BB',
      phone: '+44 (20) 1234 5678',
      email: 'london@swiftship.com',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM GMT',
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      address: '789 Harbor Road, Singapore 019857',
      phone: '+65 6789 0123',
      email: 'singapore@swiftship.com',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM SGT',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground">
            Have questions? We're here to help. Contact our team and we'll respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border rounded-lg p-8">
                {submitted && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-semibold">
                      Thank you for your message! We'll get back to you shortly.
                    </p>
                  </div>
                )}

                <h2 className="text-2xl font-semibold text-foreground">Send us a Message</h2>

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
                  <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-semibold text-foreground">info@swiftship.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-semibold text-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-sm text-muted-foreground">Response Time</p>
                      <p className="font-semibold text-foreground">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support Options */}
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Need Immediate Help?</h3>
                <div className="space-y-3">
                  <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity text-sm">
                    Call Support: 1-555-123-4567
                  </button>
                  <button className="w-full px-4 py-2 border border-primary rounded-lg font-medium hover:bg-primary/5 transition-colors text-sm">
                    Live Chat (9 AM - 6 PM)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Global Offices</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              With offices worldwide, we're always near you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office) => (
              <div key={office.city} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-1">{office.city}</h3>
                <p className="text-sm text-muted-foreground mb-4">{office.country}</p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{office.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-primary flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{office.phone}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-primary flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{office.email}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-primary flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{office.hours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: 'How quickly will you respond to my inquiry?',
                answer: 'We aim to respond to all inquiries within 24 business hours. For urgent matters, please call our support line.',
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, wire transfers, and various digital payment methods. Contact our sales team for more details.',
              },
              {
                question: 'Do you offer discounts for bulk shipments?',
                answer: 'Yes! We offer competitive rates for high-volume shippers. Please contact our sales team for a custom quote.',
              },
              {
                question: 'Can I track my shipment 24/7?',
                answer: 'Absolutely. Our tracking system is available 24/7 with real-time updates on your shipment status.',
              },
            ].map((item, index) => (
              <div key={index} className="border border-border rounded-lg p-4 hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-2">{item.question}</h3>
                <p className="text-muted-foreground text-sm">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
