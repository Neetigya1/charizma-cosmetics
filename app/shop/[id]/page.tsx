"use client"

import { use, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart, ShoppingBag, Star, Minus, Plus, ArrowLeft, Truck, Shield, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { CartProvider, useCart } from '@/lib/cart-context'
import { products } from '@/lib/products'
import { cn } from '@/lib/utils'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const reviews = [
  {
    id: '1',
    name: 'Priya Sharma',
    rating: 5,
    date: '2 weeks ago',
    text: 'Absolutely love this product! My skin has never looked better. The texture is luxurious and it absorbs quickly without leaving any residue.',
    verified: true,
  },
  {
    id: '2',
    name: 'Anjali Verma',
    rating: 4,
    date: '1 month ago',
    text: 'Great quality product. I have been using it for a month now and can see visible improvements in my skin texture.',
    verified: true,
  },
  {
    id: '3',
    name: 'Meera Patel',
    rating: 5,
    date: '1 month ago',
    text: 'This is now a staple in my skincare routine. Highly recommend to anyone looking for premium quality products.',
    verified: true,
  },
]

function ProductDetailContent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [quantity, setQuantity] = useState(1)
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart()

  const product = products.find((p) => p.id === id)
  
  if (!product) {
    return (
      <>
        <Header />
        <main className="pt-16 lg:pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-2xl font-semibold mb-4">Product Not Found</h1>
            <Button asChild>
              <Link href="/shop">Back to Shop</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const inWishlist = isInWishlist(product.id)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
  }

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Breadcrumb */}
        <div className="bg-secondary/30 py-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <span className="text-muted-foreground">/</span>
              <Link href="/shop" className="text-muted-foreground hover:text-foreground transition-colors">
                Shop
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground">{product.name}</span>
            </nav>
          </div>
        </div>

        {/* Product Details */}
        <section className="py-8 lg:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
              {/* Images */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="aspect-[4/5] relative rounded-2xl overflow-hidden bg-secondary">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col"
              >
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Shop
                </Link>

                <span className="text-sm font-medium text-primary tracking-wide uppercase">
                  {product.category}
                </span>
                
                <h1 className="mt-2 font-serif text-3xl lg:text-4xl font-semibold">
                  {product.name}
                </h1>

                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-4 w-4",
                          i < Math.floor(product.rating)
                            ? "fill-primary text-primary"
                            : "text-muted-foreground"
                        )}
                      />
                    ))}
                    <span className="ml-2 text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews} reviews)
                  </span>
                </div>

                <p className="mt-6 text-2xl font-semibold">
                  &#8377;{product.price.toLocaleString('en-IN')}
                </p>

                <p className="mt-6 text-muted-foreground leading-relaxed">
                  {product.description}
                </p>

                {/* Quantity & Add to Cart */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium">Quantity:</span>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        disabled={quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-12 text-center font-medium">{quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Button
                      size="lg"
                      className="flex-1 bg-primary hover:bg-primary/90"
                      onClick={handleAddToCart}
                    >
                      <ShoppingBag className="h-5 w-5 mr-2" />
                      Add to Cart
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={handleWishlistToggle}
                    >
                      <Heart
                        className={cn(
                          "h-5 w-5",
                          inWishlist && "fill-primary text-primary"
                        )}
                      />
                    </Button>
                  </div>
                </div>

                {/* Features */}
                <div className="mt-8 pt-8 border-t border-border space-y-4">
                  <div className="flex items-center gap-3">
                    <Truck className="h-5 w-5 text-primary" />
                    <span className="text-sm">Free delivery on orders above &#8377;999</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="text-sm">100% authentic products</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <RotateCcw className="h-5 w-5 text-primary" />
                    <span className="text-sm">Easy 7-day returns</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Tabs */}
            <div className="mt-16">
              <Tabs defaultValue="description" className="w-full">
                <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0">
                  <TabsTrigger
                    value="description"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                  >
                    Description
                  </TabsTrigger>
                  <TabsTrigger
                    value="reviews"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                  >
                    Reviews ({product.reviews})
                  </TabsTrigger>
                  <TabsTrigger
                    value="shipping"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                  >
                    Shipping
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="mt-6">
                  <div className="prose prose-sm max-w-none">
                    <p className="text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                    <h4 className="font-serif text-lg font-medium mt-6 mb-3">Key Benefits</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Formulated with premium, ethically sourced ingredients</li>
                      <li>Suitable for all skin types</li>
                      <li>Dermatologically tested</li>
                      <li>Cruelty-free and paraben-free</li>
                      <li>Long-lasting results with regular use</li>
                    </ul>
                    <h4 className="font-serif text-lg font-medium mt-6 mb-3">How to Use</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Apply a small amount to clean skin. Gently massage in circular motions until fully absorbed. 
                      For best results, use twice daily as part of your morning and evening skincare routine.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="reviews" className="mt-6">
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b border-border pb-6 last:border-0">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{review.name}</span>
                              {review.verified && (
                                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                                  Verified Purchase
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={cn(
                                      "h-3.5 w-3.5",
                                      i < review.rating
                                        ? "fill-primary text-primary"
                                        : "text-muted-foreground"
                                    )}
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-muted-foreground">{review.date}</span>
                            </div>
                          </div>
                        </div>
                        <p className="mt-3 text-sm text-muted-foreground">{review.text}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="shipping" className="mt-6">
                  <div className="prose prose-sm max-w-none">
                    <h4 className="font-serif text-lg font-medium mb-3">Shipping Information</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Free shipping on orders above &#8377;999</li>
                      <li>Standard delivery: 3-5 business days</li>
                      <li>Express delivery: 1-2 business days (additional charges apply)</li>
                      <li>Cash on delivery available for orders under &#8377;5000</li>
                    </ul>
                    <h4 className="font-serif text-lg font-medium mt-6 mb-3">Return Policy</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      We offer a 7-day return policy for all unopened products. If you&apos;re not satisfied with your purchase, 
                      please contact our customer support team for assistance.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-16 bg-secondary/30">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="font-serif text-2xl lg:text-3xl font-semibold mb-8">
                You May Also Like
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {relatedProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  return (
    <CartProvider>
      <ProductDetailContent params={params} />
    </CartProvider>
  )
}
