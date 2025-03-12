import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're here to answer your questions and help you start your healing journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                <p className="text-gray-500 mb-6">
                  Have questions about our treatments or want to schedule a consultation? Reach out to us using any of
                  the methods below or fill out the contact form.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-green-600" />
                      Phone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      <a href="tel:+15551234567" className="hover:text-green-600">
                        +1 (555) 123-4567
                      </a>
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-green-600" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      <a href="mailto:info@arhamhealth.com" className="hover:text-green-600">
                        info@arhamhealth.com
                      </a>
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-green-600" />
                      Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      123 Healing Way
                      <br />
                      Wellness District, City, 12345
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-green-600" />
                      Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Monday - Friday: 9AM - 6PM
                      <br />
                      Saturday: 10AM - 2PM
                      <br />
                      Sunday: Closed
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Connect With Us</h3>
                <div className="flex space-x-4">
                  <Link href="#" className="bg-gray-100 p-3 rounded-full hover:bg-green-100 transition-colors">
                    <Facebook className="h-5 w-5 text-gray-600" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link href="#" className="bg-gray-100 p-3 rounded-full hover:bg-green-100 transition-colors">
                    <Instagram className="h-5 w-5 text-gray-600" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link href="#" className="bg-gray-100 p-3 rounded-full hover:bg-green-100 transition-colors">
                    <Twitter className="h-5 w-5 text-gray-600" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link href="#" className="bg-gray-100 p-3 rounded-full hover:bg-green-100 transition-colors">
                    <Youtube className="h-5 w-5 text-gray-600" />
                    <span className="sr-only">YouTube</span>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium">
                          First name
                        </label>
                        <Input id="first-name" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium">
                          Last name
                        </label>
                        <Input id="last-name" placeholder="Doe" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="john.doe@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone
                      </label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input id="subject" placeholder="How can we help you?" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Please provide details about your inquiry..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Find Us</h2>
              <p className="max-w-[700px] text-gray-500">
                Our center is conveniently located in the heart of the city, easily accessible by public transportation.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl rounded-xl overflow-hidden shadow-lg">
            <div className="aspect-video w-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Interactive Map Would Be Embedded Here</p>
              {/* In a real implementation, you would embed a Google Maps or similar map service here */}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-green-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Start Your Healing Journey?</h2>
              <p className="text-green-50 md:text-xl">
                Book a consultation today and take the first step towards natural, medication-free healing.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-end">
              <Link href="/book-consultation">
                <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
                  Book a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

