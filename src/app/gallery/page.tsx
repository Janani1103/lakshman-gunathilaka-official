'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  GraduationCap, 
  ShieldCheck, 
  HeartHandshake, 
  Calendar, 
  Users, 
  MapPin, 
  ArrowRight,
  Sparkles,
  Award,
  Briefcase,
  Layers,
  CheckCircle2,
  TrendingUp,
  Zap
} from 'lucide-react';
import { PROFILE_DATA } from '@/data/profileData';
import { ScrollReveal, StaggerContainer, StaggerItem, ScrollScale } from '@/components/ScrollAnimations';

interface GalleryEvent {
  id: string;
  title: string;
  category: 'corporate' | 'schools' | 'government' | 'humanitarian';
  organization: string;
  year?: string;
  location: string;
  participants: string;
  description: string;
  tag: string;
  impactChip: string;
}

const SECTOR_CONFIG: Record<string, {
  name: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  accentBar: string;
  icon: any;
  cardBorderHover: string;
  metricBadge: string;
  quoteTarget: string;
  iconBg: string;
  iconColor: string;
}> = {
  corporate: {
    name: 'Corporate & Industrial',
    badgeBg: 'bg-blue-50',
    badgeText: 'text-blue-900',
    badgeBorder: 'border-blue-200',
    accentBar: 'bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-500',
    icon: Briefcase,
    cardBorderHover: 'hover:border-blue-300 hover:shadow-blue-900/10',
    metricBadge: 'bg-blue-50 text-blue-900 border-blue-200/80',
    quoteTarget: 'corporate-training',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-700'
  },
  schools: {
    name: 'Premier National Schools',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-900',
    badgeBorder: 'border-emerald-200',
    accentBar: 'bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500',
    icon: GraduationCap,
    cardBorderHover: 'hover:border-emerald-300 hover:shadow-emerald-900/10',
    metricBadge: 'bg-emerald-50 text-emerald-900 border-emerald-200/80',
    quoteTarget: 'student-leadership',
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-700'
  },
  government: {
    name: 'Public Sector & Ministries',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-950',
    badgeBorder: 'border-amber-200',
    accentBar: 'bg-gradient-to-r from-slate-900 via-slate-800 to-amber-600',
    icon: Building2,
    cardBorderHover: 'hover:border-amber-300 hover:shadow-amber-900/10',
    metricBadge: 'bg-amber-50 text-amber-950 border-amber-200/80',
    quoteTarget: 'public-sector',
    iconBg: 'bg-amber-500/10',
    iconColor: 'text-amber-700'
  },
  humanitarian: {
    name: 'Humanitarian & Crisis Relief',
    badgeBg: 'bg-rose-50',
    badgeText: 'text-rose-900',
    badgeBorder: 'border-rose-200',
    accentBar: 'bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500',
    icon: HeartHandshake,
    cardBorderHover: 'hover:border-rose-300 hover:shadow-rose-900/10',
    metricBadge: 'bg-rose-50 text-rose-900 border-rose-200/80',
    quoteTarget: 'clinical-counseling',
    iconBg: 'bg-rose-500/10',
    iconColor: 'text-rose-700'
  }
};

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>('all');

  const galleryEvents: GalleryEvent[] = [
    {
      id: 'mas-shadowline',
      title: 'Management & Team Leaders Synergy Bootcamp',
      category: 'corporate',
      organization: 'MAS Holdings (Shadow Line & Contourline)',
      location: 'Katunayake & Biyagama',
      participants: '350+ Leaders',
      description: 'High-impact emotional intelligence and supervisory soft skills training for manufacturing supervisors and senior production managers.',
      tag: 'Corporate Excellence',
      impactChip: '350+ Leaders Empowered'
    },
    {
      id: 'national-audit-2025',
      title: 'Executive Staff Soft Skills & Performance Program',
      category: 'government',
      organization: 'National Audit Department',
      year: '2025',
      location: 'Colombo & Regional Auditoriums',
      participants: 'Auditing Officers & Executives',
      description: 'Strengthening behavioral communication, professional ethics, and organizational stress management across national audit teams.',
      tag: 'Public Administration',
      impactChip: 'State Governance & Behavioral Ethics'
    },
    {
      id: 'royal-college-prefects',
      title: 'Prefects Guild Leadership & Character Development',
      category: 'schools',
      organization: 'Royal College, Colombo',
      location: 'Colombo 07',
      participants: 'Senior Prefects & Stewards',
      description: 'Intensive protocol, crisis handling, peer mediation, and values-based leadership training for Sri Lanka’s premier student governing body.',
      tag: 'School Leaders',
      impactChip: 'Premier Student Governance Protocol'
    },
    {
      id: 'ananda-college-leadership',
      title: 'Student Leaders Personality & Public Speaking Retreat',
      category: 'schools',
      organization: 'Ananda College, Colombo',
      location: 'Colombo',
      participants: '200+ Student Leaders',
      description: 'Empowering young leaders with decisiveness, ethical decision-making, and high emotional resilience under pressure.',
      tag: 'School Leaders',
      impactChip: '200+ Student Leaders Fortified'
    },
    {
      id: 'dharmaraja-vidyartha',
      title: 'Leadership & Moral Resilience Camps',
      category: 'schools',
      organization: 'Dharmaraja College & Vidyartha College',
      location: 'Kandy',
      participants: 'Prefects & Cadet Officers',
      description: 'Combining local cultural ethos with rigorous team synchronization and psychological coping mechanisms.',
      tag: 'Central Province',
      impactChip: 'Cadet-Prefect Synergy Integration'
    },
    {
      id: 'sleas-induction',
      title: 'Sri Lanka Education Administrative Service Capacity Building',
      category: 'government',
      organization: 'Ministry of Education (SLEAS & Principal Service)',
      year: '2015 & 2019',
      location: 'Islandwide Centers',
      participants: 'Education Administrators & Principals',
      description: 'Master training for educational directors, developing administrative soft skills and empathetic school oversight.',
      tag: 'National Policy',
      impactChip: 'SLEAS Directors & Principals Mentored'
    },
    {
      id: 'graduate-inductions',
      title: 'Pre-Service Orientation & Mindset Transformation',
      category: 'government',
      organization: 'Government Sector Newly Inducted Graduates',
      year: '2006, 2009, 2015, 2019, 2022, 2023',
      location: 'National Youth Centers',
      participants: '15,000+ Young Professionals',
      description: 'Comprehensive psychological transition from university academic life to disciplined public service and community stewardship.',
      tag: 'Youth Induction',
      impactChip: '15,000+ Young Professionals Inducted'
    },
    {
      id: 'sanasa-insurance',
      title: 'Mindset Mastery & Strategic Customer Empathy',
      category: 'corporate',
      organization: 'Sanasa Insurance Head Office',
      location: 'Colombo',
      participants: 'Corporate Staff & Branch Managers',
      description: 'Transforming organizational culture through emotional mastery, active listening, and conflict resolution.',
      tag: 'Financial Services',
      impactChip: 'Corporate Culture & Empathy Shift'
    },
    {
      id: 'tea-rubber-plantation',
      title: 'Agricultural & Plantation Officer Empowerment',
      category: 'government',
      organization: 'Sri Lanka Tea Board, NIPM & Rubber Development Dept',
      location: 'Ratnapura, Monaragala, Agalawatta',
      participants: 'Field Officers & Planters',
      description: 'Ground-level human resource development, labor psychology, and stress reduction for plantation officers.',
      tag: 'Plantation Sector',
      impactChip: 'Plantation HR & Psychology Reform'
    },
    {
      id: 'tsunami-crisis-support',
      title: 'Post-Tsunami Child & Community Psychosocial Rehabilitation',
      category: 'humanitarian',
      organization: 'Schools in Ambalangoda Education Zone',
      year: '2004 - 2005',
      location: 'Galle Coastal Belt',
      participants: 'Principals, Teachers & Students',
      description: 'Pioneering GTZ-backed trauma counseling camp directly addressing severe grief, panic, and displacement following the disaster.',
      tag: 'Disaster Relief',
      impactChip: 'GTZ-Backed Coastal Trauma Relief'
    },
    {
      id: 'cancer-hospital-kandy',
      title: 'Palliative Psychological Care & Patient Support',
      category: 'humanitarian',
      organization: 'Cancer Home, General Hospital Kandy',
      location: 'Kandy',
      participants: 'Patients & Caregivers',
      description: 'Empathetic counseling sessions fostering emotional peace, coping fortitude, and familial resilience during critical treatments.',
      tag: 'Clinical Care',
      impactChip: 'Palliative Emotional Fortitude'
    },
    {
      id: 'ranaviru-authority',
      title: 'Veterans & Senior Citizens Mental Wellness Program',
      category: 'humanitarian',
      organization: 'Ranaviru Seva Authority',
      location: 'Colombo',
      participants: 'Armed Forces Veterans & Elders',
      description: 'Dedicated post-service psychological grounding, PTSD alleviation, and social reintegration counseling for disabled war heroes.',
      tag: 'Veteran Care',
      impactChip: 'Post-Combat PTSD Reintegration'
    },
    {
      id: 'world-vision-roomtoread',
      title: 'Training of Trainers (TOT) & Child Life Skills',
      category: 'humanitarian',
      organization: 'World Vision Sri Lanka & Room to Read',
      location: 'Islandwide Rural Communities',
      participants: 'Community Facilitators & Children',
      description: 'Capacity-building for frontline humanitarian staff in non-violent communication, child protection, and self-esteem building.',
      tag: 'Global NGOs',
      impactChip: 'Islandwide Facilitator Capacity'
    },
    {
      id: 'ncc-police-defense',
      title: 'Post-Conflict Trauma Counseling for Armed Forces & Police',
      category: 'humanitarian',
      organization: 'National Cadet Corps (NCC) & Police Department',
      year: '2009',
      location: 'Training Bases',
      participants: 'Military Officers & Police Cadets',
      description: 'Specialized psychological debriefing, decompression, and family reconciliation courses tailored for uniform services.',
      tag: 'Defense Health',
      impactChip: 'Uniformed Services Decompression'
    }
  ];

  const filteredEvents = filter === 'all'
    ? galleryEvents
    : galleryEvents.filter(e => e.category === filter);

  return (
    <div className="space-y-16 pb-20 overflow-hidden">
      
      {/* HEADER */}
      <section className="bg-gradient-to-r from-[#0B192C] via-[#1E3E62] to-[#0B192C] text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight leading-tight">
                A Legacy of National Impact Across Sectors
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Explore the milestone training programs, disaster relief missions, corporate retreats, and school leadership camps spearheaded by Lt. Col. M.D. Lakshman Gunathilaka.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* IMPACT METRICS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 sm:-mt-10 relative z-20">
        <ScrollReveal direction="up">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-xl shadow-slate-900/5">
            <div className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-amber-50/70 border border-amber-100">
              <div className="w-11 h-11 rounded-xl bg-amber-500/20 text-amber-700 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-serif font-black text-slate-900 leading-none">15,000+</p>
                <p className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mt-1">Graduates Inducted</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-blue-50/70 border border-blue-100">
              <div className="w-11 h-11 rounded-xl bg-blue-500/20 text-blue-700 flex items-center justify-center shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-serif font-black text-slate-900 leading-none">350+</p>
                <p className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mt-1">MAS & Corporate Leaders</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-100">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/20 text-emerald-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-serif font-black text-slate-900 leading-none">14+</p>
                <p className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mt-1">National Interventions</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-purple-50/70 border border-purple-100">
              <div className="w-11 h-11 rounded-xl bg-purple-500/20 text-purple-700 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-serif font-black text-slate-900 leading-none">30+ Years</p>
                <p className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mt-1">Public & Military Service</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* FILTER BUTTONS & EVENT GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Category Filters with Icons and dynamic counts */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex flex-wrap items-center gap-2.5 border-b border-slate-200 pb-5">
            {[
              { id: 'all', label: 'All Engagements', count: 14, icon: Layers },
              { id: 'corporate', label: 'Corporate & Industrial', count: 2, icon: Briefcase },
              { id: 'schools', label: 'Premier National Schools', count: 3, icon: GraduationCap },
              { id: 'government', label: 'Public Sector & Ministries', count: 4, icon: Building2 },
              { id: 'humanitarian', label: 'Humanitarian & Crisis Relief', count: 5, icon: HeartHandshake },
            ].map((btn) => {
              const IconComponent = btn.icon;
              const isActive = filter === btn.id;
              return (
                <button
                  key={btn.id}
                  onClick={() => setFilter(btn.id)}
                  className={`inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-2xl transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-950 text-white shadow-md shadow-blue-950/20 scale-[1.02]'
                      : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  <IconComponent className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                  <span>{btn.label}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
                    isActive ? 'bg-amber-400 text-slate-950' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {btn.count}
                  </span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Gallery Cards Grid with Stagger */}
        <StaggerContainer key={filter} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredEvents.map((evt) => {
            const theme = SECTOR_CONFIG[evt.category] || SECTOR_CONFIG.corporate;
            const SectorIcon = theme.icon;

            return (
              <StaggerItem key={evt.id}>
                <div className={`bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5 h-full relative ${theme.cardBorderHover}`}>
                  
                  {/* Sector Gradient Top Bar */}
                  <div className={`h-2 w-full ${theme.accentBar} group-hover:h-2.5 transition-all duration-300`} />

                  <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                    <div className="space-y-3">
                      {/* Top Meta Line: Icon + Sector Tag + Year */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <div className={`w-7 h-7 rounded-lg ${theme.iconBg} ${theme.iconColor} flex items-center justify-center shrink-0`}>
                            <SectorIcon className="w-3.5 h-3.5" />
                          </div>
                          <span className={`font-bold px-2.5 py-0.5 rounded-lg text-[10px] uppercase tracking-wider border ${theme.badgeBg} ${theme.badgeText} ${theme.badgeBorder}`}>
                            {evt.tag}
                          </span>
                        </div>
                        {evt.year && (
                          <span className="font-mono text-slate-600 font-bold text-xs px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200/80">
                            {evt.year}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="font-serif font-bold text-slate-900 text-lg group-hover:text-blue-950 transition-colors leading-snug">
                        {evt.title}
                      </h3>

                      {/* Organization with verification mark */}
                      <p className="text-xs font-bold text-blue-900/90 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{evt.organization}</span>
                      </p>

                      {/* Description */}
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {evt.description}
                      </p>

                      {/* Distinct Impact Metric Badge */}
                      <div className="pt-1">
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-[11px] font-bold border ${theme.metricBadge}`}>
                          <Sparkles className="w-3 h-3 text-amber-600 shrink-0" />
                          <span>{evt.impactChip}</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Meta Badges */}
                    <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span className="font-medium text-slate-600">{evt.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-blue-900 shrink-0" />
                        <span className="font-medium text-slate-600">{evt.participants}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="px-6 py-3.5 bg-slate-50/90 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[10px] text-slate-500 font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      Officer-Led Program
                    </span>
                    <Link
                      href={`/quotation?service=${theme.quoteTarget}&event=${encodeURIComponent(evt.title)}`}
                      className="font-bold text-blue-950 hover:text-amber-600 transition flex items-center gap-1 group/btn"
                    >
                      <span>Request Program</span>
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>

                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </section>

      {/* INSTITUTIONAL TESTIMONIAL / VALUES BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollScale>
          <div className="bg-[#0B192C] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6">
            <div className="max-w-2xl mx-auto space-y-3">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">
                Dedication to Service
              </span>
              <blockquote className="text-lg sm:text-xl font-serif italic text-slate-200">
                &ldquo;True psychological counseling and leadership training do not happen in passive lecture halls — they ignite when people are guided to confront maladaptive habits, rebuild internal resilience, and honor shared discipline.&rdquo;
              </blockquote>
              <p className="text-xs text-amber-300 font-bold uppercase tracking-wider">
                — Lt. Col. M.D. Lakshman Gunathilaka (M.Ed)
              </p>
            </div>

            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <Link
                href="/quotation"
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-6 py-3 rounded-xl transition text-xs shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Calculate Quote for Your School or Company
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl border border-white/20 transition text-xs transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Contact Consultation Office
              </Link>
            </div>
          </div>
        </ScrollScale>
      </section>

    </div>
  );
}
