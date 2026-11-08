'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calendar,
  Calculator,
  ShieldCheck,
  FileText,
  ChevronRight,
  ChevronUp,
  HeartHandshake,
  Building2,
  GraduationCap,
  MessageCircle,
  Sparkles,
  Clock,
  Compass
} from 'lucide-react';
import { PROFILE_DATA } from '@/data/profileData';

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/94718401434?text=${encodeURIComponent(
    'Hello Lt. Col. Lakshman Gunathilaka, I would like to inquire regarding a consultation / training session.'
  )}`;

  return (
    <footer className="bg-gradient-to-b from-[#050C16] via-[#07111E] to-[#040810] text-slate-400 border-t border-white/10 relative overflow-hidden">
      
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Pre-Footer Action Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-8 border-b border-white/10 relative z-10">
        <div className="bg-gradient-to-r from-slate-900/90 via-[#0B192C]/90 to-slate-900/90 border border-amber-400/30 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>National Impact & Clinical Excellence</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
              Ready to Empower Your Students or Corporate Leaders?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Arrange an in-person confidential consultation in Kandy or commission a customized, research-backed training retreat island-wide.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
            <Link
              href="/booking"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition shadow-md flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>Book Session</span>
            </Link>

            <Link
              href="/quotation"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-2.5 rounded-xl text-xs sm:text-sm border border-white/20 transition flex items-center gap-2 backdrop-blur-sm"
            >
              <Calculator className="w-4 h-4 text-amber-400" />
              <span>Instant Quotation</span>
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white transition flex items-center justify-center shadow-md"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Main 4-Column Comprehensive Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Identity & Credentials (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-amber-400/50 bg-slate-900 shadow-md flex-shrink-0">
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
                  <span className="font-serif font-bold text-white text-base tracking-tight group-hover:text-amber-400 transition">
                    LAKSHMAN GUNATHILAKA
                  </span>
                  <span className="bg-amber-500 text-slate-950 font-black text-[9px] px-1.5 py-0.2 rounded uppercase">
                    Lt. Col
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-medium">
                  M.Ed (Pdn) • Senior Psychological Counselor
                </p>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed">
              Bridging disciplined military precision with deep psychological empathy. Over 28 years of dedicated service shaping students, corporate executives, and armed forces personnel across Sri Lanka.
            </p>

            {/* Quick Contact Badge */}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`tel:${PROFILE_DATA.personal.phone}`}
                className="inline-flex items-center gap-2.5 text-xs text-slate-300 hover:text-amber-400 transition font-mono"
              >
                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-amber-400">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>Hotline: {PROFILE_DATA.personal.phone}</span>
              </a>

              <a
                href={`mailto:${PROFILE_DATA.personal.email}`}
                className="inline-flex items-center gap-2.5 text-xs text-slate-300 hover:text-amber-400 transition"
              >
                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-amber-400">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="truncate">{PROFILE_DATA.personal.email}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Specialized Tracks (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-l-2 border-amber-400 pl-2.5">
              Specialized Programs
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services" className="hover:text-amber-400 transition flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-amber-400 transition-colors" />
                  <span>Psychological & Trauma Therapy</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400 transition flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-amber-400 transition-colors" />
                  <span>Corporate Leadership & EQ (MAS, Hayleys)</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400 transition flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-amber-400 transition-colors" />
                  <span>School Prefects & Character Camps</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400 transition flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-amber-400 transition-colors" />
                  <span>Public Sector Capacity Building (SLEAS)</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400 transition flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-amber-400 transition-colors" />
                  <span>Adolescent Behavioral Modification</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400 transition flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-amber-400 transition-colors" />
                  <span>Military & Police Mental Resilience</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation & Downloads (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-l-2 border-amber-400 pl-2.5">
              Portals & Profile
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-amber-400 transition flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-amber-400 transition-colors" />
                  <span>About & Credentials</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-amber-400 transition flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-amber-400 transition-colors" />
                  <span>Impact Portfolio (350+)</span>
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-amber-400 transition flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-amber-400 transition-colors" />
                  <span>Interactive Calendar</span>
                </Link>
              </li>
              <li>
                <Link href="/quotation" className="hover:text-amber-400 transition flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-amber-400 transition-colors" />
                  <span>PDF Quotation Tool</span>
                </Link>
              </li>
              <li>
                <a 
                  href="/docs/profile.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-amber-400 hover:underline flex items-center gap-1.5 group font-semibold"
                >
                  <FileText className="w-3 h-3 text-amber-400" />
                  <span>Official Profile CV</span>
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-amber-400 transition-colors" />
                  <span>Contact Information</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Office & Locations (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-l-2 border-amber-400 pl-2.5">
              Official Practice & Office
            </h4>
            
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-white font-semibold block">Official Designation Office</span>
                  <span className="text-[11px] text-slate-400">{PROFILE_DATA.personal.officialAddress}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-white font-semibold block">Consultation Center</span>
                  <span className="text-[11px] text-slate-400">{PROFILE_DATA.personal.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-white font-semibold block">Consultation Hours</span>
                  <span className="text-[11px] text-slate-400">By Prior Appointment • Mon – Sat</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded-lg text-[10px] font-bold">
                <ShieldCheck className="w-3 h-3" />
                <span>100% Confidential Support Guaranteed</span>
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright & Back-to-Top Bar */}
      <div className="border-t border-white/10 bg-black/40 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="text-[11px]">
              © {new Date().getFullYear()} Lt. Col. M.D. Lakshman Gunathilaka. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Ministry of Education National Trainer</span>
            <span>•</span>
            <span>National Cadet Corps (NCC)</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-amber-400 transition flex items-center gap-1 cursor-pointer"
              title="Back to Top"
            >
              <span>Top</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>

    </footer>
  );
}
