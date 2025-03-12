import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

export default function SeminarsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Seminars & Events</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join us for educational seminars and workshops on frequency healing and holistic health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Seminars */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">Events</div>
              <h2 className="text-3xl font-bold tracking-tighter">Upcoming Seminars</h2>
              <p className="max-w-[700px] text-gray-500">
                Learn about frequency healing and holistic health approaches from our experts.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Introduction to Frequency Healing",
                description:
                  "Learn the basics of how frequency healing works and how it can help with various health conditions.",
                date: "June 15, 2024",
                time: "10:00 AM - 12:00 PM",
                location: "Main Center Auditorium",
                speaker: "Dr. Amelia Patel",
                image: "/placeholder.svg?height=200&width=400",
                capacity: 50,
                remaining: 12,
              },
              {
                title: "Holistic Approaches to Chronic Conditions",
                description:
                  "Discover how frequency healing and other holistic approaches can help manage chronic conditions like diabetes, hypertension, and autoimmune disorders.",
                date: "June 22, 2024",
                time: "2:00 PM - 4:00 PM",
                location: "Online Webinar",
                speaker: "Dr. Michael Chen",
                image: "/placeholder.svg?height=200&width=400",
                capacity: 100,
                remaining: 45,
              },
              {
                title: "Frequency Healing for Mental Wellbeing",
                description:
                  "Explore how frequency treatments can support mental health, reduce stress, and improve overall wellbeing.",
                date: "July 5, 2024",
                time: "1:00 PM - 3:00 PM",
                location: "Main Center Auditorium",
                speaker: "Dr. Sarah Johnson",
                image: "/placeholder.svg?height=200&width=400",
                capacity: 50,
                remaining: 28,
              },
            ].map((seminar, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative">
                  <Image
                    src={seminar.image || "/placeholder.svg"}
                    alt={seminar.title}
                    width={400}
                    height={200}
                    className="object-cover w-full h-48"
                  />
                  <div className="absolute top-2 right-2 bg-green-100 text-green-800 px-2 py-1 text-xs font-medium rounded">
                    {seminar.remaining} spots left
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{seminar.title}</CardTitle>
                  <CardDescription>Presented by {seminar.speaker}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-500">{seminar.description}</p>
                  <div className="space-y-2">
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
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-green-600" />
                      <span>Capacity: {seminar.capacity}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={`/seminars/register?event=${encodeURIComponent(seminar.title)}`} className="w-full">
                    <Button className="w-full bg-green-600 hover:bg-green-700">Reserve Your Spot</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Seminars */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Past Seminars</h2>
              <p className="max-w-[700px] text-gray-500">
                Recordings and materials from our previous educational events.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "The Science Behind Frequency Healing",
                description: "An in-depth look at the scientific principles that make frequency healing effective.",
                date: "May 10, 2024",
                speaker: "Dr. Robert Thompson",
                image: "/placeholder.svg?height=200&width=400",
                recording: true,
              },
              {
                title: "Frequency Treatments for Digestive Health",
                description: "How frequency healing can address various digestive disorders and improve gut health.",
                date: "April 22, 2024",
                speaker: "Dr. Priya Patel",
                image: "/placeholder.svg?height=200&width=400",
                recording: true,
              },
              {
                title: "Integrating Frequency Healing with Conventional Medicine",
                description:
                  "How to combine frequency treatments with traditional medical approaches for optimal results.",
                date: "March 15, 2024",
                speaker: "Dr. James Wilson",
                image: "/placeholder.svg?height=200&width=400",
                recording: true,
              },
            ].map((seminar, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative">
                  <Image
                    src={seminar.image || "/placeholder.svg"}
                    alt={seminar.title}
                    width={400}
                    height={200}
                    className="object-cover w-full h-48 opacity-80"
                  />
                  <div className="absolute top-2 right-2 bg-blue-100 text-blue-800 px-2 py-1 text-xs font-medium rounded">
                    Recording Available
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{seminar.title}</CardTitle>
                  <CardDescription>
                    Presented by {seminar.speaker} on {seminar.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">{seminar.description}</p>
                </CardContent>
                <CardFooter>
                  <Link href={`/seminars/recordings?event=${encodeURIComponent(seminar.title)}`} className="w-full">
                    <Button variant="outline" className="w-full">
                      Watch Recording
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Host a Seminar */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                For Organizations
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">Host a Private Seminar</h2>
              <p className="text-gray-500 md:text-lg">
                Interested in hosting a frequency healing seminar for your organization, wellness center, or community
                group? Our experts can provide customized presentations on a variety of health topics.
              </p>
              <ul className="space-y-2">
                {[
                  "Customized content for your audience's specific interests",
                  "Interactive demonstrations of frequency healing technology",
                  "Q&A sessions with our health specialists",
                  "Available in-person or as virtual webinars",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-600"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact?subject=Private%20Seminar%20Inquiry">
                <Button className="bg-green-600 hover:bg-green-700">Inquire About Hosting</Button>
              </Link>
            </div>
            <div className="mx-auto w-full max-w-[500px] relative aspect-video rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Private seminar"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="w-full py-12 md:py-24 bg-green-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Stay Updated on Future Events</h2>
              <p className="max-w-[600px] text-green-50 md:text-xl">
                Subscribe to our newsletter to receive notifications about upcoming seminars and events.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-gray-900"
                />
                <Button type="submit" className="bg-white text-green-600 hover:bg-green-50">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-green-100">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

