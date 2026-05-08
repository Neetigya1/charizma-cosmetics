"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Shield, Heart, Award, Star, MapPin, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { CartProvider } from '@/lib/cart-context'
import { products, collections, testimonials } from '@/lib/products'

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=1920&h=1080&fit=crop"
          alt="Luxury cosmetics"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-primary bg-primary/10 rounded-full mb-6">
              Since 1996
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight text-balance">
              Discover Your
              <span className="block text-primary">True Beauty</span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Helping people meet the real version of themselves through premium beauty, expert skincare, and personalized guidance.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/shop">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/appointment">
                  Book Consultation
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=800&fit=crop"
                alt="Beauty products"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 p-6 bg-card rounded-xl shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-serif text-2xl font-semibold">28+</p>
                  <p className="text-sm text-muted-foreground">Years of Excellence</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FeaturedProducts() {
  const featuredProducts = products.slice(0, 4)

  return (
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
            Bestsellers
          </span>
          <h2 className="mt-3 font-serif text-3xl lg:text-4xl font-semibold">
            Featured Products
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Discover our most loved products, handpicked for their exceptional quality and results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/shop">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function CollectionsSection() {
  return (
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
            Collections
          </span>
          <h2 className="mt-3 font-serif text-3xl lg:text-4xl font-semibold">
            Shop by Category
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/shop?category=${collection.id}`}
                className="group block relative aspect-[4/5] rounded-2xl overflow-hidden"
              >
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                  <h3 className="font-serif text-xl lg:text-2xl font-medium">
                    {collection.name}
                  </h3>
                  <p className="mt-2 text-sm text-background/80">
                    {collection.description}
                  </p>
                  <span className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary">
                    Explore Collection
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=750&fit=crop"
                alt="Charizma Beauty Parlour"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 p-6 bg-card rounded-xl shadow-xl hidden sm:block">
              <p className="font-serif text-4xl font-semibold text-primary">1996</p>
              <p className="text-sm text-muted-foreground">Established</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-sm font-medium tracking-widest uppercase text-primary">
              Our Story
            </span>
            <h2 className="mt-3 font-serif text-3xl lg:text-4xl font-semibold">
              A Legacy of Beauty Excellence
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Since 1996, Charizma Beauty Parlour has been the trusted destination for beauty and skincare in Shivpuri, Madhya Pradesh. What started as a small parlour has grown into a beloved institution, serving generations of families.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our vision has always been simple: helping people meet the real version of themselves through expert care, premium products, and personalized guidance that celebrates their unique beauty.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <p className="font-serif text-3xl font-semibold text-primary">10K+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-semibold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Premium Products</p>
              </div>
            </div>
            <Button asChild className="mt-8" variant="outline">
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  const features = [
    {
      icon: Sparkles,
      title: 'Premium Quality',
      description: 'Only the finest ingredients and formulations that deliver real results.',
    },
    {
      icon: Shield,
      title: 'Trusted Since 1996',
      description: 'Over 28 years of experience serving the community with excellence.',
    },
    {
      icon: Heart,
      title: 'Personalized Care',
      description: 'Every treatment and recommendation tailored to your unique needs.',
    },
    {
      icon: Award,
      title: 'Expert Guidance',
      description: 'Our trained professionals ensure you receive the best care possible.',
    },
  ]

  return (
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
            Why Charizma
          </span>
          <h2 className="mt-3 font-serif text-3xl lg:text-4xl font-semibold">
            The Charizma Difference
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-medium">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
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
            Testimonials
          </span>
          <h2 className="mt-3 font-serif text-3xl lg:text-4xl font-semibold">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <Link href="/testimonials">
              View All Reviews
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium tracking-widest uppercase text-primary">
              Get in Touch
            </span>
            <h2 className="mt-3 font-serif text-3xl lg:text-4xl font-semibold">
              Visit Our Parlour
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Experience the Charizma difference in person. Our expert team is ready to help you discover your true beauty.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Priyadarshini Colony, T.V. Tower Road,<br />
                    Shivpuri, Madhya Pradesh, India
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <a href="tel:+919876543210" className="text-sm text-muted-foreground mt-1 hover:text-primary transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a href="mailto:hello@charizma.in" className="text-sm text-muted-foreground mt-1 hover:text-primary transition-colors">
                    hello@charizma.in
                  </a>
                </div>
              </div>
            </div>

            <Button asChild className="mt-8">
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative aspect-square lg:aspect-auto rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=600&fit=crop"
              alt="Charizma Beauty Parlour Interior"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <CartProvider>
      <Header />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <CollectionsSection />
        <AboutSection />
        <WhyChooseUs />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </CartProvider>
  )
}
