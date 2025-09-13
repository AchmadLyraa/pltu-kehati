import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ContentSection } from "@/components/content-section";
import { MapSection } from "@/components/map-section";
import { GallerySection } from "@/components/gallery-section";
import { Footer } from "@/components/footer-main";

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
