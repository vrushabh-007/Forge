"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import { useEffect, useRef } from "react"
import PixelCard from "@/components/ui/PixelCard"
import Image from "next/image"

export default function Portfolio() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".fade-in-on-scroll")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return (
    <div className="min-h-screen text-white">
      {/* Background Video */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute min-w-full min-h-full w-auto h-auto object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ filter: 'brightness(0.4)' }}
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--dark-2)]/50 via-[var(--dark-1)]/30 to-[var(--background)]/40"></div>
      </div>

      {/* Header */}
      <header className="flex items-center justify-between p-6 max-w-7xl mx-auto animate-fade-in-down backdrop-blur-sm bg-[var(--dark-1)]/10">
        <div className="flex items-center space-x-2 group">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={160} 
            height={50} 
            style={{
              width: 'auto',
              height: '60px'
            }}
            className="transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </div>
        <nav className="flex space-x-8">
          <a href="#work" className="text-white hover:text-[var(--purple-2)] transition-all duration-300 hover:scale-105 relative group">
            Work
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--purple-2)] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#about" className="text-white hover:text-[var(--purple-2)] transition-all duration-300 hover:scale-105 relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--purple-2)] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#blog" className="text-white hover:text-[var(--purple-2)] transition-all duration-300 hover:scale-105 relative group">
            Blog
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--purple-2)] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="text-white hover:text-[var(--purple-2)] transition-all duration-300 hover:scale-105 relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--purple-2)] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <h1 className="text-6xl lg:text-8xl font-bold leading-tight text-white hover:text-[var(--purple-2)] transition-colors duration-500">
              WEB
              <br />
              DEVELOPERS
            </h1>
          </div>
          <div className="space-y-6 animate-fade-in-right">
            <p className="text-lg text-white leading-relaxed">
              I'm currently building robust and responsive web applications with a focus on user experience and modern
              design principles.
            </p>
            <p className="text-lg text-white leading-relaxed">
              I'm a passionate web developer with expertise in modern frameworks and technologies. I create elegant,
              functional websites that help businesses achieve their goals and delight users.
            </p>
            <a 
              href="https://www.instagram.com/forge_with_purpose?igsh=bWEwazE1NjFiZHQ2" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-[var(--purple-2)] hover:bg-[var(--purple-1)] text-white px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[var(--purple-2)]/25">
                GET IN TOUCH →
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services & Skills */}
      <section className="py-20 max-w-7xl mx-auto px-6 fade-in-on-scroll">
        <div className="backdrop-blur-sm bg-[var(--dark-1)]/10 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-4 text-white">Services & Skills</h2>
          <p className="text-white mb-12">Expert web development services tailored to your needs</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <button className="group relative min-h-[110px] rounded-lg overflow-hidden border border-[var(--dark-2)]/30 transition-all duration-300 hover:scale-105">
              <PixelCard
                variant="pink"
                className="absolute inset-0"
                colors="#4f1396,#2e0a79,#140359"
                speed={60}
                gap={4}
              >
                <div className="absolute inset-0 p-3 flex flex-col justify-evenly z-10">
                  <h3 className="text-lg font-semibold text-white group-hover:text-[var(--purple-2)] transition-colors duration-300">
                    FRONTEND DEVELOPMENT
                  </h3>
                  <p className="text-sm text-white/90 group-hover:opacity-100 transition-colors duration-300">
                    Creating beautiful, responsive interfaces
                  </p>
                </div>
              </PixelCard>
            </button>

            <button className="group relative min-h-[110px] rounded-lg overflow-hidden border border-[var(--dark-2)]/30 transition-all duration-300 hover:scale-105">
              <PixelCard
                variant="pink"
                className="absolute inset-0"
                colors="#4f1396,#2e0a79,#140359"
                speed={60}
                gap={4}
              >
                <div className="absolute inset-0 p-3 flex flex-col justify-evenly z-10">
                  <h3 className="text-lg font-semibold text-white group-hover:text-[var(--purple-2)] transition-colors duration-300">
                    UI/UX DESIGN
                  </h3>
                  <p className="text-sm text-white/90 group-hover:opacity-100 transition-colors duration-300">
                    User-centered design principles
                  </p>
                </div>
              </PixelCard>
            </button>

            <button className="group relative min-h-[110px] rounded-lg overflow-hidden border border-[var(--dark-2)]/30 transition-all duration-300 hover:scale-105">
              <PixelCard
                variant="pink"
                className="absolute inset-0"
                colors="#4f1396,#2e0a79,#140359"
                speed={60}
                gap={4}
              >
                <div className="absolute inset-0 p-3 flex flex-col justify-evenly z-10">
                  <h3 className="text-lg font-semibold text-white group-hover:text-[var(--purple-2)] transition-colors duration-300">
                    BACKEND SYSTEMS
                  </h3>
                  <p className="text-sm text-white/90 group-hover:opacity-100 transition-colors duration-300">
                    Robust & scalable architecture
                  </p>
                </div>
              </PixelCard>
            </button>

            <button className="group relative min-h-[110px] rounded-lg overflow-hidden border border-[var(--dark-2)]/30 transition-all duration-300 hover:scale-105">
              <PixelCard
                variant="pink"
                className="absolute inset-0"
                colors="#4f1396,#2e0a79,#140359"
                speed={60}
                gap={4}
              >
                <div className="absolute inset-0 p-3 flex flex-col justify-evenly z-10">
                  <h3 className="text-lg font-semibold text-white group-hover:text-[var(--purple-2)] transition-colors duration-300">
                    E-COMMERCE SOLUTIONS
                  </h3>
                  <p className="text-sm text-white/90 group-hover:opacity-100 transition-colors duration-300">
                    Complete online store setup
                  </p>
                </div>
              </PixelCard>
            </button>

            <button className="group relative min-h-[110px] rounded-lg overflow-hidden border border-[var(--dark-2)]/30 transition-all duration-300 hover:scale-105">
              <PixelCard
                variant="pink"
                className="absolute inset-0"
                colors="#4f1396,#2e0a79,#140359"
                speed={60}
                gap={4}
              >
                <div className="absolute inset-0 p-3 flex flex-col justify-evenly z-10">
                  <h3 className="text-lg font-semibold text-white group-hover:text-[var(--purple-2)] transition-colors duration-300">
                    RESPONSIVE DESIGN
                  </h3>
                  <p className="text-sm text-white/90 group-hover:opacity-100 transition-colors duration-300">
                    Perfect on all devices
                  </p>
                </div>
              </PixelCard>
            </button>

            <button className="group relative min-h-[110px] rounded-lg overflow-hidden border border-[var(--dark-2)]/30 transition-all duration-300 hover:scale-105">
              <PixelCard
                variant="pink"
                className="absolute inset-0"
                colors="#4f1396,#2e0a79,#140359"
                speed={60}
                gap={4}
              >
                <div className="absolute inset-0 p-3 flex flex-col justify-evenly z-10">
                  <h3 className="text-lg font-semibold text-white group-hover:text-[var(--purple-2)] transition-colors duration-300">
                    PERFORMANCE OPTIMIZATION
                  </h3>
                  <p className="text-sm text-white/90 group-hover:opacity-100 transition-colors duration-300">
                    Lightning fast websites
                  </p>
                </div>
              </PixelCard>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 max-w-7xl mx-auto px-6 fade-in-on-scroll">
        <div className="backdrop-blur-sm bg-[var(--dark-1)]/10 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-4 text-white">Featured Projects</h2>
          <p className="text-white mb-12">Some of my recent work</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <a href="https://e-commerce-website-lemon-alpha.vercel.app/" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="backdrop-blur-sm bg-[var(--dark-1)]/20 border-[var(--dark-2)]/30 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[var(--purple-2)]/10 group">
                <div className="aspect-video bg-[var(--dark-2)] flex items-center justify-center relative overflow-hidden">
                  <Image
                    src="\screencapture-e-commerce-website-lemon-alpha-vercel-app-2025-07-05-15_31_44.png"
                    alt="E-commerce Project"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[var(--purple-2)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <p className="text-white mb-4 group-hover:opacity-100 transition-colors duration-300">
                    A full-featured online store with product management and secure with cart functionality.   
                  </p>
                  <div className="flex space-x-4 text-sm text-white">
                    <span className="hover:text-[var(--purple-2)] transition-colors duration-300 cursor-pointer">React</span>
                    <span className="hover:text-[var(--purple-2)] transition-colors duration-300 cursor-pointer">Node.js</span>
                    <span className="hover:text-[var(--purple-2)] transition-colors duration-300 cursor-pointer">MongoDB</span>
                    <span className="hover:text-[var(--purple-2)] transition-colors duration-300 cursor-pointer">Stripe</span>
                  </div>
                </CardContent>
              </Card>
            </a>

            <a href="https://huff-and-puff-restaurant-website.vercel.app/" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="backdrop-blur-sm bg-[var(--dark-1)]/20 border-[var(--dark-2)]/30 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[var(--purple-2)]/10 group">
                <div className="aspect-video bg-[var(--dark-2)] flex items-center justify-center relative overflow-hidden">
                  <Image
                    src="\screencapture-huff-and-puff-restaurant-website-vercel-app-2025-07-05-17_09_57.png"
                    alt="Restaurant Website"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[var(--purple-2)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <p className="text-white mb-4 group-hover:opacity-100 transition-colors duration-300">
                    Modern website with online reservation system, menu display, and integration with delivery services.
                  </p>
                  <div className="flex space-x-4 text-sm text-white">
                    <span className="hover:text-[var(--purple-2)] transition-colors duration-300 cursor-pointer">Next.js</span>
                    <span className="hover:text-[var(--purple-2)] transition-colors duration-300 cursor-pointer">Tailwind CSS</span>
                    <span className="hover:text-[var(--purple-2)] transition-colors duration-300 cursor-pointer">Firebase</span>
                  </div>
                </CardContent>
              </Card>
            </a>

            <a href="https://gym-web-demo-psi.vercel.app/" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="backdrop-blur-sm bg-[var(--dark-1)]/20 border-[var(--dark-2)]/30 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[var(--purple-2)]/10 group">
                <div className="aspect-video bg-[var(--dark-2)] flex items-center justify-center relative overflow-hidden">
                  <Image
                    src="\screencapture-gym-web-demo-psi-vercel-app-2025-07-05-17_37_58.png"
                    alt="Gym Website"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[var(--purple-2)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <p className="text-white mb-4 group-hover:opacity-100 transition-colors duration-300">
                    Modern fitness platform with personalized workouts, nutrition guidance, and progress tracking features.
                  </p>
                  <div className="flex space-x-4 text-sm text-white">
                    <span className="hover:text-[var(--purple-2)] transition-colors duration-300 cursor-pointer">React</span>
                    <span className="hover:text-[var(--purple-2)] transition-colors duration-300 cursor-pointer">Tailwind CSS</span>
                    <span className="hover:text-[var(--purple-2)] transition-colors duration-300 cursor-pointer">Next.js</span>
                  </div>
                </CardContent>
              </Card>
            </a>

            <a href="https://portfolio-website-sand-mu-51.vercel.app/" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="backdrop-blur-sm bg-[var(--dark-1)]/20 border-[var(--dark-2)]/30 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[var(--purple-2)]/10 group">
                <div className="aspect-video bg-[var(--dark-2)] flex items-center justify-center relative overflow-hidden">
                  <Image
                    src="\screencapture-portfolio-website-sand-mu-51-vercel-app-2025-07-05-18_23_25 (1).png"
                    alt="Portfolio Website"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[var(--purple-2)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <p className="text-white mb-4 group-hover:opacity-100 transition-colors duration-300">
                    Modern portfolio website showcasing UI/UX design work, brand identity projects, and professional experience.
                  </p>
                  <div className="flex space-x-4 text-sm text-white">
                    <span className="hover:text-[var(--purple-2)] transition-colors duration-300 cursor-pointer">React</span>
                    <span className="hover:text-[var(--purple-2)] transition-colors duration-300 cursor-pointer">Next.js</span>
                    <span className="hover:text-[var(--purple-2)] transition-colors duration-300 cursor-pointer">Tailwind CSS</span>
                  </div>
                </CardContent>
              </Card>
            </a>
        </div>

        
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="py-20 max-w-7xl mx-auto px-6 fade-in-on-scroll">
        <div className="backdrop-blur-sm bg-[var(--dark-1)]/10 rounded-2xl p-8">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
            <p className="text-white mb-8">My journey and experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 backdrop-blur-sm bg-[var(--dark-1)]/20 rounded-lg hover:bg-[var(--dark-1)]/30 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white">Frontend Development</h3>
              <p className="text-white">
                Specializing in modern JavaScript frameworks like React and Vue.js, creating responsive and intuitive user interfaces.
              </p>
            </div>

            <div className="p-6 backdrop-blur-sm bg-[var(--dark-1)]/20 rounded-lg hover:bg-[var(--dark-1)]/30 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white">Backend Development</h3>
              <p className="text-white">
                Building robust server-side applications with Node.js, Express, and various database technologies.
              </p>
            </div>

            <div className="p-6 backdrop-blur-sm bg-[var(--dark-1)]/20 rounded-lg hover:bg-[var(--dark-1)]/30 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white">Full Stack Experience</h3>
              <p className="text-white">
                Combining frontend and backend expertise to deliver complete, scalable web solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 max-w-7xl mx-auto px-6 fade-in-on-scroll">
        <div className="backdrop-blur-sm bg-[var(--dark-1)]/10 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-4 text-white">Get In Touch</h2>
          <p className="text-white mb-12">Let's discuss your project</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium mb-2 text-white">Name</label>
                  <Input
                      className="backdrop-blur-sm bg-[var(--dark-1)]/20 border-[var(--dark-2)]/30 text-white focus:border-[var(--purple-2)] focus:ring-[var(--purple-2)] transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2 text-white">Email</label>
                  <Input
                      className="backdrop-blur-sm bg-[var(--dark-1)]/20 border-[var(--dark-2)]/30 text-white focus:border-[var(--purple-2)] focus:ring-[var(--purple-2)] transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                  <label className="block text-sm font-medium mb-2 text-white">Subject</label>
                <Input
                    className="backdrop-blur-sm bg-[var(--dark-1)]/20 border-[var(--dark-2)]/30 text-white focus:border-[var(--purple-2)] focus:ring-[var(--purple-2)] transition-all duration-300"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                  <label className="block text-sm font-medium mb-2 text-white">Message</label>
                <Textarea
                    className="backdrop-blur-sm bg-[var(--dark-1)]/20 border-[var(--dark-2)]/30 text-white min-h-32 focus:border-[var(--purple-2)] focus:ring-[var(--purple-2)] transition-all duration-300"
                  placeholder="Tell me about your project..."
                />
              </div>
                <Button className="bg-[var(--purple-2)] hover:bg-[var(--purple-1)] text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[var(--purple-2)]/25">
                Send Message →
              </Button>
            </form>
          </div>

          <div className="space-y-8">
              <div className="flex items-center space-x-4 p-4 rounded-lg backdrop-blur-sm hover:bg-[var(--dark-1)]/30 transition-all duration-300 hover:scale-105 group">
                <Mail className="w-6 h-6 text-[var(--purple-2)] group-hover:text-[var(--purple-2)] transition-colors duration-300" />
              <div>
                  <p className="font-medium text-white group-hover:text-[var(--purple-2)] transition-colors duration-300">Email</p>
                  <p className="text-white group-hover:opacity-100 transition-colors duration-300">
                  forgewithpurpose.web
                </p>
              </div>
            </div>

              <div className="flex items-center space-x-4 p-4 rounded-lg backdrop-blur-sm hover:bg-[var(--dark-1)]/30 transition-all duration-300 hover:scale-105 group">
                <Phone className="w-6 h-6 text-[var(--purple-2)] group-hover:text-[var(--purple-2)] transition-colors duration-300" />
              <div>
                  <p className="font-medium text-white group-hover:text-[var(--purple-2)] transition-colors duration-300">Phone</p>
                  <p className="text-white group-hover:opacity-100 transition-colors duration-300">
                  +91 8591417746
                  
                </p>
                <p className="text-white group-hover:opacity-100 transition-colors duration-300">
                   <p className="text-white group-hover:opacity-100 transition-colors duration-300">
                  +91 8828394223
                </p>
                  
                </p>
              </div>
            </div>

              <div className="flex items-center space-x-4 p-4 rounded-lg backdrop-blur-sm hover:bg-[var(--dark-1)]/30 transition-all duration-300 hover:scale-105 group">
                <MapPin className="w-6 h-6 text-[var(--purple-2)] group-hover:text-[var(--purple-2)] transition-colors duration-300" />
              <div>
                  <p className="font-medium text-white group-hover:text-[var(--purple-2)] transition-colors duration-300">Location</p>
                  <p className="text-white group-hover:opacity-100 transition-colors duration-300">
                  Mumbai, Maharashtra, India
                </p>
              </div>
            </div>

            
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--dark-2)]/30 py-12 fade-in-on-scroll backdrop-blur-sm bg-[var(--dark-1)]/10">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0 group">
              <Image 
                src="/logo.png" 
                alt="Logo" 
                width={160} 
                height={50} 
                style={{
                  width: 'auto',
                  height: '50px'
                }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex space-x-6">
              <Github className="w-5 h-5 text-[var(--purple-2)] hover:text-[var(--foreground)] cursor-pointer transition-all duration-300 hover:scale-125" />
              <Linkedin className="w-5 h-5 text-[var(--purple-2)] hover:text-[var(--foreground)] cursor-pointer transition-all duration-300 hover:scale-125" />
              <Twitter className="w-5 h-5 text-[var(--purple-2)] hover:text-[var(--foreground)] cursor-pointer transition-all duration-300 hover:scale-125" />
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-[var(--dark-2)] text-center text-[var(--purple-2)] text-sm">
            <p>© 2025 FORGE. All rights reserved.</p>
            <p>Designed and built with ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
