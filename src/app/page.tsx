'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Award, 
  Calendar, 
  Calculator, 
  CheckCircle2, 
  ArrowRight, 
  HeartHandshake, 
  Users, 
  Building2, 
  GraduationCap, 
  Briefcase, 
  Phone, 
  FileText, 
  Sparkles,
  ChevronRight,
  ChevronLeft,
  BookOpen,
  Compass,
  Clock,
  HeartPulse,
  MessageCircle,
  MapPin,
  Star,
  Quote
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROFILE_DATA } from '@/data/profileData';
import { ScrollReveal, StaggerContainer, StaggerItem, ScrollScale } from '@/components/ScrollAnimations';
import AnimatedCounter from '@/components/AnimatedCounter';

const SERVICE_THEMES: Record<string, {
  icon: any;
  color: string;
  badgeBg: string;
  badgeText: string;
  borderAccent: string;
  bgGlow: string;
  statBadge: string;
  imagePreview: string;
}> = {
  'clinical-counseling': {
    icon: HeartPulse,
    color: 'text-rose-600 bg-rose-50 border-rose-200',
    badgeBg: 'bg-rose-100 text-rose-800',
    badgeText: '100% Confidential Clinical Support',
    borderAccent: 'border-l-rose-500',
    bgGlow: 'from-rose-500/10 via-amber-500/5 to-transparent',
    statBadge: 'GTZ Trauma Certified',
    imagePreview: '/images/action-counseling.jpg',
  },
  'corporate-training': {
    icon: Briefcase,
    color: 'text-blue-600 bg-blue-50 border-blue-200',
    badgeBg: 'bg-blue-100 text-blue-900',
    badgeText: 'Corporate Soft Skills & Leadership',
    borderAccent: 'border-l-blue-600',
    bgGlow: 'from-blue-600/10 via-amber-500/5 to-transparent',
    statBadge: '350+ Sessions (MAS, Hayleys)',
    imagePreview: '/images/action-corporate.jpg',
  },
  'youth-leadership': {
    icon: GraduationCap,
    color: 'text-amber-600 bg-amber-50 border-amber-200',
    badgeBg: 'bg-amber-100 text-amber-900',
    badgeText: 'Student Councils & Youth Development',
    borderAccent: 'border-l-amber-500',
    bgGlow: 'from-amber-500/10 via-blue-500/5 to-transparent',
    statBadge: '120+ National Schools (Royal, Ananda)',
    imagePreview: '/images/action-students.jpg',
  },
  'public-administration': {
    icon: ShieldCheck,
    color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
    badgeBg: 'bg-indigo-100 text-indigo-900',
    badgeText: 'State Sector, Defense & Educators',
    borderAccent: 'border-l-indigo-600',
    bgGlow: 'from-indigo-600/10 via-amber-500/5 to-transparent',
    statBadge: 'National Trainer (MOE)',
    imagePreview: '/images/hero-bg.jpg',
  },
};

