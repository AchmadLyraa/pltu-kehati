"use client";

import type React from "react";

import { useState, useEffect, useCallback } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Maximize,
  Minimize,
  Play,
  Pause,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

interface ImageData {
  id: number;
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface AdvancedImageModalProps {
  images: ImageData[];
  initialIndex?: number;
  trigger: React.ReactNode;
  showNavigation?: boolean;
  showThumbnails?: boolean;
  showToolbar?: boolean;
}

export function AdvancedImageModal({
  images,
  initialIndex = 0,
  trigger,
  showNavigation = true,
  showThumbnails = true,
  showToolbar = true,
}: AdvancedImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const currentImage = images[currentIndex];
  const isGallery = images.length > 1;

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || !isGallery) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, isGallery, images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          goToPrevious();
          break;
        case "ArrowRight":
          e.preventDefault();
          goToNext();
          break;
        case "Escape":
          e.preventDefault();
          setIsOpen(false);
          break;
        case " ":
          e.preventDefault();
          if (isGallery) setIsPlaying(!isPlaying);
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isPlaying, isGallery]);

  const goToPrevious = useCallback(() => {
    if (!isGallery) return;
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [isGallery, images.length]);

  const goToNext = useCallback(() => {
    if (!isGallery) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [isGallery, images.length]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = currentImage.src;
    link.download = currentImage.title || `image-${currentIndex + 1}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = (e.clientX - rect.left) / rect.width;
    const clickY = (e.clientY - rect.top) / rect.height;

    if (zoom === 1) {
      const newZoom = 2;
      setZoom(newZoom);
      setOffset({
        x: rect.width / 2 - clickX * rect.width * newZoom,
        y: rect.height / 2 - clickY * rect.height * newZoom,
      });
    } else {
      setZoom(1);
      setOffset({ x: 0, y: 0 });
    }
  };

  // Tombol ZoomIn
  const handleZoomIn = () => {
    const newZoom = Math.min(zoom + 0.25, 3);
    setZoom(newZoom);
    setOffset((prev) => ({
      x: prev.x * (newZoom / zoom),
      y: prev.y * (newZoom / zoom),
    }));
  };

  // Tombol ZoomOut
  const handleZoomOut = () => {
    const newZoom = Math.max(zoom - 0.25, 1);
    setZoom(newZoom);
    if (newZoom === 1) {
      setOffset({ x: 0, y: 0 });
    } else {
      setOffset((prev) => ({
        x: prev.x * (newZoom / zoom),
        y: prev.y * (newZoom / zoom),
      }));
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const openInNewTab = () => {
    window.open(currentImage.src, "_blank");
  };

  const zoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 3));
  const zoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.5));

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild onClick={() => setIsOpen(true)}>
        {trigger}
      </DialogTrigger>
      <DialogContent
        className="max-w-[95vw] max-h-[95vh] w-full h-full p-0 bg-black/95 border-none"
        showCloseButton={false}
      >
        <div className="relative w-full h-full flex flex-col">
          {/* Top Toolbar */}
          {showToolbar && (
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-2 bg-black/70 rounded-lg px-4 py-2">
              {isGallery && (
                <span className="text-white text-sm font-medium overflow-auto">
                  {currentIndex + 1}/{images.length}
                </span>
              )}
              <div className="flex items-center gap-1 ml-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleZoomOut}
                  className="text-white hover:bg-white/20 p-2"
                >
                  <ZoomOut className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleZoomIn}
                  className="text-white hover:bg-white/20 p-2"
                >
                  <ZoomIn className="w-4 h-4" />
                </Button>
                {isGallery && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="text-white hover:bg-white/20 p-2"
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4" />
                    ) : (
                      <Play className="w-4 h-4" />
                    )}
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={openInNewTab}
                  className="text-white hover:bg-white/20 p-2"
                >
                  <Maximize className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleDownload}
                  className="text-white hover:bg-white/20 p-2"
                >
                  <Download className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 p-2"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Fixed Navigation Arrows - Outside Image Area */}
          {showNavigation && isGallery && (
            <>
              <Button
                variant="ghost"
                size="lg"
                onClick={goToPrevious}
                className="fixed left-8 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 p-4 z-50 rounded-full bg-black/50"
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={goToNext}
                className="fixed right-8 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 p-4 z-50 rounded-full bg-black/50"
              >
                <ChevronRight className="w-8 h-8" />
              </Button>
            </>
          )}

          {/* Main Image Area */}
          <div className="flex items-center justify-center relative w-full h-full overflow-hidden bg-black">
            <img
              src={currentImage.src || "/placeholder.svg"}
              alt={currentImage.alt}
              onClick={handleImageClick}
              className="w-auto max-w-full h-auto max-h-full object-contain transition-transform duration-300"
              style={{
                transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
                transformOrigin: "top left",
                cursor: zoom === 1 ? "zoom-in" : "zoom-out",
              }}
            />
          </div>

          {/* Image Info */}
          {currentImage.title && (
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center z-40">
              <h3 className="text-white text-lg font-semibold italic mb-1">
                {currentImage.title}
              </h3>
              {currentImage.description && (
                <p className="text-white/80 text-sm">
                  {currentImage.description}
                </p>
              )}
            </div>
          )}

          {/* Thumbnail Strip */}
          {showThumbnails && isGallery && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40">
              <div className="flex gap-2 bg-black/70 rounded-lg p-2 max-w-[80vw] overflow-x-auto">
                {images.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setCurrentIndex(index)}
                    className={`flex-shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-all ${
                      index === currentIndex
                        ? "border-white"
                        : "border-transparent hover:border-white/50"
                    }`}
                  >
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
