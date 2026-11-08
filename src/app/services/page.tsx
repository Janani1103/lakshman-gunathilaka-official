'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  HeartPulse, 
  Briefcase, 
  GraduationCap, 
  Building2, 
  CheckCircle2, 
  Clock, 
  Users, 
  Calendar, 
  Calculator, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  BookOpen,
  MapPin,
  Award,
  Brain,
  Compass,
  Target,
  TrendingUp,
  Zap,
  ArrowUpRight,
  Activity
} from 'lucide-react';
import { PROFILE_DATA } from '@/data/profileData';
import { ScrollReveal, StaggerContainer, StaggerItem, ScrollScale } from '@/components/ScrollAnimations';

const SERVICE_METAS: Record<string, {
  image: string;
  tag: string;
  tagColor: string;
  badge: string;
  badgeBg: string;
  icon: any;
  accentBorder: string;
  locationOptions: string[];
  keyHighlight: string;
  stats: string;
}> = {
  'clinical-counseling': {
    image: '/images/service-counseling.jpg',
    tag: '1-on-1 Confidential Practice',
    tagColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    badge: '100% Confidential • GTZ Certified',
    badgeBg: 'bg-emerald-600 text-white',
    icon: HeartPulse,
    accentBorder: 'border-l-4 border-l-emerald-600',
    locationOptions: ['Kandy Consultation Suite', 'Secure Online Video Session'],
    keyHighlight: 'Adolescent Behavioral Modification, Exam Anxiety & Post-Trauma Recovery',
    stats: '28+ Years Clinical Depth'
  },
  'corporate-training': {
    image: '/images/service-corporate.jpg',
    tag: 'Executive Leadership & Soft Skills',
    tagColor: 'bg-blue-50 text-blue-800 border-blue-200',
    badge: 'MAS, Hayleys & Corporate Groups',
    badgeBg: 'bg-blue-600 text-white',
    icon: Briefcase,
    accentBorder: 'border-l-4 border-l-blue-600',
    locationOptions: ['On-Site at Client Premises (Island-wide)', 'Residential Leadership Retreat'],
    keyHighlight: 'Team Alignment, Supervisory Emotional Intelligence & Conflict Resolution',
    stats: '350+ Corporate Workshops'
  },
  'youth-leadership': {
    image: '/images/service-students.jpg',
    tag: 'Prefects Guild & Youth Development',
    tagColor: 'bg-amber-50 text-amber-900 border-amber-200',
    badge: '120+ Premier National Colleges',
    badgeBg: 'bg-amber-500 text-slate-950 font-black',
    icon: GraduationCap,
    accentBorder: 'border-l-4 border-l-amber-500',
    locationOptions: ['College Auditorium / Campus', 'Outbound Training Camp Facility'],
    keyHighlight: 'Character Conditioning, Crisis Handling & Peer Ethics Protocol',
    stats: '120+ National Schools'
  },
  'public-administration': {
    image: '/images/service-public-admin.jpg',
    tag: 'Public Sector & State Governance',
    tagColor: 'bg-indigo-50 text-indigo-800 border-indigo-200',
    badge: 'Ministry of Education & Audit Dept',
    badgeBg: 'bg-indigo-600 text-white',
    icon: Building2,
    accentBorder: 'border-l-4 border-l-indigo-600',
    locationOptions: ['Zonal / Ministry Auditorium', 'Custom Institutional Venue'],
    keyHighlight: 'SLEAS & Principals Soft Skills, Workplace Ethics & Child Safeguarding',
    stats: 'National Trainer (MOE) Syllabus'
  }
};

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredServices = activeTab === 'all' 
    ? PROFILE_DATA.services 
    : PROFILE_DATA.services.filter(s => s.category === activeTab);

  return (
    <div className="space-y-16 overflow-hidden">
      
      {/* HEADER */}
      <section className="bg-gradient-to-r from-[#0B192C] via-[#1E3E62] to-[#0B192C] text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight leading-tight">
                Evidence-Based Counseling & High-Impact Leadership Training
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Every workshop and psychological intervention is engineered around behavioral science, emotional intelligence, and rigorous leadership discipline.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FILTER TABS & SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Category Filter Pills */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
            {[
              { id: 'all', label: 'All Specializations' },
              { id: 'counseling', label: 'Psychological & Clinical Counseling' },
              { id: 'corporate', label: 'Corporate Leadership & Soft Skills' },
              { id: 'schools', label: 'School Prefects & Youth Camps' },
              { id: 'public_sector', label: 'Public Sector & SLEAS Training' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-xs font-bold px-4 py-2.5 rounded-xl transition ${
                  activeTab === tab.id
                    ? 'bg-blue-950 text-white shadow'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Detailed Service Cards with Dedicated High-Res Photography (Idea 1) */}
        <div className="space-y-10">
          {filteredServices.map((service, idx) => {
            const meta = SERVICE_METAS[service.id] || SERVICE_METAS['clinical-counseling'];
            const ServiceIcon = meta.icon;

            return (
              <ScrollScale key={service.id} delay={idx * 0.1}>
                <div className={`bg-white rounded-3xl border border-slate-200/90 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden ${meta.accentBorder}`}>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                    
                    {/* Left Column (lg:col-span-4): Dedicated Real-World Photography Banner */}
                    <div className="lg:col-span-4 relative bg-slate-950 overflow-hidden group min-h-[280px] lg:min-h-full aspect-[4/3] lg:aspect-auto">
                      <img
                        src={meta.image}
                        alt={service.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/images/action-consultation-main.jpg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                      {/* Top Floating Badge */}
                      <div className="absolute top-4 left-4 flex items-center gap-2 bg-slate-900/90 backdrop-blur-md text-amber-400 border border-amber-400/40 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl shadow-lg">
                        <ServiceIcon className="w-3.5 h-3.5 text-amber-400" />
                        <span>{meta.tag}</span>
                      </div>

                      {/* Bottom Floating Info Plaque */}
                      <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-white space-y-1">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md inline-block uppercase tracking-wider ${meta.badgeBg}`}>
                          {meta.badge}
                        </span>
                        <p className="text-xs text-amber-300 font-mono font-bold mt-1">
                          {meta.stats}
                        </p>
                      </div>
                    </div>

                    {/* Middle Column (lg:col-span-5): Overview, Outcomes & Modules */}
                    <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-5">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
                            Program ID: #{service.id}
                          </span>
                        </div>

                        <div>
                          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 leading-tight">
                            {service.title}
                          </h2>
                          {service.sinhalaTitle && (
                            <p className="text-xs sm:text-sm font-semibold text-amber-700 mt-0.5 font-sans">
                              {service.sinhalaTitle}
                            </p>
                          )}
                          <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        {/* Core Curriculum Modules */}
                        <div className="space-y-2.5 pt-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2 font-mono">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span>Curriculum Modules & Outcomes:</span>
                          </h4>
                          <div className="space-y-1.5 text-xs text-slate-700">
                            {service.features.map((feature, fIdx) => (
                              <div key={fIdx} className="bg-slate-50 hover:bg-slate-100/80 p-2.5 rounded-xl border border-slate-200/70 flex items-start gap-2.5 transition-colors">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-700 mt-1.5 flex-shrink-0" />
                                <span className="leading-relaxed font-medium">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Target Audience Strip */}
                      <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-600">
                        <Users className="w-4 h-4 text-blue-900 flex-shrink-0" />
                        <span><strong>Target Audience:</strong> {service.targetAudience}</span>
                      </div>
                    </div>

                    {/* Right Column (lg:col-span-3): Delivery Specifications & Quick CTAs */}
                    <div className="lg:col-span-3 p-6 sm:p-8 bg-slate-50/90 border-t lg:border-t-0 lg:border-l border-slate-200/80 flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                          <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider font-mono">
                            Delivery Specs
                          </h4>
                          <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            Verified Track
                          </span>
                        </div>

                        <div className="space-y-3.5 text-xs">
                          <div className="flex items-start gap-2.5 text-slate-700">
                            <Clock className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="text-slate-400 block text-[10px] font-mono">Standard Duration:</span>
                              <span className="font-bold text-slate-900">{service.duration}</span>
                            </div>
                          </div>

                          <div className="flex items-start gap-2.5 text-slate-700">
                            <MapPin className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="text-slate-400 block text-[10px] font-mono">Available Venues:</span>
                              <span className="font-semibold text-slate-800 text-[11px] block leading-tight">
                                {meta.locationOptions.join(' • ')}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-start gap-2.5 text-slate-700">
                            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="text-slate-400 block text-[10px] font-mono">Certification:</span>
                              <span className="font-semibold text-slate-900">Certificate of Completion (Optional)</span>
                            </div>
                          </div>

                          <div className="flex items-start gap-2.5 text-slate-700">
                            <BookOpen className="w-4 h-4 text-indigo-700 flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="text-slate-400 block text-[10px] font-mono">Curriculum Basis:</span>
                              <span className="font-semibold text-slate-900">MOE National Manual Standards</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-2.5 pt-4 border-t border-slate-200">
                        <Link
                          href={`/quotation?service=${service.id}`}
                          className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold py-3 px-4 rounded-xl transition flex items-center justify-center gap-2 text-xs shadow-md transform hover:-translate-y-0.5"
                        >
                          <Calculator className="w-4 h-4" />
                          <span>Calculate Instant Quote</span>
                        </Link>

                        <Link
                          href={`/booking?service=${service.id}`}
                          className="w-full bg-[#0B192C] hover:bg-blue-900 text-white font-bold py-3 px-4 rounded-xl transition flex items-center justify-center gap-2 text-xs shadow-sm transform hover:-translate-y-0.5"
                        >
                          <Calendar className="w-4 h-4 text-amber-400" />
                          <span>Book Workshop Dates</span>
                        </Link>
                      </div>

                    </div>

                  </div>

                </div>
              </ScrollScale>
            );
          })}
        </div>

      </section>

      {/* METHODOLOGY & PEDAGOGY SECTION: CONNECTED 3-STAGE TRANSFORMATION PIPELINE */}
      <section className="bg-gradient-to-b from-[#07111E] via-[#091527] to-[#050D18] text-white pt-20 pb-24 border-t border-slate-800 relative overflow-hidden">
        {/* Subtle background glow accents */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <ScrollReveal direction="up">
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                The Tri-Pillar Signature Framework
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold tracking-tight text-white">
                Experiential, Psychological & Disciplinary Pipeline
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Unlike passive corporate lectures, every intervention follows a continuous, sequential 3-stage metamorphosis developed over 30+ years across military command and clinical psychology practice.
              </p>
            </div>
          </ScrollReveal>

          {/* Desktop Visual Connected Pathway Bar */}
          <div className="hidden lg:grid grid-cols-3 gap-6 mb-8 relative">
            <div className="flex items-center justify-between bg-slate-900/60 border border-amber-500/20 rounded-2xl px-5 py-3">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-400 font-mono text-xs font-bold flex items-center justify-center">01</span>
                <span className="text-xs font-bold tracking-wide uppercase text-amber-300">Phase 01: Diagnostic Discovery</span>
              </div>
              <ArrowRight className="w-4 h-4 text-amber-400/60 animate-pulse" />
            </div>

            <div className="flex items-center justify-between bg-slate-900/60 border border-blue-500/20 rounded-2xl px-5 py-3">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-500/40 text-blue-400 font-mono text-xs font-bold flex items-center justify-center">02</span>
                <span className="text-xs font-bold tracking-wide uppercase text-blue-300">Phase 02: Tactical Discipline</span>
              </div>
              <ArrowRight className="w-4 h-4 text-blue-400/60 animate-pulse" />
            </div>

            <div className="flex items-center justify-between bg-slate-900/60 border border-emerald-500/20 rounded-2xl px-5 py-3">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-mono text-xs font-bold flex items-center justify-center">03</span>
                <span className="text-xs font-bold tracking-wide uppercase text-emerald-300">Phase 03: Sustainable Anchoring</span>
              </div>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
          </div>

          {/* 3 Pipeline Cards */}
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* STAGE 01 CARD */}
            <StaggerItem>
              <div className="bg-slate-900/80 backdrop-blur-sm rounded-3xl border border-slate-800 hover:border-amber-500/50 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between h-full relative group shadow-xl hover:shadow-amber-500/5 overflow-hidden">
                {/* Glow bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-amber-300 opacity-80 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold shadow-inner">
                      <Brain className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[11px] font-mono font-bold uppercase tracking-wider">
                      Stage 01 • CBT & Psychology
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-xl text-white group-hover:text-amber-300 transition-colors">
                      Cognitive & Emotional Discovery
                    </h3>
                    <p className="text-xs text-amber-400/90 font-medium mt-1">
                      මානසික සහ චර්යාත්මක මූලාරම්භය හඳුනාගැනීම
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Utilizing Cognitive Behavioral Therapy (CBT) principles and psychological diagnostic tools to uncover root emotional blockers, maladaptive habits, and interpersonal friction.
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-slate-800">
                    <div className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>CBT Cognitive Restructuring & Diagnostic Audits</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>Trauma-Informed & Emotional Blocker Assessment</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>Maladaptive Behavioral Pattern Mapping</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 uppercase tracking-wider font-semibold">Stage Output</span>
                  <span className="px-2.5 py-1 rounded-md bg-amber-500/15 text-amber-300 font-medium border border-amber-500/30">
                    Psychological Baseline Audit
                  </span>
                </div>
              </div>
            </StaggerItem>

            {/* STAGE 02 CARD */}
            <StaggerItem>
              <div className="bg-slate-900/80 backdrop-blur-sm rounded-3xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between h-full relative group shadow-xl hover:shadow-blue-500/5 overflow-hidden">
                {/* Glow bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-80 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold shadow-inner">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-mono font-bold uppercase tracking-wider">
                      Stage 02 • NCC Officer Protocol
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-xl text-white group-hover:text-blue-300 transition-colors">
                      Simulated Military Discipline
                    </h3>
                    <p className="text-xs text-blue-400/90 font-medium mt-1">
                      විනය, නායකත්ව සහ අර්බුද කළමනාකරණය
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Drawing directly on National Cadet Corps officer leadership models, participants experience intense team coordination, protocol etiquette, crisis command, and radical accountability.
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-slate-800">
                    <div className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>High-Pressure Scenario Drills & Crisis Command</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>Officer Protocol Etiquette & Hierarchy Mastery</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>Radical Accountability & Collaborative Synergy</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 uppercase tracking-wider font-semibold">Stage Output</span>
                  <span className="px-2.5 py-1 rounded-md bg-blue-500/15 text-blue-300 font-medium border border-blue-500/30">
                    Decisional Composure under Stress
                  </span>
                </div>
              </div>
            </StaggerItem>

            {/* STAGE 03 CARD */}
            <StaggerItem>
              <div className="bg-slate-900/80 backdrop-blur-sm rounded-3xl border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between h-full relative group shadow-xl hover:shadow-emerald-500/5 overflow-hidden">
                {/* Glow bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 opacity-80 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold shadow-inner">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono font-bold uppercase tracking-wider">
                      Stage 03 • Institutional Impact
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-xl text-white group-hover:text-emerald-300 transition-colors">
                      Sustainable Habit Anchoring
                    </h3>
                    <p className="text-xs text-emerald-400/90 font-medium mt-1">
                      තිරසාර පුරුදු සහ දිගුකාලීන චර්යාත්මක පරිවර්තනය
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Every session concludes with actionable personal roadmaps, peer accountability systems, and structured follow-up guidelines ensuring lasting behavioral and cultural transformation.
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-slate-800">
                    <div className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Custom 90-Day Personal Action Roadmaps</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Peer Accountability Squads & Mentorship Circles</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Post-Intervention Behavioral KPI Auditing</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 uppercase tracking-wider font-semibold">Stage Output</span>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-300 font-medium border border-emerald-500/30">
                    Institutionalized Cultural Shift
                  </span>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>

        </div>
      </section>

    </div>
  );
}
