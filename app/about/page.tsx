import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, Award, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">About Us</div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Pioneering Holistic Health Through Frequency Healing
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At Arham Holistic Health & Wellbeing Center, we're revolutionizing healthcare through non-invasive
                frequency-based treatments that work with your body's natural energy.
              </p>
            </div>
            <div className="mx-auto w-full max-w-[500px] relative aspect-video lg:aspect-square rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Arham Holistic Health Center"
                width={600}
                height={600}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">Our Story</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">A Journey of Healing and Discovery</h2>
            </div>
          </div>
          <div className="mx-auto max-w-3xl mt-8 space-y-6 text-gray-500 md:text-lg/relaxed">
            <p>
              Arham Holistic Health & Wellbeing Center was founded with a simple yet powerful vision: to provide
              effective healing without the side effects of medication. Our journey began when our founder, after years
              of research into alternative healing modalities, discovered the transformative power of frequency-based
              treatments.
            </p>
            <p>
              What started as a small practice has grown into a comprehensive wellness center that has helped thousands
              of patients overcome chronic conditions that conventional medicine struggled to address effectively.
            </p>
            <p>
              Today, we continue to pioneer advancements in frequency healing, combining ancient wisdom with modern
              technology to create personalized treatment plans that address the root causes of illness rather than just
              managing symptoms.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">Our Mission</div>
              <h2 className="text-3xl font-bold tracking-tighter">Transforming Healthcare Through Natural Healing</h2>
              <p className="text-gray-500 md:text-lg/relaxed">
                Our mission is to revolutionize healthcare by providing effective, non-invasive treatments that work
                with the body's natural healing mechanisms. We believe in addressing the root causes of illness, not
                just managing symptoms.
              </p>
              <ul className="space-y-2">
                {[
                  "Provide accessible holistic healthcare to all",
                  "Advance research in frequency-based healing",
                  "Educate communities about natural health alternatives",
                  "Create personalized treatment plans for lasting results",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">Our Values</div>
              <h2 className="text-3xl font-bold tracking-tighter">Principles That Guide Our Practice</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Holistic Approach",
                    description: "Treating the whole person, not just isolated symptoms",
                    icon: <Heart className="h-8 w-8 text-green-600" />,
                  },
                  {
                    title: "Scientific Integrity",
                    description: "Combining traditional wisdom with modern research",
                    icon: <Award className="h-8 w-8 text-green-600" />,
                  },
                  {
                    title: "Patient Empowerment",
                    description: "Educating clients to take control of their health",
                    icon: <Users className="h-8 w-8 text-green-600" />,
                  },
                  {
                    title: "Continuous Innovation",
                    description: "Always improving our methods and technologies",
                    icon: <CheckCircle className="h-8 w-8 text-green-600" />,
                  },
                ].map((value, index) => (
                  <Card key={index} className="border-0 shadow-sm">
                    <CardHeader className="pb-2">
                      <div className="mb-2">{value.icon}</div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{value.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">Our Approach</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The Science of Frequency Healing</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Understanding how our revolutionary treatments work with your body's natural energy.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <Image
              src="/placeholder.svg?height=400&width=400"
              width={400}
              height={400}
              alt="Frequency healing technology"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">How Frequency Treatment Works</h3>
              <p className="text-gray-500">
                Every cell in your body has its own frequency. When disease or dysfunction occurs, these frequencies
                become disrupted. Our advanced technology identifies these disruptions and applies corrective
                frequencies to restore balance.
              </p>
              <p className="text-gray-500">
                Unlike conventional treatments that often mask symptoms with medication, our approach addresses the root
                cause of health issues by working with your body's natural healing mechanisms.
              </p>
              <p className="text-gray-500">
                The result is a non-invasive, drug-free treatment that can effectively address a wide range of
                conditions from chronic diseases to acute ailments.
              </p>
              <Link href="/services">
                <Button className="bg-green-600 hover:bg-green-700">Explore Our Treatments</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-green-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Experience the Difference Today</h2>
              <p className="text-green-50 md:text-xl">
                Join thousands of satisfied clients who have transformed their health with our frequency-based
                treatments.
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
    </div>
  )
}

