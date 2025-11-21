import { ArrowRight, TrendingUp, DollarSign, Users, Globe, Download, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function InvestorRelations() {
  const financialHighlights = [
    { metric: 'Revenue Growth', value: '45%', period: 'YoY 2024' },
    { metric: 'Operating Margin', value: '28%', period: 'Q3 2024' },
    { metric: 'Client Retention', value: '96%', period: '2024' },
    { metric: 'Employee Count', value: '1,200+', period: 'Nov 2024' },
  ];

  const quarterlyResults = [
    {
      quarter: 'Q3 2024',
      revenue: '$45M',
      growth: '+42%',
      highlights: 'Strong AI and cloud services growth',
      date: 'October 15, 2024',
    },
    {
      quarter: 'Q2 2024',
      revenue: '$41M',
      growth: '+38%',
      highlights: 'Record new client acquisitions',
      date: 'July 15, 2024',
    },
    {
      quarter: 'Q1 2024',
      revenue: '$38M',
      growth: '+35%',
      highlights: 'Successful market expansion',
      date: 'April 15, 2024',
    },
    {
      quarter: 'Q4 2023',
      revenue: '$35M',
      growth: '+32%',
      highlights: 'Year-end momentum',
      date: 'January 15, 2024',
    },
  ];

  const documents = [
    {
      title: 'Annual Report 2023',
      type: 'Annual Report',
      date: 'March 2024',
      size: '8.5 MB',
      icon: FileText,
    },
    {
      title: 'Q3 2024 Earnings Presentation',
      type: 'Earnings Report',
      date: 'October 2024',
      size: '3.2 MB',
      icon: FileText,
    },
    {
      title: 'Corporate Governance Guidelines',
      type: 'Governance',
      date: 'January 2024',
      size: '1.8 MB',
      icon: FileText,
    },
    {
      title: 'Sustainability Report 2023',
      type: 'ESG Report',
      date: 'April 2024',
      size: '5.6 MB',
      icon: FileText,
    },
    {
      title: 'Investor Presentation',
      type: 'Presentation',
      date: 'November 2024',
      size: '4.1 MB',
      icon: FileText,
    },
    {
      title: 'Code of Business Conduct',
      type: 'Governance',
      date: 'January 2024',
      size: '2.3 MB',
      icon: FileText,
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aHxlbnwxfHx8fDE3NjI5MDkxOTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Investor Relations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/50"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="text-purple-400 mb-4 text-sm uppercase tracking-wide">
              Financial Information
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              Investor Relations
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
              Transparency, performance, and sustainable growth for our
              stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Financial Highlights */}
      <section className="py-20 bg-zinc-950 border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl text-white mb-4">
              Financial Highlights
            </h2>
            <p className="text-xl text-white/60">
              Key metrics demonstrating our strong performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {financialHighlights.map((item) => (
              <Card
                key={item.metric}
                className="bg-black border border-white/10 hover:border-purple-400 transition-all duration-300"
              >
                <div className="p-8 text-center">
                  <div className="text-4xl lg:text-5xl text-purple-400 mb-3">
                    {item.value}
                  </div>
                  <div className="text-white text-lg mb-2">{item.metric}</div>
                  <div className="text-white/40 text-sm">{item.period}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stock Performance (Mock) */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl text-white mb-6">
                Consistent Growth
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Our strong financial performance reflects our commitment to
                delivering exceptional value to clients and sustainable returns to
                investors.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm bg-purple-600/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white text-lg mb-2">Revenue Growth</h3>
                    <p className="text-white/60">
                      45% year-over-year revenue growth driven by strong demand
                      for digital transformation services.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm bg-purple-600/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Users className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white text-lg mb-2">Client Success</h3>
                    <p className="text-white/60">
                      96% client retention rate and expanding relationships with
                      Fortune 500 companies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm bg-purple-600/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Globe className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white text-lg mb-2">Market Expansion</h3>
                    <p className="text-white/60">
                      Strategic expansion into new markets and service offerings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-sm overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldHxlbnwxfHx8fDE3NjI5MDg5NzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Financial Growth"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quarterly Results */}
      <section className="py-20 lg:py-32 bg-zinc-950 border-y border-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl text-white mb-4">
              Quarterly Results
            </h2>
            <p className="text-xl text-white/60">
              Track our financial performance over recent quarters
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {quarterlyResults.map((result) => (
              <Card
                key={result.quarter}
                className="group bg-black border border-white/10 hover:border-purple-400 transition-all duration-300 cursor-pointer"
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {result.quarter}
                      </h3>
                      <div className="text-white/60 text-sm">{result.date}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl text-purple-400 mb-1">
                        {result.revenue}
                      </div>
                      <div className="text-green-400 text-sm">{result.growth}</div>
                    </div>
                  </div>
                  <p className="text-white/60 mb-4">{result.highlights}</p>
                  <div className="inline-flex items-center text-white/40 group-hover:text-purple-400 transition-colors text-sm">
                    View Details
                    <ArrowRight
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                      size={16}
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Documents */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl text-white mb-4">
              Financial Documents
            </h2>
            <p className="text-xl text-white/60">
              Access our latest reports, presentations, and governance documents
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc) => {
              const Icon = doc.icon;
              return (
                <Card
                  key={doc.title}
                  className="group bg-zinc-950 border border-white/10 hover:border-purple-400 transition-all duration-300 cursor-pointer"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-sm bg-purple-600/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="text-purple-400" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg text-white mb-1 group-hover:text-purple-400 transition-colors">
                          {doc.title}
                        </h3>
                        <div className="text-white/40 text-sm">{doc.type}</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-white/60 text-sm mb-4">
                      <span>{doc.date}</span>
                      <span>{doc.size}</span>
                    </div>
                    <Button
                      size="sm"
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 cursor-pointer"
                    >
                      <Download size={16} className="mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ESG Commitment */}
      <section className="py-20 lg:py-32 bg-zinc-950 border-y border-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-sm overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJpbGl0eXxlbnwxfHx8fDE3NjI5MDgwNjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="ESG Commitment"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl text-white mb-6">
                ESG Commitment
              </h2>
              <p className="text-xl text-white/70 mb-6">
                We are committed to environmental, social, and governance
                excellence as part of our long-term value creation strategy.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-white text-lg mb-1">Environmental</h3>
                    <p className="text-white/60">
                      Carbon neutral operations by 2025, sustainable offices
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-white text-lg mb-1">Social</h3>
                    <p className="text-white/60">
                      Diversity & inclusion, community impact programs
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-white text-lg mb-1">Governance</h3>
                    <p className="text-white/60">
                      Transparent practices, ethical standards
                    </p>
                  </div>
                </div>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 group cursor-pointer">
                View ESG Report
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Contact */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              Investor Contact
            </h2>
            <p className="text-xl text-white/60 mb-8">
              For investor inquiries, financial information, or to schedule a
              meeting with our investor relations team.
            </p>
            <div className="bg-zinc-950 border border-white/10 rounded-sm p-8 mb-8">
              <div className="space-y-4 text-lg">
                <div className="flex items-center justify-center gap-3 text-white/70">
                  <span className="text-white">Email:</span>
                  <a
                    href="mailto:investor@halodigital.id"
                    className="text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
                  >
                    investor@halodigital.id
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3 text-white/70">
                  <span className="text-white">Phone:</span>
                  <a
                    href="tel:+622112345600"
                    className="text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
                  >
                    +62 21 1234 5600
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 transition-all duration-300 group cursor-pointer"
              >
                Request Information
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
                Email Alerts
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
