import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export default function ResultsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Stories & Results</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Real people, real results. Discover how our frequency treatments have transformed lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials by Condition */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 md:grid-cols-7">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="diabetes">Diabetes</TabsTrigger>
                <TabsTrigger value="insomnia">Insomnia</TabsTrigger>
                <TabsTrigger value="hair">Hair Growth</TabsTrigger>
                <TabsTrigger value="kidney">Kidney</TabsTrigger>
                <TabsTrigger value="liver">Liver</TabsTrigger>
                <TabsTrigger value="lungs">Respiratory</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="all" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
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
                  {
                    name: "Sophia Rodriguez",
                    condition: "Liver Health",
                    image: "/placeholder.svg?height=80&width=80",
                    quote:
                      "After years of struggling with liver issues, I found Arham. Their frequency treatments have helped improve my liver function tests and I feel more energetic than I have in years.",
                    initials: "SR",
                  },
                  {
                    name: "James Kim",
                    condition: "Asthma",
                    image: "/placeholder.svg?height=80&width=80",
                    quote:
                      "I've had asthma since childhood and have always relied on inhalers. Since starting frequency treatments, my breathing has improved dramatically and I rarely need my rescue inhaler now.",
                    initials: "JK",
                  },
                ].map((testimonial, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12 border-2 border-green-100">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                          <CardDescription>{testimonial.condition}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="relative">
                        <Quote className="absolute top-0 left-0 h-6 w-6 text-green-200 -translate-x-2 -translate-y-2" />
                        <p className="pt-4 pl-4 text-gray-600 italic">"{testimonial.quote}"</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="diabetes" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "Sarah Johnson",
                    condition: "Type 2 Diabetes",
                    image: "/placeholder.svg?height=80&width=80",
                    quote:
                      "After 6 months of frequency treatments, my blood sugar levels have stabilized, and I've been able to reduce my medication significantly. The holistic approach at Arham has changed my life.",
                    initials: "SJ",
                  },
                  {
                    name: "Robert Thompson",
                    condition: "Type 2 Diabetes",
                    image: "/placeholder.svg?height=80&width=80",
                    quote:
                      "I was diagnosed with diabetes 5 years ago. Since starting treatment at Arham, my A1C levels have dropped from 8.2 to 6.5, and I've been able to reduce my medication by half.",
                    initials: "RT",
                  },
                  {
                    name: "Anita Sharma",
                    condition: "Pre-Diabetes",
                    image: "/placeholder.svg?height=80&width=80",
                    quote:
                      "The frequency treatments helped me reverse my pre-diabetic condition. My blood sugar is now in the normal range, and I've avoided having to start medication altogether.",
                    initials: "AS",
                  },
                ].map((testimonial, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12 border-2 border-green-100">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                          <CardDescription>{testimonial.condition}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="relative">
                        <Quote className="absolute top-0 left-0 h-6 w-6 text-green-200 -translate-x-2 -translate-y-2" />
                        <p className="pt-4 pl-4 text-gray-600 italic">"{testimonial.quote}"</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            {/* Similar TabsContent for other conditions would be implemented here */}
          </Tabs>
        </div>
      </section>

      {/* Before & After */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Before & After Results</h2>
              <p className="max-w-[700px] text-gray-500">
                Visual evidence of the transformative effects of our frequency treatments.
              </p>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                condition: "Hair Growth",
                description: "Results after 4 months of frequency treatment",
              },
              {
                condition: "Skin Condition",
                description: "Results after 2 months of frequency treatment",
              },
              {
                condition: "Wound Healing",
                description: "Results after 3 weeks of frequency treatment",
              },
            ].map((result, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <CardTitle>{result.condition}</CardTitle>
                  <CardDescription>{result.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="grid grid-cols-2">
                    <div className="relative aspect-square">
                      <div className="absolute top-2 left-2 bg-red-100 text-red-800 px-2 py-1 text-xs font-medium rounded">
                        Before
                      </div>
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt={`Before ${result.condition} treatment`}
                        width={300}
                        height={300}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="relative aspect-square">
                      <div className="absolute top-2 left-2 bg-green-100 text-green-800 px-2 py-1 text-xs font-medium rounded">
                        After
                      </div>
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt={`After ${result.condition} treatment`}
                        width={300}
                        height={300}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Results */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Clinical Results</h2>
              <p className="max-w-[700px] text-gray-500">
                Measurable improvements in health markers from our frequency treatments.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-4xl space-y-8">
            {[
              {
                condition: "Diabetes Management",
                metrics: [
                  { name: "Average A1C Reduction", value: "1.7 points" },
                  { name: "Patients Reducing Medication", value: "68%" },
                  { name: "Average Treatment Duration", value: "6 months" },
                ],
                description:
                  "Based on data from 120 patients with Type 2 Diabetes who completed our frequency treatment program.",
              },
              {
                condition: "Insomnia Treatment",
                metrics: [
                  { name: "Average Sleep Duration Increase", value: "2.3 hours" },
                  { name: "Patients Discontinuing Sleep Aids", value: "72%" },
                  { name: "Average Treatment Duration", value: "8 weeks" },
                ],
                description:
                  "Based on data from 85 patients with chronic insomnia who completed our frequency treatment program.",
              },
              {
                condition: "Hair Regrowth",
                metrics: [
                  { name: "Average New Hair Growth", value: "+22%" },
                  { name: "Patients Reporting Thicker Hair", value: "81%" },
                  { name: "Average Treatment Duration", value: "4 months" },
                ],
                description:
                  "Based on data from 95 patients with hair loss who completed our frequency treatment program.",
              },
            ].map((result, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{result.condition}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    {result.metrics.map((metric, i) => (
                      <div key={i} className="text-center p-4 bg-gray-50 rounded-lg">
                        <p className="text-2xl font-bold text-green-600">{metric.value}</p>
                        <p className="text-sm text-gray-500">{metric.name}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 italic">{result.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-green-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Experience These Results Yourself</h2>
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