const TESTIMONIAL_SECTORS = [
  {
    id: 'clinical-therapy',
    sectorTitle: 'Clinical Therapy',
    sinhalaTitle: 'මනෝවිද්‍යා සායනික උපදේශනය',
    image: '/images/action-counseling.jpg',
    tag: '1-on-1 Confidential Practice',
    badgeColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    icon: HeartPulse,
    quote:
      "Our teenage son was struggling with severe academic burnout, exam anxiety, and behavioral withdrawal. Lt. Col. Lakshman's compassionate, evidence-based counseling restored his self-belief and emotional balance. His 28 years of clinical depth and GTZ trauma certification make all the difference.",
    sinhalaQuote:
      "යොවුන් වියේ දැඩි විභාග ආතතිය සහ චර්යාත්මක පසුබැසීමෙන් පීඩා විඳි අපේ පුතුට ලැබුණු 100% රහස්‍ය, සුහදශීලී මනෝවිද්‍යාත්මක උපදේශනය ඔහුගේ ආත්ම විශ්වාසය සම්පූර්ණයෙන්ම යළි ගොඩනැඟුවා. පවුලක් ලෙස අපට මහත් ශක්තියක් වූ සේවාවක්.",
    author: 'Grateful Parent of Adolescent Client',
    role: 'Confidential Family Counseling (Kandy Clinic)',
    organization: 'Private Practice Consultation',
    location: 'Kandy Suite & Online',
    rating: 5,
    metrics: '100% Confidential • GTZ Certified',
    statPill: 'GTZ Trauma Certified'
  },
  {
    id: 'corporate-sector',
    sectorTitle: 'Corporate Sector',
    sinhalaTitle: 'ආයතනික නායකත්ව හා මෘදු කුසලතා',
    image: '/images/action-corporate.jpg',
    tag: 'Executive & Management Tracks',
    badgeColor: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    icon: Briefcase,
    quote:
      "Lt. Col. Lakshman's leadership and emotional intelligence program transformed how our executive leaders and production supervisors resolve conflict under high pressure. The seamless fusion of disciplined military command psychology with modern corporate empathy created an immediate, measurable lift in shop-floor morale and retention.",
    sinhalaQuote:
      "කළමනාකාරීත්වය හා කාර්මික අංශ කණ්ඩායම් නායකයින් ඉලක්ක කරගත් නායකත්ව හා මෘදු කුසලතා වැඩසටහන තුළින් කාර්ය මණ්ඩලයේ මානසික පීඩනය කළමනාකරණය හා අන්තර් සබඳතා සුවිශේෂී ලෙස වර්ධනය වූ අතර එය ආයතනයේ කාර්යක්ෂමතාව ඉහළ නැංවීමට ඍජුවම ඉවහල් විය.",
    author: 'Senior General Manager – People & Culture',
    role: 'Apparel Manufacturing Division',
    organization: 'MAS Holdings (Shadowline & Contourline Clusters)',
    location: 'Biyagama & Kandy Facilities',
    rating: 5,
    metrics: '350+ Corporate Workshops Delivered',
    statPill: 'Verified Corporate Partner'
  },
  {
    id: 'school-leaders',
    sectorTitle: 'School Leaders',
    sinhalaTitle: 'පාසල් ශිෂ්‍ය නායක හා යොවුන් සංවර්ධන',
    image: '/images/action-students.jpg',
    tag: 'Prefects Guild & Student Development',
    badgeColor: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
    icon: GraduationCap,
    quote:
      "Lt. Col. Gunathilaka's residential prefects leadership retreats are the definitive benchmark for school character development in Sri Lanka. Our student prefects returned with unshakeable discipline, emotional maturity, peer mediation acumen, and high ethical standards that set the tone for the entire college.",
    sinhalaQuote:
      "ශිෂ්‍ය නායක මණ්ඩලයේ විනය, නායකත්ව ගුණාංග, චරිත ශක්තිය හා ක්ෂණික තීරණ ගැනීමේ හැකියාව ඉහළ නැංවීමට මනෝවිද්‍යාත්මක පදනමකින් මෙහෙයවූ සුවිශේෂී වැඩසටහනක්. දරුවන් තුළ ඇති වූ ධනාත්මක පරිවර්තනය විදුහලට මහත් ආඩම්බරයක්.",
    author: 'Senior Master of Prefects & Vice Principal',
    role: "Prefects' Guild Executive Committee",
    organization: 'Premier National College (Royal / Dharmaraja Network)',
    location: 'Colombo & Kandy Districts',
    rating: 5,
    metrics: '120+ National Schools & Colleges',
    statPill: 'National School Endorsement'
  },
  {
    id: 'national-trainer',
    sectorTitle: 'National Trainer',
    sinhalaTitle: 'රාජ්‍ය පරිපාලන හා ගුරු අධ්‍යාපන',
    image: '/images/action-consultation-main.jpg',
    tag: 'Public Sector & State Defense',
    badgeColor: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30',
    icon: Building2,
    quote:
      "Having co-authored the National Soft Skills Manual for the Ministry of Education and trained officers at the National Audit Department and Armed Forces, Lt. Col. Lakshman's sessions set the golden standard for public sector ethics, institutional emotional health, and decisive administration.",
    sinhalaQuote:
      "අධ්‍යාපන අමාත්‍යාංශයේ ජාතික මෘදු කුසලතා අත්පොත සම්පාදනය කරමින් සහ රාජ්‍ය විගණන නිලධාරීන් හා ත්‍රිවිධ හමුදා නිලධාරීන් වෙනුවෙන් මෙහෙයවන ලද වෘත්තීය ආචාරධර්ම හා කාර්ය සාධන වැඩසටහන් රාජ්‍ය අංශයේ නිපුණතා සංවර්ධනයට අමිල මෙහෙවරකි.",
    author: 'Director of Human Resources & Institutional Development',
    role: 'Executive Capacity Building & Governance',
    organization: 'National Audit Department & Ministry of Education',
    location: 'Colombo Headquarters & Island-wide',
    rating: 5,
    metrics: '75,000+ Officers & Trainees Mentored',
    statPill: 'State Service Commendation'
  }
];

