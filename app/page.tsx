import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, MapPin, Phone, Calendar, Users, Award, ArrowRight } from "lucide-react"
import TestimonialCarousel from "@/components/testimonial-carousel"
import ServiceCards from "@/components/service-cards"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                Natural Healing Through Frequency
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Arham Holistic Health & Wellbeing Center
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Experience revolutionary healing without medication. Our frequency-based treatments restore balance and
                promote natural healing for a variety of conditions.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/book-consultation">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Book a Consultation
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[500px] relative aspect-video lg:aspect-square rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Holistic healing session"
                width={600}
                height={600}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Treatments */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                Our Specialties
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequency Healing for All Conditions
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our non-invasive frequency treatments help restore your body's natural balance without medication.
              </p>
            </div>
          </div>
          <ServiceCards />
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How Our Treatment Works</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our frequency-based approach works with your body's natural energy to restore balance and promote
                healing.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            {[
              {
                step: 1,
                title: "Comprehensive Assessment",
                description: "We begin with a thorough evaluation of your health condition and medical history.",
                icon: <Users className="h-10 w-10 text-green-600" />,
              },
              {
                step: 2,
                title: "Personalized Treatment",
                description:
                  "Our specialists create a customized frequency treatment plan tailored to your specific needs.",
                icon: <Award className="h-10 w-10 text-green-600" />,
              },
              {
                step: 3,
                title: "Ongoing Support",
                description: "We provide continuous monitoring and adjustments to ensure optimal results.",
                icon: <CheckCircle className="h-10 w-10 text-green-600" />,
              },
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto rounded-full bg-green-100 p-3 w-16 h-16 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <CardTitle className="mt-4">
                    Step {item.step}: {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                Success Stories
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Hear From Our Clients</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Real results from people who have experienced our frequency-based treatments.
              </p>
            </div>
          </div>
          <TestimonialCarousel />
          <div className="mt-8 text-center">
            <Link href="/results">
              <Button variant="outline" className="gap-1">
                View More Success Stories <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Seminars */}
      <section className="w-full py-12 md:py-24 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">Events</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Upcoming Seminars</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join us to learn more about frequency healing and holistic health approaches.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
            {[
              {
                title: "Introduction to Frequency Healing",
                date: "June 15, 2024",
                time: "10:00 AM - 12:00 PM",
                location: "Main Center Auditorium",
              },
              {
                title: "Holistic Approaches to Chronic Conditions",
                date: "June 22, 2024",
                time: "2:00 PM - 4:00 PM",
                location: "Online Webinar",
              },
            ].map((seminar, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{seminar.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-green-600" />
                    <span>{seminar.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-green-600" />
                    <span>{seminar.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-green-600" />
                    <span>{seminar.location}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/seminars" className="w-full">
                    <Button className="w-full">Reserve Your Spot</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link href="/seminars">
              <Button variant="outline" className="gap-1">
                View All Seminars <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-green-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Start Your Healing Journey Today</h2>
              <p className="text-green-50 md:text-xl">
                Experience the transformative power of frequency healing. Book your consultation now.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-end">
              <Link href="/book-consultation">
                <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
                  Book a Consultation
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-green-700">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="w-full py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Phone className="h-6 w-6 text-green-600" />
                <CardTitle>Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">+1 (555) 123-4567</p>
                <p className="text-gray-500">Mon-Fri: 9AM-6PM</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <MapPin className="h-6 w-6 text-green-600" />
                <CardTitle>Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">123 Healing Way</p>
                <p className="text-gray-500">Wellness District, City, 12345</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Clock className="h-6 w-6 text-green-600" />
                <CardTitle>Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">Monday - Friday: 9AM - 6PM</p>
                <p className="text-gray-500">Saturday: 10AM - 2PM</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

