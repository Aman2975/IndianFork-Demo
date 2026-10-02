import { Link } from 'react-router-dom';
import { FiInstagram, FiFacebook, FiTwitter, FiHeart } from 'react-icons/fi';

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms & Conditions', to: '/terms' },
  { label: 'Refund Policy', to: '/refund-policy' },
  { label: 'Cancellation Policy', to: '/cancellation-policy' },
  { label: 'Cookie Policy', to: '/cookie-policy' },
  { label: 'Licensing', to: '/licensing' },
];

export default function Footer() {
  return (
    <footer className="bg-dark-gray text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Logo + Tagline */}
          <div>
            <Link to="/" className="inline-block">
              <span className="text-2xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                IndianFork Demo
              </span>
            </Link>
            <p className="text-gray-400 text-sm mt-3 leading-relaxed max-w-xs">
              Delicious food, delivered fast. We bring the finest cuisines from your favorite restaurants right to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <nav className="space-y-2.5">
              {[
                { label: 'Home', to: '/' },
                { label: 'Menu', to: '/' },
                { label: 'About', to: '/about' },
                { label: 'Contact', to: '/about#contact' },
              ].map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="block text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Legal</h3>
            <nav className="space-y-2.5">
              {legalLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="block text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social + Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Follow Us</h3>
            <div className="flex gap-3">
              {[
                { Icon: FiInstagram, label: 'Instagram', href: '#' },
                { Icon: FiFacebook, label: 'Facebook', href: '#' },
                { Icon: FiTwitter, label: 'Twitter', href: '#' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-400 mb-2">Contact</h4>
              <p className="text-sm text-gray-400">📞 +91 98765 43210</p>
              <p className="text-sm text-gray-400">📧 support@foodiehub.com</p>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            {legalLinks.map((link, i) => (
              <span key={link.label} className="flex items-center gap-4">
                <Link
                  to={link.to}
                  className="text-gray-500 hover:text-primary transition-colors text-xs"
                >
                  {link.label}
                </Link>
                {i < legalLinks.length - 1 && (
                  <span className="text-gray-700 text-xs">·</span>
                )}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-center sm:justify-between">
            <p className="text-gray-500 text-sm">
              © 2024 IndianFork Demo. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
