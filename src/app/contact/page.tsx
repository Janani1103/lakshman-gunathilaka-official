'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Building2,
  Calendar,
  Compass,
  Award,
  Calculator,
  FileText,
  Sparkles,
  ArrowRight,
  Lock,
  HelpCircle
} from 'lucide-react';
import { PROFILE_DATA } from '@/data/profileData';
import { ScrollReveal, StaggerContainer, StaggerItem, ScrollScale } from '@/components/ScrollAnimations';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Psychological Counseling Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Please enter your name and contact phone number.');
      return;
    }
    setSubmitted(true);
  };

  const getWhatsAppDirectUrl = () => {
    const text = `Hello Lt. Col. Lakshman Gunathilaka,\n\n*Name:* ${name || 'Prospective Client'}\n*Phone:* ${phone || 'N/A'}\n*Email:* ${email || 'N/A'}\n*Subject:* ${subject}\n*Message:* ${message || 'I would like to inquire about your services.'}`;
    return `https://wa.me/94718401434?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="space-y-14 sm:space-y-18 pb-20 overflow-hidden">
      
      {/* HEADER */}
      <section className="bg-gradient-to-r from-[#0B192C] via-[#1E3E62] to-[#0B192C] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <div className="max-w-3xl space-y-3">
              <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight leading-tight">
                Get in Touch with Lt. Col. Lakshman Gunathilaka
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Reach out for individual clinical counseling, corporate executive workshops, school leadership camps, or general institutional inquiries.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CONTACT INFO & INQUIRY FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="left">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-6">
                <h2 className="font-serif font-bold text-slate-900 text-xl border-b border-slate-100 pb-3">
                  Official Contact Particulars
                </h2>

                <div className="space-y-5 text-xs text-slate-700">
                  
                  {/* Telephone */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                        Direct Hotline / Mobile
                      </span>
                      <a 
                        href={`tel:${PROFILE_DATA.personal.phone}`} 
                        className="text-base font-bold text-blue-950 hover:text-amber-600 transition block font-mono mt-0.5"
                      >
                        {PROFILE_DATA.personal.phone}
                      </a>
                      <span className="text-[11px] text-slate-500">Available for calls and WhatsApp messages</span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                        Official Email
                      </span>
                      <a 
                        href={`mailto:${PROFILE_DATA.personal.email}`} 
                        className="font-semibold text-slate-900 hover:text-amber-600 transition block mt-0.5 truncate"
                      >
                        {PROFILE_DATA.personal.email}
                      </a>
                      <span className="text-[11px] text-slate-500">Official inquiries, proposal drafts & documents</span>
                    </div>
                  </div>

                  {/* Private Consultation Center */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                        Consultation Center & Residence
                      </span>
                      <p className="font-semibold text-slate-900 mt-0.5">
                        {PROFILE_DATA.personal.address}
                      </p>
                      <span className="text-[11px] text-slate-500">Private counseling sessions by prior appointment</span>
                    </div>
                  </div>

                  {/* Official Office */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                        Government Office
                      </span>
                      <p className="font-semibold text-slate-900 mt-0.5">
                        {PROFILE_DATA.personal.officialAddress}
                      </p>
                      <span className="text-[11px] text-slate-500">Ministry of Education In-Service Advisory</span>
                    </div>
                  </div>

                </div>

                {/* Direct WhatsApp CTA Button */}
                <div className="pt-2">
                  <a
                    href={`https://wa.me/94718401434?text=Hello%20Lt.%20Col.%20Lakshman%2C%20I%20would%20like%20to%20get%20in%20touch%20regarding%20a%20consultation.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl transition flex items-center justify-center gap-2 text-xs shadow"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Start WhatsApp Conversation</span>
                  </a>
                </div>

              </div>
            </ScrollReveal>

            {/* Privacy Card */}
            <ScrollReveal direction="up" delay={0.15}>
              <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-3">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Confidentiality & Ethical Code</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  All communications and counseling records are held with strict medical-grade confidentiality according to the professional standards of the Sri Lanka Institute of Professional Counselors.
                </p>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right">
              <div className="bg-white rounded-2xl border border-slate-200 p-7 sm:p-9 shadow-sm">
                
                {submitted ? (
                  <div className="py-12 text-center space-y-5">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-slate-900">
                      Message Dispatched Successfully!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                      Thank you, <strong className="text-slate-900">{name}</strong>. Your inquiry has been transmitted to Lt. Col. Lakshman Gunathilaka. We will get back to you shortly.
                    </p>
                    <div className="pt-4 flex flex-wrap justify-center gap-3">
                      <a
                        href={getWhatsAppDirectUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Also Send to WhatsApp for Faster Reply</span>
                      </a>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="font-serif font-bold text-slate-900 text-xl">
                        Send a Direct Inquiry
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Fill in your details below. For urgent matters, please use the direct telephone hotline.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Priyantha Dissanayake"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full text-xs bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-900 focus:ring-2 focus:ring-blue-900 outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Contact Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="07X-XXXXXXX"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full text-xs bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-900 focus:ring-2 focus:ring-blue-900 outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="name@organization.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full text-xs bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-900 focus:ring-2 focus:ring-blue-900 outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Inquiry Category *
                        </label>
                        <select
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          className="w-full text-xs bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-900 focus:ring-2 focus:ring-blue-900 outline-none"
                        >
                          <option value="Individual Psychological Counseling">Individual Psychological Counseling</option>
                          <option value="Teenager / Adolescent Addiction Counseling">Teenager / Adolescent Addiction Counseling</option>
                          <option value="School Prefects Leadership Workshop">School Prefects Leadership Workshop</option>
                          <option value="Corporate Soft Skills & Leadership Seminar">Corporate Soft Skills & Leadership Seminar</option>
                          <option value="Government / SLEAS Training Program">Government / SLEAS Training Program</option>
                          <option value="Quotation & Financial Inquiry">Quotation & Financial Inquiry</option>
                          <option value="General Question">General Question</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Your Message / Situation Overview *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Briefly describe your requirements, preferred timing, or key challenges you wish to address..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full text-xs bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-900 focus:ring-2 focus:ring-blue-900 outline-none resize-none"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                      <button
                        type="submit"
                        className="w-full sm:w-auto bg-[#0B192C] hover:bg-blue-900 text-white font-bold py-3.5 px-8 rounded-xl transition flex items-center justify-center gap-2 text-xs shadow-md"
                      >
                        <Send className="w-3.5 h-3.5 text-amber-400" />
                        <span>Transmit Message</span>
                      </button>

                      <a
                        href={getWhatsAppDirectUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl transition flex items-center justify-center gap-2 text-xs shadow-md"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Send directly on WhatsApp</span>
                      </a>
                    </div>

                  </form>
                )}

              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS - SMART KNOWLEDGE CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up">
          <div className="bg-gradient-to-b from-slate-50 via-white to-slate-50 rounded-3xl border border-slate-200/90 p-6 sm:p-10 lg:p-12 shadow-sm space-y-10">
            
            {/* Header */}
            <div className="max-w-3xl space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-900 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                Institutional Protocols & FAQs
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
                Frequently Asked Questions
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Key guidance covering nationwide program mobility, clinical confidentiality standards, school leadership certification, and institutional procurement approvals.
              </p>
            </div>

            {/* Smart 4-Card Grid */}
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
              
              {/* CARD 01: OUTSTATION MOBILITY */}
              <StaggerItem>
                <div className="bg-white rounded-3xl border border-amber-200/70 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden group">
                  <div className="h-1.5 w-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 group-hover:h-2 transition-all duration-300" />
                  
                  <div className="p-6 sm:p-7 space-y-4 flex-grow flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0">
                            <Compass className="w-4 h-4" />
                          </div>
                          <span className="font-bold px-2.5 py-0.5 rounded-lg text-[10px] uppercase tracking-wider bg-amber-50 text-amber-900 border border-amber-200">
                            Geographic Mobility
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400 font-bold">01</span>
                      </div>

                      <h4 className="font-serif font-bold text-slate-900 text-base sm:text-lg group-hover:text-amber-900 transition-colors leading-snug">
                        Does Lt. Col. Gunathilaka travel outstation for programs?
                      </h4>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Yes. While based in Kandy, he routinely conducts multi-day corporate bootcamps, school leadership retreats, and government induction workshops across every district in Sri Lanka.
                      </p>

                      {/* Location Micro-Badges */}
                      <div className="pt-2">
                        <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mb-1.5">Routinely Conducted In:</p>
                        <div className="flex flex-wrap gap-1.5">
                          {['Kandy (HQ Suite)', 'Colombo', 'Galle', 'Anuradhapura', 'Ampara', 'Islandwide Bases'].map((loc) => (
                            <span key={loc} className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                              <MapPin className="w-3 h-3 text-amber-600" />
                              {loc}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 mt-2 border-t border-slate-100 text-[11px] text-slate-500 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Full residential and single-day bootcamp logistics coordinated.</span>
                    </div>
                  </div>
                </div>
              </StaggerItem>

              {/* CARD 02: CLINICAL CONFIDENTIALITY */}
              <StaggerItem>
                <div className="bg-white rounded-3xl border border-emerald-200/70 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden group">
                  <div className="h-1.5 w-full bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 group-hover:h-2 transition-all duration-300" />
                  
                  <div className="p-6 sm:p-7 space-y-4 flex-grow flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center shrink-0">
                            <Lock className="w-4 h-4" />
                          </div>
                          <span className="font-bold px-2.5 py-0.5 rounded-lg text-[10px] uppercase tracking-wider bg-emerald-50 text-emerald-900 border border-emerald-200">
                            Clinical Ethics & Privacy
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400 font-bold">02</span>
                      </div>

                      <h4 className="font-serif font-bold text-slate-900 text-base sm:text-lg group-hover:text-emerald-900 transition-colors leading-snug">
                        How is client confidentiality safeguarded in individual therapy?
                      </h4>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Full clinical confidentiality is strictly maintained under the Sri Lanka Institute of Professional Counselors (SLIPC) Code of Ethics. No case notes, identities, or session records are ever disclosed without explicit written consent.
                      </p>

                      {/* Assurance Badges */}
                      <div className="pt-2">
                        <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mb-1.5">Compliance Standards:</p>
                        <div className="flex flex-wrap gap-1.5">
                          {['SLIPC Ethical Framework', '100% Non-Disclosure', 'Zero Data Retention', 'Private Kandy Suite'].map((sec) => (
                            <span key={sec} className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-emerald-50/80 text-emerald-900 border border-emerald-200">
                              <ShieldCheck className="w-3 h-3 text-emerald-600" />
                              {sec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 mt-2 border-t border-slate-100 text-[11px] text-slate-500 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Dedicated private consultation rooms with discreet entrance.</span>
                    </div>
                  </div>
                </div>
              </StaggerItem>

              {/* CARD 03: PREFECT & LEADER CERTIFICATES */}
              <StaggerItem>
                <div className="bg-white rounded-3xl border border-blue-200/70 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden group">
                  <div className="h-1.5 w-full bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-500 group-hover:h-2 transition-all duration-300" />
                  
                  <div className="p-6 sm:p-7 space-y-4 flex-grow flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-700 flex items-center justify-center shrink-0">
                            <Award className="w-4 h-4" />
                          </div>
                          <span className="font-bold px-2.5 py-0.5 rounded-lg text-[10px] uppercase tracking-wider bg-blue-50 text-blue-900 border border-blue-200">
                            Official Endorsements
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400 font-bold">03</span>
                      </div>

                      <h4 className="font-serif font-bold text-slate-900 text-base sm:text-lg group-hover:text-blue-900 transition-colors leading-snug">
                        Can schools receive official certificates for prefects?
                      </h4>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Yes, official certificates signed by Lt. Col. M.D. Lakshman Gunathilaka (M.Ed, National Trainer MOE) are provided for prefects and student leaders attending his workshops.
                      </p>

                      {/* Certification Features */}
                      <div className="pt-2">
                        <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mb-1.5">Certification Inclusions:</p>
                        <div className="flex flex-wrap gap-1.5">
                          {['MOE National Trainer Sign', 'Official Officer Seal', 'Institutional Crest', 'Lifetime Leadership Credential'].map((item) => (
                            <span key={item} className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-blue-50/80 text-blue-900 border border-blue-200">
                              <Award className="w-3 h-3 text-blue-600" />
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 mt-2 border-t border-slate-100 text-[11px] text-slate-500 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Custom-printed for school guilds and national colleges.</span>
                    </div>
                  </div>
                </div>
              </StaggerItem>

              {/* CARD 04: OFFICIAL QUOTATIONS & APPROVALS */}
              <StaggerItem>
                <div className="bg-white rounded-3xl border border-purple-200/70 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden group">
                  <div className="h-1.5 w-full bg-gradient-to-r from-purple-700 via-violet-600 to-indigo-500 group-hover:h-2 transition-all duration-300" />
                  
                  <div className="p-6 sm:p-7 space-y-4 flex-grow flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-xl bg-purple-500/10 text-purple-700 flex items-center justify-center shrink-0">
                            <Calculator className="w-4 h-4" />
                          </div>
                          <span className="font-bold px-2.5 py-0.5 rounded-lg text-[10px] uppercase tracking-wider bg-purple-50 text-purple-900 border border-purple-200">
                            Procurement & Approvals
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400 font-bold">04</span>
                      </div>

                      <h4 className="font-serif font-bold text-slate-900 text-base sm:text-lg group-hover:text-purple-900 transition-colors leading-snug">
                        How do I obtain an official quotation for management approval?
                      </h4>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        You can use our Instant Quotation Generator to calculate costs and print an official proposal document with a formal reference number instantly.
                      </p>

                      {/* Proposal Badges */}
                      <div className="pt-2">
                        <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mb-1.5">Document Features:</p>
                        <div className="flex flex-wrap gap-1.5">
                          {['Formal Quotation Ref #', 'Corporate PDF / Print Ready', 'Itemized Breakdown', 'MOE Framework Aligned'].map((feat) => (
                            <span key={feat} className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-purple-50/80 text-purple-900 border border-purple-200">
                              <FileText className="w-3 h-3 text-purple-600" />
                              {feat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] text-slate-500 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        Valid for fiscal budgets
                      </span>
                      <Link
                        href="/quotation"
                        className="inline-flex items-center gap-1 text-xs font-bold text-purple-900 hover:text-purple-700 transition group/btn"
                      >
                        <span>Generate Instant Proposal</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>

            </StaggerContainer>

            {/* Bottom Support Callout */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-100/80 border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-950 text-white flex items-center justify-center shrink-0">
                  <HelpCircle className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">Have a unique institutional request or scheduling requirement?</p>
                  <p className="text-[11px] text-slate-500">Our consultation office responds directly within 24 hours.</p>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto shrink-0 justify-center">
                <a
                  href="https://wa.me/94718401434?text=Hello%20Lt.%20Col.%20Lakshman%20Gunathilaka,%20I%20have%20an%20inquiry%20regarding%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition shadow-sm"
                >
                  WhatsApp Inquiry
                </a>
                <a
                  href="tel:0718401434"
                  className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 rounded-xl text-xs font-bold transition"
                >
                  Call Office
                </a>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
