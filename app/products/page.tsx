import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart } from "lucide-react"

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Products for Holistic Wellbeing
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Enhance your healing journey with our carefully selected products that complement our frequency
                treatments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-5">
                <TabsTrigger value="all">All Products</TabsTrigger>
                <TabsTrigger value="devices">Frequency Devices</TabsTrigger>
                <TabsTrigger value="supplements">Supplements</TabsTrigger>
                <TabsTrigger value="books">Books & Media</TabsTrigger>
                <TabsTrigger value="accessories">Accessories</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="all" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    name: "Personal Frequency Generator",
                    description: "Compact device for at-home frequency treatments to complement in-center sessions.",
                    price: 299.99,
                    image: "/placeholder.svg?height=300&width=300",
                    category: "Devices",
                    rating: 4.8,
                    reviews: 124,
                    bestseller: true,
                  },
                  {
                    name: "Cellular Balance Supplement",
                    description: "Natural supplement designed to enhance the effects of frequency treatments.",
                    price: 49.99,
                    image: "/placeholder.svg?height=300&width=300",
                    category: "Supplements",
                    rating: 4.6,
                    reviews: 89,
                    bestseller: false,
                  },
                  {
                    name: "Frequency Healing Guide",
                    description: "Comprehensive book on the principles and applications of frequency healing.",
                    price: 24.99,
                    image: "/placeholder.svg?height=300&width=300",
                    category: "Books & Media",
                    rating: 4.9,
                    reviews: 56,
                    bestseller: false,
                  },
                  {
                    name: "Meditation Frequency Audio",
                    description: "Audio tracks with specific frequencies to enhance meditation and relaxation.",
                    price: 19.99,
                    image: "/placeholder.svg?height=300&width=300",
                    category: "Books & Media",
                    rating: 4.7,
                    reviews: 42,
                    bestseller: false,
                  },
                  {
                    name: "Frequency Conductive Pads",
                    description: "Replacement pads for use with our frequency devices for optimal energy transfer.",
                    price: 29.99,
                    image: "/placeholder.svg?height=300&width=300",
                    category: "Accessories",
                    rating: 4.5,
                    reviews: 38,
                    bestseller: false,
                  },
                  {
                    name: "Detox Support Formula",
                    description: "Herbal supplement that supports the body's natural detoxification processes.",
                    price: 39.99,
                    image: "/placeholder.svg?height=300&width=300",
                    category: "Supplements",
                    rating: 4.4,
                    reviews: 65,
                    bestseller: false,
                  },
                  {
                    name: "Frequency Healing for Beginners",
                    description: "Introductory guide to understanding and using frequency healing at home.",
                    price: 18.99,
                    image: "/placeholder.svg?height=300&width=300",
                    category: "Books & Media",
                    rating: 4.8,
                    reviews: 29,
                    bestseller: false,
                  },
                  {
                    name: "Portable Frequency Scanner",
                    description:
                      "Handheld device that measures your body's frequency responses for personalized treatment.",
                    price: 199.99,
                    image: "/placeholder.svg?height=300&width=300",
                    category: "Devices",
                    rating: 4.7,
                    reviews: 47,
                    bestseller: true,
                  },
                ].map((product, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="object-cover w-full h-48"
                      />
                      {product.bestseller && (
                        <div className="absolute top-2 left-2 bg-yellow-100 text-yellow-800 px-2 py-1 text-xs font-medium rounded">
                          Bestseller
                        </div>
                      )}
                      <Button variant="ghost" size="icon" className="absolute top-2 right-2 bg-white/80 rounded-full">
                        <Heart className="h-5 w-5" />
                        <span className="sr-only">Add to wishlist</span>
                      </Button>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{product.name}</CardTitle>
                          <CardDescription>{product.category}</CardDescription>
                        </div>
                        <Badge variant="outline" className="bg-green-50">
                          ${product.price}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500 text-sm">{product.description}</p>
                      <div className="flex items-center mt-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 ml-2">
                          {product.rating} ({product.reviews} reviews)
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            {/* Similar TabsContent for other product categories would be implemented here */}
          </Tabs>
        </div>
      </section>

      {/* Featured Product */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="mx-auto w-full max-w-[500px] relative aspect-square rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Advanced Frequency Generator Pro"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                Featured Product
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">Advanced Frequency Generator Pro</h2>
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">5.0 (36 reviews)</span>
              </div>
              <p className="text-2xl font-bold">$499.99</p>
              <p className="text-gray-500">
                Our most advanced frequency device for home use. The Frequency Generator Pro offers professional-grade
                frequency treatments in the comfort of your home. With 100+ preset programs and the ability to create
                custom frequency sequences, this device is perfect for those serious about continuing their healing
                journey between center visits.
              </p>
              <ul className="space-y-2">
                {[
                  "100+ preset frequency programs for various conditions",
                  "Touchscreen interface with intuitive controls",
                  "Bluetooth connectivity for updates and new programs",
                  "Rechargeable battery with 12+ hours of operation",
                  "Includes 4 conductive pads and carrying case",
                ].map((feature, index) => (
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
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Bundles */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Value Bundles</h2>
              <p className="max-w-[700px] text-gray-500">
                Save with our specially curated product combinations for optimal results.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Beginner's Healing Bundle",
                description: "Everything you need to start your frequency healing journey at home.",
                price: 349.99,
                originalPrice: 399.97,
                image: "/placeholder.svg?height=300&width=300",
                items: [
                  "Personal Frequency Generator",
                  "Frequency Healing for Beginners Book",
                  "Cellular Balance Supplement (1 month)",
                ],
              },
              {
                name: "Complete Wellness Bundle",
                description: "Our most comprehensive package for serious health optimization.",
                price: 649.99,
                originalPrice: 749.95,
                image: "/placeholder.svg?height=300&width=300",
                items: [
                  "Advanced Frequency Generator Pro",
                  "Frequency Healing Guide",
                  "Meditation Frequency Audio",
                  "Detox Support Formula (3 months)",
                  "Extra Conductive Pads Set",
                ],
              },
              {
                name: "Maintenance Bundle",
                description: "Perfect for continuing your treatment between center visits.",
                price: 199.99,
                originalPrice: 239.97,
                image: "/placeholder.svg?height=300&width=300",
                items: [
                  "Cellular Balance Supplement (3 months)",
                  "Meditation Frequency Audio",
                  "Frequency Conductive Pads",
                ],
              },
            ].map((bundle, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative">
                  <Image
                    src={bundle.image || "/placeholder.svg"}
                    alt={bundle.name}
                    width={300}
                    height={300}
                    className="object-cover w-full h-48"
                  />
                  <div className="absolute top-2 right-2 bg-red-100 text-red-800 px-2 py-1 text-xs font-medium rounded">
                    Save ${(bundle.originalPrice - bundle.price).toFixed(2)}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{bundle.name}</CardTitle>
                  <CardDescription>{bundle.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold">${bundle.price}</span>
                    <span className="text-sm text-gray-500 line-through">${bundle.originalPrice}</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Includes:</p>
                    <ul className="space-y-1">
                      {bundle.items.map((item, i) => (
                        <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                          <div className="rounded-full bg-green-100 p-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
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
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add Bundle to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">What Our Customers Say</h2>
              <p className="max-w-[700px] text-gray-500">
                Hear from people who have experienced the benefits of our products.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Jennifer L.",
                product: "Personal Frequency Generator",
                quote:
                  "I've been using the Personal Frequency Generator for 3 months now between my center visits, and I've noticed a significant improvement in my energy levels and sleep quality.",
                rating: 5,
              },
              {
                name: "Marcus T.",
                product: "Cellular Balance Supplement",
                quote:
                  "The Cellular Balance Supplement has been a game-changer for my digestive issues. When combined with the frequency treatments at the center, my symptoms have improved dramatically.",
                rating: 5,
              },
              {
                name: "Sophia K.",
                product: "Meditation Frequency Audio",
                quote:
                  "I listen to the Meditation Frequency Audio every night before bed. It's helped me fall asleep faster and stay asleep longer. The quality of my sleep has never been better.",
                rating: 4,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="italic text-gray-600 mb-4">"{testimonial.quote}"</p>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">on {testimonial.product}</p>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Not Sure Which Products Are Right For You?
              </h2>
              <p className="text-green-50 md:text-xl">
                Book a consultation with our specialists for personalized product recommendations based on your health
                needs.
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

