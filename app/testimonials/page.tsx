"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Star, Quote, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CartProvider } from '@/lib/cart-context'

const allTestimonials = [
  {
    id: '1',
    name: 'Priya Sharma',
    location: 'Shivpuri',
    rating: 5,
    text: 'Charizma has been my go-to for skincare for years. The quality is unmatched and the staff is incredibly knowledgeable. Every visit feels like a pampering session.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    service: 'Skincare Treatment',
  },
  {
    id: '2',
    name: 'Anjali Verma',
    location: 'Gwalior',
    rating: 5,
    text: 'My bridal makeup was absolutely stunning. They understood exactly what I wanted and made me feel like a queen on my special day. Forever grateful!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    service: 'Bridal Makeup',
  },
  {
    id: '3',
    name: 'Meera Patel',
    location: 'Bhopal',
    rating: 5,
    text: 'The Rose Petal Serum has transformed my skin. I get compliments every day now. Thank you, Charizma, for bringing such quality products!',
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop',
    service: 'Product Purchase',
  },
  {
    id: '4',
    name: 'Kavita Singh',
    location: 'Shivpuri',
    rating: 5,
    text: 'Professional service and premium products. Charizma has been serving our family for three generations. Would not trust anyone else with my beauty needs.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop',
    service: 'Regular Customer',
  },
  {
    id: '5',
    name: 'Sunita Joshi',
    location: 'Jhansi',
    rating: 5,
    text: 'I traveled from Jhansi specifically for their bridal package. Worth every kilometer! The team is talented and makes you feel so comfortable.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop',
    service: 'Bridal Package',
  },
  {
    id: '6',
    name: 'Rekha Tiwari',
    location: 'Shivpuri',
    rating: 5,
    text: 'Been coming here since they opened in 1996. The consistency in quality and service is remarkable. My daughters now come here too!',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&fit=crop',
    service: 'Loyal Customer',
  },
  {
    id: '7',
    name: 'Neha Gupta',
    location: 'Datia',
    rating: 5,
    text: 'Their facials are the best in the region. My skin has never looked better. The estheticians really know what they are doing.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop',
    service: 'Facial Treatment',
  },
  {
    id: '8',
    name: 'Pooja Yadav',
    location: 'Shivpuri',
    rating: 5,
    text: 'I ordered products online and was impressed by the quick delivery and beautiful packaging. The products exceeded my expectations!',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop',
    service: 'Online Order',
  },
  {
    id: '9',
    name: 'Aarti Mishra',
    location: 'Gwalior',
    rating: 5,
    text: 'The skincare consultation changed my routine completely. Finally found products that work for my sensitive skin. Thank you!',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop',
    service: 'Consultation',
  },
]

const stats = [
  { value: '10,000+', label: 'Happy Customers' },
  { value: '4.9', label: 'Average Rating' },
  { value: '28+', label: 'Years of Service' },
  { value: '500+', label: 'Bridal Makeups' },
]

function TestimonialsContent() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero */}
        <section className="bg-secondary/30 py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <span className="text-sm font-medium tracking-widest uppercase text-primary">
                Testimonials
              </span>
              <h1 className="mt-3 font-serif text-3xl lg:text-4xl xl:text-5xl font-semibold">
                What Our Clients Say
              </h1>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Don&apos;t just take our word for it. Hear from the thousands of satisfied customers who have experienced the Charizma difference.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="font-serif text-3xl lg:text-4xl font-semibold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Testimonial */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative bg-primary/5 rounded-3xl p-8 lg:p-12 overflow-hidden"
            >
              <Quote className="absolute top-8 left-8 h-20 w-20 text-primary/10" />
              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <div className="flex items-center justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-serif text-xl lg:text-2xl leading-relaxed text-foreground">
                  &ldquo;Charizma isn&apos;t just a beauty parlour, it&apos;s where I discovered my confidence. 
                  For 15 years, they have been there for every important moment in my life - 
                  from my wedding to my daughter&apos;s. Their dedication to making every woman feel beautiful is unmatched.&rdquo;
                </p>
                <div className="mt-8 flex items-center justify-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop"
                      alt="Kavita Singh"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">Kavita Singh</p>
                    <p className="text-sm text-muted-foreground">Loyal Customer since 2009</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* All Testimonials */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-2xl lg:text-3xl font-semibold">
                More Reviews from Our Community
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-card p-6 rounded-xl shadow-sm"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {testimonial.service}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-serif text-3xl lg:text-4xl font-semibold">
                Ready to Experience the Difference?
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Join thousands of satisfied customers and discover your true beauty with Charizma.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="/appointment">
                    Book an Appointment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/shop">
                    Shop Products
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default function TestimonialsPage() {
  return (
    <CartProvider>
      <TestimonialsContent />
    </CartProvider>
  )
}
