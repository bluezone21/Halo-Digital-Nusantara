import { Shield, Lock, Eye, UserCheck, Clock } from 'lucide-react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function PrivacyStatement() {
  const sections = [
    {
      title: '1. Information We Collect',
      content: [
        'We collect information that you provide directly to us, including when you create an account, fill out a form, request information, or communicate with us. This may include:',
        '• Personal identification information (name, email address, phone number, job title)',
        '• Professional information (company name, industry, business needs)',
        '• Technical information (IP address, browser type, device information)',
        '• Usage data (pages visited, time spent on site, links clicked)',
        '• Cookies and similar tracking technologies',
      ],
    },
    {
      title: '2. How We Use Your Information',
      content: [
        'We use the information we collect for various purposes, including:',
        '• Providing, maintaining, and improving our services',
        '• Processing your requests and transactions',
        '• Sending you technical notices, updates, and security alerts',
        '• Responding to your comments, questions, and customer service requests',
        '• Communicating with you about products, services, and events',
        '• Monitoring and analyzing trends, usage, and activities',
        '• Detecting, preventing, and addressing technical issues and fraud',
        '• Personalizing your experience on our website',
      ],
    },
    {
      title: '3. Information Sharing and Disclosure',
      content: [
        'We may share your information in the following circumstances:',
        '• With your consent or at your direction',
        '• With service providers who perform services on our behalf',
        '• With our business partners for joint marketing activities',
        '• To comply with legal obligations or respond to legal requests',
        '• To protect our rights, privacy, safety, or property',
        '• In connection with a merger, acquisition, or sale of assets',
        'We do not sell your personal information to third parties.',
      ],
    },
    {
      title: '4. Data Security',
      content: [
        'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:',
        '• Encryption of data in transit and at rest',
        '• Regular security assessments and penetration testing',
        '• Access controls and authentication mechanisms',
        '• Employee training on data protection and privacy',
        '• Incident response and breach notification procedures',
        'However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.',
      ],
    },
    {
      title: '5. Your Rights and Choices',
      content: [
        'You have certain rights regarding your personal information:',
        '• Access: You can request access to the personal information we hold about you',
        '• Correction: You can request correction of inaccurate information',
        '• Deletion: You can request deletion of your personal information',
        '• Objection: You can object to processing of your information',
        '• Portability: You can request transfer of your data',
        '• Withdrawal of consent: You can withdraw consent at any time',
        'To exercise these rights, please contact us at privacy@halodigital.id',
      ],
    },
    {
      title: '6. Cookies and Tracking Technologies',
      content: [
        'We use cookies and similar tracking technologies to collect and track information about your use of our services. You can control cookies through your browser settings. For more information, please see our Cookie Policy.',
      ],
    },
    {
      title: '7. International Data Transfers',
      content: [
        'Your information may be transferred to and processed in countries other than Indonesia. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards.',
      ],
    },
    {
      title: '8. Children\'s Privacy',
      content: [
        'Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us.',
      ],
    },
    {
      title: '9. Changes to This Privacy Statement',
      content: [
        'We may update this Privacy Statement from time to time. We will notify you of any material changes by posting the new Privacy Statement on this page and updating the "Last Updated" date.',
      ],
    },
    {
      title: '10. Contact Us',
      content: [
        'If you have any questions about this Privacy Statement or our privacy practices, please contact us:',
        '• Email: privacy@halodigital.id',
        '• Phone: +62 21 1234 5678',
        '• Address: Sudirman Central Business District, Jl. Jend. Sudirman Kav. 52-53, Jakarta 12190, Indonesia',
      ],
    },
  ];

  const principles = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'We implement robust security measures to protect your data.',
    },
    {
      icon: Lock,
      title: 'Secure Processing',
      description: 'Your information is processed securely and confidentially.',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We are transparent about how we collect and use your data.',
    },
    {
      icon: UserCheck,
      title: 'Your Control',
      description: 'You have control over your personal information.',
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YWN5JTIwc2VjdXJpdHl8ZW58MXx8fHwxNzYyOTExMDE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Privacy Statement"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/50"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="text-purple-400 mb-4 text-sm uppercase tracking-wide">
              Legal
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              Privacy Statement
            </h1>
            <p className="text-xl text-white/80 mb-4">
              Your privacy is important to us. This Privacy Statement explains how
              we collect, use, and protect your personal information.
            </p>
            <div className="flex items-center gap-2 text-white/60">
              <Clock size={16} />
              <span>Last Updated: November 12, 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-20 bg-zinc-950 border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-white mb-4">Our Privacy Principles</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              We are committed to protecting your privacy and handling your data
              responsibly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle) => {
              const Icon = principle.icon;
              return (
                <Card
                  key={principle.title}
                  className="bg-black border border-white/10 hover:border-purple-400 transition-all duration-300"
                >
                  <div className="p-6 text-center">
                    <div className="w-12 h-12 rounded-sm bg-purple-600/10 border border-purple-500/20 flex items-center justify-center mb-4 mx-auto">
                      <Icon className="text-purple-400" size={24} />
                    </div>
                    <h3 className="text-white mb-2">{principle.title}</h3>
                    <p className="text-white/60 text-sm">{principle.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Privacy Statement Content */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-3xl text-white mb-6">{section.title}</h2>
                  <div className="space-y-4">
                    {section.content.map((paragraph, index) => (
                      <p key={index} className="text-white/70 text-lg leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Download Section */}
            <div className="mt-16 p-8 bg-zinc-950 border border-white/10 rounded-sm">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl text-white mb-2">
                    Download Privacy Statement
                  </h3>
                  <p className="text-white/60">
                    Download a PDF copy of our Privacy Statement for your records.
                  </p>
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-sm transition-all duration-300 cursor-pointer whitespace-nowrap">
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
