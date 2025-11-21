import { ArrowRight, Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    subject: '',
    message: '',
  });

  const offices = [
    {
      city: 'Jakarta (HQ)',
      address: 'Sudirman Central Business District',
      addressLine2: 'Jl. Jend. Sudirman Kav. 52-53, Jakarta 12190',
      phone: '+62 21 1234 5678',
      email: 'jakarta@halodigital.id',
      image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYWthcnRhJTIwY2l0eXxlbnwxfHx8fDE3NjI5MDk0NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      city: 'Surabaya',
      address: 'Pakuwon Center',
      addressLine2: 'Jl. Embong Malang No. 1-5, Surabaya 60261',
      phone: '+62 31 9876 5432',
      email: 'surabaya@halodigital.id',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjI5MDk0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      city: 'Bandung',
      address: 'Bandung Trade Center',
      addressLine2: 'Jl. Dr. Djunjunan No. 143-149, Bandung 40173',
      phone: '+62 22 8765 4321',
      email: 'bandung@halodigital.id',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjI5MDk0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const industries = [
    'Banking',
    'Capital Markets',
    'Communications',
    'Consumer Goods & Services',
    'Energy',
    'Health',
    'Insurance',
    'Manufacturing',
    'Public Service',
    'Retail',
    'Technology',
    'Other',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwdXN8ZW58MXx8fHwxNzYyOTA5NTAyfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/50"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="text-purple-400 mb-4 text-sm uppercase tracking-wide">
              Get in Touch
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
              Let's discuss how we can help transform your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-4xl text-white mb-6">Send Us a Message</h2>
              <p className="text-xl text-white/60 mb-8">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors"
                      placeholder="john.doe@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors"
                      placeholder="+62 812 3456 7890"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white mb-2">Company *</label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors"
                      placeholder="Your Company Name"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Industry *</label>
                    <select
                      name="industry"
                      required
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white focus:outline-none focus:border-purple-400 transition-colors"
                    >
                      <option value="" className="bg-black">
                        Select Industry
                      </option>
                      {industries.map((industry) => (
                        <option key={industry} value={industry} className="bg-black">
                          {industry}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label className="block text-white mb-2">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white text-lg transition-all duration-300 group cursor-pointer"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl text-white mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <Card className="bg-zinc-950 border border-white/10 hover:border-purple-400 transition-all duration-300">
                    <div className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-sm bg-purple-600/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                        <Mail className="text-purple-400" size={24} />
                      </div>
                      <div>
                        <h4 className="text-white mb-2">Email</h4>
                        <a
                          href="mailto:contact@halodigital.id"
                          className="text-white/60 hover:text-purple-400 transition-colors cursor-pointer"
                        >
                          contact@halodigital.id
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-zinc-950 border border-white/10 hover:border-purple-400 transition-all duration-300">
                    <div className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-sm bg-purple-600/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                        <Phone className="text-purple-400" size={24} />
                      </div>
                      <div>
                        <h4 className="text-white mb-2">Phone</h4>
                        <a
                          href="tel:+622112345678"
                          className="text-white/60 hover:text-purple-400 transition-colors cursor-pointer"
                        >
                          +62 21 1234 5678
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-zinc-950 border border-white/10 hover:border-purple-400 transition-all duration-300">
                    <div className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-sm bg-purple-600/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-purple-400" size={24} />
                      </div>
                      <div>
                        <h4 className="text-white mb-2">Headquarters</h4>
                        <p className="text-white/60">
                          Sudirman Central Business District<br />
                          Jl. Jend. Sudirman Kav. 52-53<br />
                          Jakarta 12190, Indonesia
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-zinc-950 border border-white/10 hover:border-purple-400 transition-all duration-300">
                    <div className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-sm bg-purple-600/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                        <Clock className="text-purple-400" size={24} />
                      </div>
                      <div>
                        <h4 className="text-white mb-2">Business Hours</h4>
                        <p className="text-white/60">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 lg:py-32 bg-zinc-950 border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              Our Offices
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Visit us at one of our offices across Indonesia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office) => (
              <Card
                key={office.city}
                className="group bg-black border border-white/10 hover:border-purple-400 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={office.image}
                    alt={office.city}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {office.city}
                  </h3>
                  <div className="space-y-3 text-white/60">
                    <div className="flex items-start gap-2">
                      <MapPin size={16} className="mt-1 flex-shrink-0" />
                      <div>
                        <p>{office.address}</p>
                        <p>{office.addressLine2}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={16} />
                      <a
                        href={`tel:${office.phone.replace(/\s/g, '')}`}
                        className="hover:text-purple-400 transition-colors cursor-pointer"
                      >
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail size={16} />
                      <a
                        href={`mailto:${office.email}`}
                        className="hover:text-purple-400 transition-colors cursor-pointer"
                      >
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl text-white mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/60 mb-12">
              Schedule a consultation with our experts to discuss your digital
              transformation needs.
            </p>
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 transition-all duration-300 group cursor-pointer"
            >
              Book a Consultation
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
