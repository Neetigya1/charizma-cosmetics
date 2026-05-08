import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react'

const footerLinks = {
  shop: [
    { name: 'All Products', href: '/shop' },
    { name: 'Skincare', href: '/shop?category=Skincare' },
    { name: 'Makeup', href: '/shop?category=Makeup' },
    { name: 'Hair Care', href: '/shop?category=Hair' },
    { name: 'New Arrivals', href: '/shop?sort=new' },
  ],
  services: [
    { name: 'Bridal Makeup', href: '/appointment' },
    { name: 'Facials', href: '/appointment' },
    { name: 'Hair Styling', href: '/appointment' },
    { name: 'Consultations', href: '/appointment' },
    { name: 'Book Appointment', href: '/appointment' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <h2 className="font-serif text-2xl font-semibold tracking-wide">Charizma</h2>
              <p className="font-serif text-sm font-light text-primary tracking-widest uppercase mt-1">
                Cosmetics
              </p>
            </Link>
            <p className="mt-4 text-sm text-background/70 leading-relaxed">
              Helping people meet the real version of themselves through beauty, confidence, skincare, and expert guidance since 1996.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="text-background/70 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-background/70 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-background/70 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Visit Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-background/70">
                  Priyadarshini Colony, T.V. Tower Road,<br />
                  Shivpuri, Madhya Pradesh, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:hello@charizma.in"
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                >
                  hello@charizma.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-background/70">
                  Mon - Sat: 10:00 AM - 8:00 PM<br />
                  Sunday: By Appointment
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/50">
              &copy; {new Date().getFullYear()} Charizma Cosmetics. All rights reserved.
            </p>
            <p className="text-sm text-background/50">
              Serving with love since 1996
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
