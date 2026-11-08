'use client';

import React from 'react';
import BookingCalendar from '@/components/BookingCalendar';
import { 
  Calendar as CalendarIcon, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Clock, 
  HelpCircle, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { PROFILE_DATA } from '@/data/profileData';
import { ScrollReveal, StaggerContainer, StaggerItem, ScrollScale } from '@/components/ScrollAnimations';

export default function BookingPage() {
  return (
    <div className="space-y-12 sm:space-y-16 pb-20 overflow-hidden">
      
      {/* HEADER */}
      <section className="bg-gradient-to-r from-[#0B192C] via-[#1E3E62] to-[#0B192C] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <div className="max-w-3xl space-y-3">
              <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight leading-tight">
                Schedule Your Consultation or Training Program
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Book private 1-on-1 counseling at the Kandy Clinic, reserve outstation dates for corporate workshops, or schedule school prefect leadership camps.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* MAIN CALENDAR CONTAINER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollScale>
          <BookingCalendar />
        </ScrollScale>
      </section>

      {/* INSTRUCTIONS & CONSULTATION ETIQUETTE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <StaggerItem>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 h-full">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center font-bold">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-slate-900 text-base">
                Consultation Clinic Location
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Private counseling sessions take place in a peaceful, strictly confidential clinical setting in Kandy:
              </p>
              <p className="text-xs font-semibold text-slate-800 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                No: 64, Anagarika Dharmapala Mawatha, Kandy, Sri Lanka
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 h-full">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-slate-900 text-base">
                Confidentiality Guarantee
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every therapeutic discussion, adolescent intervention, and family mediation adheres strictly to the national code of ethics of the Sri Lanka Institute of Professional Counselors (SLIPC).
              </p>
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded inline-block">
                100% Protected Client Privacy
              </span>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 h-full">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-slate-900 text-base">
                School & Corporate Booking Notice
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Due to heavy academic and public training schedules, educational institutions and corporate clients are encouraged to book 2–4 weeks in advance to guarantee their preferred dates.
              </p>
              <a
                href="https://wa.me/94718401434"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-emerald-600 hover:underline flex items-center gap-1"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Priority WhatsApp Inquiries</span>
              </a>
            </div>
          </StaggerItem>

        </StaggerContainer>
      </section>

    </div>
  );
}
