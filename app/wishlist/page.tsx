"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { CartProvider, useCart } from '@/lib/cart-context'

function WishlistContent() {
  const { wishlist } = useCart()

  if (wishlist.length === 0) {
    return (
      <>
        <Header />
        <main className="pt-16 lg:pt-20 min-h-screen">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="mx-auto w-20 h-20 flex items-center justify-center rounded-full bg-secondary mb-6">
                <Heart className="h-10 w-10 text-muted-foreground" />
              </div>
              <h1 className="font-serif text-2xl lg:text-3xl font-semibold mb-4">
                Your Wishlist is Empty
              </h1>
              <p className="text-muted-foreground mb-8">
                Save items you love by clicking the heart icon on any product.
              </p>
              <Button asChild>
                <Link href="/shop">
                  Start Shopping
                </Link>
              </Button>
            </motion.div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <div className="bg-secondary/30 py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-3xl lg:text-4xl font-semibold">My Wishlist</h1>
            <p className="text-muted-foreground mt-2">{wishlist.length} {wishlist.length === 1 ? 'item' : 'items'}</p>
          </div>
        </div>

        <section className="py-8 lg:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {wishlist.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default function WishlistPage() {
  return (
    <CartProvider>
      <WishlistContent />
    </CartProvider>
  )
}
