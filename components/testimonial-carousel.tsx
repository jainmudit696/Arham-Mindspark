"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TestimonialCarousel() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      condition: "Type 2 Diabetes",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "After 6 months of frequency treatments, my blood sugar levels have stabilized, and I've been able to reduce my medication significantly. The holistic approach at Arham has changed my life.",
      initials: "SJ",
    },
    {
      name: "Michael Chen",
      condition: "Chronic Insomnia",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "I've struggled with insomnia for over a decade. Within just a few weeks of treatment at Arham, I was sleeping through the night without any sleep aids. I feel like a new person.",
      initials: "MC",
    },
    {
      name: "Priya Patel",
      condition: "Hair Loss",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "I was skeptical at first, but after 3 months of frequency treatments, my hair has started growing back noticeably. The staff at Arham are knowledgeable and supportive throughout the process.",
      initials: "PP",
    },
    {
      name: "David Wilson",
      condition: "Kidney Function",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "My kidney function tests have shown remarkable improvement since starting treatment at Arham. The non-invasive approach was exactly what I was looking for.",
      initials: "DW",
    },
  ]

  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative mx-auto max-w-4xl px-4">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white shadow-md"
          onClick={() => {
            prev()
            setAutoplay(false)
          }}
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous</span>
        </Button>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white shadow-md"
          onClick={() => {
            next()
            setAutoplay(false)
          }}
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Card className="border-0 shadow-none">
                <CardContent className="p-6 text-center">
                  <Quote className="h-10 w-10 mx-auto mb-4 text-green-600 opacity-50" />
                  <p className="text-lg mb-6 italic text-gray-700">"{testimonial.quote}"</p>
                  <div className="flex flex-col items-center">
                    <Avatar className="h-16 w-16 border-2 border-green-100">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div className="mt-4">
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">Recovered from: {testimonial.condition}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === current ? "bg-green-600" : "bg-gray-300"}`}
            onClick={() => {
              setCurrent(index)
              setAutoplay(false)
            }}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

