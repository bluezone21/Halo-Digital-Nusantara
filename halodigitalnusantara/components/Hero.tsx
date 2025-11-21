import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Halo Admin, Saya ingin menggunakan jasa dari Halo Digital Nusantara"
    );
    const phoneNumber = "6282123699807";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1726064855857-46c37dc43c78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRpZ2l0YWwlMjB0cmFuc2Zvcm1hdGlvbnxlbnwxfHx8fDE3NjI5MDcyMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Digital transformation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Let there be change
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
            Delivering 360° value to transform Indonesia's
            businesses through technology, strategy, and
            innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 transition-all duration-300 group cursor-pointer"
              onClick={handleWhatsAppClick}
            >
              Get Started
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white hover:bg-white hover:text-black text-lg px-8 transition-all duration-300 cursor-pointer"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}