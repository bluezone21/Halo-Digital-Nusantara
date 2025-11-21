import { ArrowRight } from "lucide-react";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Products() {
  const products = [
    {
      title: "Fitstock AI",
      description:
        "AI-powered stock trading and investment platform that empowers investors and traders with intelligent market analysis, predictive algorithms, and data-driven insights to maximize returns.",
      image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjM1ODE3ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "https://www.fitstock.id",
    },
    {
      title: "Fitstock Academy",
      description:
        "Specialized trading academy that helps investors and traders gain more profit by mastering Fitstock AI tools and our proven investment methods through expert-led training programs.",
      image: "https://images.unsplash.com/photo-1762330910399-95caa55acf04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NjM1MzM3NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: null,
    },
    {
      title: "Fitpost",
      description:
        "Indonesia's leading financial news and media platform delivering in-depth coverage, analysis, and insights on stocks, investing, and financial markets across the Indonesian capital market.",
      image: "https://images.unsplash.com/photo-1759215524484-89c8d7ae28f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGRpZ2l0YWwlMjBwb3N0fGVufDF8fHx8MTc2MzYyMDg5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "https://www.fitpost.id",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-black border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-purple-400 mb-4 text-sm uppercase tracking-wide">
            Our Products
          </div>
          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            Innovative Solutions for Your Business
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Discover our suite of cutting-edge products designed to accelerate your digital transformation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.title}
              className="group bg-zinc-950 border border-white/10 hover:border-purple-400 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {product.title}
                </h3>
                <p className="text-white/60 leading-relaxed mb-6">
                  {product.description}
                </p>
                {product.link ? (
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors group/link"
                  >
                    Visit {product.link.replace('https://www.', '')}
                    <ArrowRight
                      className="ml-2 group-hover/link:translate-x-1 transition-transform"
                      size={20}
                    />
                  </a>
                ) : (
                  <a
                    href="#"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors group/link"
                  >
                    Learn more
                    <ArrowRight
                      className="ml-2 group-hover/link:translate-x-1 transition-transform"
                      size={20}
                    />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
