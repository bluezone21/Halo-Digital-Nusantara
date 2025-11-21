import { Cookie, Settings, BarChart, Shield, Users, Clock } from 'lucide-react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CookiePolicy() {
  const sections = [
    {
      title: '1. What Are Cookies?',
      content: [
        'Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.',
        'Cookies allow websites to remember your actions and preferences (such as login, language, font size, and other display preferences) over a period of time, so you don\'t have to keep re-entering them whenever you come back to the site or browse from one page to another.',
      ],
    },
    {
      title: '2. How We Use Cookies',
      content: [
        'Halo Digital Nusantara uses cookies and similar technologies for several purposes:',
        '• To enable certain functions of our website',
        '• To provide analytics and understand how visitors use our site',
        '• To store your preferences and settings',
        '• To deliver relevant advertising and content',
        '• To enable social media features',
        '• To improve our services and user experience',
        '• To detect and prevent fraud and security issues',
      ],
    },
    {
      title: '3. Types of Cookies We Use',
      content: [
        'We use the following categories of cookies on our website:',
      ],
    },
  ];

  const cookieTypes = [
    {
      icon: Shield,
      title: 'Strictly Necessary Cookies',
      description:
        'These cookies are essential for the website to function properly. They enable basic functions like page navigation, access to secure areas, and session management. The website cannot function properly without these cookies.',
      examples: 'Session cookies, security cookies, load balancing cookies',
      retention: 'Session or up to 1 year',
      canDisable: false,
    },
    {
      icon: Settings,
      title: 'Functional Cookies',
      description:
        'These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.',
      examples: 'Language preference, region selection, user interface customization',
      retention: 'Up to 2 years',
      canDisable: true,
    },
    {
      icon: BarChart,
      title: 'Analytics Cookies',
      description:
        'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They help us improve the way our website works.',
      examples: 'Google Analytics, page view tracking, user journey analysis',
      retention: 'Up to 2 years',
      canDisable: true,
    },
    {
      icon: Users,
      title: 'Advertising Cookies',
      description:
        'These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement and measure the effectiveness of advertising campaigns.',
      examples: 'Targeted advertising, remarketing, ad performance tracking',
      retention: 'Up to 1 year',
      canDisable: true,
    },
  ];

  const additionalSections = [
    {
      title: '4. Third-Party Cookies',
      content: [
        'In addition to our own cookies, we may also use various third-party cookies to report usage statistics of our website, deliver advertisements, and provide social media features.',
        'Third-party services we use include:',
        '• Google Analytics: For website analytics and performance monitoring',
        '• Social media platforms: For social sharing and engagement features',
        '• Advertising networks: For targeted advertising and remarketing',
        '• Content delivery networks: For improved website performance',
        'These third parties may use cookies to collect information about your online activities across different websites over time.',
      ],
    },
    {
      title: '5. Managing Cookies',
      content: [
        'You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by:',
        '• Using our cookie consent tool when you first visit our website',
        '• Adjusting your browser settings to refuse or delete cookies',
        '• Using browser extensions or privacy tools',
        '• Opting out of third-party advertising cookies',
        'Please note that if you choose to disable cookies, some features of our website may not function properly, and your user experience may be affected.',
      ],
    },
    {
      title: '6. Browser Settings',
      content: [
        'Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies may impact your experience on our website. Here\'s how to manage cookies in popular browsers:',
        '• Google Chrome: Settings > Privacy and security > Cookies and other site data',
        '• Mozilla Firefox: Options > Privacy & Security > Cookies and Site Data',
        '• Safari: Preferences > Privacy > Cookies and website data',
        '• Microsoft Edge: Settings > Cookies and site permissions > Cookies and site data',
        'For more information about cookies and how to manage them, visit www.aboutcookies.org or www.allaboutcookies.org.',
      ],
    },
    {
      title: '7. Do Not Track Signals',
      content: [
        'Some browsers include a "Do Not Track" (DNT) feature that signals to websites you visit that you do not want to have your online activity tracked. Currently, there is no industry standard for how to respond to DNT signals. At this time, our website does not respond to DNT browser signals or mechanisms.',
      ],
    },
    {
      title: '8. Mobile Devices',
      content: [
        'Mobile devices may have settings that allow you to control advertising identifiers and limit ad tracking. These settings vary by device and operating system. Please consult your device\'s help documentation for information on how to manage these settings.',
      ],
    },
    {
      title: '9. Updates to This Cookie Policy',
      content: [
        'We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically for the latest information on our use of cookies.',
      ],
    },
    {
      title: '10. Contact Us',
      content: [
        'If you have any questions about our use of cookies or this Cookie Policy, please contact us:',
        '• Email: privacy@halodigital.id',
        '• Phone: +62 21 1234 5678',
        '• Address: Sudirman Central Business District, Jl. Jend. Sudirman Kav. 52-53, Jakarta 12190, Indonesia',
      ],
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raWUlMjBwcml2YWN5fGVufDF8fHx8MTc2MjkxMTQxMnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Cookie Policy"
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
              Cookie Policy
            </h1>
            <p className="text-xl text-white/80 mb-4">
              Learn how we use cookies and similar technologies on our website.
            </p>
            <div className="flex items-center gap-2 text-white/60">
              <Clock size={16} />
              <span>Last Updated: November 12, 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-zinc-950 border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {sections.map((section) => (
              <div key={section.title} className="mb-12">
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
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {cookieTypes.map((type) => {
              const Icon = type.icon;
              return (
                <Card
                  key={type.title}
                  className="bg-zinc-950 border border-white/10 hover:border-purple-400 transition-all duration-300"
                >
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-sm bg-purple-600/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="text-purple-400" size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl text-white mb-2">{type.title}</h3>
                        {!type.canDisable && (
                          <span className="inline-block bg-purple-600/20 text-purple-400 text-xs px-2 py-1 rounded-full">
                            Always Active
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-white/70 mb-4 leading-relaxed">
                      {type.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex gap-2">
                        <span className="text-white/40">Examples:</span>
                        <span className="text-white/60">{type.examples}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-white/40">Retention:</span>
                        <span className="text-white/60">{type.retention}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="py-20 lg:py-32 bg-zinc-950 border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {additionalSections.map((section) => (
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

            {/* Cookie Settings */}
            <div className="mt-16 p-8 bg-black border border-white/10 rounded-sm">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl text-white mb-2 flex items-center gap-2">
                    <Cookie className="text-purple-400" size={24} />
                    Manage Cookie Preferences
                  </h3>
                  <p className="text-white/60">
                    Update your cookie settings and manage your preferences.
                  </p>
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-sm transition-all duration-300 cursor-pointer whitespace-nowrap">
                  Cookie Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
