import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function CallToAction() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Halo Admin, Saya ingin menggunakan jasa dari Halo Digital Nusantara"
    );
    const phoneNumber = "6282123699807";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="py-20 lg:py-32 bg-black border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl text-white mb-8 leading-tight">
            Ready to transform your business?
          </h2>
          <p className="text-xl lg:text-2xl text-white/60 mb-12">
            Let's discuss how Halo Digital Nusantara can help
            you achieve your digital transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 transition-all duration-300 group cursor-pointer"
              onClick={handleWhatsAppClick}
            >
              Contact Us
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
              Explore Careers
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}