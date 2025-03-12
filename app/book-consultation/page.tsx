import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function BookConsultationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Book Your Consultation</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Take the first step towards natural, medication-free healing with a personalized consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Consultation Information</h2>
                <p className="text-gray-500 mb-6">
                  Our initial consultation includes a comprehensive assessment of your health condition and a
                  personalized treatment plan recommendation.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-green-100 p-2 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Comprehensive Health Assessment</h3>
                    <p className="text-gray-500">
                      Our specialists will evaluate your current health status, medical history, and specific concerns.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-green-100 p-2 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Frequency Analysis</h3>
                    <p className="text-gray-500">
                      Using advanced technology, we'll identify frequency imbalances that may be contributing to your
                      condition.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-green-100 p-2 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Personalized Treatment Plan</h3>
                    <p className="text-gray-500">
                      You'll receive a customized treatment recommendation tailored to your specific needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-green-100 p-2 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Q&A Session</h3>
                    <p className="text-gray-500">
                      Time to ask questions and discuss your treatment options with our specialists.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Consultation Details</h3>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span>Duration: Approximately 60 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-green-600" />
                  <span>Available: Monday-Friday, 9AM-5PM</span>
                </div>
              </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Book Your Appointment</CardTitle>
                  <CardDescription>Fill out the form below to schedule your consultation.</CardDescription>
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
                      <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">What condition are you seeking treatment for?</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a condition" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="diabetes">Diabetes</SelectItem>
                          <SelectItem value="insomnia">Insomnia</SelectItem>
                          <SelectItem value="hair-loss">Hair Loss</SelectItem>
                          <SelectItem value="kidney">Kidney Issues</SelectItem>
                          <SelectItem value="liver">Liver Issues</SelectItem>
                          <SelectItem value="lungs">Respiratory Issues</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="other-condition" className="text-sm font-medium">
                        If other, please specify
                      </label>
                      <Input id="other-condition" placeholder="Describe your condition" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Preferred appointment date</label>
                      <Input type="date" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Preferred time of day</label>
                      <RadioGroup defaultValue="morning">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="morning" id="morning" />
                          <Label htmlFor="morning">Morning (9AM - 12PM)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="afternoon" id="afternoon" />
                          <Label htmlFor="afternoon">Afternoon (12PM - 3PM)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="evening" id="evening" />
                          <Label htmlFor="evening">Evening (3PM - 6PM)</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="additional-info" className="text-sm font-medium">
                        Additional information
                      </label>
                      <Textarea
                        id="additional-info"
                        placeholder="Please share any additional information that might be relevant to your consultation..."
                        className="min-h-[100px]"
                      />
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="terms" />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I agree to the terms and conditions
                        </label>
                        <p className="text-sm text-muted-foreground">
                          By checking this box, you agree to our{" "}
                          <Link href="/terms" className="text-green-600 hover:underline">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy" className="text-green-600 hover:underline">
                            Privacy Policy
                          </Link>
                          .
                        </p>
                      </div>
                    </div>
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                      Book Consultation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
              <p className="max-w-[700px] text-gray-500">
                Find answers to common questions about our consultation process and treatments.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl space-y-4">
            {[
              {
                question: "How long does the initial consultation take?",
                answer:
                  "The initial consultation typically lasts about 60 minutes. This gives us enough time to thoroughly assess your condition, discuss your health history, and recommend a personalized treatment plan.",
              },
              {
                question: "Do I need to prepare anything for my consultation?",
                answer:
                  "It's helpful to bring any recent medical records or test results related to your condition. Also, make a list of any medications or supplements you're currently taking.",
              },
              {
                question: "How many treatment sessions will I need?",
                answer:
                  "The number of sessions varies depending on your specific condition and how your body responds to the treatment. After your initial consultation, we'll provide a recommended treatment plan with an estimated number of sessions.",
              },
              {
                question: "Are frequency treatments covered by insurance?",
                answer:
                  "Coverage varies by insurance provider. We recommend checking with your insurance company about coverage for alternative or complementary treatments. We can provide you with the necessary documentation to submit to your insurance.",
              },
              {
                question: "Is frequency treatment safe?",
                answer:
                  "Yes, our frequency treatments are non-invasive and have no known side effects. They work by harmonizing with your body's natural frequencies rather than introducing foreign substances.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-green-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Have More Questions?</h2>
              <p className="max-w-[600px] text-green-50 md:text-xl">
                Our team is here to help. Contact us directly for any additional information.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
                  Contact Us
                </Button>
              </Link>
              <Link href="tel:+15551234567">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-green-700">
                  Call Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

