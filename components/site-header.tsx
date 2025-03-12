"use client"

import React from "react"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/placeholder.svg?height=32&width=32"
            alt="Arham Logo"
            width={32}
            height={32}
            className="rounded-md"
          />
          <span className="hidden font-bold sm:inline-block">Arham Holistic Health</span>
        </Link>
        <div className="hidden md:flex md:flex-1 md:justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-green-50 to-green-100 p-6 no-underline outline-none focus:shadow-md"
                          href="/about"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">About Arham</div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Learn about our center, our mission, and our approach to holistic healing.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/about/team" title="Our Team">
                      Meet our experienced practitioners and staff
                    </ListItem>
                    <ListItem href="/about/philosophy" title="Our Philosophy">
                      Understand our holistic approach to health
                    </ListItem>
                    <ListItem href="/about/facility" title="Our Facility">
                      Tour our state-of-the-art healing center
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/services/diabetes" title="Diabetes Treatment">
                      Natural frequency healing for diabetes management
                    </ListItem>
                    <ListItem href="/services/insomnia" title="Insomnia & Sleep">
                      Restore natural sleep patterns without medication
                    </ListItem>
                    <ListItem href="/services/hair" title="Hair Growth">
                      Solutions for hair loss and promoting healthy growth
                    </ListItem>
                    <ListItem href="/services/kidney" title="Kidney Health">
                      Support kidney function through frequency therapy
                    </ListItem>
                    <ListItem href="/services/liver" title="Liver Health">
                      Detoxification and support for liver conditions
                    </ListItem>
                    <ListItem href="/services/lungs" title="Respiratory Health">
                      Breathing improvement and lung condition treatment
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/results" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Results</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/seminars" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Seminars</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/products" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Products</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="hidden md:flex md:items-center md:gap-2 md:justify-end md:flex-1">
          <Link href="/book-consultation">
            <Button className="bg-green-600 hover:bg-green-700">Book Consultation</Button>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  Home
                </Link>
                <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  About
                </Link>
                <Link href="/services" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  Services
                </Link>
                <Link href="/results" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  Results
                </Link>
                <Link href="/seminars" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  Seminars
                </Link>
                <Link href="/products" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  Products
                </Link>
                <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  Contact
                </Link>
                <Link href="/book-consultation" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-green-600 hover:bg-green-700 mt-4">Book Consultation</Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

