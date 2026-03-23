import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 font-bold text-xl mb-4">
              <div className="w-6 h-6 bg-accent rounded flex items-center justify-center text-primary">
                ◆
              </div>
              <span>SwiftShip</span>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Global logistics solutions for modern businesses. Fast, reliable, and transparent shipping worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="opacity-80 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="opacity-80 hover:opacity-100 transition-opacity">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="opacity-80 hover:opacity-100 transition-opacity">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-80 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/international" className="opacity-80 hover:opacity-100 transition-opacity">
                  International Shipping
                </Link>
              </li>
              <li>
                <Link href="/services/freight" className="opacity-80 hover:opacity-100 transition-opacity">
                  Freight Services
                </Link>
              </li>
              <li>
                <Link href="/services/express" className="opacity-80 hover:opacity-100 transition-opacity">
                  Express Delivery
                </Link>
              </li>
              <li>
                <Link href="/services/customs" className="opacity-80 hover:opacity-100 transition-opacity">
                  Customs Clearance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <span className="opacity-80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <span className="opacity-80">info@swiftship.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span className="opacity-80">123 Commerce St, Port City, PC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-80">
              &copy; {currentYear} SwiftShip. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <Linkedin size={18} />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <Twitter size={18} />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <Facebook size={18} />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex gap-4 text-sm">
              <Link href="/privacy" className="opacity-80 hover:opacity-100 transition-opacity">
                Privacy
              </Link>
              <Link href="/terms" className="opacity-80 hover:opacity-100 transition-opacity">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
