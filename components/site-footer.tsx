import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Arham Logo"
                width={40}
                height={40}
                className="rounded-md"
              />
              <span className="font-bold text-xl">Arham Holistic Health</span>
            </Link>
            <p className="text-gray-500 max-w-xs">
              Pioneering frequency-based treatments for holistic healing without medication.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-green-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-green-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-green-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-green-600">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-gray-500 hover:text-green-600">
                About Us
              </Link>
              <Link href="/services" className="text-gray-500 hover:text-green-600">
                Our Services
              </Link>
              <Link href="/results" className="text-gray-500 hover:text-green-600">
                Success Stories
              </Link>
              <Link href="/seminars" className="text-gray-500 hover:text-green-600">
                Seminars & Events
              </Link>
              <Link href="/products" className="text-gray-500 hover:text-green-600">
                Products
              </Link>
              <Link href="/contact" className="text-gray-500 hover:text-green-600">
                Contact Us
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-green-600 mt-0.5" />
                <span className="text-gray-500">123 Healing Way, Wellness District, City, 12345</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-green-600" />
                <span className="text-gray-500">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-green-600" />
                <span className="text-gray-500">info@arhamhealth.com</span>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Hours of Operation</h4>
              <p className="text-gray-500">Monday - Friday: 9AM - 6PM</p>
              <p className="text-gray-500">Saturday: 10AM - 2PM</p>
              <p className="text-gray-500">Sunday: Closed</p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Subscribe to Our Newsletter</h3>
            <p className="text-gray-500">Stay updated with the latest in holistic health and upcoming events.</p>
            <form className="space-y-2">
              <Input type="email" placeholder="Your email address" className="bg-white" />
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Arham Holistic Health & Wellbeing Center. All rights reserved.
            </p>
            <nav className="flex gap-4 text-sm">
              <Link href="/privacy-policy" className="text-gray-500 hover:text-green-600">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-500 hover:text-green-600">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-500 hover:text-green-600">
                Sitemap
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

