'use client';

import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  Building, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  MessageSquare, 
  AlertCircle,
  FileCheck,
  ShieldAlert,
  ShieldCheck,
  Send,
  MapPin,
  Sparkles,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PROFILE_DATA } from '@/data/profileData';

interface BookingSlot {
  time: string;
  label: string;
  period: 'Morning' | 'Afternoon' | 'Evening';
}

export default function BookingCalendar() {
  const [currentYear, setCurrentYear] = useState<number>(2026);
  const [currentMonth, setCurrentMonth] = useState<number>(10); // November
  const [selectedDate, setSelectedDate] = useState<number | null>(12);
  const [selectedSlot, setSelectedSlot] = useState<string>('09:30 AM - 11:00 AM');
  const [sessionType, setSessionType] = useState<string>('clinical-individual');
  const [sessionMode, setSessionMode] = useState<'kandy-office' | 'colombo-clinic' | 'client-venue' | 'online'>('kandy-office');
  
  // Form fields
  const [clientName, setClientName] = useState('');
  const [clientOrg, setClientOrg] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [topicDescription, setTopicDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);
  const [confirmedBookingId, setConfirmedBookingId] = useState<string>('');

  // Dummy pre-booked dates to make calendar realistic
  const bookedDates = [3, 7, 8, 14, 15, 21, 28];
  const limitedDates = [5, 10, 12, 17, 24];

  const slots: BookingSlot[] = [
    { time: '08:30 AM - 10:00 AM', label: 'Morning Slot 1', period: 'Morning' },
    { time: '10:30 AM - 12:00 PM', label: 'Morning Slot 2', period: 'Morning' },
    { time: '02:00 PM - 03:30 PM', label: 'Afternoon Slot 1', period: 'Afternoon' },
    { time: '04:00 PM - 05:30 PM', label: 'Afternoon Slot 2', period: 'Afternoon' },
    { time: '06:00 PM - 07:30 PM', label: 'Evening Urgent Slot', period: 'Evening' },
  ];

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const sessionTypeLabels: Record<string, { title: string; category: string; badge: string }> = {
    'clinical-individual': { title: 'Individual Psychological Counseling', category: 'Clinical Practice', badge: '1-on-1' },
    'teen-adolescent': { title: 'Teenager & Youth Guidance', category: 'Adolescent Care', badge: 'Youth' },
    'marriage-family': { title: 'Marriage & Family Relations', category: 'Family Systems', badge: 'Couples' },
    'school-leadership': { title: 'School Prefects Leadership Camp', category: 'Educational', badge: 'Bootcamp' },
    'corporate-training': { title: 'Corporate Executive Soft Skills', category: 'Corporate', badge: 'Executive' },
    'public-sector': { title: 'SLEAS / Principal Service Training', category: 'Government MOE', badge: 'Public Sector' },
    'post-conflict-trauma': { title: 'Armed Forces & Police Trauma/PTSD', category: 'Specialized', badge: 'Confidential' },
  };

  const sessionModeLabels: Record<string, { label: string; locationShort: string; iconTag: string }> = {
    'kandy-office': { label: 'In-Person: Kandy Clinic (No: 64, Dharmapala Mawatha)', locationShort: 'Kandy Clinic', iconTag: 'In-Person' },
    'client-venue': { label: 'On-Site: At Client Organization / School', locationShort: 'Client Premises', iconTag: 'On-Site' },
    'colombo-clinic': { label: 'Colombo Session (By prior arrangement)', locationShort: 'Colombo Session', iconTag: 'Special Booking' },
    'online': { label: 'Confidential Online Video (Zoom / Google Meet)', locationShort: 'Virtual Video', iconTag: 'Encrypted Video' },
  };

  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedDate(null);
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedDate(null);
  };

  const handleDateClick = (day: number) => {
    if (bookedDates.includes(day)) return;
    setSelectedDate(day);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !clientName || !clientPhone) {
      alert('Please fill in your name, contact phone number, and select an available date.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const bookingId = `LG-BK-${currentYear}${currentMonth + 1}${selectedDate}-${Math.floor(1000 + Math.random() * 9000)}`;
      setConfirmedBookingId(bookingId);
      setIsSubmitting(false);
      setBookingConfirmed(true);

      // Trigger celebration
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 600);
  };

  const getWhatsAppBookingUrl = () => {
    const formattedDate = `${selectedDate} ${monthNames[currentMonth]} ${currentYear}`;
    const message = `Hello Lt. Col. Lakshman Gunathilaka,\n\nI would like to confirm my consultation/training appointment.\n\n*Reference:* ${confirmedBookingId || 'Inquiry'}\n*Name:* ${clientName}\n*Organization/School:* ${clientOrg || 'N/A'}\n*Phone:* ${clientPhone}\n*Date:* ${formattedDate}\n*Time Slot:* ${selectedSlot}\n*Session Type:* ${sessionTypeLabels[sessionType]?.title || sessionType}\n*Mode:* ${sessionModeLabels[sessionMode]?.locationShort || sessionMode}\n*Notes:* ${topicDescription || 'Initial Assessment'}\n\nPlease confirm availability. Thank you!`;
    return `https://wa.me/94718401434?text=${encodeURIComponent(message)}`;
  };

  const totalDays = daysInMonth(currentYear, currentMonth);
  const startDay = firstDayOfMonth(currentYear, currentMonth);

  const currentSession = sessionTypeLabels[sessionType] || sessionTypeLabels['clinical-individual'];
  const currentMode = sessionModeLabels[sessionMode] || sessionModeLabels['kandy-office'];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
      {/* Header bar */}
      <div className="bg-gradient-to-r from-[#0B192C] via-[#1E3E62] to-[#0B192C] text-white p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs uppercase tracking-wider text-amber-300 font-bold font-mono">
                Official Appointment Desk
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-black tracking-tight">
              Book a Consultation or Workshop
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
              Select your preferred date, session slot, and mode. Appointments are managed directly under the personal supervision of Lt. Col. M.D. Lakshman Gunathilaka.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/20 text-xs flex flex-col gap-1 text-slate-200 shadow-sm">
            <span className="font-semibold text-amber-300 text-[11px] uppercase tracking-wider">Direct Inquiries Desk</span>
            <span className="font-mono text-base font-black text-white">{PROFILE_DATA.personal.phone}</span>
            <span className="text-[11px] text-slate-300">Kandy Office • Outstation Islandwide</span>
          </div>
        </div>
      </div>

      {bookingConfirmed ? (
        <div className="p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-6 animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner ring-8 ring-emerald-50">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div>
            <span className="text-xs font-mono font-bold bg-slate-100 text-slate-700 px-3.5 py-1 rounded-full border border-slate-300">
              Reference: {confirmedBookingId}
            </span>
            <h3 className="text-2xl font-serif font-bold text-slate-900 mt-3">
              Appointment Request Reserved!
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Thank you, <span className="font-semibold text-slate-900">{clientName}</span>. Your slot for{' '}
              <span className="font-semibold text-blue-900">
                {selectedDate} {monthNames[currentMonth]} {currentYear} ({selectedSlot})
              </span>{' '}
              has been recorded.
            </p>
          </div>

          {/* Appointment Card Preview */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-left text-xs space-y-3 shadow-sm">
            <div className="flex justify-between items-center border-b border-slate-200 pb-2">
              <span className="text-slate-500">Service Category:</span>
              <span className="font-semibold text-slate-800">{currentSession.title}</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-200 pb-2">
              <span className="text-slate-500">Location / Mode:</span>
              <span className="font-semibold text-slate-800">{currentMode.label}</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-200 pb-2">
              <span className="text-slate-500">Primary Contact:</span>
              <span className="font-semibold text-slate-800">{clientPhone}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500">Lead Consultant:</span>
              <span className="font-bold text-blue-950">Lt. Col. M.D. Lakshman Gunathilaka</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition text-sm active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Confirm on WhatsApp Now</span>
            </a>
            <button
              onClick={() => {
                setBookingConfirmed(false);
                setSelectedDate(null);
              }}
              className="px-5 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 transition text-sm font-medium"
            >
              Book Another Slot
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left 6 Columns: Interactive Minimalist Calendar */}
            <div className="lg:col-span-6 space-y-5">
              
              {/* Month Navigation */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center font-bold border border-slate-200">
                    <CalendarIcon className="w-4 h-4 text-slate-800" />
                  </div>
                  <div>
                    <h3 className="font-serif font-black text-slate-900 text-xl tracking-tight leading-none">
                      {monthNames[currentMonth]} {currentYear}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Select an available date below
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 bg-slate-50 p-1 rounded-xl border border-slate-200">
                  <button
                    type="button"
                    onClick={handlePrevMonth}
                    className="w-8 h-8 rounded-lg hover:bg-white text-slate-600 hover:text-slate-900 flex items-center justify-center transition shadow-sm"
                    title="Previous Month"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextMonth}
                    className="w-8 h-8 rounded-lg hover:bg-white text-slate-600 hover:text-slate-900 flex items-center justify-center transition shadow-sm"
                    title="Next Month"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Day Headers */}
              <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                <span>Sun</span>
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
              </div>

              {/* Minimalist Day Cells Grid */}
              <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
                {/* Empty offset padding days */}
                {Array.from({ length: startDay }).map((_, i) => (
                  <div key={`empty-${i}`} className="h-11 sm:h-12 rounded-xl bg-slate-50/30" />
                ))}

                {/* Actual month days */}
                {Array.from({ length: totalDays }).map((_, i) => {
                  const day = i + 1;
                  const isBooked = bookedDates.includes(day);
                  const isLimited = limitedDates.includes(day);
                  const isSelected = selectedDate === day;

                  return (
                    <button
                      key={`day-${day}`}
                      type="button"
                      disabled={isBooked}
                      onClick={() => handleDateClick(day)}
                      className={`h-11 sm:h-12 rounded-xl p-1 relative flex flex-col items-center justify-center transition-all duration-150 text-xs ${
                        isSelected
                          ? 'bg-[#0B192C] text-white shadow-lg ring-2 ring-[#0B192C] ring-offset-2 scale-[1.03] z-10 font-bold'
                          : isBooked
                          ? 'text-slate-300 bg-transparent cursor-not-allowed select-none line-through'
                          : 'bg-white hover:bg-slate-100 hover:text-slate-950 text-slate-800 border border-slate-200/80 hover:border-slate-300 shadow-sm font-medium'
                      }`}
                    >
                      <span className="text-sm font-semibold leading-none">
                        {day}
                      </span>
                      {isLimited && !isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1" title="Limited slots" />
                      )}
                      {isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-300 mt-1" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Clean Minimalist Legend */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-3 border-t border-slate-100">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-md bg-white border border-slate-300 shadow-2xs" />
                  <span className="text-[11px] font-medium text-slate-600">Available Date</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="text-[11px] font-medium text-slate-600">Limited (2 Slots)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] text-slate-300 line-through font-medium">Fully Booked</span>
                </div>
              </div>

              {/* Dynamic Live Appointment Ticket / Summary Card (Moved under Calendar) */}
              <div className="bg-gradient-to-br from-[#0B192C] via-[#14263C] to-[#0B192C] text-white rounded-2xl p-5 shadow-xl border border-slate-700/60 relative overflow-hidden mt-2">
                {/* Subtle decorative glow */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between border-b border-white/10 pb-3 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 font-bold">
                      Session Ticket Preview
                    </span>
                  </div>
                  <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded font-mono text-slate-300 border border-white/10">
                    SLIPC Certified
                  </span>
                </div>

                {/* Live Card Details */}
                <div className="mt-3.5 space-y-3 relative z-10">
                  {/* Selected Service */}
                  <div>
                    <span className="text-[10px] uppercase text-slate-400 tracking-wider block font-semibold">
                      Selected Engagement:
                    </span>
                    <p className="font-serif font-bold text-white text-sm mt-0.5 leading-snug">
                      {currentSession.title}
                    </p>
                    <span className="inline-block mt-1 text-[10px] font-medium bg-blue-900/70 text-blue-200 px-2 py-0.5 rounded border border-blue-700/60">
                      {currentSession.category} • {currentSession.badge}
                    </span>
                  </div>

                  {/* Date & Time Live Chips */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
                    <div className="bg-white/5 p-2 rounded-lg border border-white/10">
                      <span className="text-[10px] text-slate-400 flex items-center gap-1">
                        <CalendarIcon className="w-3 h-3 text-amber-300" />
                        Selected Date
                      </span>
                      <p className="font-bold text-white text-xs mt-0.5 truncate">
                        {selectedDate ? `${selectedDate} ${monthNames[currentMonth]} ${currentYear}` : 'Choose date'}
                      </p>
                    </div>
                    <div className="bg-white/5 p-2 rounded-lg border border-white/10">
                      <span className="text-[10px] text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-amber-300" />
                        Reserved Time
                      </span>
                      <p className="font-bold text-white text-xs mt-0.5 truncate">
                        {selectedSlot}
                      </p>
                    </div>
                  </div>

                  {/* Mode / Venue */}
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      Venue Target:
                    </span>
                    <span className="font-semibold text-slate-200 truncate max-w-[210px]">
                      {currentMode.locationShort}
                    </span>
                  </div>

                  {/* Lead Consultant */}
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Lead Consultant:</span>
                    <span className="font-bold text-amber-300">Lt. Col. M.D. Lakshman Gunathilaka</span>
                  </div>
                </div>
              </div>

              {/* Booking Advisory & Clinic Info Banner */}
              <div className="bg-slate-50/90 rounded-2xl p-4 border border-slate-200/80 text-xs text-slate-600 space-y-1.5">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-[11px]">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span>Clinical Office: No: 64, Dharmapala Mw, Kandy</span>
                </div>
                <p className="text-[11px] leading-relaxed text-slate-500">
                  School bootcamps and corporate workshops conducted on-site islandwide. Advance notice of 7–14 days recommended.
                </p>
              </div>

            </div>

            {/* Right 6 Columns: Time Slots & Client Particulars Form */}
            <div className="lg:col-span-6 space-y-5">
              
              {/* Time Slots Selection - Calendly / Cal.com Single-Column List */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-700" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      Available Time Slots
                    </span>
                  </div>
                  {selectedDate && (
                    <span className="text-[11px] text-slate-700 font-semibold bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                      {selectedDate} {monthNames[currentMonth]} {currentYear}
                    </span>
                  )}
                </div>

                <div className="space-y-2 pt-1">
                  {slots.map((s) => {
                    const isSlotSelected = selectedSlot === s.time;
                    return (
                      <button
                        key={s.time}
                        type="button"
                        onClick={() => setSelectedSlot(s.time)}
                        className={`w-full px-4 py-3 rounded-xl text-xs flex items-center justify-between transition-all duration-150 border ${
                          isSlotSelected
                            ? 'border-[#0B192C] bg-[#0B192C] text-white shadow-md ring-2 ring-[#0B192C] ring-offset-1 font-bold scale-[1.01]'
                            : 'border-slate-200/90 bg-white hover:border-slate-300 hover:bg-slate-50/90 text-slate-800 shadow-2xs'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className={`w-2 h-2 rounded-full ${isSlotSelected ? 'bg-amber-300' : 'bg-slate-300'}`} />
                          <span className={`text-sm tracking-tight ${isSlotSelected ? 'font-bold text-white' : 'font-semibold text-slate-900'}`}>
                            {s.time}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full border ${
                            isSlotSelected 
                              ? 'bg-white/15 text-white border-white/20' 
                              : 'bg-slate-100 text-slate-600 border-slate-200/80'
                          }`}>
                            {s.period}
                          </span>
                          {isSlotSelected && (
                            <Check className="w-4 h-4 text-amber-300 font-bold" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Client Particulars Form */}
              <div className="bg-slate-50/80 p-5 sm:p-6 rounded-2xl border border-slate-200 space-y-4 shadow-sm">
                <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-2 border-b border-slate-200 pb-2">
                  <User className="w-4 h-4 text-amber-600" />
                  Client & Engagement Particulars
                </h3>

                {/* Program Category */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Type of Engagement *
                  </label>
                  <select
                    value={sessionType}
                    onChange={(e) => setSessionType(e.target.value)}
                    className="w-full text-xs bg-white border border-slate-300 rounded-xl p-2.5 text-slate-800 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none shadow-sm"
                  >
                    <option value="clinical-individual">Individual Psychological & Mental Counseling</option>
                    <option value="teen-adolescent">Teenager Maladjustment / Substance Counseling</option>
                    <option value="marriage-family">Marriage & Family Relationship Guidance</option>
                    <option value="school-leadership">School Prefects & Leadership Skills Workshop</option>
                    <option value="corporate-training">Corporate Executive Soft Skills & Team Alignment</option>
                    <option value="public-sector">Government / SLEAS / Principal Service Training</option>
                    <option value="post-conflict-trauma">Armed Forces / Police Trauma & PTSD Consultation</option>
                  </select>
                </div>

                {/* Session Mode */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Venue / Mode *
                  </label>
                  <select
                    value={sessionMode}
                    onChange={(e) => setSessionMode(e.target.value as any)}
                    className="w-full text-xs bg-white border border-slate-300 rounded-xl p-2.5 text-slate-800 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none shadow-sm"
                  >
                    <option value="kandy-office">In-Person: Kandy Clinic (No: 64, Dharmapala Mawatha)</option>
                    <option value="client-venue">On-Site: At Client Organization / School Premises</option>
                    <option value="colombo-clinic">Colombo Session (By prior arrangement)</option>
                    <option value="online">Confidential Online Video Session (Zoom / Meet)</option>
                  </select>
                </div>

                {/* Client Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name / Contact Person *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. / Mr. / Mrs. Perera"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full text-xs bg-white border border-slate-300 rounded-xl p-2.5 text-slate-800 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none shadow-sm"
                  />
                </div>

                {/* Organization / School */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Organization / School (If applicable)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. MAS Holdings / Royal College / Private"
                    value={clientOrg}
                    onChange={(e) => setClientOrg(e.target.value)}
                    className="w-full text-xs bg-white border border-slate-300 rounded-xl p-2.5 text-slate-800 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none shadow-sm"
                  />
                </div>

                {/* Phone / WhatsApp & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mobile / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="077-XXXXXXX"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full text-xs bg-white border border-slate-300 rounded-xl p-2.5 text-slate-800 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@email.com"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="w-full text-xs bg-white border border-slate-300 rounded-xl p-2.5 text-slate-800 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none shadow-sm"
                    />
                  </div>
                </div>

                {/* Specific Notes */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Brief Overview of Needs / Case Notes
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Provide context regarding the counseling focus, participant count, or workshop goals..."
                    value={topicDescription}
                    onChange={(e) => setTopicDescription(e.target.value)}
                    className="w-full text-xs bg-white border border-slate-300 rounded-xl p-2.5 text-slate-800 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none resize-none shadow-sm"
                  />
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || !selectedDate}
                    className="w-full bg-[#0B192C] hover:bg-blue-950 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-xs disabled:opacity-50 active:scale-98"
                  >
                    {isSubmitting ? (
                      <span>Registering Reservation...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-amber-400" />
                        <span>Confirm & Reserve Slot for {selectedDate ? `${selectedDate} ${monthNames[currentMonth]}` : 'Selected Date'}</span>
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-slate-500 text-center mt-2.5 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Strict confidentiality guaranteed under SLIPC psychological ethics.</span>
                  </p>
                </div>

              </div>

            </div>

          </div>
        </form>
      )}
    </div>
  );
}
