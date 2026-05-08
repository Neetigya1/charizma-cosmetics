"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, Phone, Mail, CheckCircle, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CartProvider } from '@/lib/cart-context'
import { services } from '@/lib/products'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from '@/lib/utils'

const timeSlots = [
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
  '06:00 PM',
  '07:00 PM',
]

function AppointmentContent() {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const selectedServiceData = services.find((s) => s.id === selectedService)

  // Generate dates for next 14 days
  const availableDates = Array.from({ length: 14 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() + i + 1)
    return {
      value: date.toISOString().split('T')[0],
      label: date.toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' }),
      dayName: date.toLocaleDateString('en-IN', { weekday: 'short' }),
      dayNum: date.getDate(),
      isSunday: date.getDay() === 0,
    }
  })

  if (isSubmitted) {
    return (
      <>
        <Header />
        <main className="pt-16 lg:pt-20 min-h-screen flex items-center">
          <div className="mx-auto max-w-2xl px-4 py-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mx-auto w-20 h-20 flex items-center justify-center rounded-full bg-primary/10 mb-6">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <h1 className="font-serif text-3xl lg:text-4xl font-semibold mb-4">
                Appointment Booked!
              </h1>
              <p className="text-muted-foreground mb-6">
                Thank you for booking with Charizma. We have received your appointment request.
              </p>
              <div className="bg-card rounded-xl p-6 text-left mb-8">
                <h2 className="font-serif text-lg font-medium mb-4">Appointment Details</h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Service:</span>
                    <span className="font-medium">{selectedServiceData?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date:</span>
                    <span className="font-medium">{new Date(selectedDate).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time:</span>
                    <span className="font-medium">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">{selectedServiceData?.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Estimated Price:</span>
                    <span className="font-medium">&#8377;{selectedServiceData?.price.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                You will receive a confirmation call/SMS within 24 hours. Please arrive 10 minutes before your appointment.
              </p>
              <Button onClick={() => window.location.reload()}>
                Book Another Appointment
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
                Book Now
              </span>
              <h1 className="mt-3 font-serif text-3xl lg:text-4xl xl:text-5xl font-semibold">
                Schedule Your Appointment
              </h1>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Choose a service and pick a time that works for you. Our expert team is ready to pamper you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Progress Steps */}
        <section className="py-8 border-b border-border">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {['Select Service', 'Choose Date & Time', 'Your Details'].map((label, index) => (
                <div key={label} className="flex items-center">
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
                    step > index + 1 ? "bg-primary text-primary-foreground" :
                    step === index + 1 ? "bg-primary text-primary-foreground" :
                    "bg-secondary text-muted-foreground"
                  )}>
                    {step > index + 1 ? <CheckCircle className="h-4 w-4" /> : index + 1}
                  </div>
                  <span className={cn(
                    "ml-2 text-sm hidden sm:inline",
                    step === index + 1 ? "font-medium text-foreground" : "text-muted-foreground"
                  )}>
                    {label}
                  </span>
                  {index < 2 && (
                    <div className={cn(
                      "w-12 sm:w-20 h-px mx-4",
                      step > index + 1 ? "bg-primary" : "bg-border"
                    )} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            {/* Step 1: Select Service */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="font-serif text-2xl font-semibold mb-6">Select a Service</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={cn(
                        "p-4 rounded-xl border text-left transition-all",
                        selectedService === service.id
                          ? "border-primary bg-primary/5 ring-2 ring-primary"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-medium">{service.name}</h3>
                        <Sparkles className={cn(
                          "h-5 w-5",
                          selectedService === service.id ? "text-primary" : "text-muted-foreground"
                        )} />
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {service.duration}
                        </span>
                        <span className="font-medium text-primary">&#8377;{service.price.toLocaleString('en-IN')}</span>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="mt-8 flex justify-end">
                  <Button
                    onClick={() => setStep(2)}
                    disabled={!selectedService}
                  >
                    Continue
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Select Date & Time */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="font-serif text-2xl font-semibold mb-6">Choose Date & Time</h2>
                
                {/* Date Selection */}
                <div className="mb-8">
                  <Label className="mb-3 block">Select Date</Label>
                  <div className="grid grid-cols-7 gap-2">
                    {availableDates.slice(0, 14).map((date) => (
                      <button
                        key={date.value}
                        onClick={() => !date.isSunday && setSelectedDate(date.value)}
                        disabled={date.isSunday}
                        className={cn(
                          "p-2 rounded-lg text-center transition-all",
                          date.isSunday
                            ? "bg-muted text-muted-foreground cursor-not-allowed"
                            : selectedDate === date.value
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary hover:bg-secondary/80"
                        )}
                      >
                        <span className="text-xs block">{date.dayName}</span>
                        <span className="text-lg font-medium">{date.dayNum}</span>
                      </button>
                    ))}
                  </div>
                  {selectedDate && (
                    <p className="mt-2 text-sm text-muted-foreground">
                      Selected: {new Date(selectedDate).toLocaleDateString('en-IN', { weekday: 'long', month: 'long', day: 'numeric' })}
                    </p>
                  )}
                </div>

                {/* Time Selection */}
                <div className="mb-8">
                  <Label className="mb-3 block">Select Time</Label>
                  <div className="grid grid-cols-5 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={cn(
                          "py-2 px-3 rounded-lg text-sm font-medium transition-all",
                          selectedTime === time
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary hover:bg-secondary/80"
                        )}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button
                    onClick={() => setStep(3)}
                    disabled={!selectedDate || !selectedTime}
                  >
                    Continue
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Personal Details */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="font-serif text-2xl font-semibold mb-6">Your Details</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email (Optional)</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Special Requests (Optional)</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      placeholder="Any special requests or notes for your appointment..."
                      value={formData.notes}
                      onChange={handleChange}
                      rows={3}
                    />
                  </div>

                  {/* Summary */}
                  <div className="bg-secondary/50 rounded-xl p-4">
                    <h3 className="font-medium mb-3">Booking Summary</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Service:</span>
                        <span>{selectedServiceData?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Date:</span>
                        <span>{new Date(selectedDate).toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' })}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Time:</span>
                        <span>{selectedTime}</span>
                      </div>
                      <div className="flex justify-between font-medium pt-2 border-t border-border">
                        <span>Estimated Total:</span>
                        <span className="text-primary">&#8377;{selectedServiceData?.price.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between">
                    <Button variant="outline" type="button" onClick={() => setStep(2)}>
                      Back
                    </Button>
                    <Button type="submit" disabled={isLoading || !formData.name || !formData.phone}>
                      {isLoading ? 'Booking...' : 'Confirm Booking'}
                    </Button>
                  </div>
                </form>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default function AppointmentPage() {
  return (
    <CartProvider>
      <AppointmentContent />
    </CartProvider>
  )
}
