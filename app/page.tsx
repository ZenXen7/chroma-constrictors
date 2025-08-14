"use client"

import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text"
import { Ripple } from "@/components/magicui/ripple"
import { Instagram, Mail, Star, Shield, Heart, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function Home() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const snakeImages = [
    { src: "/snake-1.png", alt: "Snake 1" },
    { src: "/snake-2.png", alt: "Snake 2" },
    { src: "/snake-3.png", alt: "Snake 3" },
    { src: "/snake-4.png", alt: "Snake 4" },
    { src: "/snake-5.png", alt: "Snake 5" },
    { src: "/snake-6.png", alt: "Snake 6" },
  ]

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-purple-500/5 to-pink-500/5"></div>
        <Ripple className="absolute inset-0" mainCircleSize={400} numCircles={8} />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZjZiMzUiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-40 animate-pulse"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-orange-400/30 rounded-full animate-bounce delay-100"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400/30 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-pink-400/30 rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-40 right-20 w-5 h-5 bg-orange-400/20 rounded-full animate-bounce delay-700"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="mb-8 animate-fade-in-up">
            <AnimatedGradientText
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight hover:scale-105 transition-transform duration-300"
              colorFrom="#ff6b35"
              colorTo="#7b2cbf"
              speed={0.6}
            >
              Chroma Constrictors
            </AnimatedGradientText>
          </div>

          <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
            Premium snakes with exceptional care. Discover the beauty and wonder of these magnificent creatures.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-400">
            <a
              href="#gallery"
              className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-500 font-medium text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative flex items-center gap-2">
                Explore Our Snakes
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </a>
            <a
              href="#contact"
              className="group px-8 py-4 border-2 border-slate-300 dark:border-slate-600 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-500 font-medium text-lg backdrop-blur-sm hover:-translate-y-2 hover:scale-105 hover:shadow-xl"
            >
              <span className="group-hover:text-orange-500 transition-colors duration-300">Get in Touch</span>
            </a>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-32 px-6 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-orange-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent,rgba(123,44,191,0.1),transparent)]"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="animate-fade-in-up">
              <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-orange-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                Our Beautiful Snakes
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed opacity-90">
                Each snake in our collection is carefully selected for their beauty, health, and temperament.
              </p>
            </div>
          </div>

          {/* Enhanced Shadcn Carousel */}
          <div className="relative max-w-5xl mx-auto">
            <Carousel
              setApi={setApi}
              className="w-full"
              plugins={[
                Autoplay({
                  delay: 4000,
                  stopOnInteraction: true,
                  stopOnMouseEnter: true,
                }),
              ]}
              opts={{
                align: "center",
                loop: true,
              }}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {snakeImages.map((image, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="relative group">
                      {/* Glow Effect for Active Item */}
                      {current === index + 1 && (
                        <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/30 to-purple-400/30 rounded-3xl blur-xl animate-pulse"></div>
                      )}

                      {/* Main Card */}
                      <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-orange-500/25">
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />

                        {/* Overlay Gradients */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-purple-500/10"></div>

                        {/* Active Ring */}
                        {current === index + 1 && (
                          <div className="absolute inset-0">
                            <div className="absolute inset-0 ring-2 ring-orange-400/70 rounded-3xl animate-pulse"></div>
                            <div className="absolute inset-2 ring-1 ring-white/30 rounded-3xl"></div>
                          </div>
                        )}

                                                 {/* Floating Elements for Active Item */}
                         {current === index + 1 && (
                           <>
                             <div className="absolute top-4 left-4 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
                             <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-300"></div>
                             <div className="absolute bottom-4 left-4 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-700"></div>
                           </>
                         )}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Custom Navigation Buttons */}
              <CarouselPrevious className="absolute left-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-orange-500/20 to-purple-500/20 backdrop-blur-xl border border-white/10 rounded-2xl hover:from-orange-500/40 hover:to-purple-500/40 transition-all duration-500 shadow-2xl hover:shadow-orange-500/25" />
              <CarouselNext className="absolute right-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-orange-500/20 to-purple-500/20 backdrop-blur-xl border border-white/10 rounded-2xl hover:from-orange-500/40 hover:to-purple-500/40 transition-all duration-500 shadow-2xl hover:shadow-purple-500/25" />
            </Carousel>

            {/* Enhanced Dot Indicators */}
            <div className="flex justify-center space-x-4 mt-16">
              {snakeImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`relative transition-all duration-500 ${
                    current === index + 1 ? "w-12 h-3" : "w-3 h-3 hover:w-6"
                  }`}
                >
                  <div
                    className={`w-full h-full rounded-full transition-all duration-500 ${
                      current === index + 1
                        ? "bg-gradient-to-r from-orange-400 to-purple-400 shadow-lg shadow-orange-400/50"
                        : "bg-white/20 hover:bg-white/40"
                    }`}
                  ></div>
                  {current === index + 1 && (
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-purple-400 rounded-full animate-pulse opacity-50"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-r from-slate-100 to-orange-50 dark:from-slate-800 dark:to-slate-900">
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-24 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-slate-800 dark:text-slate-100 hover:scale-105 transition-transform duration-300">
              Why Choose Chroma Constrictors?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              With years of experience in reptile care and breeding, we provide healthy, well-socialized snakes along
              with comprehensive care guidance for both beginners and experienced keepers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group animate-fade-in-up delay-200">
              <div className="relative w-24 h-24 mx-auto mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl shadow-2xl group-hover:shadow-orange-500/50 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:rotate-6"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-100 group-hover:text-orange-600 transition-colors duration-300">
                Health Guaranteed
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                All our snakes come with comprehensive health guarantees and proper documentation for your peace of
                mind.
              </p>
            </div>

            <div className="text-center group animate-fade-in-up delay-400">
              <div className="relative w-24 h-24 mx-auto mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:-rotate-6"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-100 group-hover:text-purple-600 transition-colors duration-300">
                Expert Care
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                Decades of experience in reptile husbandry and breeding ensures the highest quality care for every
                animal.
              </p>
            </div>

            <div className="text-center group animate-fade-in-up delay-600">
              <div className="relative w-24 h-24 mx-auto mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-pink-600 rounded-3xl shadow-2xl group-hover:shadow-pink-500/50 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:rotate-6"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-pink-400 to-pink-600 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-100 group-hover:text-pink-600 transition-colors duration-300">
                Lifetime Support
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                We provide ongoing support and care guidance to ensure your snake thrives in their new home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
              Ready to Find Your Perfect Snake?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-16 max-w-3xl mx-auto leading-relaxed">
              Get in touch with us today to learn more about our available snakes, ask questions about care, or schedule
              a visit to meet our beautiful animals in person.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-fade-in-up delay-200">
            <a
              href="https://www.instagram.com/chroma_constrictor"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-500 shadow-2xl hover:shadow-purple-500/50 transform hover:-translate-y-2 hover:scale-105 text-lg font-medium overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative flex items-center gap-4">
                <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                Follow on Instagram
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </a>
            <a
              href="mailto:info@chromaconstrictor.com"
              className="group flex items-center gap-4 px-10 py-5 border-2 border-slate-300 dark:border-slate-600 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-500 text-lg font-medium backdrop-blur-sm hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:border-orange-400"
            >
              <Mail className="w-6 h-6 group-hover:scale-110 group-hover:text-orange-500 transition-all duration-300" />
              <span className="group-hover:text-orange-500 transition-colors duration-300">Email Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-700 py-16 px-6 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedGradientText className="text-3xl font-bold mb-6" colorFrom="#ff6b35" colorTo="#7b2cbf">
            Chroma Constrictors
          </AnimatedGradientText>
          <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg">
            Premium snakes, exceptional care, lifelong support.
          </p>
          <div className="flex justify-center gap-8 mb-8">
            <a
              href="https://www.instagram.com/chroma_constrictor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-orange-500 transition-colors duration-300"
            >
              <Instagram className="w-8 h-8" />
            </a>
            <a
              href="mailto:info@chromaconstrictor.com"
              className="text-slate-400 hover:text-orange-500 transition-colors duration-300"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">© 2024 Chroma Constrictors. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
