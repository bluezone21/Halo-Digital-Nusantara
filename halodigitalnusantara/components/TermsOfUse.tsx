import { FileText, AlertTriangle, Scale, CheckCircle, Clock } from 'lucide-react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function TermsOfUse() {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: [
        'By accessing and using the Halo Digital Nusantara website and services, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.',
        'We reserve the right to modify these terms at any time. Your continued use of the services after any such changes constitutes your acceptance of the new terms.',
      ],
    },
    {
      title: '2. Use of Services',
      content: [
        'You may use our services only for lawful purposes and in accordance with these Terms. You agree not to:',
        '• Use the services in any way that violates any applicable law or regulation',
        '• Engage in any conduct that restricts or inhibits anyone\'s use of the services',
        '• Use any robot, spider, or other automatic device to access the services',
        '• Introduce any viruses, trojan horses, worms, or other harmful code',
        '• Attempt to gain unauthorized access to any portion of the services',
        '• Interfere with or disrupt the services or servers',
        '• Use the services for any commercial purpose without our express consent',
      ],
    },
    {
      title: '3. Intellectual Property Rights',
      content: [
        'The services and their entire contents, features, and functionality (including but not limited to information, software, text, displays, images, video, and audio) are owned by Halo Digital Nusantara, its licensors, or other providers of such material and are protected by Indonesian and international copyright, trademark, patent, trade secret, and other intellectual property laws.',
        'You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our services, except as follows:',
        '• Your computer may temporarily store copies of such materials incidental to your use of our services',
        '• You may store files that are automatically cached by your web browser',
        '• You may print or download one copy of a reasonable number of pages for your personal, non-commercial use',
      ],
    },
    {
      title: '4. User Content',
      content: [
        'You may have the opportunity to submit content to the services, including comments, feedback, or other materials. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display such content in connection with our services.',
        'You represent and warrant that:',
        '• You own or control all rights to the content you submit',
        '• The content is accurate and not misleading',
        '• The content does not violate these Terms or any applicable law',
        '• The content will not cause injury to any person or entity',
      ],
    },
    {
      title: '5. Third-Party Links and Services',
      content: [
        'Our services may contain links to third-party websites or services that are not owned or controlled by Halo Digital Nusantara. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.',
        'You acknowledge and agree that we shall not be responsible or liable for any damage or loss caused by your use of any third-party content, goods, or services.',
      ],
    },
    {
      title: '6. Disclaimer of Warranties',
      content: [
        'THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER HALO DIGITAL NUSANTARA NOR ANY PERSON ASSOCIATED WITH THE COMPANY MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES.',
        'WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, OR THAT DEFECTS WILL BE CORRECTED.',
      ],
    },
    {
      title: '7. Limitation of Liability',
      content: [
        'TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL HALO DIGITAL NUSANTARA, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICES.',
        'THIS INCLUDES BUT IS NOT LIMITED TO DIRECT, INDIRECT, INCIDENTAL, PUNITIVE, AND CONSEQUENTIAL DAMAGES, LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES.',
      ],
    },
    {
      title: '8. Indemnification',
      content: [
        'You agree to defend, indemnify, and hold harmless Halo Digital Nusantara, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of or relating to your violation of these Terms or your use of the services.',
      ],
    },
    {
      title: '9. Governing Law and Jurisdiction',
      content: [
        'These Terms shall be governed by and construed in accordance with the laws of the Republic of Indonesia, without regard to its conflict of law provisions.',
        'Any legal action or proceeding arising under these Terms will be brought exclusively in the courts located in Jakarta, Indonesia, and you irrevocably consent to the personal jurisdiction and venue therein.',
      ],
    },
    {
      title: '10. Termination',
      content: [
        'We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.',
        'Upon termination, your right to use the services will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive.',
      ],
    },
    {
      title: '11. Entire Agreement',
      content: [
        'These Terms constitute the entire agreement between you and Halo Digital Nusantara regarding the use of the services, superseding any prior agreements between you and the company.',
      ],
    },
    {
      title: '12. Contact Information',
      content: [
        'If you have any questions about these Terms of Use, please contact us:',
        '• Email: legal@halodigital.id',
        '• Phone: +62 21 1234 5678',
        '• Address: Sudirman Central Business District, Jl. Jend. Sudirman Kav. 52-53, Jakarta 12190, Indonesia',
      ],
    },
  ];

  const highlights = [
    {
      icon: FileText,
      title: 'Clear Terms',
      description: 'Transparent and easy to understand terms of use.',
    },
    {
      icon: Scale,
      title: 'Fair Usage',
      description: 'Balanced rights and responsibilities for all users.',
    },
    {
      icon: AlertTriangle,
      title: 'Important Notices',
      description: 'Key information about limitations and liabilities.',
    },
    {
      icon: CheckCircle,
      title: 'User Protection',
      description: 'Guidelines to ensure a safe experience for everyone.',
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50fGVufDF8fHx8MTc2MjkxMTIzMHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Terms of Use"
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
              Terms of Use
            </h1>
            <p className="text-xl text-white/80 mb-4">
              Please read these Terms of Use carefully before using our website
              and services.
            </p>
            <div className="flex items-center gap-2 text-white/60">
              <Clock size={16} />
              <span>Last Updated: November 12, 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 bg-zinc-950 border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-white mb-4">Key Highlights</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Understanding the important aspects of our Terms of Use.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <Card
                  key={highlight.title}
                  className="bg-black border border-white/10 hover:border-purple-400 transition-all duration-300"
                >
                  <div className="p-6 text-center">
                    <div className="w-12 h-12 rounded-sm bg-purple-600/10 border border-purple-500/20 flex items-center justify-center mb-4 mx-auto">
                      <Icon className="text-purple-400" size={24} />
                    </div>
                    <h3 className="text-white mb-2">{highlight.title}</h3>
                    <p className="text-white/60 text-sm">{highlight.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Terms Content */}
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

            {/* Important Notice */}
            <div className="mt-16 p-8 bg-purple-600/10 border border-purple-500/20 rounded-sm">
              <div className="flex items-start gap-4">
                <AlertTriangle className="text-purple-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl text-white mb-2">Important Notice</h3>
                  <p className="text-white/70 leading-relaxed">
                    By using our services, you acknowledge that you have read,
                    understood, and agree to be bound by these Terms of Use. If you
                    do not agree with any part of these terms, you must not use our
                    services.
                  </p>
                </div>
              </div>
            </div>

            {/* Download Section */}
            <div className="mt-8 p-8 bg-zinc-950 border border-white/10 rounded-sm">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl text-white mb-2">
                    Download Terms of Use
                  </h3>
                  <p className="text-white/60">
                    Download a PDF copy of our Terms of Use for your records.
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
