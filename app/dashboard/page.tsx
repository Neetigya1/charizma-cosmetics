"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  User,
  ShoppingBag,
  Heart,
  Calendar,
  Settings,
  LogOut,
  MapPin,
  ChevronRight,
  Star,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CartProvider } from '@/lib/cart-context'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { createClient } from '@/lib/supabase/client'
import type { User as SupabaseUser } from '@supabase/supabase-js'

// Mock data for orders and appointments
const recentOrders = [
  {
    id: 'ORD-2024-001',
    date: '15 Jan 2024',
    status: 'Delivered',
    total: 3499,
    items: [
      { name: 'Rose Petal Radiance Serum', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=100&h=100&fit=crop', quantity: 1 },
      { name: 'Hydrating Night Cream', image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=100&h=100&fit=crop', quantity: 1 },
    ],
  },
  {
    id: 'ORD-2024-002',
    date: '28 Jan 2024',
    status: 'Processing',
    total: 1899,
    items: [
      { name: 'Golden Glow Foundation', image: 'https://images.unsplash.com/photo-1631730486572-226d1f595b68?w=100&h=100&fit=crop', quantity: 1 },
    ],
  },
]

const upcomingAppointments = [
  {
    id: '1',
    service: 'Facial Treatment',
    date: '20 Feb 2024',
    time: '2:00 PM',
    status: 'Confirmed',
  },
  {
    id: '2',
    service: 'Hair Styling',
    date: '28 Feb 2024',
    time: '11:00 AM',
    status: 'Pending',
  },
]

const addresses = [
  {
    id: '1',
    type: 'Home',
    address: '123 Priyadarshini Colony, T.V. Tower Road, Shivpuri, MP 473551',
    isDefault: true,
  },
]

function DashboardContent() {
  const router = useRouter()
  const [user, setUser] = useState<SupabaseUser | null>(null)
  const [profile, setProfile] = useState<{ first_name: string; last_name: string; phone: string } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getUser = async () => {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) {
        router.push('/login')
        return
      }
      
      setUser(user)
      
      // Fetch profile
      const { data: profile } = await supabase
        .from('profiles')
        .select('first_name, last_name, phone')
        .eq('id', user.id)
        .single()
      
      setProfile(profile)
      setLoading(false)
    }
    
    getUser()
  }, [router])

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'delivered':
      case 'confirmed':
        return 'bg-green-100 text-green-800'
      case 'processing':
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'shipped':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading) {
    return (
      <>
        <Header />
        <main className="pt-16 lg:pt-20 min-h-screen bg-secondary/30 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading your dashboard...</p>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const userName = profile?.first_name 
    ? `${profile.first_name} ${profile.last_name || ''}`.trim()
    : user?.email?.split('@')[0] || 'User'

  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20 min-h-screen bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8"
          >
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                <User className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="font-serif text-2xl font-semibold">{userName}</h1>
                <p className="text-sm text-muted-foreground">{user?.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          >
            {[
              { label: 'Loyalty Points', value: '2,450', icon: Star, color: 'text-primary' },
              { label: 'Total Orders', value: '12', icon: ShoppingBag, color: 'text-blue-600' },
              { label: 'Wishlist Items', value: '5', icon: Heart, color: 'text-pink-600' },
              { label: 'Appointments', value: '2', icon: Calendar, color: 'text-green-600' },
            ].map((stat) => (
              <div key={stat.label} className="bg-card rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="font-serif text-2xl font-semibold mt-1">{stat.value}</p>
                  </div>
                  <stat.icon className={cn("h-8 w-8", stat.color)} />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Tabs */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="bg-card">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="appointments">Appointments</TabsTrigger>
              <TabsTrigger value="addresses">Addresses</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Recent Orders */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-serif text-lg font-semibold">Recent Orders</h2>
                  <Button variant="ghost" size="sm">
                    View All
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="flex -space-x-2">
                          {order.items.slice(0, 2).map((item, i) => (
                            <div key={i} className="relative w-10 h-10 rounded-lg overflow-hidden border-2 border-background">
                              <Image src={item.image} alt={item.name} fill className="object-cover" />
                            </div>
                          ))}
                        </div>
                        <div>
                          <p className="font-medium text-sm">{order.id}</p>
                          <p className="text-xs text-muted-foreground">{order.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={cn("mb-1", getStatusColor(order.status))}>{order.status}</Badge>
                        <p className="text-sm font-medium">&#8377;{order.total.toLocaleString('en-IN')}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Upcoming Appointments */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-serif text-lg font-semibold">Upcoming Appointments</h2>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/appointment">
                      Book New
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
                <div className="space-y-4">
                  {upcomingAppointments.map((apt) => (
                    <div key={apt.id} className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Calendar className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{apt.service}</p>
                          <p className="text-xs text-muted-foreground">{apt.date} at {apt.time}</p>
                        </div>
                      </div>
                      <Badge className={cn(getStatusColor(apt.status))}>{apt.status}</Badge>
                    </div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="orders">
              <div className="bg-card rounded-xl p-6">
                <h2 className="font-serif text-lg font-semibold mb-4">Order History</h2>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="border border-border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="font-medium">{order.id}</p>
                          <p className="text-sm text-muted-foreground">{order.date}</p>
                        </div>
                        <Badge className={cn(getStatusColor(order.status))}>{order.status}</Badge>
                      </div>
                      <div className="space-y-2">
                        {order.items.map((item, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="relative w-12 h-12 rounded-lg overflow-hidden">
                              <Image src={item.image} alt={item.name} fill className="object-cover" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">{item.name}</p>
                              <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Separator className="my-4" />
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">Total</p>
                        <p className="font-semibold">&#8377;{order.total.toLocaleString('en-IN')}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="appointments">
              <div className="bg-card rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-serif text-lg font-semibold">Your Appointments</h2>
                  <Button asChild>
                    <Link href="/appointment">Book New Appointment</Link>
                  </Button>
                </div>
                <div className="space-y-4">
                  {upcomingAppointments.map((apt) => (
                    <div key={apt.id} className="border border-border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <Calendar className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{apt.service}</p>
                            <p className="text-sm text-muted-foreground">{apt.date} at {apt.time}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className={cn(getStatusColor(apt.status))}>{apt.status}</Badge>
                          <div className="mt-2 space-x-2">
                            <Button variant="outline" size="sm">Reschedule</Button>
                            <Button variant="ghost" size="sm" className="text-destructive">Cancel</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="addresses">
              <div className="bg-card rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-serif text-lg font-semibold">Saved Addresses</h2>
                  <Button>Add New Address</Button>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {addresses.map((addr) => (
                    <div key={addr.id} className="border border-border rounded-lg p-4 relative">
                      {addr.isDefault && (
                        <Badge className="absolute top-2 right-2 bg-primary/10 text-primary">Default</Badge>
                      )}
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">{addr.type}</p>
                          <p className="text-sm text-muted-foreground mt-1">{addr.address}</p>
                          <div className="mt-3 space-x-2">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="ghost" size="sm">Delete</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default function DashboardPage() {
  return (
    <CartProvider>
      <DashboardContent />
    </CartProvider>
  )
}
