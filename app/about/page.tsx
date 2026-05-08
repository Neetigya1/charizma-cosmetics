"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Heart, Award, Users, Star, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CartProvider } from '@/lib/cart-context'

const milestones = [
  { year: '1996', title: 'The Beginning', description: 'Charizma Beauty Parlour opened its doors in Shivpuri, Madhya Pradesh.' },
  { year: '2005', title: 'Product Line Launch', description: 'Introduced our own line of premium skincare products.' },
  { year: '2012', title: 'Expansion', description: 'Renovated and expanded our parlour to serve more clients.' },
  { year: '2020', title: 'Digital Journey', description: 'Launched our e-commerce platform to reach customers nationwide.' },
  { year: '2024', title: 'Charizma Cosmetics', description: 'Rebranded as Charizma Cosmetics with an expanded product range.' },
]

const values = [
  {
    icon: Sparkles,
    title: 'Quality First',
    description: 'We source only the finest ingredients and formulations for our products.',
  },
  {
    icon: Heart,
    title: 'Customer Love',
    description: 'Every client is treated like family with personalized care and attention.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in every service and product we offer.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Proud to serve generations of families in our community.',
  },
]

const team = [
  {
    name: 'Founder',
    role: 'Chief Beauty Expert',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=400&fit=crop',
    description: 'Over 30 years of experience in beauty and skincare.',
  },
  {
    name: 'Lead Stylist',
    role: 'Senior Hair Stylist',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=400&fit=crop',
    description: 'Specialized in bridal and occasion styling.',
  },
  {
    name: 'Skincare Specialist',
    role: 'Esthetician',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=400&fit=crop',
    description: 'Expert in facials and skincare treatments.',
  },
]

function AboutContent() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero */}
        <section className="relative py-20 lg:py-28 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-sm font-medium tracking-widest uppercase text-primary">
                  Our Story
                </span>
                <h1 className="mt-3 font-serif text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight">
                  A Legacy of Beauty
                  <span className="block text-primary">Since 1996</span>
                </h1>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  For over 28 years, Charizma has been the trusted destination for beauty 
                  and skincare in Shivpuri. What started as a small parlour has grown into 
                  a beloved institution serving generations of families.
                </p>
                <div className="mt-8 flex items-center gap-8">
                  <div>
                    <p className="font-serif text-3xl lg:text-4xl font-semibold text-primary">28+</p>
                    <p className="text-sm text-muted-foreground">Years of Service</p>
                  </div>
                  <div>
                    <p className="font-serif text-3xl lg:text-4xl font-semibold text-primary">10K+</p>
                    <p className="text-sm text-muted-foreground">Happy Clients</p>
                  </div>
                  <div>
                    <p className="font-serif text-3xl lg:text-4xl font-semibold text-primary">50+</p>
                    <p className="text-sm text-muted-foreground">Products</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=750&fit=crop"
                    alt="Charizma Beauty Parlour"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-sm font-medium tracking-widest uppercase text-primary">
                  Our Vision
                </span>
                <h2 className="mt-3 font-serif text-3xl lg:text-4xl font-semibold">
                  Helping People Meet the Real Version of Themselves
                </h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  We believe that true beauty comes from confidence. Our mission is to help 
                  every person discover and embrace their unique beauty through expert care, 
                  premium products, and personalized guidance that celebrates individuality.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 lg:py-28 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="text-sm font-medium tracking-widest uppercase text-primary">
                Our Journey
              </span>
              <h2 className="mt-3 font-serif text-3xl lg:text-4xl font-semibold">
                Milestones Along the Way
              </h2>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative lg:grid lg:grid-cols-2 lg:gap-8 ${
                      index % 2 === 0 ? '' : 'lg:direction-rtl'
                    }`}
                  >
                    <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:col-start-2 lg:pl-12'}`}>
                      <span className="inline-block px-4 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-3">
                        {milestone.year}
                      </span>
                      <h3 className="font-serif text-xl font-semibold">{milestone.title}</h3>
                      <p className="mt-2 text-muted-foreground">{milestone.description}</p>
                    </div>
                    {/* Timeline Dot */}
                    <div className="hidden lg:block absolute left-1/2 top-4 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="text-sm font-medium tracking-widest uppercase text-primary">
                What We Stand For
              </span>
              <h2 className="mt-3 font-serif text-3xl lg:text-4xl font-semibold">
                Our Core Values
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-medium">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 lg:py-28 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="text-sm font-medium tracking-widest uppercase text-primary">
                Meet the Experts
              </span>
              <h2 className="mt-3 font-serif text-3xl lg:text-4xl font-semibold">
                Our Dedicated Team
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-medium">{member.name}</h3>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-sm font-medium tracking-widest uppercase text-primary">
                  Why Charizma
                </span>
                <h2 className="mt-3 font-serif text-3xl lg:text-4xl font-semibold">
                  The Charizma Difference
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  When you choose Charizma, you&apos;re not just getting a service or product
                  you&apos;re becoming part of a family that has been trusted for generations.
                </p>
                <ul className="mt-6 space-y-4">
                  {[
                    '28+ years of trusted experience',
                    'Premium quality products',
                    'Personalized skincare consultations',
                    'Expert bridal and occasion styling',
                    'Family-friendly atmosphere',
                    'Generations of satisfied customers',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-8">
                  <Link href="/appointment">
                    Book a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative aspect-square rounded-2xl overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=600&fit=crop"
                  alt="Beauty products"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-primary/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-serif text-3xl lg:text-4xl font-semibold">
                Ready to Experience the Charizma Difference?
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Visit our parlour or shop our premium collection online. 
                Let us help you discover your true beauty.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="/shop">
                    Shop Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">
                    Contact Us
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

export default function AboutPage() {
  return (
    <CartProvider>
      <AboutContent />
    </CartProvider>
  )
}
