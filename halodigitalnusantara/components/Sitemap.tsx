import { Home, Briefcase, Users, Lightbulb, Award, Building2, Newspaper, TrendingUp, Mail, FileText, Map } from 'lucide-react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

type PageType = 'home' | 'what-we-do' | 'who-we-are' | 'insights' | 'careers' | 'industries' | 'newsroom' | 'investor-relations' | 'contact' | 'privacy' | 'terms' | 'cookies' | 'sitemap';

interface SitemapProps {
  navigateTo: (page: PageType) => void;
}

export function Sitemap({ navigateTo }: SitemapProps) {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Halo Admin, Saya ingin menggunakan jasa dari Halo Digital Nusantara"
    );
    const phoneNumber = "6282123699807";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const siteStructure = [
    {
      category: 'Main Pages',
      icon: Home,
      pages: [
        { name: 'Home', page: 'home' as const, description: 'Main landing page with overview of services' },
        { name: 'What We Do', page: 'what-we-do' as const, description: 'Our services and capabilities' },
        { name: 'Who We Are', page: 'who-we-are' as const, description: 'Company information and leadership' },
        { name: 'Industries', page: 'industries' as const, description: 'Industry expertise and solutions' },
        { name: 'Insights', page: 'insights' as const, description: 'Thought leadership and research' },
        { name: 'Careers', page: 'careers' as const, description: 'Join our team and explore opportunities' },
      ],
    },
    {
      category: 'Services',
      icon: Briefcase,
      pages: [
        { name: 'Strategy & Consulting', page: 'what-we-do' as const, description: 'Business strategy and transformation' },
        { name: 'Technology', page: 'what-we-do' as const, description: 'AI, cloud, and digital innovation' },
        { name: 'Operations', page: 'what-we-do' as const, description: 'Intelligent automation and optimization' },
        { name: 'Industry X', page: 'what-we-do' as const, description: 'Industry-specific solutions' },
      ],
    },
    {
      category: 'Industries',
      icon: Building2,
      pages: [
        { name: 'Banking', page: 'industries' as const, description: 'Digital banking transformation' },
        { name: 'Communications', page: 'industries' as const, description: '5G and telecom solutions' },
        { name: 'Energy', page: 'industries' as const, description: 'Sustainable energy solutions' },
        { name: 'Health', page: 'industries' as const, description: 'Healthcare digital transformation' },
        { name: 'Retail', page: 'industries' as const, description: 'Omnichannel retail experiences' },
        { name: 'Capital Markets', page: 'industries' as const, description: 'Financial markets technology' },
      ],
    },
    {
      category: 'About',
      icon: Users,
      pages: [
        { name: 'Company Overview', page: 'who-we-are' as const, description: 'Our story and mission' },
        { name: 'Leadership', page: 'who-we-are' as const, description: 'Meet our executive team' },
        { name: 'Core Values', page: 'who-we-are' as const, description: 'Our principles and culture' },
        { name: 'Global Presence', page: 'who-we-are' as const, description: 'Offices and partnerships' },
      ],
    },
    {
      category: 'News & Media',
      icon: Newspaper,
      pages: [
        { name: 'Newsroom', page: 'newsroom' as const, description: 'Latest news and press releases' },
        { name: 'Press Releases', page: 'newsroom' as const, description: 'Official company announcements' },
        { name: 'Media Coverage', page: 'newsroom' as const, description: 'Featured in the media' },
        { name: 'Awards', page: 'newsroom' as const, description: 'Recognition and achievements' },
      ],
    },
    {
      category: 'Investor Relations',
      icon: TrendingUp,
      pages: [
        { name: 'Financial Information', page: 'investor-relations' as const, description: 'Quarterly results and reports' },
        { name: 'Financial Documents', page: 'investor-relations' as const, description: 'Annual reports and presentations' },
        { name: 'ESG Commitment', page: 'investor-relations' as const, description: 'Sustainability and governance' },
        { name: 'Investor Contact', page: 'investor-relations' as const, description: 'Get in touch with investor relations' },
      ],
    },
    {
      category: 'Careers',
      icon: Award,
      pages: [
        { name: 'Why Join Us', page: 'careers' as const, description: 'Benefits and culture' },
        { name: 'Open Positions', page: 'careers' as const, description: 'Browse current job openings' },
        { name: 'Life at Halo', page: 'careers' as const, description: 'Experience our workplace' },
        { name: 'Student Programs', page: 'careers' as const, description: 'Internships and graduate opportunities' },
      ],
    },
    {
      category: 'Insights & Research',
      icon: Lightbulb,
      pages: [
        { name: 'All Insights', page: 'insights' as const, description: 'Browse all articles and research' },
        { name: 'Technology Vision', page: 'insights' as const, description: 'Future of technology insights' },
        { name: 'Case Studies', page: 'insights' as const, description: 'Client success stories' },
        { name: 'Industry Insights', page: 'insights' as const, description: 'Sector-specific perspectives' },
        { name: 'Research Reports', page: 'insights' as const, description: 'In-depth analysis and data' },
      ],
    },
    {
      category: 'Contact & Support',
      icon: Mail,
      pages: [
        { name: 'Contact Us', page: 'contact' as const, description: 'Get in touch with our team' },
        { name: 'Office Locations', page: 'contact' as const, description: 'Find our offices' },
        { name: 'Media Inquiries', page: 'newsroom' as const, description: 'Press and media contacts' },
      ],
    },
    {
      category: 'Legal & Privacy',
      icon: FileText,
      pages: [
        { name: 'Privacy Statement', page: 'privacy' as const, description: 'How we protect your data' },
        { name: 'Terms of Use', page: 'terms' as const, description: 'Website terms and conditions' },
        { name: 'Cookie Policy', page: 'cookies' as const, description: 'How we use cookies' },
        { name: 'Sitemap', page: 'sitemap' as const, description: 'Complete site structure' },
      ],
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXAlMjBuYXZpZ2F0aW9ufGVufDF8fHx8MTc2MjkxMTU5Nnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Sitemap"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/50"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="text-purple-400 mb-4 text-sm uppercase tracking-wide">
              Navigation
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              Sitemap
            </h1>
            <p className="text-xl text-white/80">
              Find everything you need quickly with our complete site structure.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-12">
            {siteStructure.map((section) => {
              const Icon = section.icon;
              return (
                <div key={section.category}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-sm bg-purple-600/10 border border-purple-500/20 flex items-center justify-center">
                      <Icon className="text-purple-400" size={24} />
                    </div>
                    <h2 className="text-3xl text-white">{section.category}</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.pages.map((page) => (
                      <Card
                        key={page.name}
                        onClick={() => navigateTo(page.page)}
                        className="group bg-zinc-950 border border-white/10 hover:border-purple-400 transition-all duration-300 cursor-pointer"
                      >
                        <div className="p-6">
                          <h3 className="text-xl text-white mb-2 group-hover:text-purple-400 transition-colors">
                            {page.name}
                          </h3>
                          <p className="text-white/60 text-sm">
                            {page.description}
                          </p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-zinc-950 border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl text-purple-400 mb-2">
                  {siteStructure.length}
                </div>
                <div className="text-white/60">Categories</div>
              </div>
              <div>
                <div className="text-4xl text-purple-400 mb-2">
                  {siteStructure.reduce((acc, section) => acc + section.pages.length, 0)}
                </div>
                <div className="text-white/60">Pages</div>
              </div>
              <div>
                <div className="text-4xl text-purple-400 mb-2">6</div>
                <div className="text-white/60">Services</div>
              </div>
              <div>
                <div className="text-4xl text-purple-400 mb-2">6</div>
                <div className="text-white/60">Industries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl text-white mb-8">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-white/60 mb-12">
              Contact us and we'll be happy to help you find the information you need.
            </p>
            <button
              onClick={() => navigateTo('contact')}
              className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-4 rounded-sm transition-all duration-300 cursor-pointer"
            >
              Contact Us
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4 rounded-sm transition-all duration-300 cursor-pointer ml-4"
            >
              Chat via WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}