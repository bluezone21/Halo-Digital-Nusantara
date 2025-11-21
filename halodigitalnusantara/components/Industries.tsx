import { ArrowRight } from 'lucide-react';

type PageType = 'home' | 'what-we-do' | 'who-we-are' | 'insights' | 'careers' | 'industries' | 'newsroom' | 'investor-relations' | 'contact' | 'privacy' | 'terms' | 'cookies' | 'sitemap';

interface IndustriesProps {
  navigateTo?: (page: PageType) => void;
}

export function Industries({ navigateTo }: IndustriesProps) {
  const industries = [
    'Financial',
    'Retail',
    'Grocery',
    'Human Resources',
    'Property',
    'Community',
    'F & B',
    'Education',
    'Beauty',
    'Shipment & Delivery',
    'Hospitality',
    'Tour & Travel',
    'ERP',
  ];

  return (
    <section className="py-20 lg:py-32 bg-black border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              Industries
            </h2>
            <p className="text-xl text-white/60 mb-8">
              Deep expertise across every major industry, helping you navigate sector-specific challenges and opportunities.
            </p>
            {navigateTo ? (
              <button 
                onClick={() => navigateTo('industries')}
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors text-lg group cursor-pointer"
              >
                Explore all industries
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            ) : (
              <a 
                href="#"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors text-lg group cursor-pointer"
              >
                Explore all industries
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            )}
          </div>

          <div className="grid grid-cols-2 gap-6">
            {industries.map((industry) => (
              navigateTo ? (
                <button
                  key={industry}
                  onClick={() => navigateTo('industries')}
                  className="group py-4 border-b border-white/10 hover:border-purple-400 transition-colors cursor-pointer text-left w-full"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white group-hover:text-purple-400 transition-colors text-lg">
                      {industry}
                    </span>
                    <ArrowRight 
                      className="text-white/40 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" 
                      size={20} 
                    />
                  </div>
                </button>
              ) : (
                <a
                  key={industry}
                  href="#"
                  className="group py-4 border-b border-white/10 hover:border-purple-400 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white group-hover:text-purple-400 transition-colors text-lg">
                      {industry}
                    </span>
                    <ArrowRight 
                      className="text-white/40 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" 
                      size={20} 
                    />
                  </div>
                </a>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}