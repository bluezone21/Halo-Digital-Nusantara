import { ArrowRight, TrendingUp, Building2, Zap, Heart, ShoppingBag, Cpu, Users, Home, Coffee, GraduationCap, Sparkles, Truck } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function IndustriesPage() {
  const industries = [
    {
      icon: TrendingUp,
      title: 'Financial',
      description:
        'Transform financial services with digital banking, fintech innovation, and advanced analytics for better customer experiences and operational efficiency.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYmFua2luZ3xlbnwxfHx8fDE3NjI5MDc5NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      stats: { projects: '120+', clients: '25+', impact: '40% cost reduction' },
      capabilities: ['Digital Banking', 'Payment Systems', 'Risk Management', 'Wealth Management'],
    },
    {
      icon: ShoppingBag,
      title: 'Retail',
      description:
        'Reimagine retail for the digital age with omnichannel experiences, supply chain optimization, and AI-powered personalization.',
      image: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZXxlbnwxfHx8fDE3NjI5MDc5Njd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      stats: { projects: '100+', clients: '30+', impact: '60% online growth' },
      capabilities: ['E-commerce', 'Omnichannel', 'Inventory Management', 'Customer Analytics'],
    },
    {
      icon: ShoppingBag,
      title: 'Grocery',
      description:
        'Modernize grocery operations with smart inventory, delivery optimization, and seamless online-to-offline customer experiences.',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwc3RvcmV8ZW58MXx8fHwxNzYyOTEyNDUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      stats: { projects: '80+', clients: '20+', impact: '45% faster delivery' },
      capabilities: ['Online Ordering', 'Delivery Management', 'Fresh Food Tracking', 'Loyalty Programs'],
    },
    {
      icon: Users,
      title: 'Human Resources',
      description:
        'Transform HR operations with digital workforce solutions, talent management platforms, and automated employee experiences.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxocnxlbnwxfHx8fDE3NjI5MTI0NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      stats: { projects: '70+', clients: '18+', impact: '50% process efficiency' },
      capabilities: ['HRIS Systems', 'Talent Acquisition', 'Performance Management', 'Employee Engagement'],
    },
    {
      icon: Home,
      title: 'Property',
      description:
        'Revolutionize real estate with smart building technology, property management platforms, and digital transaction systems.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9wZXJ0eSUyMHJlYWwlMjBlc3RhdGV8ZW58MXx8fHwxNzYyOTEyNDkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      stats: { projects: '60+', clients: '15+', impact: '35% sales increase' },
      capabilities: ['Property Management', 'Smart Buildings', 'Virtual Tours', 'Transaction Platforms'],
    },
    {
      icon: Coffee,
      title: 'F & B',
      description:
        'Elevate food and beverage operations with digital ordering, kitchen automation, and enhanced customer engagement solutions.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50fGVufDF8fHx8MTc2MjkxMjUxMHww&ixlib=rb-4.1.0&q=80&w=1080',
      stats: { projects: '90+', clients: '25+', impact: '40% order accuracy' },
      capabilities: ['Digital Menu', 'POS Systems', 'Kitchen Display', 'Delivery Integration'],
    },
  ];

  const additionalIndustries = [
    'Community',
    'Education',
    'Beauty',
    'Shipment & Delivery',
    'Hospitality',
    'Tour & Travel',
    'ERP',
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzYyOTA5MDAyfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Industries"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/50"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="text-purple-400 mb-4 text-sm uppercase tracking-wide">
              Industry Expertise
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              Industries We Serve
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
              Deep sector expertise combined with digital innovation to help you
              navigate industry-specific challenges and opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Main Industries */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-32">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={industry.title}
                  className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                >
                  {/* Image */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="relative h-[500px] rounded-sm overflow-hidden group cursor-pointer">
                      <ImageWithFallback
                        src={industry.image}
                        alt={industry.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-sm bg-purple-600/10 border border-purple-500/20 flex items-center justify-center">
                        <Icon className="text-purple-400" size={32} />
                      </div>
                      <h2 className="text-4xl lg:text-5xl text-white">
                        {industry.title}
                      </h2>
                    </div>

                    <p className="text-xl text-white/70 mb-8 leading-relaxed">
                      {industry.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 mb-8 p-6 bg-zinc-950 border border-white/10 rounded-sm">
                      <div>
                        <div className="text-2xl text-purple-400 mb-1">
                          {industry.stats.projects}
                        </div>
                        <div className="text-white/60 text-sm">Projects</div>
                      </div>
                      <div>
                        <div className="text-2xl text-purple-400 mb-1">
                          {industry.stats.clients}
                        </div>
                        <div className="text-white/60 text-sm">Clients</div>
                      </div>
                      <div>
                        <div className="text-2xl text-purple-400 mb-1 text-sm lg:text-base">
                          {industry.stats.impact}
                        </div>
                        <div className="text-white/60 text-sm">Avg Impact</div>
                      </div>
                    </div>

                    {/* Capabilities */}
                    <div className="mb-8">
                      <h3 className="text-white mb-4 text-lg">
                        Key Capabilities
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        {industry.capabilities.map((capability) => (
                          <div
                            key={capability}
                            className="flex items-center gap-2"
                          >
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                            <span className="text-white/60">{capability}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 group cursor-pointer">
                      Explore {industry.title}
                      <ArrowRight
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                        size={20}
                      />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Industries */}
      <section className="py-20 lg:py-32 bg-zinc-950 border-y border-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              More Industries
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              We serve clients across every major industry with tailored solutions
              and deep sector expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalIndustries.map((industry) => (
              <Card
                key={industry}
                className="group bg-black border border-white/10 hover:border-purple-400 transition-all duration-300 cursor-pointer"
              >
                <div className="p-8">
                  <h3 className="text-2xl text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {industry}
                  </h3>
                  <div className="inline-flex items-center text-white/40 group-hover:text-purple-400 transition-colors">
                    Learn more
                    <ArrowRight
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl text-white mb-8">
              Transform Your Industry
            </h2>
            <p className="text-xl text-white/60 mb-12">
              Partner with us to navigate disruption and unlock new opportunities
              in your sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 transition-all duration-300 group cursor-pointer"
              >
                Discuss Your Needs
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
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}