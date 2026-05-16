import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useMotionPrefs } from '../hooks/useMotionPrefs';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const { reduceMotion } = useMotionPrefs();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onHashChange = () => setMobileMenuOpen(false);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    window.setTimeout(() => setMobileMenuOpen(false), 0);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const navEnter = reduceMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.2 } }
    : { initial: { y: -100 }, animate: { y: 0 }, transition: { type: 'tween', duration: 0.35 } };

  const menuMotion = reduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.15 },
      }
    : {
        initial: { opacity: 0, scale: 0.95, y: -12 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.98, y: -8 },
        transition: { duration: 0.2 },
      };

  return (
    <motion.div className="navbar-wrapper" {...navEnter}>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-backdrop"
            className="mobile-menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden
          />
        )}
      </AnimatePresence>

      <nav className={`floating-navbar ${isScrolled ? 'scrolled glass' : ''}`}>
        <a
          href="#home"
          className="nav-logo"
          onClick={() => {
            if (mobileMenuOpen) closeMobileMenu();
          }}
        >
          B<span className="text-gradient">M</span>
        </a>

        <div className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="pill-nav-link"
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <span className="relative z-10">{link.name}</span>
              {!reduceMotion && hoveredLink === link.name && (
                <motion.div
                  className="hover-pill"
                  layoutId="hoverPill"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                />
              )}
            </a>
          ))}
        </div>

        <div className="nav-cta">
          <a href="#contact" className="btn-small glass">
            Hire Me
          </a>
        </div>

        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div className="mobile-dropdown glass" {...menuMotion}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-pill-link"
                onClick={closeMobileMenu}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-small glass mobile-hire-btn"
              onClick={closeMobileMenu}
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
