"use client";

import { useState } from "react";
import Image from "next/image";

import { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroImages = [
  {
    src: "/monkey-eating-leaves-in-forest.jpg",
    alt: "Monyet di habitat alami",
  },
  {
    src: "/tropical-forest-biodiversity.jpg",
    alt: "Keanekaragaman hayati hutan tropis",
  },
  {
    src: "/wildlife-conservation-area.jpg",
    alt: "Area konservasi satwa liar",
  },
];

export function HeroSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const startTimer = () => {
      timerRef.current = setInterval(() => {
        if (api.canScrollNext()) {
          api.scrollNext();
        } else {
          api.scrollTo(0);
        }
      }, 5000);
    };

    startTimer();

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [api]);

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (!api) return;

    timerRef.current = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);
  };

  return (
    <section className="relative min-h-screen h-[100dvh] overflow-hidden">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="h-full"
      >
        <CarouselContent className="h-full">
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative w-full h-[95dvh]">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <button
        onClick={() => {
          api?.scrollPrev();
          resetTimer();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-emerald-500/30 z-30 bg-slate-900/40 backdrop-blur-sm border border-emerald-400/30 size-12 rounded-full flex items-center justify-center transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={() => {
          api?.scrollNext();
          resetTimer();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-emerald-500/30 z-30 bg-slate-900/40 backdrop-blur-sm border border-emerald-400/30 size-12 rounded-full flex items-center justify-center transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Hero Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="text-center text-white max-w-4xl px-4">
          <h1
            className="text-4xl md:text-6xl font-bold mb-4 text-balance text-white"
            style={{
              textShadow:
                "2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)",
            }}
          >
            KEANEKARAGAMAN HAYATI
          </h1>
          <h2
            className="text-2xl md:text-4xl font-semibold mb-2 text-white"
            style={{
              textShadow:
                "2px 2px 6px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.6)",
            }}
          >
            PT PLN NUSANTARA POWER
          </h2>
          <h3
            className="text-xl md:text-2xl font-medium text-white"
            style={{
              textShadow:
                "1px 1px 4px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.6)",
            }}
          >
            UNIT PEMBANGKITAN CIRATA
          </h3>
        </div>
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex space-x-2 z-20 pointer-events-auto">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              api?.scrollTo(index);
              resetTimer();
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index
                ? "bg-emerald-400 scale-125"
                : "bg-white/60 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
