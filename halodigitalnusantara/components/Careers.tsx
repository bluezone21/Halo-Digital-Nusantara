import {
  ArrowRight,
  Briefcase,
  Heart,
  TrendingUp,
  Users,
  Award,
  Globe,
  Search,
  MapPin,
  Clock,
} from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const departments = [
    'All',
    'Technology',
    'Consulting',
    'Strategy',
    'Operations',
    'Corporate Functions',
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description:
        'Continuous learning opportunities and clear career progression paths.',
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description:
        'Comprehensive health insurance and wellness programs for you and your family.',
    },
    {
      icon: Globe,
      title: 'Global Opportunities',
      description:
        'Work on international projects and collaborate with teams worldwide.',
    },
    {
      icon: Award,
      title: 'Recognition',
      description:
        'Performance-based bonuses and recognition programs that celebrate success.',
    },
    {
      icon: Users,
      title: 'Inclusive Culture',
      description:
        'A diverse, inclusive workplace where everyone can thrive and belong.',
    },
    {
      icon: Briefcase,
      title: 'Work-Life Balance',
      description:
        'Flexible work arrangements and generous time-off policies.',
    },
  ];

  const openPositions = [
    {
      title: 'Senior Cloud Architect',
      department: 'Technology',
      location: 'Jakarta',
      type: 'Full-time',
      description:
        'Lead cloud architecture initiatives for enterprise clients, designing scalable and secure cloud solutions.',
      experience: '8+ years',
    },
    {
      title: 'Management Consultant',
      department: 'Consulting',
      location: 'Jakarta',
      type: 'Full-time',
      description:
        'Drive business transformation projects for leading Indonesian enterprises across multiple industries.',
      experience: '5+ years',
    },
    {
      title: 'Data Scientist',
      department: 'Technology',
      location: 'Jakarta / Surabaya',
      type: 'Full-time',
      description:
        'Build advanced analytics and machine learning solutions to solve complex business problems.',
      experience: '4+ years',
    },
    {
      title: 'Strategy Analyst',
      department: 'Strategy',
      location: 'Jakarta',
      type: 'Full-time',
      description:
        'Support strategic planning and market analysis for high-impact client engagements.',
      experience: '2+ years',
    },
    {
      title: 'DevOps Engineer',
      department: 'Technology',
      location: 'Jakarta',
      type: 'Full-time',
      description:
        'Design and implement CI/CD pipelines, infrastructure automation, and monitoring solutions.',
      experience: '4+ years',
    },
    {
      title: 'Business Process Consultant',
      department: 'Operations',
      location: 'Jakarta / Bandung',
      type: 'Full-time',
      description:
        'Help clients optimize their operations through process redesign and intelligent automation.',
      experience: '5+ years',
    },
    {
      title: 'UX/UI Designer',
      department: 'Technology',
      location: 'Jakarta',
      type: 'Full-time',
      description:
        'Create exceptional digital experiences for enterprise applications and customer-facing platforms.',
      experience: '3+ years',
    },
    {
      title: 'HR Business Partner',
      department: 'Corporate Functions',
      location: 'Jakarta',
      type: 'Full-time',
      description:
        'Partner with business leaders to drive talent strategy and organizational effectiveness.',
      experience: '6+ years',
    },
    {
      title: 'Cybersecurity Consultant',
      department: 'Technology',
      location: 'Jakarta',
      type: 'Full-time',
      description:
        'Help clients strengthen their security posture and build resilient cyber defense strategies.',
      experience: '5+ years',
    },
  ];

  const filteredPositions =
    selectedDepartment === 'All'
      ? openPositions
      : openPositions.filter((position) => position.department === selectedDepartment);

  const lifeatHalo = [
    {
      title: 'Collaborative Environment',
      description:
        'Work alongside the brightest minds in technology and consulting.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NjI5MDc3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Innovation Culture',
      description: 'Explore new ideas and technologies in a supportive environment.',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc3BhY2UlMjBpbm5vdmF0aW9ufGVufDF8fHx8MTc2MjkwODI1MHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Learning & Development',
      description:
        'Access world-class training programs and certifications.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFybmluZyUyMHRyYWluaW5nfGVufDF8fHx8MTc2MjkwODI2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Social Impact',
      description:
        'Contribute to projects that make a difference in society.',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBpbXBhY3R8ZW58MXx8fHwxNzYyOTA4MjgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrJTIwdGVhbXxlbnwxfHx8fDE3NjI5MDgzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Careers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/50"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="text-purple-400 mb-4 text-sm uppercase tracking-wide">
              Join Our Team
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              Build Your Career with Us
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8">
              Join a team of innovators, problem-solvers, and leaders shaping the
              future of digital transformation in Indonesia.
            </p>
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 transition-all duration-300 group cursor-pointer"
            >
              View Open Positions
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 lg:py-32 bg-zinc-950 border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              Why Join Halo Digital Nusantara?
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              We offer more than just a job – we offer a career where you can grow,
              innovate, and make an impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={benefit.title}
                  className="group bg-black border border-white/10 hover:border-purple-400 transition-all duration-300 cursor-pointer"
                >
                  <div className="p-8">
                    <div className="w-14 h-14 rounded-sm bg-purple-600/10 border border-purple-500/20 flex items-center justify-center mb-6 group-hover:bg-purple-600/20 transition-colors">
                      <Icon className="text-purple-400" size={28} />
                    </div>
                    <h3 className="text-2xl text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-white/60">{benefit.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Life at Halo */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              Life at Halo
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Experience a workplace where talent thrives and innovation flourishes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {lifeatHalo.map((item) => (
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/60">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 lg:py-32 bg-zinc-950 border-y border-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-white/60">
              Find your next opportunity and take your career to new heights.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search positions..."
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors"
              />
              <Search
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50"
                size={20}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-6 py-3 rounded-sm whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    selectedDepartment === dept
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Positions List */}
          <div className="space-y-4">
            {filteredPositions.map((position) => (
              <Card
                key={position.title}
                className="group bg-black border border-white/10 hover:border-purple-400 transition-all duration-300 cursor-pointer"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl text-white group-hover:text-purple-400 transition-colors">
                          {position.title}
                        </h3>
                        <span className="bg-purple-600/20 text-purple-400 text-xs px-3 py-1 rounded-full">
                          {position.department}
                        </span>
                      </div>
                      <p className="text-white/60 mb-4">{position.description}</p>
                      <div className="flex flex-wrap gap-4 text-white/40 text-sm">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          {position.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={16} />
                          {position.type}
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase size={16} />
                          {position.experience}
                        </div>
                      </div>
                    </div>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 group/btn cursor-pointer whitespace-nowrap">
                      Apply Now
                      <ArrowRight
                        className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                        size={20}
                      />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-white/60 mb-4">
              Don't see a position that fits? We're always looking for talented people.
            </p>
            <Button
              variant="outline"
              className="border-2 border-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
            >
              Submit General Application
            </Button>
          </div>
        </div>
      </section>

      {/* Student Programs */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-sm overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxlYXJuaW5nfGVufDF8fHx8MTc2MjkwODM5MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Student Programs"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl text-white mb-6">
                Student & Entry-Level Programs
              </h2>
              <p className="text-xl text-white/70 mb-6">
                Launch your career with our internship and graduate programs designed
                to nurture the next generation of leaders.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-white text-lg mb-1">
                      Summer Internship Program
                    </h3>
                    <p className="text-white/60">
                      3-month immersive experience on real client projects
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-white text-lg mb-1">Graduate Program</h3>
                    <p className="text-white/60">
                      Structured 2-year development program with rotations
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-white text-lg mb-1">
                      Mentorship & Training
                    </h3>
                    <p className="text-white/60">
                      Dedicated mentors and comprehensive training programs
                    </p>
                  </div>
                </div>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 group cursor-pointer">
                Learn More
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-zinc-950 border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl text-white mb-8">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-white/60 mb-12">
              Join us in transforming businesses and shaping the future of Indonesia's
              digital economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 transition-all duration-300 group cursor-pointer"
              >
                Browse All Jobs
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
                Set Job Alerts
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
