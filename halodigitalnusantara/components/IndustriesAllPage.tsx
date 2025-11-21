import { ArrowRight, TrendingUp, ShoppingBag, ShoppingCart, Users, Home, Heart, Coffee, GraduationCap, Sparkles, Truck, Plane, Package } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function IndustriesAllPage() {
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
        'Reimagine retail for the digital age with omnichannel experiences, supply chain optimization, and AI-powered personalization for enhanced customer satisfaction.',
      image: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZXxlbnwxfHx8fDE3NjI5MDc5Njd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      stats: { projects: '100+', clients: '30+', impact: '60% online growth' },
      capabilities: ['E-commerce Platform', 'Omnichannel Strategy', 'Inventory Management', 'Customer Analytics'],
    },
    {
      icon: ShoppingCart,
      title: 'Grocery',
      description:
        'Modernize grocery operations with smart inventory management, delivery optimization, and seamless online-to-offline customer experiences.',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwc3RvcmV8ZW58MXx8fHwxNzYyOTEyNDUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      stats: { projects: '80+', clients: '20+', impact: '45% faster delivery' },
      capabilities: ['Online Ordering', 'Delivery Management', 'Fresh Food Tracking', 'Loyalty Programs'],
    },
    {
      icon: Users,
      title: 'Human Resources',
      description:
        'Transform HR operations with digital workforce solutions, talent management platforms, and automated employee experiences for modern organizations.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxocnxlbnwxfHx8fDE3NjI5MTI0NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      stats: { projects: '70+', clients: '18+', impact: '50% process efficiency' },
      capabilities: ['HRIS Systems', 'Talent Acquisition', 'Performance Management', 'Employee Engagement'],
    },
    {
      icon: Home,
      title: 'Property',
      description:
        'Revolutionize real estate with smart building technology, property management platforms, and digital transaction systems for seamless operations.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9wZXJ0eSUyMHJlYWwlMjBlc3RhdGV8ZW58MXx8fHwxNzYyOTEyNDkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      stats: { projects: '60+', clients: '15+', impact: '35% sales increase' },
      capabilities: ['Property Management', 'Smart Buildings', 'Virtual Tours', 'Transaction Platforms'],
    },
    {
      icon: Heart,
      title: 'Community',
      description:
        'Empower communities with digital engagement platforms, social management tools, and collaborative solutions that bring people together.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBwZW9wbGV8ZW58MXx8fHwxNzMxNTg3MjAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      stats: { projects: '55+', clients: '12+', impact: '70% engagement boost' },
      capabilities: ['Community Platforms', 'Social Management', 'Event Coordination', 'Member Portals'],
    },
    {
      icon: Coffee,
      title: 'F & B',
      description:
        'Elevate food and beverage operations with digital ordering systems, kitchen automation, and enhanced customer engagement solutions.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50fGVufDF8fHx8MTc2MjkxMjUxMHww&ixlib=rb-4.1.0&q=80&w=1080',
      stats: { projects: '90+', clients: '25+', impact: '40% order accuracy' },
      capabilities: ['Digital Menu', 'POS Systems', 'Kitchen Display', 'Delivery Integration'],
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description:
        'Transform education with learning management systems, virtual classrooms, and student engagement platforms for the digital learning era.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjbGFzc3Jvb218ZW58MXx8fHwxNzMxNTg3MjM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      stats: { projects: '75+', clients: '22+', impact: '55% better learning' },
      capabilities: ['Learning Management', 'Virtual Classrooms', 'Student Portals', 'Assessment Tools'],
    },
    {
      icon: Sparkles,
      title: 'Beauty',
      description:
        'Enhance beauty and wellness services with booking systems, customer management, and personalized service platforms for modern salons and spas.',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzcGF8ZW58MXx8fHwxNzMxNTg3MjYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      stats: { projects: '65+', clients: '16+', impact: '48% booking increase' },
      capabilities: ['Booking Systems', 'Client Management', 'Service Customization', 'Inventory Control'],
    },
    {
      icon: Truck,
      title: 'Shipment & Delivery',
      description:
        'Optimize logistics with real-time tracking, route optimization, and automated delivery management for efficient supply chain operations.',
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMHRydWNrfGVufDF8fHx8MTczMTU4NzI4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      stats: { projects: '85+', clients: '19+', impact: '42% cost savings' },
      capabilities: ['Real-time Tracking', 'Route Optimization', 'Fleet Management', 'Automated Dispatch'],
    },
    {
      icon: Home,
      title: 'Hospitality',
      description:
        'Elevate guest experiences with hotel management systems, booking platforms, and personalized service solutions for the hospitality industry.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTczMTU4NzMxMHww&ixlib=rb-4.1.0&q=80&w=1080',
      stats: { projects: '72+', clients: '17+', impact: '52% guest satisfaction' },
      capabilities: ['Hotel Management', 'Booking Systems', 'Guest Services', 'Revenue Management'],
    },
    {
      icon: Plane,
      title: 'Tour & Travel',
      description:
        'Transform travel experiences with booking platforms, itinerary management, and customer engagement tools for modern travel agencies.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhaXJwb3J0fGVufDF8fHx8MTczMTU4NzMzNHww&ixlib=rb-4.1.0&q=80&w=1080',
      stats: { projects: '58+', clients: '14+', impact: '65% booking growth' },
      capabilities: ['Booking Platforms', 'Itinerary Management', 'Travel CRM', 'Tour Packages'],
    },
    {
      icon: Package,
      title: 'ERP',
      description:
        'Streamline enterprise operations with integrated ERP solutions, business intelligence, and automation for complete organizational efficiency.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN5c3RlbXxlbnwxfHx8fDE3MzE1ODczNjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      stats: { projects: '95+', clients: '28+', impact: '58% efficiency gain' },
      capabilities: ['Enterprise Integration', 'Business Intelligence', 'Process Automation', 'Resource Planning'],
    },
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

      {/* All Industries Sections */}
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
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-zinc-950 border-y border-white/10">
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