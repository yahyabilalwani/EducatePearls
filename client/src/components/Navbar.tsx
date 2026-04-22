import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Programs', href: '/programs' },
    { label: 'Donate', href: '/donate' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-2xl border-b border-blue-100/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center group">
              <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <span className="text-white font-bold text-lg">EP</span>
              </div>
              <span className="ml-3 text-xl font-bold gradient-text hidden sm:inline-block">
                Educate Pearls
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2 rounded-lg transition-all duration-200 hover:bg-blue-50 relative group"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            <Link to="/donate" className="hidden md:inline-flex btn-primary text-sm px-6">
              Donate Now
            </Link>
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-blue-100/30 animate-fadeIn">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 font-medium rounded-lg transition-all duration-200 hover:bg-blue-50"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 py-3 border-t border-blue-100/30 mt-4">
              <Link to="/donate" className="btn-primary w-full text-center text-sm" onClick={toggleMenu}>
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;