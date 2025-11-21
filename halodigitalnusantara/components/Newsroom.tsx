import { ArrowRight, Calendar, Tag, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Newsroom() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Press Releases', 'Company News', 'Awards', 'Media Coverage', 'Events'];

  const featuredNews = {
    category: 'Press Release',
    title: 'Halo Digital Nusantara Named Leader in Digital Transformation Consulting',
    excerpt:
      'Recognition highlights our commitment to delivering exceptional client outcomes and driving innovation across Indonesia.',
    date: 'November 12, 2024',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhd2FyZCUyMGNlcmVtb255fGVufDF8fHx8MTc2MjkwOTA3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
  };

  const newsItems = [
    {
      category: 'Company News',
      title: 'Halo Digital Nusantara Opens New Innovation Hub in Surabaya',
      excerpt:
        'State-of-the-art facility will drive AI and cloud innovation for clients across East Java.',
      date: 'November 8, 2024',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjI5MDkxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      category: 'Awards',
      title: 'Recognized as Best Employer 2024 by HR Excellence Awards',
      excerpt:
        'Award celebrates our commitment to employee development, diversity, and inclusive workplace culture.',
      date: 'November 5, 2024',
      image: 'https://images.unsplash.com/photo-1531537571171-a707bf2683da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waHklMjBhd2FyZHxlbnwxfHx8fDE3NjI5MDkxMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      category: 'Press Release',
      title: 'Partnership with Leading Cloud Provider to Accelerate Digital Transformation',
      excerpt:
        'Strategic alliance will enable faster cloud adoption and innovation for Indonesian enterprises.',
      date: 'November 1, 2024',
      image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kc2hha2UlMjBwYXJ0bmVyc2hpcHxlbnwxfHx8fDE3NjI5MDkxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      category: 'Media Coverage',
      title: 'Featured in Tech Indonesia: The Future of AI in Banking',
      excerpt:
        'Our CTO discusses how generative AI is transforming the financial services industry.',
      date: 'October 28, 2024',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzJTIwaW50ZXJ2aWV3fGVufDF8fHx8MTc2MjkwOTE0OHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      category: 'Events',
      title: 'Annual Digital Summit 2024 Attracts Over 2,000 Attendees',
      excerpt:
        'Indonesia\'s premier digital transformation conference featured industry leaders and cutting-edge innovations.',
      date: 'October 25, 2024',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwZXZlbnR8ZW58MXx8fHwxNzYyOTA5MTYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      category: 'Company News',
      title: 'Sustainability Initiative: Carbon Neutral Operations by 2025',
      excerpt:
        'Comprehensive program includes renewable energy, green offices, and sustainable practices.',
      date: 'October 20, 2024',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJpbGl0eXxlbnwxfHx8fDE3NjI5MDgwNjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      category: 'Press Release',
      title: 'Q3 2024 Results: 45% Revenue Growth Year-over-Year',
      excerpt:
        'Strong performance driven by increased demand for AI, cloud, and digital transformation services.',
      date: 'October 15, 2024',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aHxlbnwxfHx8fDE3NjI5MDkxOTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      category: 'Awards',
      title: 'Client Success Story Wins Industry Innovation Award',
      excerpt:
        'Banking transformation project recognized for exceptional business impact and innovation.',
      date: 'October 10, 2024',
      image: 'https://images.unsplash.com/photo-1624628639856-100bf817fd35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYmFua2luZ3xlbnwxfHx8fDE3NjI5MDkyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      category: 'Media Coverage',
      title: 'CEO Interview: Leading Change in Indonesia\'s Digital Economy',
      excerpt:
        'Exclusive conversation with Business Today on transformation strategies and market trends.',
      date: 'October 5, 2024',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxlYWRlcnNoaXB8ZW58MXx8fHwxNzYyOTA4MDAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const filteredNews =
    selectedCategory === 'All'
      ? newsItems
      : newsItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzcm9vbXxlbnwxfHx8fDE3NjI5MDkyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Newsroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/50"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="text-purple-400 mb-4 text-sm uppercase tracking-wide">
              News & Media
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              Newsroom
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
              Latest news, press releases, and media coverage from Halo Digital
              Nusantara.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20 bg-zinc-950 border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-purple-400 mb-8 text-sm uppercase tracking-wide">
            Featured News
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-sm overflow-hidden group cursor-pointer">
              <ImageWithFallback
                src={featuredNews.image}
                alt={featuredNews.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
            <div>
              <div className="inline-block bg-purple-600 text-white text-sm px-4 py-1 rounded-full mb-4">
                {featuredNews.category}
              </div>
              <h2 className="text-4xl lg:text-5xl text-white mb-6 leading-tight">
                {featuredNews.title}
              </h2>
              <p className="text-xl text-white/70 mb-6">
                {featuredNews.excerpt}
              </p>
              <div className="flex items-center gap-2 text-white/60 mb-8">
                <Calendar size={16} />
                {featuredNews.date}
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 group cursor-pointer">
                Read Full Story
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 sticky top-16 bg-black/95 backdrop-blur-sm z-40 border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item) => (
              <Card
                key={item.title}
                className="group bg-zinc-950 border border-white/10 hover:border-purple-400 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-white mb-3 group-hover:text-purple-400 transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-white/60 mb-4 text-sm">{item.excerpt}</p>
                  <div className="flex items-center gap-2 text-white/40 text-sm">
                    <Calendar size={14} />
                    {item.date}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-2 border-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
            >
              Load More News
            </Button>
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-20 lg:py-32 bg-zinc-950 border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              Media Inquiries
            </h2>
            <p className="text-xl text-white/60 mb-8">
              For press inquiries, interview requests, or media partnerships,
              please contact our communications team.
            </p>
            <div className="bg-black border border-white/10 rounded-sm p-8 mb-8">
              <div className="space-y-4 text-lg">
                <div className="flex items-center justify-center gap-3 text-white/70">
                  <span className="text-white">Email:</span>
                  <a
                    href="mailto:press@halodigital.id"
                    className="text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
                  >
                    press@halodigital.id
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3 text-white/70">
                  <span className="text-white">Phone:</span>
                  <a
                    href="tel:+622112345678"
                    className="text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
                  >
                    +62 21 1234 5678
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 group cursor-pointer">
                Download Press Kit
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
              >
                Subscribe to Updates
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
