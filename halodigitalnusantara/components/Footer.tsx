import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import logo from 'figma:asset/b3f7df4655dfe89f0ceb527c39188b4b968cbaeb.png';

type PageType = 'home' | 'what-we-do' | 'who-we-are' | 'insights' | 'careers' | 'industries' | 'newsroom' | 'investor-relations' | 'contact' | 'privacy' | 'terms' | 'cookies' | 'sitemap';

interface FooterProps {
  navigateTo: (page: PageType) => void;
}

export function Footer({ navigateTo }: FooterProps) {
  const footerSections = [
    {
      title: 'What We Do',
      links: [
        { name: 'Strategy & Consulting', page: 'what-we-do' as const },
        { name: 'Technology', page: 'what-we-do' as const },
        { name: 'Operations', page: 'what-we-do' as const },
        { name: 'Industry X', page: 'what-we-do' as const },
        { name: 'All Services', page: 'what-we-do' as const },
      ],
    },
    {
      title: 'Industries',
      links: [
        { name: 'Banking', page: 'industries' as const },
        { name: 'Communications', page: 'industries' as const },
        { name: 'Energy', page: 'industries' as const },
        { name: 'Health', page: 'industries' as const },
        { name: 'Retail', page: 'industries' as const },
        { name: 'All Industries', page: 'industries' as const },
      ],
    },
    {
      title: 'Insights',
      links: [
        { name: 'Technology Vision', page: 'insights' as const },
        { name: 'Research & Insights', page: 'insights' as const },
        { name: 'Case Studies', page: 'insights' as const },
        { name: 'Thought Leadership', page: 'insights' as const },
        { name: 'Our Blog', page: 'insights' as const },
      ],
    },
    {
      title: 'About Us',
      links: [
        { name: 'Company Overview', page: 'who-we-are' as const },
        { name: 'Leadership', page: 'who-we-are' as const },
        { name: 'Newsroom', page: 'newsroom' as const },
        { name: 'Investor Relations', page: 'investor-relations' as const },
        { name: 'Contact Us', page: 'contact' as const },
      ],
    },
    {
      title: 'Careers',
      links: [
        { name: 'Life at Halo', page: 'careers' as const },
        { name: 'Job Search', page: 'careers' as const },
        { name: 'Student & Entry Level', page: 'careers' as const },
        { name: 'Corporate Functions', page: 'careers' as const },
        { name: 'Apply Now', page: 'careers' as const },
      ],
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const legalLinks = [
    { name: 'Privacy Statement', page: 'privacy' as const },
    { name: 'Terms of Use', page: 'terms' as const },
    { name: 'Cookie Policy', page: 'cookies' as const },
    { name: 'Sitemap', page: 'sitemap' as const },
  ];

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => {
                  const linkText = typeof link === 'string' ? link : link.name;
                  const linkPage = typeof link === 'string' ? null : link.page;
                  
                  return (
                    <li key={linkText}>
                      {linkPage ? (
                        <button
                          className="text-white/60 hover:text-purple-400 transition-colors duration-200 text-sm cursor-pointer"
                          onClick={() => navigateTo(linkPage)}
                        >
                          {linkText}
                        </button>
                      ) : (
                        <a
                          href="#"
                          className="text-white/60 hover:text-purple-400 transition-colors duration-200 text-sm cursor-pointer"
                        >
                          {linkText}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom footer */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Logo and address */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <img src={logo} alt="Halo Digital Nusantara" className="h-8 w-8" />
              </div>
              <div className="text-white/60 text-sm max-w-md leading-relaxed">
                <p className="mb-2">Jl KH Wahid Hasyim No 455C Cirangrang, Babakan Ciparay, Kota Bandung, Indonesia</p>
                <p className="mb-1">Phone: 022-54430004</p>
                <p>Email: corporate.secretary@halodigital.co.id</p>
              </div>
            </div>

            {/* Social media and legal links */}
            <div className="flex flex-col gap-6 items-start md:items-end">
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="text-white/60 hover:text-purple-400 transition-colors duration-200 cursor-pointer"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
              <div className="flex flex-wrap gap-6 text-sm">
                {legalLinks.map((link) => (
                  <button
                    key={link.name}
                    className="text-white/60 hover:text-purple-400 transition-colors duration-200 text-sm cursor-pointer"
                    onClick={() => navigateTo(link.page)}
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 text-white/40 text-sm">
            © 2024 Halo Digital Nusantara. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}