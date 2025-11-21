import { ArrowRight, Calendar, User, Clock, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { InsightArticle } from './CMSDashboard';

const STORAGE_KEY = 'halo_insights_cms';

export function Insights() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [insights, setInsights] = useState<InsightArticle[]>([]);
  const [filteredInsights, setFilteredInsights] = useState<InsightArticle[]>([]);

  // Load insights from CMS
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        // Only show published insights
        const published = parsed.filter((i: InsightArticle) => i.status === 'published');
        setInsights(published);
      } catch (error) {
        setInsights([]);
      }
    }
  }, []);

  // Get unique categories from insights
  const categories = ['All', ...Array.from(new Set(insights.map(i => i.category)))];

  // Filter insights by category
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredInsights(insights);
    } else {
      setFilteredInsights(insights.filter(i => i.category === selectedCategory));
    }
  }, [selectedCategory, insights]);

  const featuredInsight = insights[0] || null;

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5zaWdodHN8ZW58MXx8fHwxNzYyOTA4MDkzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Insights"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/50"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="text-purple-400 mb-4 text-sm uppercase tracking-wide">
              Thought Leadership
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              Insights
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8">
              Perspectives on the trends and technologies shaping business and
              society.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Search insights..."
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50" size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Insight */}
      <section className="py-20 bg-zinc-950 border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-purple-400 mb-8 text-sm uppercase tracking-wide">
            Featured Insight
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-sm overflow-hidden group cursor-pointer">
              <ImageWithFallback
                src={featuredInsight?.imageUrl || ''}
                alt={featuredInsight?.title || ''}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
            <div>
              <div className="text-purple-400 text-sm mb-4">
                {featuredInsight?.category || ''}
              </div>
              <h2 className="text-4xl lg:text-5xl text-white mb-6 leading-tight">
                {featuredInsight?.title || ''}
              </h2>
              <p className="text-xl text-white/70 mb-6">
                {featuredInsight?.description || ''}
              </p>
              <div className="flex items-center gap-6 text-white/60 text-sm mb-8">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  {featuredInsight?.author || ''}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {featuredInsight?.date ? new Date(featuredInsight.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : ''}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  {featuredInsight?.readTime || ''}
                </div>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 group cursor-pointer">
                Read Full Article
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

      {/* Insights Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInsights.slice(1).map((insight) => (
              <Card
                key={insight.id}
                className="group bg-zinc-950 border border-white/10 hover:border-purple-400 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={insight.imageUrl}
                    alt={insight.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                      {insight.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-white mb-3 group-hover:text-purple-400 transition-colors leading-tight">
                    {insight.title}
                  </h3>
                  <p className="text-white/60 mb-4 text-sm">
                    {insight.description}
                  </p>
                  <div className="flex items-center gap-4 text-white/40 text-xs mb-4">
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      {insight.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(insight.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-white/40 text-xs">
                    <Clock size={14} />
                    {insight.readTime}
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
              Load More Insights
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 lg:py-32 bg-zinc-950 border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              Stay Informed
            </h2>
            <p className="text-xl text-white/60 mb-8">
              Subscribe to our newsletter for the latest insights, research, and
              perspectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors"
              />
              <Button className="bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 cursor-pointer px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}