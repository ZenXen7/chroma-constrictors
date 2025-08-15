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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-950">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-orange-500/10 to-red-800/10"></div>
        <Ripple className="absolute inset-0" mainCircleSize={400} numCircles={8} />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZjZiMzUiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-40 animate-pulse"></div>

        {/* Enhanced Floating Elements */}
        <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-3 h-3 sm:w-4 sm:h-4 bg-red-500/40 rounded-full animate-bounce delay-100 shadow-lg shadow-red-500/25"></div>
        <div className="absolute top-20 right-10 sm:top-40 sm:right-32 w-2 h-2 sm:w-3 sm:h-3 bg-orange-500/40 rounded-full animate-bounce delay-300 shadow-lg shadow-orange-500/25"></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-red-700/40 rounded-full animate-bounce delay-500 shadow-lg shadow-red-700/25"></div>
        <div className="absolute bottom-10 right-10 sm:bottom-40 sm:right-20 w-4 h-4 sm:w-5 sm:h-5 bg-orange-600/30 rounded-full animate-bounce delay-700 shadow-lg shadow-orange-600/25"></div>
        
        {/* Additional floating elements for mobile */}
        <div className="absolute top-1/3 left-5 w-1 h-1 bg-red-400/50 rounded-full animate-pulse delay-200"></div>
        <div className="absolute bottom-1/3 right-5 w-1 h-1 bg-orange-400/50 rounded-full animate-pulse delay-400"></div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="mb-6 sm:mb-8 animate-fade-in-up">
            <AnimatedGradientText
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-tight hover:scale-105 transition-transform duration-300"
              colorFrom="#FF0000"
              colorTo="#FF7F00"
              speed={0.6}
            >
              Chroma Constrictors
            </AnimatedGradientText>
            {/* Subtitle badge */}
            <div className="inline-flex items-center px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium backdrop-blur-sm animate-fade-in-up delay-100">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
              Premium Reptile Specialists
            </div>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
            Premium snakes with exceptional care. Discover the beauty and wonder of these magnificent creatures through our carefully curated collection.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-fade-in-up delay-400">
            <a
              href="#gallery"
              className="group relative px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full hover:from-red-600 hover:to-red-700 active:from-red-700 active:to-red-800 transition-all duration-300 font-medium text-lg shadow-xl hover:shadow-2xl hover:shadow-red-500/50 transform hover:-translate-y-3 hover:scale-110 active:scale-95 active:translate-y-0 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative flex items-center gap-2">
                Explore Our Snakes
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </a>
            <a
              href="#contact"
              className="group px-8 py-4 border-2 border-gray-600 text-gray-300 rounded-full hover:bg-gray-800 hover:border-red-500 active:bg-gray-900 active:border-red-600 transition-all duration-300 font-medium text-lg backdrop-blur-sm hover:-translate-y-3 hover:scale-110 active:scale-95 active:translate-y-0 hover:shadow-xl hover:shadow-red-500/25"
            >
              <span className="group-hover:text-red-400 group-active:text-red-500 transition-colors duration-300">Get in Touch</span>
            </a>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950 to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent,rgba(255,127,0,0.1),transparent)]"></div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-red-500/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-500/5 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="animate-fade-in-up">
              {/* Section badge */}
              <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium backdrop-blur-sm mb-6 animate-fade-in-up">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
                Gallery Collection
              </div>
              <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed opacity-90">
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
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <div className="relative group">
                      {/* Enhanced Glow Effect for Active Item */}
                      {current === index + 1 && (
                        <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-red-500/40 to-orange-500/40 rounded-2xl sm:rounded-3xl blur-xl animate-pulse"></div>
                      )}

                      {/* Enhanced Main Card */}
                      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl border border-white/10 bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-red-500/25 group-hover:border-red-500/30">
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />

                        {/* Overlay Gradients */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10"></div>

                        {/* Active Ring */}
                        {current === index + 1 && (
                          <div className="absolute inset-0">
                            <div className="absolute inset-0 ring-2 ring-red-500/70 rounded-3xl animate-pulse"></div>
                            <div className="absolute inset-2 ring-1 ring-white/30 rounded-3xl"></div>
                          </div>
                        )}

                                                 {/* Floating Elements for Active Item */}
                         {current === index + 1 && (
                           <>
                             <div className="absolute top-4 left-4 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                             <div className="absolute top-4 right-4 w-2 h-2 bg-orange-500 rounded-full animate-ping delay-300"></div>
                             <div className="absolute bottom-4 left-4 w-2 h-2 bg-red-700 rounded-full animate-ping delay-700"></div>
                           </>
                         )}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Enhanced Custom Navigation Buttons */}
              <CarouselPrevious className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl hover:from-red-500/40 hover:to-orange-500/40 active:from-red-500/60 active:to-orange-500/60 transition-all duration-300 shadow-2xl hover:shadow-red-500/25 hover:scale-110 active:scale-95" />
              <CarouselNext className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl hover:from-red-500/40 hover:to-orange-500/40 active:from-red-500/60 active:to-orange-500/60 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 hover:scale-110 active:scale-95" />
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
                        ? "bg-gradient-to-r from-red-500 to-orange-500 shadow-lg shadow-red-500/50"
                        : "bg-white/20 hover:bg-white/40"
                    }`}
                  ></div>
                  {current === index + 1 && (
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-pulse opacity-50"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-r from-gray-900 to-black">
        {/* Enhanced Animated Background Elements */}
        <div className="absolute top-10 left-5 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-red-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-5 sm:right-10 w-24 h-24 sm:w-40 sm:h-40 bg-orange-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24 animate-fade-in-up">
            {/* Section badge */}
            <div className="inline-flex items-center px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium backdrop-blur-sm mb-6 animate-fade-in-up">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
              Why Choose Us
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 text-gray-100 hover:scale-105 transition-transform duration-300">
              Why Choose Chroma Constrictors?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              With years of experience in reptile care and breeding, we provide healthy, well-socialized snakes along
              with comprehensive care guidance for both beginners and experienced keepers.
            </p>
          </div>

          <div className="grid gap-8 sm:gap-10 md:gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center group animate-fade-in-up delay-200 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-gray-800/30 to-black/30 border border-gray-700/50 backdrop-blur-sm hover:border-red-500/30 transition-all duration-500">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 sm:mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl sm:rounded-3xl shadow-2xl group-hover:shadow-red-500/50 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:rotate-6"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-red-500 to-red-700 rounded-2xl sm:rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-100 group-hover:text-red-400 transition-colors duration-300">
                Health Guaranteed
              </h3>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                All our snakes come with comprehensive health guarantees and proper documentation for your peace of
                mind.
              </p>
            </div>

            <div className="text-center group animate-fade-in-up delay-400 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-gray-800/30 to-black/30 border border-gray-700/50 backdrop-blur-sm hover:border-gray-500/30 transition-all duration-500">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 sm:mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl sm:rounded-3xl shadow-2xl group-hover:shadow-gray-500/50 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:-rotate-6"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl sm:rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-100 group-hover:text-gray-400 transition-colors duration-300">
                Expert Care
              </h3>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                Decades of experience in reptile husbandry and breeding ensures the highest quality care for every
                animal.
              </p>
            </div>

            <div className="text-center group animate-fade-in-up delay-600 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-gray-800/30 to-black/30 border border-gray-700/50 backdrop-blur-sm hover:border-orange-500/30 transition-all duration-500 sm:col-span-2 lg:col-span-1">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 sm:mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl sm:rounded-3xl shadow-2xl group-hover:shadow-orange-500/50 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:rotate-6"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl sm:rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-10 h-10 sm:w-12 sm:h-12 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-100 group-hover:text-orange-400 transition-colors duration-300">
                Lifetime Support
              </h3>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                We provide ongoing support and care guidance to ensure your snake thrives in their new home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-red-950">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-orange-500/10 to-red-700/10"></div>
        <div className="absolute top-0 left-1/4 w-60 h-60 sm:w-96 sm:h-96 bg-red-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-60 h-60 sm:w-96 sm:h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-20 h-20 bg-red-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 left-1/3 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl animate-pulse delay-700"></div>

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="animate-fade-in-up">
            {/* Section badge */}
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium backdrop-blur-sm mb-6 animate-fade-in-up">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
              Get In Touch
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
              Ready to Find Your Perfect Snake?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-12 sm:mb-16 max-w-4xl mx-auto leading-relaxed">
              Get in touch with us today to learn more about our available snakes, ask questions about care, or schedule
              a visit to meet our beautiful animals in person.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center animate-fade-in-up delay-200 max-w-2xl mx-auto">
            <a
              href="https://www.instagram.com/chroma_constrictor"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full hover:from-red-600 hover:to-orange-600 active:from-red-700 active:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-red-500/50 transform hover:-translate-y-3 hover:scale-110 active:scale-95 active:translate-y-0 text-lg font-medium overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative flex items-center justify-center gap-3 sm:gap-4">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
                Follow on Instagram
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </a>
            <a
              href="mailto:info@chromaconstrictor.com"
              className="group flex items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 border-2 border-gray-600 text-gray-300 rounded-full hover:bg-gray-800 hover:border-red-500 active:bg-gray-900 active:border-red-600 transition-all duration-300 text-lg font-medium backdrop-blur-sm hover:-translate-y-3 hover:scale-110 active:scale-95 active:translate-y-0 hover:shadow-xl hover:shadow-red-500/25"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 group-hover:text-red-400 group-active:text-red-500 transition-all duration-300" />
              <span className="group-hover:text-red-400 group-active:text-red-500 transition-colors duration-300">Email Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="border-t border-gray-700/50 py-12 sm:py-16 px-4 sm:px-6 bg-black relative overflow-hidden">
        {/* Footer background effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-red-950/10 to-transparent"></div>
        <div className="absolute top-0 left-1/3 w-40 h-40 bg-red-500/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="mb-6 sm:mb-8">
            <AnimatedGradientText className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6" colorFrom="#FF0000" colorTo="#FF7F00">
              Chroma Constrictors
            </AnimatedGradientText>
            <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg max-w-2xl mx-auto">
              Premium snakes, exceptional care, lifelong support.
            </p>
          </div>
          
          <div className="flex justify-center gap-6 sm:gap-8 mb-6 sm:mb-8">
            <a
              href="https://www.instagram.com/chroma_constrictor"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-gray-400 hover:text-red-500 active:text-red-600 transition-all duration-300 p-3 rounded-full hover:bg-red-500/10 hover:scale-110 active:scale-95"
            >
              <Instagram className="w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="mailto:info@chromaconstrictor.com"
              className="group text-gray-400 hover:text-red-500 active:text-red-600 transition-all duration-300 p-3 rounded-full hover:bg-red-500/10 hover:scale-110 active:scale-95"
            >
              <Mail className="w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
          
          <div className="border-t border-gray-700/50 pt-6 sm:pt-8">
            <p className="text-sm text-gray-400">© 2024 Chroma Constrictors. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
