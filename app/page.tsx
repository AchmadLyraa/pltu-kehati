import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/home/hero-section";
import { ContentSection } from "@/components/home/content-section";
import { MapSection } from "@/components/home/map-section";
import { GallerySection } from "@/components/home/gallery-section";
import { Footer } from "@/components/home/footer-main";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <HeroSection />
        <ContentSection />
        <MapSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
}
