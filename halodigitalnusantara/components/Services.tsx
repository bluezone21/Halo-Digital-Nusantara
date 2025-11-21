import { ArrowRight } from 'lucide-react';

export function Services() {
  const services = [
    {
      title: 'Strategy & Consulting',
      description: 'Navigate disruption and drive growth with data-driven strategies and business transformation expertise.',
      link: '#',
    },
    {
      title: 'Technology',
      description: 'Harness emerging technologies, cloud, and AI to reimagine your business and create new value.',
      link: '#',
    },
    {
      title: 'Operations',
      description: 'Transform your operations with intelligent automation, analytics, and agile ways of working.',
      link: '#',
    },
    {
      title: 'Industry X',
      description: 'Reinvent your industry with digital manufacturing, supply chain innovation, and sustainable solutions.',
      link: '#',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-zinc-950">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-white/60 max-w-2xl">
            Comprehensive capabilities to help you compete and grow in the digital economy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/10">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.link}
              className="group bg-zinc-950 p-8 lg:p-12 hover:bg-zinc-900 transition-colors duration-300 cursor-pointer"
            >
              <h3 className="text-2xl lg:text-3xl text-white mb-4 group-hover:text-purple-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-white/60 mb-6 text-lg">
                {service.description}
              </p>
              <div className="inline-flex items-center text-white group-hover:text-purple-400 transition-colors">
                Learn more
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}