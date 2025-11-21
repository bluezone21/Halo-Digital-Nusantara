import { ArrowRight } from 'lucide-react';
import { Card } from './ui/card';

export function LatestThinking() {
  const articles = [
    {
      category: 'Technology Vision',
      title: 'The future of generative AI in Indonesia',
      description: 'How Indonesian businesses can harness the transformative power of generative AI.',
      readTime: '5 min read',
    },
    {
      category: 'Research',
      title: 'Digital trust in the age of AI',
      description: 'Building confidence in AI systems through responsible innovation and governance.',
      readTime: '8 min read',
    },
    {
      category: 'Leadership',
      title: 'The C-suite agenda for 2025',
      description: 'Key priorities for business leaders navigating digital transformation.',
      readTime: '6 min read',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-zinc-950">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl lg:text-5xl text-white mb-4">
              Latest Thinking
            </h2>
            <p className="text-xl text-white/60">
              Insights and perspectives on the trends shaping business and technology.
            </p>
          </div>
          <a 
            href="#"
            className="hidden md:inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors group cursor-pointer"
          >
            View all insights
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card 
              key={article.title}
              className="group bg-black border border-white/10 hover:border-purple-400 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="p-8">
                <div className="text-purple-400 text-sm mb-4 uppercase tracking-wide">
                  {article.category}
                </div>
                <h3 className="text-2xl text-white mb-4 group-hover:text-purple-400 transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-white/60 mb-6">
                  {article.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-white/40 text-sm">{article.readTime}</span>
                  <ArrowRight 
                    className="text-white/40 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" 
                    size={20} 
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <a 
            href="#"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors group cursor-pointer"
          >
            View all insights
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}