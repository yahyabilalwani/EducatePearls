import { Mail, Phone, MapPin, Share2, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="container-max py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center shadow-lg mr-3">
                <span className="text-blue-900 font-bold text-lg">EP</span>
              </div>
              <h3 className="text-2xl font-bold">Educate Pearls</h3>
            </div>
            <p className="text-blue-200 mb-6 leading-relaxed text-sm">
              Empowering Lives • Enriching Society • Building a Better Tomorrow
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-white/10 hover:bg-blue-600 rounded-lg transition-all duration-300 transform hover:scale-110">
                <Share2 className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 bg-white/10 hover:bg-blue-600 rounded-lg transition-all duration-300 transform hover:scale-110">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 bg-white/10 hover:bg-blue-600 rounded-lg transition-all duration-300 transform hover:scale-110">
                <Heart className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative pb-3">
              Quick Links
              <span className="absolute bottom-0 left-0 w-8 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></span>
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Programs', href: '/programs' },
                { label: 'Donate', href: '/donate' },
                { label: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center group">
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative pb-3">
              Get in Touch
              <span className="absolute bottom-0 left-0 w-8 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></span>
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3 group">
                <Phone className="h-5 w-5 text-cyan-400 mt-1 group-hover:scale-110 transition-transform flex-shrink-0" />
                <div>
                  <p className="text-blue-200 text-xs uppercase tracking-widest">Phone</p>
                  <p className="text-white font-medium">+91-9906583999</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <Mail className="h-5 w-5 text-cyan-400 mt-1 group-hover:scale-110 transition-transform flex-shrink-0" />
                <div>
                  <p className="text-blue-200 text-xs uppercase tracking-widest">Email</p>
                  <p className="text-white font-medium break-all text-xs">info.educatepearls@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <MapPin className="h-5 w-5 text-cyan-400 mt-1 group-hover:scale-110 transition-transform flex-shrink-0" />
                <div>
                  <p className="text-blue-200 text-xs uppercase tracking-widest">Location</p>
                  <p className="text-white font-medium">Jammu & Kashmir, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative pb-3">
              Transparency
              <span className="absolute bottom-0 left-0 w-8 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></span>
            </h4>
            <div className="space-y-3 text-xs bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                <span className="text-blue-100"><strong>CIN:</strong> U88900JK2025NPL017922</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                <span className="text-blue-100"><strong>PAN:</strong> AAJCE1436G</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                <span className="text-blue-100"><strong>TAN:</strong> AMRE11647G</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-16 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-blue-200 text-sm text-center md:text-left">
              © {currentYear} Educate Pearls Association. Built with <span className="text-cyan-400">♥</span> for community impact.
            </p>
            <div className="flex gap-6 text-sm text-blue-200">
              <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-200">80G Declaration</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;