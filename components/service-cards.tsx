import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Droplet, TreesIcon as Lungs, Leaf, Moon } from "lucide-react"
import Link from "next/link"

export default function ServiceCards() {
  const services = [
    {
      title: "Diabetes Management",
      description: "Natural frequency treatments to help regulate blood sugar levels and improve insulin sensitivity.",
      icon: <Droplet className="h-10 w-10 text-green-600" />,
      link: "/services/diabetes",
    },
    {
      title: "Insomnia & Sleep Disorders",
      description: "Restore natural sleep patterns and overcome insomnia without medication through frequency therapy.",
      icon: <Moon className="h-10 w-10 text-green-600" />,
      link: "/services/insomnia",
    },
    {
      title: "Hair Loss & Growth",
      description:
        "Stimulate natural hair growth and address the root causes of hair loss with our frequency treatments.",
      icon: <Leaf className="h-10 w-10 text-green-600" />,
      link: "/services/hair",
    },
    {
      title: "Kidney Health",
      description: "Support kidney function and address kidney-related conditions through targeted frequency therapy.",
      icon: <Droplet className="h-10 w-10 text-green-600" />,
      link: "/services/kidney",
    },
    {
      title: "Liver Support",
      description: "Detoxification and support for liver conditions using our advanced frequency treatments.",
      icon: <Heart className="h-10 w-10 text-green-600" />,
      link: "/services/liver",
    },
    {
      title: "Respiratory Health",
      description: "Improve breathing and address lung conditions with non-invasive frequency therapy.",
      icon: <Lungs className="h-10 w-10 text-green-600" />,
      link: "/services/lungs",
    },
  ]

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
      {services.map((service, index) => (
        <Link href={service.link} key={index} className="group">
          <Card className="h-full transition-all duration-200 group-hover:shadow-md">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="rounded-full bg-green-100 p-2 transition-colors group-hover:bg-green-200">
                {service.icon}
              </div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{service.description}</CardDescription>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

