'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Calendar, 
  Calculator, 
  Menu, 
  X, 
  ShieldCheck, 
  ChevronRight,
  ChevronDown,
  HeartHandshake,
  Building2,
  GraduationCap,
  Sparkles,
  MapPin,
  MessageCircle,
  Compass
} from 'lucide-react';
import { PROFILE_DATA } from '@/data/profileData';

const SERVICES_DROPDOWN = [
  {
    title: 'Psychological Counseling & Therapy',
    desc: 'Individual counseling, trauma, grief, marriage & psychological recovery',
    href: '/services#counseling',
    icon: HeartHandshake,
    tag: 'Confidential'
  },
  {
    title: 'Corporate Soft Skills & Leadership',
    desc: 'Workplace stress, emotional intelligence, leadership & productivity',
    href: '/services#corporate',
    icon: Building2,
    tag: 'Corporate'
  },
  {
    title: 'School & Youth Development',
    desc: 'Prefect training, exam stress, youth empowerment & student behavior',
    href: '/services#schools',
    icon: GraduationCap,
    tag: 'Education'
  },
  {
    title: 'Public Sector & Humanitarian',
    desc: 'Armed forces, police personnel, post-crisis care & community programs',
    href: '/services#humanitarian',
    icon: Compass,
    tag: 'National'
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Handle scroll state for dynamic elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const whatsappUrl = `https://wa.me/94718401434?text=${encodeURIComponent(
    'Hello Lt. Col. Lakshman Gunathilaka, I would like to inquire about counseling / training sessions.'
  )}`;

  return (
    <>
      {/* 1. TOP UTILITY BAR (Consistent Dark Theme Across All Pages) */}
      <div className="w-full text-xs z-50 bg-[#050C16] text-slate-300 border-b border-white/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between">
          
          {/* Left: Trust & Credentials summary */}
          <div className="flex items-center gap-2 sm:gap-4 overflow-hidden">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold flex-shrink-0">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Confidential Support</span>
            </span>
            <span className="hidden md:inline text-slate-600">•</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300 truncate">
              <Sparkles className="w-3 h-3 text-amber-400 flex-shrink-0" />
              <span>MOE National Trainer • 28+ Years of Service</span>
            </span>
            <span className="hidden lg:inline text-slate-600">•</span>
            <span className="hidden lg:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3 h-3 text-amber-400" />
              <span>Kandy & Island-wide</span>
            </span>
          </div>

          {/* Right: Direct Hotline & WhatsApp Shortcut */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            <a
              href={`tel:${PROFILE_DATA.personal.phone}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition font-medium"
              title="Call Direct Hotline"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{PROFILE_DATA.personal.phone}</span>
            </a>

            <span className="text-slate-700">|</span>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition font-medium"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-400 text-[#0B192C]" />
              <span className="hidden sm:inline">WhatsApp Chat</span>
            </a>
          </div>

        </div>
      </div>

      {/* 2. MAIN STICKY NAVIGATION (Consistent Executive Dark Theme Across All Pages) */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 bg-[#07111E]/95 backdrop-blur-md text-white ${
          isScrolled 
            ? 'shadow-2xl border-b border-amber-400/25 py-2.5' 
            : 'shadow-lg border-b border-white/10 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Logo & Identity */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-11 h-11 rounded-full overflow-hidden border border-amber-400/40 bg-slate-900 shadow-md flex-shrink-0 flex items-center justify-center">
              <img 
                src="/images/lakshman-avatar.png" 
                alt="Lt. Col. Lakshman Gunathilaka"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/lakshman-portrait.jpg';
                }}
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold tracking-tight text-base sm:text-lg text-white group-hover:text-amber-400 transition-colors leading-tight">
                  LAKSHMAN GUNATHILAKA
                </span>
                <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-[10px] px-1.5 py-0.5 rounded uppercase tracking-wider shadow-xs">
                  Lt. Col
                </span>
              </div>
              <p className="text-[11px] sm:text-xs font-medium truncate max-w-[210px] sm:max-w-none text-slate-300">
                M.Ed (Pdn) • Senior Psychological Counselor • National Trainer
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1 2xl:gap-1.5">
            {/* Home */}
            <Link
              href="/"
              className={`text-xs font-semibold px-3 py-2 rounded-lg transition relative ${
                pathname === '/'
                  ? 'text-amber-400 bg-white/10 font-bold' 
                  : 'text-slate-200 hover:text-white hover:bg-white/10'
              }`}
            >
              Home
            </Link>

            {/* About & Credentials */}
            <Link
              href="/about"
              className={`text-xs font-semibold px-3 py-2 rounded-lg transition ${
                pathname === '/about'
                  ? 'text-amber-400 bg-white/10 font-bold'
                  : 'text-slate-200 hover:text-white hover:bg-white/10'
              }`}
            >
              About & Credentials
            </Link>

            {/* Services with Dropdown */}
            <div 
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services"
                className={`text-xs font-semibold px-3 py-2 rounded-lg transition flex items-center gap-1 ${
                  pathname.startsWith('/services')
                    ? 'text-amber-400 bg-white/10 font-bold'
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>Services & Programs</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-amber-400' : ''}`} />
              </Link>

              {/* Mega Dropdown Card */}
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-slate-200/80 p-3 text-slate-800 z-50 overflow-hidden"
                  >
                    <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                        Areas of Expertise
                      </span>
                      <Link 
                        href="/services"
                        className="text-[11px] font-semibold text-amber-600 hover:text-amber-700 hover:underline"
                        onClick={() => setServicesOpen(false)}
                      >
                        All Programs →
                      </Link>
                    </div>

                    <div className="py-2 space-y-1">
                      {SERVICES_DROPDOWN.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.title}
                            href={item.href}
                            onClick={() => setServicesOpen(false)}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-900 transition leading-snug">
                                  {item.title}
                                </h4>
                                <span className="text-[9px] font-semibold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                                  {item.tag}
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-500 leading-tight mt-0.5 line-clamp-1">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    <div className="pt-2 border-t border-slate-100 bg-slate-50/70 -mx-3 -mb-3 p-3 flex items-center justify-between text-xs">
                      <span className="text-slate-500 text-[11px]">Personal & Institutional</span>
                      <Link
                        href="/quotation"
                        onClick={() => setServicesOpen(false)}
                        className="text-amber-600 font-bold hover:underline flex items-center gap-1 text-[11px]"
                      >
                        <Calculator className="w-3 h-3" />
                        <span>Calculate Cost</span>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Impact & Gallery */}
            <Link
              href="/gallery"
              className={`text-xs font-semibold px-3 py-2 rounded-lg transition ${
                pathname === '/gallery'
                  ? 'text-amber-400 bg-white/10 font-bold'
                  : 'text-slate-200 hover:text-white hover:bg-white/10'
              }`}
            >
              Impact & Gallery
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={`text-xs font-semibold px-3 py-2 rounded-lg transition ${
                pathname === '/contact'
                  ? 'text-amber-400 bg-white/10 font-bold'
                  : 'text-slate-200 hover:text-white hover:bg-white/10'
              }`}
            >
              Contact
            </Link>

            {/* CTAs Group */}
            <div className="flex items-center gap-2 ml-2 pl-2 border-l border-white/20">
              {/* Instant Quote (Secondary CTA) */}
              <Link
                href="/quotation"
                className="flex items-center gap-1.5 font-semibold text-xs px-3 py-2 rounded-lg transition border border-amber-400/40 bg-white/10 text-amber-300 hover:bg-white/20 shadow-xs"
              >
                <Calculator className="w-3.5 h-3.5 text-amber-400" />
                <span>Instant Quote</span>
              </Link>

              {/* Book Session (Primary CTA) */}
              <Link
                href="/booking"
                className="group relative flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <Calendar className="w-3.5 h-3.5 text-slate-950" />
                <span>Book Session</span>
                <span className="relative flex h-2 w-2 ml-0.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-50" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-950" />
                </span>
              </Link>
            </div>
          </nav>

          {/* Medium Screen (Tablet/Small Laptop) Quick Actions */}
          <div className="hidden lg:flex xl:hidden items-center gap-2">
            <Link
              href="/booking"
              className="flex items-center gap-1 bg-amber-500 text-slate-950 font-bold text-xs px-3.5 py-2 rounded-lg shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </Link>
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 rounded-lg border border-white/20 text-white hover:bg-white/10 transition"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-500 text-white shadow-sm flex items-center justify-center"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
            </a>

            <button
              onClick={() => setIsOpen(true)}
              className="p-2 rounded-lg transition border border-white/20 text-white hover:bg-white/10"
              aria-label="Open mobile navigation drawer"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </header>

      {/* 5. MODERN SLIDE-OVER MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
            />

            {/* Slide-over Panel from Right */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 240 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl flex flex-col z-50 overflow-hidden"
            >
              {/* Drawer Header */}
              <div className="p-4 bg-gradient-to-r from-[#07111E] to-[#0B192C] text-white flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-amber-400/50 bg-slate-900">
                    <img 
                      src="/images/lakshman-avatar.png" 
                      alt="Lakshman Gunathilaka"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/lakshman-portrait.jpg';
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-sm tracking-tight text-white leading-tight">
                      LAKSHMAN GUNATHILAKA
                    </h3>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="bg-amber-500 text-slate-950 text-[9px] font-black px-1 rounded uppercase">
                        Lt. Col
                      </span>
                      <span className="text-[10px] text-slate-300">
                        Senior Psychological Counselor
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 transition"
                  aria-label="Close drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                
                {/* Navigation Links */}
                <div className="space-y-1">
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition ${
                      pathname === '/' ? 'bg-blue-50 text-blue-900' : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>Home</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>

                  <Link
                    href="/about"
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition ${
                      pathname === '/about' ? 'bg-blue-50 text-blue-900' : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>About & Credentials</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>

                  {/* Expandable Services inside Mobile Drawer */}
                  <div className="rounded-xl overflow-hidden border border-slate-100 bg-slate-50/50">
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold text-slate-800"
                    >
                      <div className="flex items-center gap-2">
                        <span>Services & Programs</span>
                        <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-full font-bold">
                          4 Areas
                        </span>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {mobileServicesOpen && (
                      <div className="px-3 pb-3 pt-1 space-y-1 border-t border-slate-100 bg-white">
                        {SERVICES_DROPDOWN.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.title}
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-50 text-xs"
                            >
                              <Icon className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="font-semibold text-slate-900">{item.title}</div>
                                <div className="text-[10px] text-slate-500 line-clamp-1">{item.desc}</div>
                              </div>
                            </Link>
                          );
                        })}
                        <Link
                          href="/services"
                          onClick={() => setIsOpen(false)}
                          className="block text-center text-xs font-bold text-amber-600 pt-2 hover:underline"
                        >
                          View Full Services Overview →
                        </Link>
                      </div>
                    )}
                  </div>

                  <Link
                    href="/gallery"
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition ${
                      pathname === '/gallery' ? 'bg-blue-50 text-blue-900' : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>Impact & Gallery</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>

                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition ${
                      pathname === '/contact' ? 'bg-blue-50 text-blue-900' : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>Contact Information</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                </div>

                {/* Primary Action Buttons */}
                <div className="pt-2 space-y-2.5">
                  <Link
                    href="/booking"
                    onClick={() => setIsOpen(false)}
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md hover:from-amber-400 hover:to-amber-500 transition"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Private / Institutional Session</span>
                  </Link>

                  <Link
                    href="/quotation"
                    onClick={() => setIsOpen(false)}
                    className="w-full bg-slate-900 text-white font-semibold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-sm hover:bg-slate-800 transition"
                  >
                    <Calculator className="w-4 h-4 text-amber-400" />
                    <span>Generate Instant Quotation (PDF)</span>
                  </Link>
                </div>

                {/* Direct Contact Options */}
                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-1">
                    Direct Contact Channels
                  </div>

                  <a
                    href={`tel:${PROFILE_DATA.personal.phone}`}
                    className="w-full flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Direct Call Hotline</div>
                        <div className="text-xs text-slate-500">{PROFILE_DATA.personal.phone}</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-blue-700">Call Now</span>
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between p-3 rounded-xl border border-emerald-200 bg-emerald-50/50 hover:bg-emerald-50 transition"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 fill-white" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-emerald-950">WhatsApp Immediate Chat</div>
                        <div className="text-xs text-emerald-700">Fast confidential response</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-700">Chat</span>
                  </a>
                </div>

                {/* Trust Footer */}
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                  <div className="flex items-center justify-center gap-1 text-slate-700 font-bold text-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                    <span>Professional Ethics & Privacy Guaranteed</span>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1">
                    National Cadet Corps (NCC) • Ministry of Education In-Service Advisor
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
