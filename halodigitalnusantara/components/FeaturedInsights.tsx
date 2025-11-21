import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function FeaturedInsights() {
  return (
    <section className="py-20 lg:py-32 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Featured Story */}
          <div className="relative group cursor-pointer">
            <div className="relative overflow-hidden rounded-sm">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1568952433726-3896e3881c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjI4NTgwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Technology Innovation"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="text-purple-400 mb-3 text-sm tracking-wide uppercase">Featured Insight</div>
              <h2 className="text-3xl lg:text-4xl text-white mb-4 leading-tight">
                The Future of AI in Indonesian Business
              </h2>
              <a href="#" className="inline-flex items-center text-white group-hover:text-purple-400 transition-colors cursor-pointer">
                Read more
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </div>
          </div>

          {/* Right - Grid of smaller insights */}
          <div className="grid gap-8">
            <div className="group cursor-pointer">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-32 h-32 relative overflow-hidden rounded-sm">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2Mjg0NTc2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Data Analytics"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-purple-400 mb-2 text-sm">Industry Report</div>
                  <h3 className="text-xl text-white mb-2 group-hover:text-purple-400 transition-colors">
                    Data-Driven Transformation Across APAC
                  </h3>
                  <p className="text-white/60 text-sm">
                    How leading enterprises are leveraging analytics to drive growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-32 h-32 relative overflow-hidden rounded-sm">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1758518731706-be5d5230e5a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjI4MzUwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Corporate Team"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-purple-400 mb-2 text-sm">Case Study</div>
                  <h3 className="text-xl text-white mb-2 group-hover:text-purple-400 transition-colors">
                    Reimagining Retail for the Digital Age
                  </h3>
                  <p className="text-white/60 text-sm">
                    A major Indonesian retailer's digital transformation journey.
                  </p>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-32 h-32 relative overflow-hidden rounded-sm bg-purple-900/20 flex items-center justify-center border border-purple-500/20">
                  <div className="text-center">
                    <div className="text-4xl text-purple-400 mb-1">50+</div>
                    <div className="text-white/60 text-xs">Projects</div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-purple-400 mb-2 text-sm">Success Stories</div>
                  <h3 className="text-xl text-white mb-2 group-hover:text-purple-400 transition-colors">
                    Transforming Enterprises Across Indonesia
                  </h3>
                  <p className="text-white/60 text-sm">
                    Explore our portfolio of successful digital transformations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}