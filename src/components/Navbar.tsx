import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#about' },
    { label: 'Capabilities', href: '#skills' },
    { label: 'Flagships', href: '#projects' },
    { label: 'Record', href: '#experience' },
    { label: 'Honors', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#0e0f12]/95 backdrop-blur-md border-b border-[#23252e] py-3.5'
          : 'bg-[#0e0f12] border-b border-[#1c1e26] py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Masthead Monogram / Name */}
          <a href="#" className="group flex items-baseline gap-2 shrink-0">
            <span className="font-editorial text-lg tracking-normal font-semibold text-zinc-100 group-hover:text-amber-400 transition-colors">
              John Emmanuel Sevilla
            </span>
            <span className="hidden xl:inline text-xs text-zinc-500 font-normal">
              — BS IT 4th Year · OJT Candidate
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-6 text-xs text-zinc-400">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-zinc-100 transition-colors tracking-wide py-1 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Direct Links */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-1.5 rounded border border-zinc-800 hover:border-zinc-700 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 transition-colors flex items-center justify-center cursor-pointer"
            >
              {theme === 'dark' ? (
                <Sun className="w-3.5 h-3.5 text-amber-400" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-zinc-500" />
              )}
            </button>

            <a
              href="https://github.com/ginmurin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-100 transition-colors px-2 py-1"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>

            <button
              onClick={onOpenContact}
              className="text-xs px-3 py-1.5 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 transition-colors whitespace-nowrap cursor-pointer"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu & Theme Controls */}
          <div className="flex md:hidden items-center gap-1.5">
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-1.5 rounded border border-zinc-800 text-zinc-400 hover:text-zinc-100 cursor-pointer"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-500" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-zinc-400 hover:text-zinc-100 cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#23252e] bg-[#0e0f12] px-4 pt-3 pb-5 space-y-3">
          <div className="text-[11px] uppercase tracking-wider text-zinc-500 pb-2 border-b border-zinc-900">
            Navigation Index
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-zinc-300 hover:text-zinc-100 py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-zinc-900 flex items-center justify-between">
            <a
              href="https://github.com/ginmurin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-400 flex items-center gap-1"
            >
              <span>github.com/ginmurin</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="text-xs px-3 py-1.5 rounded bg-zinc-800 text-zinc-200 border border-zinc-700"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
