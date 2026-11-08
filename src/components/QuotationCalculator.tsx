'use client';

import React, { useState } from 'react';
import { 
  Calculator, 
  FileText, 
  Printer, 
  Download, 
  MessageSquare, 
  CheckCircle, 
  ShieldCheck, 
  MapPin, 
  Users, 
  Clock, 
  Sparkles,
  Award
} from 'lucide-react';
import { PROFILE_DATA } from '@/data/profileData';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function QuotationCalculator() {
  // Inputs
  const [programKey, setProgramKey] = useState<string>('corporate_full_day');
  const [participantsCount, setParticipantsCount] = useState<number>(35);
  const [locationKey, setLocationKey] = useState<string>('kandy');
  const [clientName, setClientName] = useState<string>('ABC Enterprise Ltd');
  const [contactPerson, setContactPerson] = useState<string>('HR Manager');
  const [contactPhone, setContactPhone] = useState<string>('077-1234567');
  const [customNotes, setCustomNotes] = useState<string>('Includes team alignment, stress mastery & leadership focus.');

  // Selected add-ons
  const [includeCertificates, setIncludeCertificates] = useState<boolean>(true);
  const [includeWorkbooks, setIncludeWorkbooks] = useState<boolean>(false);
  const [includeAssessment, setIncludeAssessment] = useState<boolean>(false);
  const [includeFollowUp, setIncludeFollowUp] = useState<boolean>(false);

  // Program definitions
  const programs: Record<string, { label: string; base: number; type: string; defaultDuration: string }> = {
    counseling_individual: { label: 'Individual Psychological Counseling (Per Session)', base: 4500, type: 'Clinical', defaultDuration: '60 - 90 mins' },
    counseling_family: { label: 'Couple / Family Systems Counseling (Per Session)', base: 6500, type: 'Clinical', defaultDuration: '90 - 120 mins' },
    school_half_day: { label: 'School Prefects & Student Leadership (Half Day)', base: 25000, type: 'Educational', defaultDuration: '3.5 Hours' },
    school_full_day: { label: 'School Prefects & Student Leadership Bootcamp (Full Day)', base: 40000, type: 'Educational', defaultDuration: '7 Hours' },
    corporate_half_day: { label: 'Corporate Soft Skills & Leadership Seminar (Half Day)', base: 50000, type: 'Corporate', defaultDuration: '4 Hours' },
    corporate_full_day: { label: 'Corporate Leadership & Team Alignment (Full Day)', base: 85000, type: 'Corporate', defaultDuration: '7 Hours' },
    corporate_2day_residential: { label: 'Executive Leadership & Synergy Bootcamp (2-Day Residential)', base: 155000, type: 'Corporate', defaultDuration: '2 Full Days' },
    public_sector_full_day: { label: 'Public Sector / SLEAS / Principal Service Training (Full Day)', base: 55000, type: 'Government', defaultDuration: '6.5 Hours' },
    keynote_speech: { label: 'Keynote Motivational & Behavioral Address (1.5 - 2 Hours)', base: 30000, type: 'Keynote', defaultDuration: '2 Hours' },
  };

  const locations: Record<string, { label: string; surcharge: number }> = {
    kandy: { label: 'Kandy & Immediate Suburbs (No Travel Surcharge)', surcharge: 0 },
    central_province: { label: 'Central Province Outskirts (Peradeniya, Matale, Nuwara Eliya)', surcharge: 6000 },
    western_colombo: { label: 'Colombo & Western Province', surcharge: 16000 },
    outstation_distant: { label: 'Outstation Islandwide (Southern, Eastern, Northern)', surcharge: 28000 },
  };

  // Calculation Logic
  const selectedProgram = programs[programKey] || programs.corporate_full_day;
  const selectedLocation = locations[locationKey] || locations.kandy;

  // Multiplier by participant volume for workshops (not clinical)
  let participantMultiplier = 1.0;
  if (!programKey.startsWith('counseling')) {
    if (participantsCount > 300) participantMultiplier = 1.7;
    else if (participantsCount > 100) participantMultiplier = 1.4;
    else if (participantsCount > 50) participantMultiplier = 1.2;
    else if (participantsCount > 25) participantMultiplier = 1.1;
  }

  const baseFee = Math.round(selectedProgram.base * participantMultiplier);
  const locationFee = selectedLocation.surcharge;

  // Addons calculations
  const certFee = includeCertificates && !programKey.startsWith('counseling') ? participantsCount * 250 : 0;
  const workbookFee = includeWorkbooks && !programKey.startsWith('counseling') ? participantsCount * 400 : 0;
  const assessFee = includeAssessment ? 15000 : 0;
  const followUpFee = includeFollowUp ? 20000 : 0;

  const totalEstimate = baseFee + locationFee + certFee + workbookFee + assessFee + followUpFee;

  // Reference & Date handling for Next.js 16 prerender safety
  const [quoteReference, setQuoteReference] = useState<string>('LG-EST-2026-8942');
  const [currentDateStr, setCurrentDateStr] = useState<string>('2026-11-04');

  React.useEffect(() => {
    const now = new Date();
    setQuoteReference(`LG-EST-${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}-${Math.floor(1000 + Math.random() * 9000)}`);
    setCurrentDateStr(now.toLocaleDateString());
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const generateWhatsAppMessage = () => {
    const text = `*OFFICIAL QUOTATION INQUIRY*\n*Ref:* ${quoteReference}\n*Client/Org:* ${clientName}\n*Contact Person:* ${contactPerson} (${contactPhone})\n*Program:* ${selectedProgram.label}\n*Participants:* ${participantsCount}\n*Location:* ${selectedLocation.label}\n*Add-ons:* ${includeCertificates ? 'Certificates, ' : ''}${includeWorkbooks ? 'Workbooks, ' : ''}${includeAssessment ? 'Assessment Report, ' : ''}${includeFollowUp ? 'Follow-up Session' : 'Standard'}\n*Estimated Investment:* LKR ${totalEstimate.toLocaleString()} /=\n\nHello Lt. Col. Lakshman Gunathilaka, please review this estimate for our organization.`;
    return `https://wa.me/94718401434?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="space-y-10">
      
      {/* Interactive Controls & Calculator Container */}
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden no-print">
        {/* Top Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold">
                Instant Training & Counseling Cost Estimator
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
                Configure your required module, participant count, location, and supplementary deliverables to obtain a verified official estimate in real-time.
              </p>
            </div>
            <div className="text-right hidden sm:block">
              <span className="text-xs text-slate-400 block">Lead Consultant & Trainer</span>
              <span className="text-sm font-bold text-amber-300">Lt. Col. M.D. Lakshman Gunathilaka</span>
              <span className="text-xs text-slate-300 block">M.Ed (Pdn) • National Trainer MOE</span>
            </div>
          </div>
        </div>

        {/* Configuration Grid */}
        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Form Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Program Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                1. Select Program / Engagement Type *
              </label>
              <select
                value={programKey}
                onChange={(e) => setProgramKey(e.target.value)}
                className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-850 font-medium focus:ring-2 focus:ring-blue-900 outline-none"
              >
                {Object.entries(programs).map(([key, item]) => (
                  <option key={key} value={key}>
                    [{item.type}] {item.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Participants & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Participant Slider / Number */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    2. Participants Count
                  </label>
                  <span className="text-xs font-bold bg-blue-100 text-blue-950 px-2 py-0.5 rounded-full">
                    {participantsCount} {participantsCount === 1 ? 'Person' : 'Participants'}
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={250}
                  step={1}
                  value={participantsCount}
                  onChange={(e) => setParticipantsCount(Number(e.target.value))}
                  className="w-full accent-blue-900 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>1 (1-on-1)</span>
                  <span>50 (Class)</span>
                  <span>100+ (Assembly)</span>
                  <span>250</span>
                </div>
              </div>

              {/* Location Picker */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  3. Program Location
                </label>
                <select
                  value={locationKey}
                  onChange={(e) => setLocationKey(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-slate-800 font-medium focus:ring-2 focus:ring-blue-900 outline-none"
                >
                  {Object.entries(locations).map(([key, item]) => (
                    <option key={key} value={key}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>

            </div>

            {/* Supplementary Add-ons */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                4. Value Add-ons & Supporting Material
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                
                <label className="flex items-start gap-2.5 p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition">
                  <input
                    type="checkbox"
                    checked={includeCertificates}
                    onChange={(e) => setIncludeCertificates(e.target.checked)}
                    className="mt-0.5 accent-blue-900 w-4 h-4 rounded"
                  />
                  <div>
                    <span className="font-semibold text-slate-800 block">Training Certificates</span>
                    <span className="text-[11px] text-slate-500">Official signed certificates (+Rs. 250/p)</span>
                  </div>
                </label>

                <label className="flex items-start gap-2.5 p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition">
                  <input
                    type="checkbox"
                    checked={includeWorkbooks}
                    onChange={(e) => setIncludeWorkbooks(e.target.checked)}
                    className="mt-0.5 accent-blue-900 w-4 h-4 rounded"
                  />
                  <div>
                    <span className="font-semibold text-slate-800 block">Soft Skills Workbooks</span>
                    <span className="text-[11px] text-slate-500">Curated print manual (+Rs. 400/p)</span>
                  </div>
                </label>

                <label className="flex items-start gap-2.5 p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition">
                  <input
                    type="checkbox"
                    checked={includeAssessment}
                    onChange={(e) => setIncludeAssessment(e.target.checked)}
                    className="mt-0.5 accent-blue-900 w-4 h-4 rounded"
                  />
                  <div>
                    <span className="font-semibold text-slate-800 block">Psychometric Assessment</span>
                    <span className="text-[11px] text-slate-500">Pre/Post psychological analytics (+Rs. 15,000)</span>
                  </div>
                </label>

                <label className="flex items-start gap-2.5 p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition">
                  <input
                    type="checkbox"
                    checked={includeFollowUp}
                    onChange={(e) => setIncludeFollowUp(e.target.checked)}
                    className="mt-0.5 accent-blue-900 w-4 h-4 rounded"
                  />
                  <div>
                    <span className="font-semibold text-slate-800 block">1-Month Follow-up Review</span>
                    <span className="text-[11px] text-slate-500">Post-training audit session (+Rs. 20,000)</span>
                  </div>
                </label>

              </div>
            </div>

            {/* Client Particulars for Official Quote */}
            <div className="pt-2 border-t border-slate-100">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                5. Organization / Client Particulars (For Letterhead)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <input
                  type="text"
                  placeholder="Organization / School Name"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="text-xs bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-800"
                />
                <input
                  type="text"
                  placeholder="Contact Person (e.g. Principal / HR)"
                  value={contactPerson}
                  onChange={(e) => setContactPerson(e.target.value)}
                  className="text-xs bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-800"
                />
                <input
                  type="text"
                  placeholder="Phone / WhatsApp"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  className="text-xs bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-800"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Live Price Card & Actions (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-blue-950 text-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-start border-b border-white/10 pb-3">
                <div>
                  <span className="text-[10px] text-amber-400 font-mono tracking-wider block uppercase font-bold">
                    Official Quotation Summary
                  </span>
                  <span className="text-xs text-slate-300 font-mono">Ref: {quoteReference}</span>
                </div>
                <span className="bg-amber-400/20 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded border border-amber-400/30">
                  Valid 30 Days
                </span>
              </div>

              {/* Itemized list */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Trainer Facilitation Fee:</span>
                  <span className="font-mono font-medium text-white">LKR {baseFee.toLocaleString()}</span>
                </div>

                {locationFee > 0 && (
                  <div className="flex justify-between text-slate-300">
                    <span>Travel & Logistics ({selectedLocation.label.split('(')[0].trim()}):</span>
                    <span className="font-mono font-medium text-white">LKR {locationFee.toLocaleString()}</span>
                  </div>
                )}

                {certFee > 0 && (
                  <div className="flex justify-between text-slate-300">
                    <span>Certificates ({participantsCount} × Rs.250):</span>
                    <span className="font-mono font-medium text-white">LKR {certFee.toLocaleString()}</span>
                  </div>
                )}

                {workbookFee > 0 && (
                  <div className="flex justify-between text-slate-300">
                    <span>Workbooks ({participantsCount} × Rs.400):</span>
                    <span className="font-mono font-medium text-white">LKR {workbookFee.toLocaleString()}</span>
                  </div>
                )}

                {assessFee > 0 && (
                  <div className="flex justify-between text-slate-300">
                    <span>Psychometric Evaluation Pack:</span>
                    <span className="font-mono font-medium text-white">LKR {assessFee.toLocaleString()}</span>
                  </div>
                )}

                {followUpFee > 0 && (
                  <div className="flex justify-between text-slate-300">
                    <span>Follow-Up Mentoring Session:</span>
                    <span className="font-mono font-medium text-white">LKR {followUpFee.toLocaleString()}</span>
                  </div>
                )}
              </div>

              {/* Total Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/15 my-4">
                <span className="text-xs uppercase font-semibold text-amber-300 tracking-wider block">
                  Total Estimated Investment
                </span>
                <div className="text-3xl font-extrabold text-white tracking-tight mt-1 font-mono">
                  LKR <AnimatedCounter key={totalEstimate} to={totalEstimate} duration={0.8} />
                  <span className="text-xs font-normal text-slate-300 ml-1">/ nett</span>
                </div>
                <p className="text-[11px] text-slate-300 mt-1">
                  Covers full preparation, lecture delivery, interactive modules & direct guidance by Lt. Col. Gunathilaka.
                </p>
              </div>

            </div>

            {/* CTAs */}
            <div className="space-y-2.5 pt-4 border-t border-white/10 relative z-10">
              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-3 px-4 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Quotation to WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={handlePrint}
                className="w-full bg-white/15 hover:bg-white/20 text-white font-semibold py-2.5 px-4 rounded-xl border border-white/20 transition flex items-center justify-center gap-2 text-xs"
              >
                <Printer className="w-4 h-4 text-amber-400" />
                <span>Print / Save as PDF Proposal</span>
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Printable / Downloadable Official Quotation Sheet - A4 Document Presentation */}
      <div className="space-y-4">
        {/* Document Viewer Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900 text-white px-5 py-3.5 rounded-xl no-print shadow-md border border-slate-800">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Official Quotation Preview
            </span>
            <span className="text-[11px] bg-slate-800 text-amber-300 px-2 py-0.5 rounded font-mono border border-slate-700">
              A4 Portrait Standard
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg transition shadow-sm active:scale-95"
            >
              <Printer className="w-3.5 h-3.5 text-amber-300" />
              <span>Print / Save PDF</span>
            </button>
            <a
              href={generateWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg transition shadow-sm active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Send via WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Paper Canvas Background (Simulates realistic desk preview) */}
        <div className="bg-slate-100 sm:bg-slate-200/80 p-3 sm:p-8 lg:p-12 rounded-2xl border border-slate-200 sm:border-slate-300/80 overflow-x-auto flex justify-center">
          {/* Authentic A4 Paper Sheet (Constrained to standard A4 proportion ~800px) */}
          <div 
            id="quotation-printable-area" 
            className="w-full max-w-[800px] min-h-[1050px] bg-white text-slate-900 p-8 sm:p-12 shadow-2xl ring-1 ring-slate-900/10 rounded-sm mx-auto flex flex-col justify-between"
          >
            <div>
              {/* Letterhead */}
              <div className="border-b-2 border-slate-900 pb-5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-200 shadow bg-slate-900 flex-shrink-0">
                    <img 
                      src="/images/lakshman-avatar.png" 
                      alt="Lt. Col. Lakshman Gunathilaka"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/lakshman-portrait.jpg';
                      }}
                    />
                  </div>
                  <div>
                    <h1 className="text-xl sm:text-2xl font-serif font-black tracking-tight text-slate-900 leading-tight">
                      LT. COL. M.D. LAKSHMAN GUNATHILAKA
                    </h1>
                    <p className="text-xs font-semibold text-blue-900 tracking-wide mt-0.5">
                      M.Ed (Peradeniya) • PGDC (Colombo) • PGDE • B.A. • Dip in Psychology
                    </p>
                    <p className="text-[11px] text-slate-600 mt-0.5">
                      In-Service Advisor in Psychosocial Intervention & Counseling • National Trainer (MOE)
                    </p>
                  </div>
                </div>

                <div className="text-right text-xs space-y-0.5">
                  <p className="font-bold text-slate-900">No: 64, Anagarika Dharmapala Mw, Kandy</p>
                  <p className="text-slate-600">Phone: {PROFILE_DATA.personal.phone}</p>
                  <p className="text-slate-600">Email: {PROFILE_DATA.personal.email}</p>
                  <span className="inline-block bg-slate-100 font-mono text-[11px] font-bold px-2 py-0.5 rounded border border-slate-300 mt-1">
                    REF: {quoteReference}
                  </span>
                </div>
              </div>

              {/* Client & Date Info */}
              <div className="grid grid-cols-2 gap-4 py-5 text-xs border-b border-slate-200">
                <div>
                  <span className="text-slate-500 font-semibold uppercase tracking-wider text-[10px] block">Prepared For:</span>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">{clientName || 'Valued Institution'}</p>
                  <p className="text-slate-700">Attn: {contactPerson || 'Management / Principal'}</p>
                  <p className="text-slate-600">Contact: {contactPhone || 'Provided upon booking'}</p>
                </div>
                <div className="text-right">
                  <span className="text-slate-500 font-semibold uppercase tracking-wider text-[10px] block">Quotation Details:</span>
                  <p className="text-slate-700 mt-0.5"><span className="font-semibold">Issue Date:</span> {currentDateStr}</p>
                  <p className="text-slate-700"><span className="font-semibold">Validity:</span> 30 Calendar Days</p>
                  <p className="text-slate-700"><span className="font-semibold">Venue Target:</span> {selectedLocation.label}</p>
                </div>
              </div>

              {/* Itemized Table - Balanced A4 columns */}
              <div className="py-5">
                <table className="w-full text-xs text-left table-fixed">
                  <thead>
                    <tr className="border-b-2 border-slate-200 text-slate-600 uppercase tracking-wider font-semibold text-[11px]">
                      <th className="py-2.5 w-[50%]">Item & Description</th>
                      <th className="py-2.5 text-center w-[20%]">Duration / Vol</th>
                      <th className="py-2.5 text-right w-[15%]">Unit Rate</th>
                      <th className="py-2.5 text-right w-[15%]">Subtotal (LKR)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-3 pr-3">
                        <p className="font-bold text-slate-900">{selectedProgram.label}</p>
                        <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                          Comprehensive training conducted by Lt. Col. M.D. Lakshman Gunathilaka including interactive soft skills exercises and leadership simulation.
                        </p>
                      </td>
                      <td className="py-3 text-center text-slate-700">{participantsCount} Pax ({selectedProgram.defaultDuration})</td>
                      <td className="py-3 text-right text-slate-700">Standard</td>
                      <td className="py-3 text-right font-mono font-semibold text-slate-900">Rs. {baseFee.toLocaleString()}</td>
                    </tr>

                    {locationFee > 0 && (
                      <tr>
                        <td className="py-3 pr-3">
                          <p className="font-bold text-slate-900">Travel & Logistical Allowance</p>
                          <p className="text-[11px] text-slate-500">{selectedLocation.label}</p>
                        </td>
                        <td className="py-3 text-center text-slate-700">Roundtrip</td>
                        <td className="py-3 text-right text-slate-700">Standard</td>
                        <td className="py-3 text-right font-mono font-semibold text-slate-900">Rs. {locationFee.toLocaleString()}</td>
                      </tr>
                    )}

                    {certFee > 0 && (
                      <tr>
                        <td className="py-3 pr-3">
                          <p className="font-bold text-slate-900">Authorized Participation Certificates</p>
                          <p className="text-[11px] text-slate-500">Co-signed official certificate of completion for all trainees.</p>
                        </td>
                        <td className="py-3 text-center text-slate-700">{participantsCount} Units</td>
                        <td className="py-3 text-right text-slate-700">Rs. 250</td>
                        <td className="py-3 text-right font-mono font-semibold text-slate-900">Rs. {certFee.toLocaleString()}</td>
                      </tr>
                    )}

                    {workbookFee > 0 && (
                      <tr>
                        <td className="py-3 pr-3">
                          <p className="font-bold text-slate-900">Curated Soft Skills & Psychological Guidebook</p>
                          <p className="text-[11px] text-slate-500">Resource manual authored for the Ministry of Education guidance unit.</p>
                        </td>
                        <td className="py-3 text-center text-slate-700">{participantsCount} Units</td>
                        <td className="py-3 text-right text-slate-700">Rs. 400</td>
                        <td className="py-3 text-right font-mono font-semibold text-slate-900">Rs. {workbookFee.toLocaleString()}</td>
                      </tr>
                    )}

                    {assessFee > 0 && (
                      <tr>
                        <td className="py-3 pr-3">
                          <p className="font-bold text-slate-900">Pre & Post Psychological Analytics Assessment</p>
                          <p className="text-[11px] text-slate-500">Diagnostic evaluation report summarizing behavioral shifts and group dynamics.</p>
                        </td>
                        <td className="py-3 text-center text-slate-700">1 Report</td>
                        <td className="py-3 text-right text-slate-700">Flat Rate</td>
                        <td className="py-3 text-right font-mono font-semibold text-slate-900">Rs. {assessFee.toLocaleString()}</td>
                      </tr>
                    )}

                    {followUpFee > 0 && (
                      <tr>
                        <td className="py-3 pr-3">
                          <p className="font-bold text-slate-900">1-Month Follow-Up Progress Review</p>
                          <p className="text-[11px] text-slate-500">Structured coaching review to ensure habit persistence and organizational integration.</p>
                        </td>
                        <td className="py-3 text-center text-slate-700">1 Session</td>
                        <td className="py-3 text-right text-slate-700">Flat Rate</td>
                        <td className="py-3 text-right font-mono font-semibold text-slate-900">Rs. {followUpFee.toLocaleString()}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Total & Terms */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t-2 border-slate-900 text-xs">
                <div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-2 text-[11px]">Terms & Protocols</h4>
                  <ul className="list-disc pl-4 space-y-1 text-slate-600 text-[11px]">
                    <li>Dates must be confirmed with an advance notice of at least 7 to 14 days.</li>
                    <li>Multimedia projector, whiteboard, and audio setup to be provided by host client.</li>
                    <li>Professional psychological ethics, privacy, and confidentiality are strictly maintained.</li>
                    <li>Payment details: Cheque or direct transfer upon official invoice submission.</li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-right space-y-1">
                  <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider block">Grand Total (Nett Payable)</span>
                  <div className="text-2xl sm:text-3xl font-black text-slate-950 font-mono">
                    LKR {totalEstimate.toLocaleString()} /=
                  </div>
                  <p className="text-[10px] text-slate-500">All prices quoted in Sri Lankan Rupees.</p>
                </div>
              </div>
            </div>

            {/* Signature & Endorsement */}
            <div className="pt-8 flex justify-between items-end text-xs border-t border-slate-200 mt-6">
              <div>
                <p className="font-serif font-bold text-slate-900 text-sm">Lt. Col. M.D. Lakshman Gunathilaka</p>
                <p className="text-[11px] text-slate-600">Senior Psychological Counselor & National Trainer</p>
                <p className="text-[10px] text-slate-400 font-mono">Verified Digital Proposal • Reference: {quoteReference}</p>
              </div>
              <div className="text-right">
                <div className="w-36 border-b border-slate-400 mb-1"></div>
                <p className="text-[11px] text-slate-500">Authorized Signature & Seal</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