export default function HomePage() {
  const [activeServiceId, setActiveServiceId] = useState<string>(PROFILE_DATA.services[0].id);
  const [actionTab, setActionTab] = useState<'booking' | 'quotation'>('booking');
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState<number>(1);

  const activeService = PROFILE_DATA.services.find(s => s.id === activeServiceId) || PROFILE_DATA.services[0];
  const activeTheme = SERVICE_THEMES[activeService.id] || SERVICE_THEMES['clinical-counseling'];
  const ActiveIcon = activeTheme.icon;
  return (
    <div className="space-y-16 sm:space-y-24 overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative bg-[#07111E] text-white pt-12 pb-20 sm:pb-28 overflow-hidden">
        {/* Background Image with Dark Professional Atmosphere */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35 mix-blend-luminosity pointer-events-none"
          style={{ backgroundImage: `url('/images/hero-bg.jpg')` }}
        />
        {/* Atmospheric Gradient Vignette Overlay for maximum text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111E] via-[#0B192C]/90 to-[#0B192C]/75 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-30" />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -right-32 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" 
        />
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 7 Cols: Text & Titles */}
            <div className="lg:col-span-7 space-y-6">

              {/* Military Rank & Designation Badge */}
              <ScrollReveal direction="up" delay={0.1}>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/15 via-amber-400/10 to-transparent border border-amber-400/30 rounded-full px-4 py-1.5 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-bold">
                    O/3901 Lieutenant Colonel (NCC / SLAVF)
                  </span>
                  <span className="hidden sm:inline text-white/30">•</span>
                  <span className="hidden sm:inline text-slate-300 text-xs font-medium">
                    National Trainer (MOE)
                  </span>
                </div>
              </ScrollReveal>

              {/* Main Heading */}
              <ScrollReveal direction="up" delay={0.2}>
                <div className="space-y-2">
                  <h1 className="text-4xl sm:text-5xl xl:text-6xl font-serif font-black tracking-tight leading-[1.12]">
                    M.D. LAKSHMAN <br className="hidden sm:inline" />
                    <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 bg-clip-text text-transparent">
                      GUNATHILAKA
                    </span>
                  </h1>
                  <p className="text-xs sm:text-sm font-semibold tracking-wider text-slate-300 pt-1 flex flex-wrap items-center gap-1.5">
                    <span className="bg-white/10 px-2 py-0.5 rounded text-amber-200">M.Ed (Peradeniya)</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded text-amber-200">PGDC (Colombo)</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded text-amber-200">PGDE</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded text-amber-200">B.A.</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded text-amber-200">Dip in Psychology</span>
                  </p>
                </div>
              </ScrollReveal>

              {/* Sinhala Tagline Banner */}
              <ScrollReveal direction="up" delay={0.3}>
                <div className="bg-gradient-to-r from-white/10 to-white/5 border-l-4 border-amber-400 border-y border-r border-white/10 rounded-xl p-4 backdrop-blur-md shadow-lg">
                  <p className="text-amber-300 font-bold text-sm sm:text-base leading-relaxed">
                    {PROFILE_DATA.personal.sinhalaProfile.title}
                  </p>
                  <p className="text-slate-300 text-xs sm:text-sm mt-0.5 font-medium">
                    {PROFILE_DATA.personal.sinhalaProfile.subtitle}
                  </p>
                </div>
              </ScrollReveal>

              {/* Brief Intro */}
              <ScrollReveal direction="up" delay={0.4}>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                  Bridging disciplined military precision with deep psychological empathy. Over 28 years of empowering thousands of professionals, corporate executives, armed forces personnel, and students through transformative soft skills, leadership training, trauma counseling, and adolescent behavioral therapy.
                </p>
              </ScrollReveal>

              {/* Primary Action Buttons */}
              <ScrollReveal direction="up" delay={0.5}>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    href="/booking"
                    className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-amber-500/25 transition flex items-center gap-2 text-xs sm:text-sm transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Calendar className="w-4 h-4 text-slate-950" />
                    <span>Book a Session / Workshop</span>
                  </Link>

                  <Link
                    href="/quotation"
                    className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl border border-white/20 backdrop-blur-sm transition flex items-center gap-2 text-xs sm:text-sm transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Calculator className="w-4 h-4 text-amber-400" />
                    <span>Instant Cost Quotation</span>
                  </Link>

                  <a
                    href="/docs/profile.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-white px-3 py-3 text-xs sm:text-sm font-medium flex items-center gap-1.5 transition hover:underline"
                  >
                    <FileText className="w-4 h-4 text-amber-400" />
                    <span>Official Profile CV</span>
                  </a>
                </div>
              </ScrollReveal>

              {/* Verified Points */}
              <ScrollReveal direction="up" delay={0.6}>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>National Trainer (MOE)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>GTZ Trauma Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>SLIPC Ex-Co Member</span>
                  </div>
                </div>
              </ScrollReveal>

            </div>

            {/* Right 5 Cols: Majestic Grand Cutout with 3D Angled Floating Action Cards (Idea 3) */}
            <div className="lg:col-span-5 flex justify-center items-end relative pt-8 lg:pt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[520px] flex flex-col items-center"
              >
                {/* 1. Behind-the-person Golden Radial Aura & Ambient Glow */}
                <div className="absolute top-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tr from-amber-500/30 via-amber-400/15 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
                <div className="absolute top-1/3 w-64 h-64 sm:w-80 sm:h-80 border border-amber-400/20 rounded-full pointer-events-none animate-pulse z-0" />

                {/* 2. 3D ANGLED FLOATING ACTION CARD 1: School Leadership Camp (Top Left) */}
                <motion.div
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-6 -left-4 sm:-left-10 lg:-left-14 z-10 w-44 sm:w-52 -rotate-6 hover:rotate-0 hover:scale-110 hover:z-40 transition-all duration-300 group cursor-pointer"
                >
                  <div className="bg-slate-900/95 backdrop-blur-md border border-amber-400/30 rounded-2xl p-2 shadow-2xl shadow-black/80">
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
                      <img 
                        src="/images/action-students.jpg" 
                        alt="School Leadership Workshop"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-1.5 left-1.5 bg-amber-500 text-slate-950 font-black text-[8px] uppercase tracking-wider px-1.5 py-0.5 rounded shadow">
                        Schools (120+)
                      </span>
                    </div>
                    <div className="pt-2 px-1 pb-0.5 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 truncate">
                        <GraduationCap className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                        <span className="text-[11px] font-bold text-white truncate">Prefects Leadership Camp</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* 3. 3D ANGLED FLOATING ACTION CARD 2: Corporate Executive Training (Middle/Top Right) */}
                <motion.div
                  animate={{ y: [6, -6, 6] }}
                  transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute top-20 -right-4 sm:-right-10 lg:-right-14 z-10 w-44 sm:w-52 rotate-6 hover:rotate-0 hover:scale-110 hover:z-40 transition-all duration-300 group cursor-pointer"
                >
                  <div className="bg-slate-900/95 backdrop-blur-md border border-blue-400/35 rounded-2xl p-2 shadow-2xl shadow-black/80">
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
                      <img 
                        src="/images/action-corporate.jpg" 
                        alt="Corporate Executive Training"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-1.5 left-1.5 bg-blue-600 text-white font-bold text-[8px] uppercase tracking-wider px-1.5 py-0.5 rounded shadow">
                        Corporate (350+)
                      </span>
                    </div>
                    <div className="pt-2 px-1 pb-0.5 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 truncate">
                        <Building2 className="w-3.5 h-3.5 text-amber-300 flex-shrink-0" />
                        <span className="text-[11px] font-bold text-white truncate">Executive Soft Skills (MAS)</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* 4. 3D ANGLED FLOATING ACTION CARD 3: Clinical Psychological Counseling (Bottom Left) */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                  className="absolute bottom-24 -left-3 sm:-left-8 lg:-left-12 z-10 w-44 sm:w-52 -rotate-3 hover:rotate-0 hover:scale-110 hover:z-40 transition-all duration-300 group cursor-pointer"
                >
                  <div className="bg-slate-900/95 backdrop-blur-md border border-emerald-400/35 rounded-2xl p-2 shadow-2xl shadow-black/80">
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
                      <img 
                        src="/images/action-counseling.jpg" 
                        alt="Psychological Counseling Consultation"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-1.5 left-1.5 bg-emerald-500 text-white font-bold text-[8px] uppercase tracking-wider px-1.5 py-0.5 rounded shadow">
                        Clinical Care
                      </span>
                    </div>
                    <div className="pt-2 px-1 pb-0.5 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 truncate">
                        <HeartHandshake className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span className="text-[11px] font-bold text-white truncate">Confidential Therapy</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* 5. Person Cutout - Stands in Front (z-20) */}
                <div className="relative w-full h-[460px] sm:h-[540px] lg:h-[600px] flex items-end justify-center z-20 pointer-events-none">
                  <img 
                    src="/images/Lakshman-nobg.png" 
                    alt="Lt. Col. M.D. Lakshman Gunathilaka"
                    className="w-full h-full object-contain object-bottom drop-shadow-[0_25px_40px_rgba(0,0,0,0.95)] pointer-events-auto"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/Laxman.png';
                    }}
                  />
                  {/* Natural ground shadow */}
                  <div className="absolute -bottom-2 inset-x-6 h-6 bg-black/80 rounded-full blur-xl pointer-events-none" />
                </div>

                {/* 6. Officer Bio Executive Plaque beneath - Expanded Length & Single-Line Phone */}
                <div className="w-full sm:w-[112%] lg:w-[118%] bg-slate-900/95 backdrop-blur-md rounded-2xl p-4 sm:p-4.5 border border-slate-700/80 shadow-2xl -mt-4 relative z-30 text-left">
                  <div className="flex items-center justify-between gap-3 sm:gap-4">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-amber-400 text-[10px] font-bold uppercase tracking-wider">
                          Lead Consultant & National Trainer
                        </span>
                        <span className="bg-amber-500 text-slate-950 font-black text-[9px] px-1 py-0.2 rounded flex-shrink-0">
                          O/3901
                        </span>
                      </div>
                      <h3 className="font-serif font-bold text-white text-sm sm:text-base truncate">
                        Lt. Col. M.D. Lakshman Gunathilaka
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-300 truncate">
                        In-Service Advisor in Psychosocial Counseling (MOE) • 28+ Years
                      </p>
                    </div>

                    <a
                      href={`tel:${PROFILE_DATA.personal.phone}`}
                      className="flex items-center gap-2 bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-transparent hover:from-amber-500/30 text-amber-300 border border-amber-400/40 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold transition flex-shrink-0 whitespace-nowrap shadow-sm group"
                      title="Direct Call Hotline"
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="tracking-wide">{PROFILE_DATA.personal.phone}</span>
                    </a>
                  </div>
                </div>

              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* STATS BANNER WITH COUNTING ANIMATIONS & LUXURY TRUST PODS (Idea 1) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-10 sm:-mt-14 relative z-20">
        <ScrollScale>
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/80 p-6 sm:p-8 backdrop-blur-md">
            
            {/* 4 Luxury Stat Pods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  ...PROFILE_DATA.stats[0],
                  icon: Award,
                  iconColor: 'text-amber-600 bg-amber-500/10 border-amber-500/25',
                  badge: 'Since 1996',
                },
                {
                  ...PROFILE_DATA.stats[1],
                  icon: Users,
                  iconColor: 'text-blue-600 bg-blue-600/10 border-blue-600/25',
                  badge: 'Island-wide',
                },
                {
                  ...PROFILE_DATA.stats[2],
                  icon: Building2,
                  iconColor: 'text-emerald-600 bg-emerald-600/10 border-emerald-600/25',
                  badge: 'State & Corporate',
                },
                {
                  ...PROFILE_DATA.stats[3],
                  icon: GraduationCap,
                  iconColor: 'text-indigo-600 bg-indigo-600/10 border-indigo-600/25',
                  badge: 'Premier Guilds',
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={idx} 
                    className="group relative p-4 rounded-2xl hover:bg-slate-50/90 transition-all duration-300 border-r last:border-r-0 border-slate-100 hover:shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center border shadow-xs group-hover:scale-110 transition-transform ${item.iconColor}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-full group-hover:bg-amber-100 group-hover:text-amber-900 transition-colors">
                        {item.badge}
                      </span>
                    </div>

                    <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-slate-900 group-hover:text-blue-950 transition-colors flex items-center">
                      <AnimatedCounter 
                        to={item.targetNumber || parseInt(item.value)} 
                        suffix={item.suffixPlus || "+"} 
                        duration={2.2}
                      />
                    </div>

                    <p className="text-xs sm:text-sm font-bold text-slate-800 mt-1 leading-snug">
                      {item.label}
                    </p>

                    <span className="text-[11px] text-amber-600 font-bold uppercase tracking-wider block mt-1">
                      {item.suffix}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Client Trust Ribbon */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Trusted by Sri Lanka&apos;s Premier Institutions:</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-slate-700">
                {['MAS Holdings', 'Hayleys Group', 'Royal College', 'Ananda College', 'National Audit Dept', 'Ministry of Education'].map((client) => (
                  <span 
                    key={client} 
                    className="bg-slate-50 hover:bg-slate-100 border border-slate-200/90 px-3 py-1 rounded-lg text-slate-700 hover:text-blue-900 transition-colors shadow-2xs"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </ScrollScale>
      </section>

      {/* 4 CORE SERVICES PILLARS - INTERACTIVE SPLIT-VIEW SHOWCASE (Idea 2) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-900 border border-blue-200/60 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Tailored Impact & Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              Specialized Interventions & Training Tracks
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Backed by proven clinical research, national curriculum development, and 28+ years of practical field experience.
            </p>
          </div>
        </ScrollReveal>

        {/* Split-View Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 4 Interactive Track Selectors (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-3">
            {PROFILE_DATA.services.map((service) => {
              const theme = SERVICE_THEMES[service.id] || SERVICE_THEMES['clinical-counseling'];
              const Icon = theme.icon;
              const isActive = activeServiceId === service.id;

              return (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 border flex items-start gap-4 relative group cursor-pointer ${
                    isActive
                      ? `bg-white shadow-xl ${theme.borderAccent} border-l-4 border-y-slate-200 border-r-slate-200 ring-2 ring-blue-900/5`
                      : 'bg-white/70 hover:bg-white border-slate-200/70 hover:border-slate-300 shadow-2xs hover:shadow-md'
                  }`}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 border transition-all duration-300 ${
                    isActive ? `${theme.color} shadow-sm scale-105` : 'bg-slate-100 text-slate-600 border-slate-200 group-hover:bg-slate-200'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                        isActive ? theme.badgeBg : 'bg-slate-100 text-slate-500'
                      }`}>
                        {theme.statBadge}
                      </span>
                      {isActive && (
                        <span className="flex h-2 w-2 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                        </span>
                      )}
                    </div>

                    <h3 className={`font-serif font-bold text-sm sm:text-base leading-snug transition-colors ${
                      isActive ? 'text-slate-900' : 'text-slate-700 group-hover:text-blue-900'
                    }`}>
                      {service.title}
                    </h3>

                    {service.sinhalaTitle && (
                      <p className="text-[11px] text-amber-700 font-medium mt-0.5 truncate font-sans">
                        {service.sinhalaTitle}
                      </p>
                    )}
                  </div>

                  <ChevronRight className={`w-4 h-4 mt-2 transition-transform ${
                    isActive ? 'text-amber-500 translate-x-0.5' : 'text-slate-400 group-hover:translate-x-0.5'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Rich Detail Card with AnimatePresence (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.28, ease: 'easeInOut' }}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl p-6 sm:p-8 relative overflow-hidden"
              >
                {/* Background Ambient Glow */}
                <div className={`absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl pointer-events-none bg-gradient-to-br ${activeTheme.bgGlow}`} />

                {/* Top Badge Strip */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100 relative z-10">
                  <div className="flex items-center gap-2">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${activeTheme.color}`}>
                      <ActiveIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Program Category
                      </span>
                      <span className="text-xs font-bold text-slate-800">
                        {activeTheme.badgeText}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-lg">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      <span>{activeService.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Main Content Info */}
                <div className="py-6 space-y-4 relative z-10">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-black text-slate-900 tracking-tight leading-tight">
                      {activeService.title}
                    </h3>
                    {activeService.sinhalaTitle && (
                      <p className="text-sm font-semibold text-amber-600 mt-1">
                        {activeService.sinhalaTitle}
                      </p>
                    )}
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {activeService.description}
                  </p>

                  {/* Target Audience Pill */}
                  <div className="flex items-start gap-2 bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-xs">
                    <Users className="w-4 h-4 text-blue-900 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-slate-800">Target Participants: </span>
                      <span className="text-slate-600">{activeService.targetAudience}</span>
                    </div>
                  </div>

                  {/* Core Curriculum & Modules (Features) */}
                  <div className="pt-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
                      Core Modules & Learning Outcomes:
                    </span>
                    <div className="space-y-2.5">
                      {activeService.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span className="leading-snug">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 relative z-10">
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/quotation?service=${activeService.id}`}
                      className="flex items-center gap-1.5 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 px-4 py-2.5 rounded-xl text-xs font-bold transition shadow-xs"
                    >
                      <Calculator className="w-4 h-4 text-amber-600" />
                      <span>Instant Cost Quotation</span>
                    </Link>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={`https://wa.me/94718401434?text=${encodeURIComponent(`Hello Lt. Col. Lakshman, I would like to inquire regarding ${activeService.title}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition flex items-center justify-center shadow-xs"
                      title="WhatsApp Inquiry"
                    >
                      <MessageCircle className="w-4 h-4 fill-emerald-600 text-white" />
                    </a>

                    <Link
                      href="/booking"
                      className="flex items-center gap-2 bg-gradient-to-r from-[#0B192C] to-blue-900 hover:from-blue-900 hover:to-blue-950 text-white font-bold px-5 py-2.5 rounded-xl text-xs shadow-md transition transform hover:-translate-y-0.5"
                    >
                      <Calendar className="w-4 h-4 text-amber-400" />
                      <span>Book Session / Camp</span>
                    </Link>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Bottom Explore Link */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-900 hover:text-amber-600 transition group"
            >
              <span>Explore All Specialized Modules, Duration Customizations & Academic Research</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* CLIENTS & INSTITUTIONAL TRUST MARQUEE (Idea 1 - Dual Infinite Auto-Scrolling) */}
      <section className="bg-gradient-to-b from-[#07111E] via-slate-950 to-[#07111E] text-white py-20 relative overflow-hidden">
        
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 border border-amber-400/30 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Verified Institutional Track Record</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                Trusted by Sri Lanka&apos;s Foremost Organizations
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
                Conducting high-impact soft skills bootcamps, executive leadership retreats, and clinical counseling across leading conglomerates, state ministries, armed forces, and premier national schools.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Marquee Container with Left & Right Gradient Vignette Fades */}
        <div className="relative w-full space-y-5 pause-hover overflow-hidden">
          {/* Left / Right Fade Gradients */}
          <div className="absolute inset-y-0 left-0 w-20 sm:w-44 bg-gradient-to-r from-[#07111E] via-[#07111E]/90 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 sm:w-44 bg-gradient-to-l from-[#07111E] via-[#07111E]/90 to-transparent z-20 pointer-events-none" />

          {/* Row 1: Corporate Titans, Defense & Public Sector (Slides Left) */}
          <div className="flex animate-marquee-left gap-4">
            {[
              ...PROFILE_DATA.clients.filter(c => c.category === 'Corporate' || c.category === 'Defense & Police' || c.category === 'Public Sector'),
              ...PROFILE_DATA.clients.filter(c => c.category === 'Corporate' || c.category === 'Defense & Police' || c.category === 'Public Sector')
            ].map((client, idx) => {
              const isCorporate = client.category === 'Corporate';
              const isDefense = client.category === 'Defense & Police';
              const Icon = isCorporate ? Building2 : isDefense ? ShieldCheck : Award;
              const accentColor = isCorporate 
                ? 'text-blue-400 bg-blue-500/15 border-blue-400/30' 
                : isDefense 
                  ? 'text-emerald-400 bg-emerald-500/15 border-emerald-400/30' 
                  : 'text-amber-400 bg-amber-500/15 border-amber-400/30';

              return (
                <div
                  key={`r1-${idx}`}
                  className="w-72 sm:w-80 flex-shrink-0 bg-slate-900/85 hover:bg-slate-900 border border-white/10 hover:border-amber-400/40 rounded-2xl p-4 transition-all duration-300 shadow-xl flex items-start gap-3.5 group cursor-pointer"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border ${accentColor} group-hover:scale-105 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-amber-400/90 block mb-0.5">
                      {client.category}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300 transition-colors truncate">
                      {client.name}
                    </h4>
                    {client.note && (
                      <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                        {client.note}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Row 2: Premier Colleges, Education Services & NGOs (Slides Right) */}
          <div className="flex animate-marquee-right gap-4">
            {[
              ...PROFILE_DATA.clients.filter(c => c.category === 'Schools' || c.category === 'NGO & International'),
              ...PROFILE_DATA.clients.filter(c => c.category === 'Schools' || c.category === 'NGO & International')
            ].map((client, idx) => {
              const isSchool = client.category === 'Schools';
              const Icon = isSchool ? GraduationCap : HeartHandshake;
              const accentColor = isSchool 
                ? 'text-amber-400 bg-amber-500/15 border-amber-400/30' 
                : 'text-rose-400 bg-rose-500/15 border-rose-400/30';

              return (
                <div
                  key={`r2-${idx}`}
                  className="w-72 sm:w-80 flex-shrink-0 bg-slate-900/85 hover:bg-slate-900 border border-white/10 hover:border-blue-400/40 rounded-2xl p-4 transition-all duration-300 shadow-xl flex items-start gap-3.5 group cursor-pointer"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border ${accentColor} group-hover:scale-105 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-blue-400/90 block mb-0.5">
                      {client.category}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-blue-300 transition-colors truncate">
                      {client.name}
                    </h4>
                    {client.note && (
                      <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                        {client.note}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Link */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mt-12">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-400 hover:text-amber-300 bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-2.5 rounded-full transition group"
              >
                <span>View Full Institutional Portfolio & Gallery of 350+ Engagements</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* DUAL RESEARCH SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollScale>
          <div className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold">
                  Groundbreaking Studies in Teenage Addiction & Military Mental Health
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Lt. Col. Gunathilaka’s academic dissertations at the University of Peradeniya and University of Colombo form the foundation of his empirical counseling interventions today:
                </p>

                <div className="space-y-3 pt-2">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/15">
                    <span className="text-amber-300 text-[11px] font-bold uppercase tracking-wider block">
                      M.Ed Research (Peradeniya - 2010):
                    </span>
                    <p className="text-xs sm:text-sm font-serif italic text-white mt-1">
                      &ldquo;An action Research to Modify the Behavior of teenagers with Maladjusted Behavior including Drug addiction through Psychological Counseling.&rdquo;
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/15">
                    <span className="text-amber-300 text-[11px] font-bold uppercase tracking-wider block">
                      PGDC Research (Colombo - 2008/2009):
                    </span>
                    <p className="text-xs sm:text-sm font-serif italic text-white mt-1">
                      &ldquo;A survey to Identify the counseling needs of armed Forces and Police Personnel in the Post Conflict Era.&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center space-y-4">
                <div className="w-14 h-14 bg-amber-400 text-slate-950 rounded-full flex items-center justify-center mx-auto shadow-lg font-bold">
                  <BookOpen className="w-7 h-7" />
                </div>
                <h3 className="font-serif font-bold text-lg text-white">
                  Need Customized Research-Backed Training?
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Every workshop or counseling framework is tailored specifically to your institution&apos;s unique challenges, culture, and demographics.
                </p>
                <div className="pt-2">
                  <Link
                    href="/quotation"
                    className="inline-block w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold py-3 px-4 rounded-xl transition text-xs shadow-md"
                  >
                    Generate Program Proposal & Quote
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </ScrollScale>
      </section>

      {/* HOW IT WORKS - 4-STEP CONNECTED HORIZONTAL STEPPER (Idea 1) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-900 border border-amber-200/80 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Simple 4-Step Process</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              How It Works
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              From choosing your specialized track to participating in an impactful session, our seamless process ensures complete privacy, convenience, and rapid confirmation.
            </p>
          </div>
        </ScrollReveal>

        {/* Stepper Cards Container with Connecting Line */}
        <div className="relative">
          {/* Subtle connecting line for desktop screens */}
          <div className="hidden lg:block absolute top-16 left-12 right-12 h-0.5 border-t-2 border-dashed border-slate-300/80 z-0 pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {[
              {
                step: '01',
                title: 'Choose a Service',
                sinhala: 'සේවාව තෝරන්න',
                desc: 'Select from 1-on-1 confidential counseling, corporate soft skills bootcamps, or school prefect leadership retreats.',
                icon: Sparkles,
                tag: 'Personal or Corporate',
                color: 'text-amber-500 bg-amber-50 border-amber-200',
                badgeColor: 'bg-amber-500 text-slate-950',
              },
              {
                step: '02',
                title: 'Select a Suitable Time',
                sinhala: 'දිනය හා වේලාව තෝරන්න',
                desc: 'Pick your preferred time slot via our live appointment scheduler or reserve custom on-site institutional dates.',
                icon: Calendar,
                tag: 'Live Real-Time Calendar',
                color: 'text-blue-600 bg-blue-50 border-blue-200',
                badgeColor: 'bg-blue-600 text-white',
              },
              {
                step: '03',
                title: 'Confirm Appointment',
                sinhala: 'ක්ෂණිකව තහවුරු කරගන්න',
                desc: 'Receive immediate scheduling confirmation with official reference details and privacy instructions via WhatsApp & Email.',
                icon: MessageCircle,
                tag: 'WhatsApp & Email Alert',
                color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
                badgeColor: 'bg-emerald-600 text-white',
              },
              {
                step: '04',
                title: 'Attend Your Session',
                sinhala: 'සැසියට සහභාගී වන්න',
                desc: 'Meet in person at our serene Kandy consultation suite, join online, or welcome the trainer on-site at your premises.',
                icon: MapPin,
                tag: 'Kandy Clinic or On-Site',
                color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
                badgeColor: 'bg-indigo-600 text-white',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div className="space-y-4">
                    {/* Top Row: Number Badge & Icon */}
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-xs group-hover:scale-110 transition-transform ${item.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`w-9 h-9 rounded-full flex items-center justify-center font-mono font-black text-xs shadow-md ${item.badgeColor}`}>
                        {item.step}
                      </span>
                    </div>

                    {/* Step Title & Description */}
                    <div>
                      <h3 className="text-lg font-serif font-bold text-slate-900 group-hover:text-blue-900 transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-[11px] font-semibold text-amber-700 mt-0.5">
                        {item.sinhala}
                      </p>
                      <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Tag */}
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="bg-slate-100 text-slate-700 font-bold px-2.5 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                    <span className="text-slate-400 font-mono text-[10px]">
                      Step {idx + 1} of 4
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - 4-SECTOR VERIFIED CLIENT FEEDBACK SHOWCASE (Idea 1 with Sector Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-900 border border-amber-200/80 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Real Impact & Verified Endorsements</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              Trusted Across Four Specialized Spheres
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Explore firsthand feedback from corporate leaders, national school authorities, government institutions, and private counseling clients across Sri Lanka.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Sector Cards Selector (Matching User Reference Layout) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {TESTIMONIAL_SECTORS.map((sector, idx) => {
            const isActive = activeTestimonialIndex === idx;
            return (
              <button
                key={sector.id}
                onClick={() => setActiveTestimonialIndex(idx)}
                className={`group relative text-left rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'border-2 border-amber-500 ring-4 ring-amber-400/25 shadow-xl shadow-amber-500/15 scale-[1.03] z-10'
                    : 'border border-slate-200/90 hover:border-slate-300 hover:shadow-lg hover:-translate-y-1 opacity-85 hover:opacity-100 bg-white'
                }`}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] bg-slate-900 overflow-hidden">
                  <img
                    src={sector.image}
                    alt={sector.sectorTitle}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/action-consultation-main.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

                  {/* Active Indicator Pulse */}
                  {isActive && (
                    <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 bg-amber-500 text-slate-950 text-[10px] font-mono font-black px-2 py-0.5 rounded-full shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-ping" />
                      <span>ACTIVE</span>
                    </div>
                  )}
                </div>

                {/* Bottom Label Plaque */}
                <div className="bg-[#07111E] py-2.5 px-3 text-center border-t border-white/10">
                  <span className={`block font-serif font-bold text-xs sm:text-sm tracking-wide transition-colors ${
                    isActive ? 'text-amber-400' : 'text-white group-hover:text-amber-300'
                  }`}>
                    {sector.sectorTitle}
                  </span>
                  <span className="block text-[10px] text-slate-400 truncate mt-0.5">
                    {sector.sinhalaTitle}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Testimonial Showcase Card */}
        {(() => {
          const current = TESTIMONIAL_SECTORS[activeTestimonialIndex];
          const SectorIcon = current.icon;
          return (
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-[#07111E] via-[#0B192C] to-[#0A1628] rounded-3xl p-6 sm:p-10 border border-slate-700/80 shadow-2xl relative overflow-hidden text-white"
              >
                {/* Background Ambient Glows & Watermark */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                <Quote className="absolute -bottom-8 -right-8 w-60 h-60 text-white/[0.03] pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  {/* Top Bar: Sector Tag, 5 Stars & Navigation Controls */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400 shadow-sm">
                        <SectorIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold block">
                          {current.tag}
                        </span>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <div className="flex items-center gap-0.5 text-amber-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                          <span className="text-xs font-mono font-bold text-slate-300 ml-1">
                            5.0 / 5.0 Rating
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={`text-[11px] font-bold px-3 py-1 rounded-full border backdrop-blur-md hidden sm:inline-block ${current.badgeColor}`}>
                        <ShieldCheck className="w-3 h-3 inline mr-1 -mt-0.5" />
                        {current.statPill}
                      </span>

                      {/* Sector Stepper Controls */}
                      <div className="flex items-center gap-1 bg-white/10 rounded-xl p-1 border border-white/10">
                        <button
                          onClick={() =>
                            setActiveTestimonialIndex(
                              (prev) => (prev - 1 + TESTIMONIAL_SECTORS.length) % TESTIMONIAL_SECTORS.length
                            )
                          }
                          aria-label="Previous Testimonial"
                          className="p-1.5 rounded-lg hover:bg-white/15 text-slate-300 hover:text-white transition cursor-pointer"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <span className="px-2 font-mono text-xs text-amber-300 font-bold">
                          {activeTestimonialIndex + 1} / {TESTIMONIAL_SECTORS.length}
                        </span>
                        <button
                          onClick={() =>
                            setActiveTestimonialIndex((prev) => (prev + 1) % TESTIMONIAL_SECTORS.length)
                          }
                          aria-label="Next Testimonial"
                          className="p-1.5 rounded-lg hover:bg-white/15 text-slate-300 hover:text-white transition cursor-pointer"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Quote in English */}
                  <div className="space-y-3">
                    <p className="text-base sm:text-lg lg:text-xl text-slate-100 font-serif leading-relaxed italic">
                      &ldquo;{current.quote}&rdquo;
                    </p>
                  </div>

                  {/* Sinhala Translation Container */}
                  <div className="bg-white/5 border-l-4 border-amber-400 border-y border-r border-white/10 rounded-xl p-4 sm:p-5 backdrop-blur-sm">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                      සිංහල පරිවර්තනය (Sinhala Translation):
                    </span>
                    <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed font-sans">
                      &ldquo;{current.sinhalaQuote}&rdquo;
                    </p>
                  </div>

                  {/* Author Profile & Credentials Bar */}
                  <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 font-black flex items-center justify-center font-mono text-sm shadow-lg flex-shrink-0">
                        {current.sectorTitle.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-white text-sm sm:text-base">
                          {current.author}
                        </h4>
                        <p className="text-xs text-amber-300 font-medium">
                          {current.organization}
                        </p>
                        <p className="text-[11px] text-slate-400">
                          {current.role} • {current.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Link
                        href={current.id === 'corporate-sector' || current.id === 'national-trainer' ? '/quotation' : '/booking'}
                        className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs py-2.5 px-4 rounded-xl transition flex items-center gap-2 shadow-md"
                      >
                        <span>Explore {current.sectorTitle}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          );
        })()}
      </section>

      {/* INTERACTIVE UNIFIED ACTION HUB WITH SUPPORTIVE IMAGE SHOWCASE (Idea 2) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <ScrollReveal direction="up">
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl p-6 sm:p-10 relative overflow-hidden">
            
            {/* Background Ambient Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              
              {/* Left Column (lg:col-span-7): Interactive Console Switcher */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Section Badge */}
                <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 border border-slate-200 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Immediate Action & Engagement</span>
                </div>

                {/* Dual-Tab Interactive Switcher */}
                <div className="bg-slate-100 p-1.5 rounded-2xl flex items-center gap-1.5 max-w-md border border-slate-200/80">
                  <button
                    onClick={() => setActionTab('booking')}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                      actionTab === 'booking'
                        ? 'bg-[#0B192C] text-white shadow-md'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                    }`}
                  >
                    <Calendar className="w-4 h-4 text-amber-400" />
                    <span>Book Consultation</span>
                  </button>

                  <button
                    onClick={() => setActionTab('quotation')}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                      actionTab === 'quotation'
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                    }`}
                  >
                    <Calculator className="w-4 h-4 text-slate-950" />
                    <span>Instant Quotation</span>
                  </button>
                </div>

                {/* Tab Dynamic Content */}
                <AnimatePresence mode="wait">
                  {actionTab === 'booking' ? (
                    <motion.div
                      key="booking-content"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-2">
                        <span className="flex h-2 w-2 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                          Accepting Bookings for 2026/2027 • Kandy & Island-wide
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 leading-tight">
                        Reserve a Confidential Consultation or Workshop
                      </h3>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        Access our live appointment scheduler to reserve an in-person clinical session in Kandy, arrange family counseling, or schedule on-site student and corporate workshops.
                      </p>

                      <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                        <li className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span>100% Confidential 1-on-1 Psychological & Trauma Consultations</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span>Prefects Guild & Student Leadership Retreats for Schools</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span>Instant scheduling confirmation & direct WhatsApp communication</span>
                        </li>
                      </ul>

                      <div className="pt-4 flex flex-wrap items-center gap-3">
                        <Link
                          href="/booking"
                          className="bg-[#0B192C] hover:bg-blue-900 text-white font-bold py-3.5 px-6 rounded-xl transition flex items-center gap-2 text-xs sm:text-sm shadow-md transform hover:-translate-y-0.5"
                        >
                          <Calendar className="w-4 h-4 text-amber-400" />
                          <span>Open Interactive Booking Calendar</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>

                        <a
                          href="https://wa.me/94718401434?text=Hello%20Lt.%20Col.%20Lakshman%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20consultation."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold py-3.5 px-4 rounded-xl transition flex items-center gap-2 text-xs sm:text-sm shadow-xs"
                        >
                          <MessageCircle className="w-4 h-4 fill-emerald-600 text-white" />
                          <span>Quick WhatsApp Chat</span>
                        </a>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="quotation-content"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-2">
                        <span className="flex h-2 w-2 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                        </span>
                        <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                          30-Second Instant Formal PDF Estimate
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 leading-tight">
                        Generate Automated Proposal & Budget Quotation
                      </h3>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        Need an immediate formal proposal for your HR committee, school board, or ministry tender? Compute accurate, transparent pricing in LKR and generate a formal PDF in seconds.
                      </p>

                      <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                        <li className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                          <span>Itemized transparent fee structure adjusted by location & participants</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                          <span>Official quotation reference number, validity date & curriculum summary</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                          <span>One-click PDF download, instant print, and WhatsApp direct export</span>
                        </li>
                      </ul>

                      <div className="pt-4 flex flex-wrap items-center gap-3">
                        <Link
                          href="/quotation"
                          className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold py-3.5 px-6 rounded-xl transition flex items-center gap-2 text-xs sm:text-sm shadow-md transform hover:-translate-y-0.5"
                        >
                          <Calculator className="w-4 h-4" />
                          <span>Launch Automated Quotation Generator</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>

                        <a
                          href="tel:0718401434"
                          className="border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold py-3.5 px-4 rounded-xl transition flex items-center gap-2 text-xs sm:text-sm"
                        >
                          <Phone className="w-4 h-4 text-amber-600" />
                          <span>Call 071-8401434</span>
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

              {/* Right Column (lg:col-span-5): Single High-Resolution Supportive Image Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/3] bg-slate-950 group">
                  <img 
                    src="/images/action-consultation-main.jpg" 
                    alt="Lt. Col. Lakshman Gunathilaka - Consultation & Advisory Session"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/action-counseling.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Floating Tag */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-slate-900/90 backdrop-blur-md text-amber-400 border border-amber-400/40 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl shadow-lg">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    <span>Confidential & Certified Practice</span>
                  </div>

                  {/* Bottom Info Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                      Lead Consultant & National Trainer
                    </span>
                    <h4 className="font-serif font-bold text-base sm:text-lg leading-tight text-white">
                      Lt. Col. M.D. Lakshman Gunathilaka
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      M.Ed (Pdn) • In-Service Advisor in Psychosocial Counseling • Available for Kandy Consultations & Island-wide Workshops.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
