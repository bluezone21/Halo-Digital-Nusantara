import {
  ArrowRight,
  Lightbulb,
  Cpu,
  Settings,
  Layers,
  Brain,
  Cloud,
  Shield,
  BarChart,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function WhatWeDo() {
  const mainServices = [
    {
      icon: Lightbulb,
      title: "Strategy & Consulting",
      tagline: "Navigate complexity. Drive growth.",
      description:
        "Help organizations navigate disruption, accelerate transformation and drive sustainable growth through data-driven strategies and innovative business models.",
      capabilities: [
        "Business Strategy",
        "Digital Transformation",
        "Operating Model Design",
        "Mergers & Acquisitions",
        "Sustainability Strategy",
        "Innovation & Growth",
      ],
      caseStudy: {
        title: "Transforming Koperasi MBJB from Conventional to Digital Business",
        result: "40% increase in digital revenue",
        description:
          "Helped reimagine the customer experience and launch new digital services.",
      },
    },
    {
      icon: Cpu,
      title: "Technology",
      tagline: "Innovate at scale.",
      description:
        "Harness the power of emerging technologies including AI, cloud, and analytics to create new value, reimagine customer experiences, and transform operations.",
      capabilities: [
        "Cloud Engineering",
        "Artificial Intelligence",
        "Data & Analytics",
        "Software Engineering",
        "Enterprise Platforms",
        "Cybersecurity",
      ],
      caseStudy: {
        title: "AI-Powered Banking Platform",
        result: "3x faster loan processing",
        description:
          "Deployed machine learning models to automate credit decisions and improve risk management.",
      },
    },
    {
      icon: Settings,
      title: "Operations",
      tagline: "Optimize. Automate. Transform.",
      description:
        "Transform operations through intelligent automation, advanced analytics, and agile ways of working to drive efficiency, resilience, and continuous innovation.",
      capabilities: [
        "Intelligent Automation",
        "Supply Chain",
        "Finance & Procurement",
        "Customer Operations",
        "Talent & Organization",
        "Process Excellence",
      ],
      caseStudy: {
        title: "Supply Chain Digitization",
        result: "50% reduction in lead time",
        description:
          "Implemented end-to-end automation for a major manufacturing company.",
      },
    },
    {
      icon: Layers,
      title: "Industry X",
      tagline: "Reinvent your industry.",
      description:
        "Combine digital capabilities with deep industry expertise to help you reinvent production, products, and business models for the digital age.",
      capabilities: [
        "Smart Manufacturing",
        "Product Engineering",
        "Sustainability Services",
        "Connected Products",
        "Digital Supply Networks",
        "Workforce Transformation",
      ],
      caseStudy: {
        title: "Smart Factory Implementation",
        result: "35% productivity gain",
        description:
          "Created a fully connected manufacturing ecosystem with IoT and AI integration.",
      },
    },
  ];

  const additionalCapabilities = [
    {
      icon: Brain,
      title: "Generative AI",
      description:
        "Transform your business with enterprise-grade generative AI solutions.",
    },
    {
      icon: Cloud,
      title: "Cloud First",
      description:
        "Accelerate cloud adoption and maximize the value of your cloud investments.",
    },
    {
      icon: Shield,
      title: "Cyber Resilience",
      description:
        "Protect your organization with comprehensive cybersecurity solutions.",
    },
    {
      icon: BarChart,
      title: "Data & Analytics",
      description:
        "Turn data into actionable insights that drive business outcomes.",
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1568952433726-3896e3881c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjI4NTgwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="What We Do"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="text-purple-400 mb-4 text-sm uppercase tracking-wide">
              Our Services
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              What We Do
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
              Delivering 360° value across strategy, technology,
              operations, and industry to help you compete and
              grow in the digital economy.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-32">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start"
                >
                  {/* Content */}
                  <div
                    className={
                      index % 2 === 1 ? "lg:order-2" : ""
                    }
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-sm bg-purple-600/10 border border-purple-500/20 flex items-center justify-center">
                        <Icon
                          className="text-purple-400"
                          size={32}
                        />
                      </div>
                      <h2 className="text-4xl lg:text-5xl text-white">
                        {service.title}
                      </h2>
                    </div>

                    <div className="text-2xl text-purple-400 mb-6">
                      {service.tagline}
                    </div>

                    <p className="text-xl text-white/70 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-8">
                      <h3 className="text-white mb-4 text-lg">
                        Key Capabilities
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        {service.capabilities.map(
                          (capability) => (
                            <div
                              key={capability}
                              className="flex items-center gap-2"
                            >
                              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                              <span className="text-white/60">
                                {capability}
                              </span>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Case Study Card */}
                  <div
                    className={
                      index % 2 === 1 ? "lg:order-1" : ""
                    }
                  >
                    <Card className="bg-zinc-950 border border-white/10 overflow-hidden group hover:border-purple-400 transition-all duration-300">
                      <div className="p-8">
                        <div className="text-purple-400 text-sm mb-4 uppercase tracking-wide">
                          Success Story
                        </div>
                        <h3 className="text-2xl text-white mb-4 group-hover:text-purple-400 transition-colors">
                          {service.caseStudy.title}
                        </h3>
                        <div className="text-4xl text-white mb-4">
                          {service.caseStudy.result}
                        </div>
                        <p className="text-white/60 mb-6">
                          {service.caseStudy.description}
                        </p>
                        <a
                          href="#"
                          className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors group/link cursor-pointer"
                        >
                          Read case study
                          <ArrowRight
                            className="ml-2 group-hover/link:translate-x-1 transition-transform"
                            size={20}
                          />
                        </a>
                      </div>
                    </Card>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-zinc-950 border border-white/10 p-6 rounded-sm">
                        <div className="text-3xl text-purple-400 mb-2">
                          100+
                        </div>
                        <div className="text-white/60 text-sm">
                          Projects Delivered
                        </div>
                      </div>
                      <div className="bg-zinc-950 border border-white/10 p-6 rounded-sm">
                        <div className="text-3xl text-purple-400 mb-2">
                          98%
                        </div>
                        <div className="text-white/60 text-sm">
                          Client Satisfaction
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Capabilities */}
      <section className="py-20 lg:py-32 bg-zinc-950 border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              Additional Capabilities
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Specialized expertise to address your most
              critical business challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalCapabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <Card
                  key={capability.title}
                  className="group bg-black border border-white/10 hover:border-purple-400 transition-all duration-300 cursor-pointer"
                >
                  <div className="p-8">
                    <div className="w-12 h-12 rounded-sm bg-purple-600/10 border border-purple-500/20 flex items-center justify-center mb-4 group-hover:bg-purple-600/20 transition-colors">
                      <Icon
                        className="text-purple-400"
                        size={24}
                      />
                    </div>
                    <h3 className="text-xl text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {capability.title}
                    </h3>
                    <p className="text-white/60 text-sm mb-4">
                      {capability.description}
                    </p>
                    <div className="inline-flex items-center text-white/40 group-hover:text-purple-400 transition-colors text-sm">
                      Learn more
                      <ArrowRight
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                        size={16}
                      />
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 lg:py-32 border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-purple-400 mb-4 text-sm uppercase tracking-wide">
              Our Products
            </div>
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              Innovative Solutions for Your Business
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Discover our suite of cutting-edge products designed to accelerate your digital transformation journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Fitstock AI */}
            <Card className="group bg-zinc-950 border border-white/10 hover:border-purple-400 transition-all duration-300 overflow-hidden cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjM1ODE3ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Fitstock AI"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl text-white mb-4 group-hover:text-purple-400 transition-colors">
                  Fitstock AI
                </h3>
                <p className="text-white/60 leading-relaxed mb-6">
                  AI-powered stock trading and investment platform that empowers investors and traders with intelligent market analysis, predictive algorithms, and data-driven insights to maximize returns.
                </p>
                <a
                  href="https://www.fitstock.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors group/link"
                >
                  Visit www.fitstock.id
                  <ArrowRight
                    className="ml-2 group-hover/link:translate-x-1 transition-transform"
                    size={20}
                  />
                </a>
              </div>
            </Card>

            {/* Fitstock Academy */}
            <Card className="group bg-zinc-950 border border-white/10 hover:border-purple-400 transition-all duration-300 overflow-hidden cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1762330910399-95caa55acf04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NjM1MzM3NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Fitstock Academy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl text-white mb-4 group-hover:text-purple-400 transition-colors">
                  Fitstock Academy
                </h3>
                <p className="text-white/60 leading-relaxed mb-6">
                  Specialized trading academy that helps investors and traders gain more profit by mastering Fitstock AI tools and our proven investment methods through expert-led training programs.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors group/link"
                >
                  Learn more
                  <ArrowRight
                    className="ml-2 group-hover/link:translate-x-1 transition-transform"
                    size={20}
                  />
                </a>
              </div>
            </Card>

            {/* Fitpost */}
            <Card className="group bg-zinc-950 border border-white/10 hover:border-purple-400 transition-all duration-300 overflow-hidden cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759215524484-89c8d7ae28f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGRpZ2l0YWwlMjBwb3N0fGVufDF8fHx8MTc2MzYyMDg5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Fitpost"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl text-white mb-4 group-hover:text-purple-400 transition-colors">
                  Fitpost
                </h3>
                <p className="text-white/60 leading-relaxed mb-6">
                  Indonesia's leading financial news and media platform delivering in-depth coverage, analysis, and insights on stocks, investing, and financial markets across the Indonesian capital market.
                </p>
                <a
                  href="https://www.fitpost.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors group/link"
                >
                  Visit www.fitpost.id
                  <ArrowRight
                    className="ml-2 group-hover/link:translate-x-1 transition-transform"
                    size={20}
                  />
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl text-white mb-8">
              Let's create value together
            </h2>
            <p className="text-xl text-white/60 mb-12">
              Discover how our services can help you achieve
              your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 transition-all duration-300 group cursor-pointer"
              >
                Get in Touch
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
                Download Capabilities
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}