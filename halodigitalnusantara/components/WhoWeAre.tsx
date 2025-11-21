import { ArrowRight, Heart, Users, Award, Lightbulb, Target, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function WhoWeAre() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Halo Admin, Saya ingin menggunakan jasa dari Halo Digital Nusantara"
    );
    const phoneNumber = "6282123699807";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const values = [
    {
      icon: Heart,
      title: 'Client Value Creation',
      description: 'We measure success by the value we create for our clients and their stakeholders.',
    },
    {
      icon: Users,
      title: 'One Global Network',
      description: 'We leverage our global network to deliver local expertise and innovative solutions.',
    },
    {
      icon: Award,
      title: 'Respect for the Individual',
      description: 'We embrace diversity, foster inclusion, and respect each person\'s unique contributions.',
    },
    {
      icon: Lightbulb,
      title: 'Best People',
      description: 'We attract, develop, and retain the best talent in the industry.',
    },
    {
      icon: Target,
      title: 'Integrity',
      description: 'We act ethically and responsibly in everything we do.',
    },
    {
      icon: TrendingUp,
      title: 'Stewardship',
      description: 'We are committed to sustainable business practices and social responsibility.',
    },
  ];

  const leadership = [
    {
      name: 'Budi Santoso',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxlYWRlciUyMG1hbnxlbnwxfHx8fDE3NjI5MDc4NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Leading Halo Digital Nusantara\'s vision for digital transformation across Indonesia.',
    },
    {
      name: 'Siti Rahayu',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwbGVhZGVyfGVufDF8fHx8MTc2MjkwNzg2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Driving innovation and technological excellence in all our service offerings.',
    },
    {
      name: 'Ahmad Wijaya',
      role: 'Chief Strategy Officer',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMGxlYWRlciUyMG1hbnxlbnwxfHx8fDE3NjI5MDc4NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Shaping our strategic direction and client engagement across all industries.',
    },
    {
      name: 'Dewi Lestari',
      role: 'Chief People Officer',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMHdvbWFuJTIwbGVhZGVyfGVufDF8fHx8MTc2MjkwNzg2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Building a culture of excellence and nurturing our greatest asset - our people.',
    },
  ];

  const stats = [
    { value: '1,000+', label: 'Professionals' },
    { value: '15+', label: 'Years of Excellence' },
    { value: '500+', label: 'Clients Served' },
    { value: '50+', label: 'Industry Awards' },
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NjI5MDc3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Who We Are"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/50"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="text-purple-400 mb-4 text-sm uppercase tracking-wide">
              About Us
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              Who We Are
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
              We are Indonesia's leading digital transformation partner, helping
              businesses navigate change and unlock their full potential in the
              digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-zinc-950 border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl text-purple-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-white/70 text-lg">
                <p>
                  Founded in 2009, Halo Digital Nusantara began with a simple yet
                  ambitious vision: to help Indonesian businesses thrive in an
                  increasingly digital world.
                </p>
                <p>
                  What started as a small consulting firm has grown into one of
                  Indonesia's most trusted digital transformation partners,
                  serving Fortune 500 companies and leading local enterprises
                  across every major industry.
                </p>
                <p>
                  Today, we combine global best practices with deep local
                  expertise to deliver 360° value to our clients, helping them
                  navigate complexity, drive innovation, and achieve sustainable
                  growth.
                </p>
              </div>
              <Button className="mt-8 bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 group cursor-pointer">
                Our Journey
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Button>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2MjkwNzgwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our Team"
                className="w-full h-[500px] object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-32 bg-zinc-950 border-y border-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card
                  key={value.title}
                  className="group bg-black border border-white/10 hover:border-purple-400 transition-all duration-300 cursor-pointer"
                >
                  <div className="p-8">
                    <div className="w-14 h-14 rounded-sm bg-purple-600/10 border border-purple-500/20 flex items-center justify-center mb-6 group-hover:bg-purple-600/20 transition-colors">
                      <Icon className="text-purple-400" size={28} />
                    </div>
                    <h3 className="text-2xl text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-white/60">
                      {value.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              Our Leadership
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Meet the leaders driving our vision and commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader) => (
              <Card
                key={leader.name}
                className="group bg-zinc-950 border border-white/10 hover:border-purple-400 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className="relative h-80 overflow-hidden">
                  <ImageWithFallback
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {leader.name}
                  </h3>
                  <div className="text-purple-400 text-sm mb-3">
                    {leader.role}
                  </div>
                  <p className="text-white/60 text-sm">
                    {leader.bio}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors group cursor-pointer"
            >
              View Full Leadership Team
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </a>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 lg:py-32 bg-zinc-950 border-y border-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-sm overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBuZXR3b3JrfGVufDF8fHx8MTc2MjkwNzg4N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Global Network"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl text-white mb-6">
                Global Network, Local Expertise
              </h2>
              <p className="text-xl text-white/70 mb-6">
                With offices across Indonesia and partnerships worldwide, we
                bring global best practices and local market insights to every
                engagement.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-white text-lg mb-1">10 Offices</h3>
                    <p className="text-white/60">
                      Across major Indonesian cities
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-white text-lg mb-1">Global Partners</h3>
                    <p className="text-white/60">
                      Collaborating with leading technology providers
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-white text-lg mb-1">24/7 Support</h3>
                    <p className="text-white/60">
                      Always available when you need us
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl text-white mb-8">
              Join Us in Shaping the Future
            </h2>
            <p className="text-xl text-white/60 mb-12">
              Be part of a team that's transforming businesses and creating
              lasting impact across Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 transition-all duration-300 group cursor-pointer"
              >
                Explore Careers
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white hover:bg-white hover:text-black text-lg px-8 transition-all duration-300 cursor-pointer"
                onClick={handleWhatsAppClick}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}