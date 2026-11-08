'use client';

import React from 'react';
import QuotationCalculator from '@/components/QuotationCalculator';
import { 
  Calculator, 
  FileText, 
  HelpCircle, 
  CheckCircle, 
  Building2, 
  Award, 
  ShieldCheck,
  Phone
} from 'lucide-react';
import { PROFILE_DATA } from '@/data/profileData';
import { ScrollReveal, StaggerContainer, StaggerItem, ScrollScale } from '@/components/ScrollAnimations';

export default function QuotationPage() {
  return (
    <div className="space-y-12 sm:space-y-16 pb-20 overflow-hidden">
      
      {/* HEADER */}
      <section className="bg-gradient-to-r from-[#0B192C] via-[#1E3E62] to-[#0B192C] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <div className="max-w-3xl space-y-3">
              <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight leading-tight">
                Instant Program Quotation & Formal Invoicing
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Generate an immediate, verified cost estimate for your school, corporate department, or state ministry. Download or print an official proposal ready for executive committee or tender approval.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CALCULATOR & PROPOSAL VIEWER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollScale>
          <QuotationCalculator />
        </ScrollScale>
      </section>

      {/* PROCUREMENT & INVOICING NOTES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-6">
            <div className="max-w-2xl space-y-2">
              <h3 className="font-serif font-bold text-slate-900 text-xl">
                Procurement & Billing Guidelines for Institutional Clients
              </h3>
              <p className="text-xs text-slate-500">
                Information for School Principals, Treasurers, HR Directors, and Government Finance Officers:
              </p>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700">
              <StaggerItem>
                <div className="space-y-1.5 p-4 rounded-xl bg-slate-50 border border-slate-200 h-full">
                  <span className="font-bold text-slate-900 block">Formal Invoices & Bank Transfers</span>
                  <p className="text-slate-600">
                    Official stamped vouchers, formal tax invoices, and bank transfer credentials will be issued upon proposal acceptance.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="space-y-1.5 p-4 rounded-xl bg-slate-50 border border-slate-200 h-full">
                  <span className="font-bold text-slate-900 block">Ministry & Public Sector Compliance</span>
                  <p className="text-slate-600">
                    Full compliance with public finance regulations and Ministry of Education circular guidelines for in-service educational training.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="space-y-1.5 p-4 rounded-xl bg-slate-50 border border-slate-200 h-full">
                  <span className="font-bold text-slate-900 block">School & Non-Profit Concessions</span>
                  <p className="text-slate-600">
                    Special consideration and subsidized structures are extended to rural schools and disadvantaged student bodies upon formal written appeal.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-4">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-600" />
                <span>Direct Finance & Scheduling Desk: <strong>{PROFILE_DATA.personal.phone}</strong></span>
              </div>
              <span>Email: <strong>{PROFILE_DATA.personal.email}</strong></span>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
