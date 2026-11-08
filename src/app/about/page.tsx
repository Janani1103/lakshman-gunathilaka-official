'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Award, 
  GraduationCap, 
  ShieldCheck, 
  BookOpen, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  Download, 
  FileCheck, 
  ChevronRight, 
  ChevronDown,
  ExternalLink,
  Compass,
  Phone,
  Mail,
  Building2,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
  MessageCircle,
  ArrowRight,
  User,
  Users,
  Briefcase,
  HeartPulse,
  HeartHandshake,
  Globe,
  Lock
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROFILE_DATA } from '@/data/profileData';
import { ScrollReveal, StaggerContainer, StaggerItem, ScrollScale } from '@/components/ScrollAnimations';

const EDUCATION_MILESTONES = [
  {
    originalIndex: 0,
    degree: "Master of Education (M.Ed)",
    sinhalaDegree: "අධ්‍යාපනපති පශ්චාත් උපාධිය",
    institution: "University of Peradeniya",
    sinhalaInstitution: "පේරාදෙණිය විශ්වවිද්‍යාලය",
    year: "2010",
    category: "peradeniya" as const,
    levelBadge: "Postgraduate Master's Degree",
    levelColor: "bg-amber-100 text-amber-950 border-amber-300",
    icon: GraduationCap,
    iconColor: "text-amber-600 bg-amber-50 border-amber-200",
    dissertation: "An action Research to Modify the Behavior of teenagers with Maladjusted Behavior including Drug addiction through Psychological Counseling.",
    researchMeta: {
      field: "Adolescent Behavioral Psychology & Anti-Addiction",
      faculty: "Faculty of Education, University of Peradeniya",
      methodology: "Action Research, Cognitive Behavioral Interventions, School Counseling Fieldwork",
      practicalImpact: "Forms the operational counseling protocol utilized today in school behavioral remediation, drug addiction diversion programs, and prefects guild psychological conditioning across Sri Lanka."
    }
  },
  {
    originalIndex: 1,
    degree: "Postgraduate Diploma in Guidance and Counseling (PGDC)",
    sinhalaDegree: "මඟපෙන්වීම හා උපදේශනය පිළිබඳ පශ්චාත් උපාධි ඩිප්ලෝමාව",
    institution: "University of Colombo",
    sinhalaInstitution: "කොළඹ විශ්වවිද්‍යාලය",
    year: "2008 / 2009",
    category: "colombo" as const,
    levelBadge: "Postgraduate Defense Research",
    levelColor: "bg-blue-100 text-blue-950 border-blue-300",
    icon: ShieldCheck,
    iconColor: "text-blue-600 bg-blue-50 border-blue-200",
    notes: "Postgraduate Defense & Police Research",
    dissertation: "A survey to Identify the counseling needs of armed Forces and Police Personnel in the Post Conflict Era.",
    researchMeta: {
      field: "Military & Police Mental Health, Post-Conflict Trauma",
      faculty: "Faculty of Graduate Studies, University of Colombo",
      methodology: "Empirical Survey, Post-Conflict Armed Forces & Police Field Assessment",
      practicalImpact: "Direct foundation for post-trauma stress rehabilitation, military peer counseling, and executive high-pressure resilience workshops for defense forces, state audit officers, and corporate leadership."
    }
  },
  {
    originalIndex: 2,
    degree: "Postgraduate Diploma in Education (PGDE)",
    sinhalaDegree: "අධ්‍යාපන පශ්චාත් උපාධි ඩිප්ලෝමාව",
    institution: "University of Peradeniya",
    sinhalaInstitution: "පේරාදෙණිය විශ්වවිද්‍යාලය",
    year: "2002 / 2003",
    category: "peradeniya" as const,
    levelBadge: "Postgraduate Diploma with Merit",
    levelColor: "bg-emerald-100 text-emerald-950 border-emerald-300",
    notes: "Awarded with Merit",
    icon: Award,
    iconColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
    summary: "Advanced educational philosophy, institutional administration, student cognitive guidance, and educational psychology."
  },
  {
    originalIndex: 3,
    degree: "Certificate in Professional Skills for Educational Administrators (CCPSD-III)",
    sinhalaDegree: "අධ්‍යාපන පරිපාලකයින් සඳහා වෘත්තීය නිපුණතා සංවර්ධනය",
    institution: "Peradeniya National College of Education",
    sinhalaInstitution: "පේරාදෙණිය ජාතික අධ්‍යාපන විද්‍යාපීඨය",
    year: "2009",
    category: "colleges" as const,
    levelBadge: "Executive Educational Administration",
    levelColor: "bg-indigo-100 text-indigo-950 border-indigo-300",
    icon: Building2,
    iconColor: "text-indigo-600 bg-indigo-50 border-indigo-200",
    summary: "Specialized training for In-Service Advisors, educational administration, zonal supervision, and institutional ethics."
  },
  {
    originalIndex: 4,
    degree: "Bachelor of Arts (B.A. General)",
    sinhalaDegree: "ශාස්ත්‍රවේදී සාමාන්‍ය උපාධිය",
    institution: "University of Peradeniya",
    sinhalaInstitution: "පේරාදෙණිය විශ්වවිද්‍යාලය",
    year: "1997",
    category: "peradeniya" as const,
    levelBadge: "Undergraduate Degree",
    levelColor: "bg-slate-100 text-slate-800 border-slate-300",
    icon: BookOpen,
    iconColor: "text-slate-700 bg-slate-100 border-slate-200",
    summary: "Foundational university degree in humanities and social sciences at the historic campus of Peradeniya."
  },
  {
    originalIndex: 5,
    degree: "National Diploma in Teaching",
    sinhalaDegree: "ඉගැන්වීම පිළිබඳ ජාතික ඩිප්ලෝමාව",
    institution: "Hapitigama National College of Education",
    sinhalaInstitution: "හාපිටිගම ජාතික අධ්‍යාපන විද්‍යාපීඨය",
    year: "1988 - 1990",
    category: "colleges" as const,
    levelBadge: "Foundational Teacher Commission",
    levelColor: "bg-slate-100 text-slate-800 border-slate-300",
    icon: FileCheck,
    iconColor: "text-slate-700 bg-slate-100 border-slate-200",
    summary: "Three years of intensive residential pedagogical conditioning, classroom psychology, and national teaching methodology."
  }
];

const APPOINTMENTS_DATA = [
  {
    id: 'moe-in-service',
    role: "In-Service Advisor in Psychosocial Intervention & Counseling",
    sinhalaRole: "මහනුවර අධ්‍යාපන කලාපයේ උපදේශනය පිළිබඳ ගුරු උපදේශක",
    organization: "Kandy Education Zone, Ministry of Education",
    period: "Present / Long-standing",
    isActive: true,
    category: "State Education Leadership",
    icon: Building2,
    iconColor: "text-blue-600 bg-blue-50 border-blue-200",
    mandate: "Directing student psychosocial programs, guiding school counselors, overseeing crisis resolution, and formulating behavioral intervention strategies across secondary colleges in the Kandy Education Zone.",
    milestone: "Formulated and deployed structured crisis de-escalation protocols and peer guidance networks serving tens of thousands of school students in the Central Province.",
    scopePill: "Zonal School Network & Teachers",
    highlightStat: "Central Province Jurisdiction"
  },
  {
    id: 'moe-tot',
    role: "National Trainer of Trainers (ToT) in Counseling & Soft Skills",
    sinhalaRole: "පුද්ගල සංවර්ධන හා නායකත්ව කුසලතා ජාතික පුහුණුකරු",
    organization: "Guidance & Counseling Unit, Ministry of Education",
    period: "Continuous / National Scope",
    isActive: true,
    category: "National Curriculum & Training",
    icon: BookOpen,
    iconColor: "text-amber-600 bg-amber-50 border-amber-200",
    mandate: "Co-author and lead trainer for the official National Soft Skills Resource Manual. Training master trainers for schools, vocational colleges, and public administrative departments island-wide.",
    milestone: "Direct authorial contribution to the Ministry of Education's standardized national soft skills syllabus, certifying hundreds of master trainers nationwide.",
    scopePill: "Island-wide Master Trainers & Educators",
    highlightStat: "National Resource Manual Co-Author"
  },
  {
    id: 'mahaweli-ncoe',
    role: "Visiting Lecturer in Counseling",
    sinhalaRole: "මහවැලි ජාතික අධ්‍යාපන විද්‍යාපීඨ බාහිර කථිකාචාර්ය",
    organization: "Mahaweli National College of Education, Polgolla",
    period: "Visiting Faculty",
    isActive: false,
    category: "Teacher Educator Faculty",
    icon: GraduationCap,
    iconColor: "text-purple-600 bg-purple-50 border-purple-200",
    mandate: "Lecturing pre-service teacher trainees in educational psychology, student guidance, cognitive development, and classroom emotional management.",
    milestone: "Mentored multiple generations of pre-service graduate teachers on identifying adolescent emotional trauma, behavioral withdrawal, and classroom psychological support.",
    scopePill: "Pre-Service Teacher Trainees",
    highlightStat: "Pre-Service Teacher Faculty"
  },
  {
    id: 'ncc-defense',
    role: "Course Coordinator – Counseling Course for Armed Forces & Police",
    sinhalaRole: "ත්‍රිවිධ හමුදා හා පොලිස් උපදේශන පාඨමාලා සම්බන්ධීකාරක",
    organization: "National Cadet Corps (NCC)",
    period: "2009 / Strategic Defense Mission",
    isActive: false,
    category: "Military & Police Mental Resilience",
    icon: ShieldCheck,
    iconColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
    mandate: "Formulated, coordinated, and directed mental resilience and post-conflict psychological support curricula for armed forces personnel and police officers.",
    milestone: "Pioneered specialized military peer-support modules and post-conflict psychosocial reintegration training under military operational command.",
    scopePill: "Army, Navy, Air Force & Police Personnel",
    highlightStat: "Armed Forces & Police Curriculum"
  },
  {
    id: 'public-admin-inductions',
    role: "Lead Trainer for Graduate Inductions",
    sinhalaRole: "රාජ්‍ය සේවා උපාධිධාරී නායකත්ව ප්‍රධාන පුහුණුකරු",
    organization: "Ministry of Public Administration / Government Sector",
    period: "2004, 2006, 2009, 2015, 2019, 2022, 2023",
    isActive: false,
    category: "Civil Service & Public Administration",
    icon: Users,
    iconColor: "text-indigo-600 bg-indigo-50 border-indigo-200",
    mandate: "Directing orientation, leadership mindset, emotional stability, professional workplace ethics, and interpersonal communication training for newly appointed university graduates entering state services.",
    milestone: "Conducted high-energy residential leadership bootcamps across 7 distinct national graduate cohorts, training thousands of newly inducted civil service officers.",
    scopePill: "7 National Batches • 25,000+ Officers",
    highlightStat: "7 National Induction Cohorts"
  },
  {
    id: 'counselors-institute',
    role: "Executive Committee Member",
    sinhalaRole: "විද්වත් උපදේශකවරුන්ගේ ජාතික ආයතනයේ විධායක සභික",
    organization: "Sri Lanka Institute of Professional Counselors",
    period: "Active Governance",
    isActive: true,
    category: "Statutory Standards & Ethics",
    icon: Award,
    iconColor: "text-rose-600 bg-rose-50 border-rose-200",
    mandate: "Shaping national ethical codes, practitioner credentialing benchmarks, and continuing education protocols for registered psychological counselors in Sri Lanka.",
    milestone: "Championed strict clinical confidentiality standards, peer supervision guidelines, and practitioner licensing regulations across the island.",
    scopePill: "Registered Professional Counselors",
    highlightStat: "National Ethical Standards"
  }
];

export default function AboutPage() {
  const [activeDossierTab, setActiveDossierTab] = useState<'commission' | 'academic' | 'contact'>('commission');
  const [copiedBio, setCopiedBio] = useState(false);
  const [expandedResearch, setExpandedResearch] = useState<Record<number, boolean>>({ 0: true, 2: true });
  const [activeDeckIndex, setActiveDeckIndex] = useState<number | null>(0);

  const toggleResearch = (idx: number) => {
    setExpandedResearch((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleCopyBio = () => {
    const textToCopy = `Lt. Col. M.D. Lakshman Gunathilaka (O/3901)\nIn-Service Advisor in Psychosocial Counseling (MOE)\nSenior Psychological Counselor & National Trainer\nQualifications: M.Ed (Peradeniya), PGDC (Colombo), Dip in Psychology, GTZ Trauma Certified\nHotline: 071-8401434 | Email: mdl.gunathilaka@gmail.com\nKandy Education Zone, Sri Lanka`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedBio(true);
    setTimeout(() => setCopiedBio(false), 2500);
  };
  return (
    <div className="space-y-16 pb-20 overflow-hidden">
      
      {/* PAGE HEADER */}
      <section className="bg-gradient-to-r from-[#0B192C] via-[#1E3E62] to-[#0B192C] text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight leading-tight">
                Academic Rigor, Clinical Empathy & Military Honor
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Explore the 28-year trajectory of Lt. Col. M.D. Lakshman Gunathilaka — from postgraduate behavioral research at the University of Peradeniya to spearheading national counseling frameworks for Sri Lanka&apos;s educational, armed forces, and corporate sectors.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CORE BIOGRAPHICAL SUMMARY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
            <ScrollReveal direction="left">
              <div className="border-l-4 border-amber-500 pl-4 py-1">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                  A Rare Convergence of Disciplines
                </h2>
                <p className="text-xs text-amber-800 font-semibold uppercase tracking-wider mt-1">
                  In-Service Advisor • Senior Psychological Counselor • National Cadet Corps Officer
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <p>
                Holding the rank of <strong className="text-slate-900">Lieutenant Colonel (O/3901)</strong> in the National Cadet Corps (NCC) alongside a prestigious <strong className="text-slate-900">Master of Education (M.Ed)</strong> from the University of Peradeniya, Lt. Col. M.D. Lakshman Gunathilaka occupies a unique position in Sri Lankan counseling and leadership coaching.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p>
                As the <strong className="text-slate-900">In-Service Advisor in Psychosocial Intervention and Counseling</strong> for the Kandy Education Zone and a recognized <strong className="text-slate-900">National Trainer of Trainers</strong> under the Ministry of Education, he has co-developed national curricula—including the definitive *Soft Skills Resource Manual*—and trained multiple generations of school principals, teachers, and student prefects across the island.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <p>
                Beyond academia, his clinical acumen has anchored high-stakes community recovery missions: counseling traumatized children and school communities in the aftermath of the 2004 Indian Ocean Tsunami in Ambalangoda, managing psychosocial care for cancer patients at the General Hospital Kandy, and conducting mental resilience programs for war veterans and retired armed forces personnel through the Ranaviru Seva Authority.
              </p>
            </ScrollReveal>

            {/* Sinhala Official Card */}
            <ScrollScale delay={0.2}>
              <div className="bg-amber-50/80 border border-amber-200/90 rounded-2xl p-6 space-y-3 font-sans">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block">
                  නිල පැතිකඩ සටහන (Sinhala Profile Record)
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-800">
                  {PROFILE_DATA.personal.sinhalaProfile.roles.map((role, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-700 font-bold">•</span>
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollScale>
          </div>

          {/* Right Column: Key Details Card (5 cols) - Upgraded to Officer Digital Dossier (Idea 1) */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="right">
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden">
                
                {/* 1. Executive Card Header */}
                <div className="bg-gradient-to-r from-[#07111E] via-[#0B192C] to-[#0D213A] text-white p-5 sm:p-6 relative overflow-hidden border-b border-amber-500/20">
                  <div className="absolute -top-12 -right-12 w-44 h-44 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="relative z-10 flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="relative flex-shrink-0">
                        <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden border-2 border-amber-400/60 shadow-lg bg-slate-950">
                          <img 
                            src="/images/lakshman-avatar.png" 
                            alt="Lt. Col. Lakshman Gunathilaka"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = '/images/lakshman-portrait.jpg';
                            }}
                          />
                        </div>
                        <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-[#0B192C]" />
                        </span>
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="bg-amber-400 text-slate-950 font-mono font-black text-[10px] px-2 py-0.5 rounded shadow-xs">
                            O/3901
                          </span>
                          <span className="bg-white/10 text-amber-200 text-[10px] font-bold px-2 py-0.5 rounded border border-white/10">
                            National Trainer (MOE)
                          </span>
                        </div>
                        <h3 className="font-serif font-bold text-white text-base sm:text-lg leading-tight mt-1 truncate">
                          Lt. Col. Lakshman Gunathilaka
                        </h3>
                        <p className="text-[11px] text-slate-300 truncate mt-0.5">
                          In-Service Advisor in Psychosocial Counseling
                        </p>
                      </div>
                    </div>

                    {/* Quick Copy Bio Button */}
                    <button
                      onClick={handleCopyBio}
                      title="Copy verified summary"
                      className="bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white p-2 rounded-xl border border-white/10 transition-all flex items-center gap-1.5 text-[11px] font-medium cursor-pointer flex-shrink-0 shadow-xs"
                    >
                      {copiedBio ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-300 font-bold hidden sm:inline">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-amber-400" />
                          <span className="hidden sm:inline">Copy Bio</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* 2. Interactive Segmented Tabs */}
                <div className="bg-slate-100/90 p-1.5 border-b border-slate-200/80 flex items-center gap-1">
                  {[
                    { id: 'commission', label: 'Identity & Rank', icon: ShieldCheck },
                    { id: 'academic', label: 'Academic & Research', icon: GraduationCap },
                    { id: 'contact', label: 'Direct Access', icon: Phone },
                  ].map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeDossierTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveDossierTab(tab.id as any)}
                        className={`flex-1 py-2 px-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer ${
                          isActive
                            ? 'bg-white text-slate-900 shadow-sm border border-slate-200/80'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                        }`}
                      >
                        <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-600' : 'text-slate-400'}`} />
                        <span className="truncate">{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* 3. Dynamic Tab Content with Smooth Transitions */}
                <div className="p-5 sm:p-6 min-h-[290px] flex flex-col justify-between">
                  <AnimatePresence mode="wait">
                    {activeDossierTab === 'commission' && (
                      <motion.div
                        key="tab-commission"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-2.5 text-xs"
                      >
                        <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                          <span className="text-slate-500 font-medium">Full Name:</span>
                          <span className="font-bold text-slate-900 text-right">{PROFILE_DATA.personal.fullName}</span>
                        </div>
                        <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                          <span className="text-slate-500 font-medium">Military Commission:</span>
                          <span className="font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/70 text-right">
                            Lt. Colonel (NCC / O/3901)
                          </span>
                        </div>
                        <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                          <span className="text-slate-500 font-medium">Official Ministry Role:</span>
                          <span className="font-bold text-blue-900 text-right">In-Service Advisor, MOE</span>
                        </div>
                        <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                          <span className="text-slate-500 font-medium">Zonal Jurisdiction:</span>
                          <span className="font-semibold text-slate-800 text-right">Kandy Education Zone</span>
                        </div>
                        <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                          <span className="text-slate-500 font-medium">National Identity (NIC):</span>
                          <span className="font-mono font-bold text-slate-700">{PROFILE_DATA.personal.nic}</span>
                        </div>
                        <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                          <span className="text-slate-500 font-medium">Date of Birth:</span>
                          <span className="font-semibold text-slate-800">{PROFILE_DATA.personal.dob} (Kandy)</span>
                        </div>
                        <div className="flex items-center justify-between py-1.5">
                          <span className="text-slate-500 font-medium">Nationality & Faith:</span>
                          <span className="font-semibold text-slate-800 text-right">Sri Lankan Sinhalese • Buddhist</span>
                        </div>
                      </motion.div>
                    )}

                    {activeDossierTab === 'academic' && (
                      <motion.div
                        key="tab-academic"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-3 text-xs"
                      >
                        <div className="bg-blue-50/70 border border-blue-200/80 rounded-xl p-3 space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-blue-950 font-serif">Master of Education (M.Ed)</span>
                            <span className="bg-blue-600 text-white font-mono text-[10px] font-bold px-1.5 py-0.2 rounded">2010</span>
                          </div>
                          <p className="text-[11px] text-blue-800">University of Peradeniya</p>
                          <p className="text-[10px] text-slate-600 italic">Thesis: Behavior Modification of Teenagers with Maladjusted Behavior & Drug Addiction</p>
                        </div>

                        <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3 space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-amber-950 font-serif">Postgrad Diploma in Guidance & Counseling</span>
                            <span className="bg-amber-600 text-white font-mono text-[10px] font-bold px-1.5 py-0.2 rounded">2009</span>
                          </div>
                          <p className="text-[11px] text-amber-800">University of Colombo (PGDC)</p>
                          <p className="text-[10px] text-slate-600 italic">Thesis: Counseling Needs of Armed Forces & Police in Post-Conflict Era</p>
                        </div>

                        <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                          <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                            <span className="font-bold text-slate-800 block">GTZ Certified</span>
                            <span className="text-[10px] text-slate-500">Trauma Counseling Program</span>
                          </div>
                          <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                            <span className="font-bold text-slate-800 block">National Author</span>
                            <span className="text-[10px] text-slate-500">Soft Skills Manual (MOE)</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeDossierTab === 'contact' && (
                      <motion.div
                        key="tab-contact"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-3 text-xs"
                      >
                        <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-3 flex items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                              Direct Telephone Hotline
                            </span>
                            <a href="tel:0718401434" className="text-sm font-mono font-black text-emerald-900 hover:underline">
                              071-8401434
                            </a>
                          </div>
                          <a
                            href="tel:0718401434"
                            className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-lg text-xs font-bold transition flex items-center gap-1 shadow-xs"
                          >
                            <Phone className="w-3.5 h-3.5" />
                            <span>Call</span>
                          </a>
                        </div>

                        <div className="space-y-2 text-xs">
                          <div className="p-2.5 rounded-xl border border-slate-200/80 bg-slate-50 space-y-0.5">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Private Consultation Suite:</span>
                            <p className="text-slate-800 font-medium">No: 64, Anagarika Dharmapala Mawatha, Kandy, Sri Lanka</p>
                          </div>

                          <div className="p-2.5 rounded-xl border border-slate-200/80 bg-slate-50 space-y-0.5">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Official Bureau:</span>
                            <p className="text-slate-800 font-medium">Zonal Education Office, Kandy, Sri Lanka</p>
                          </div>

                          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200 text-[11px]">
                            <span className="text-slate-500">Official Email:</span>
                            <a href="mailto:mdl.gunathilaka@gmail.com" className="font-semibold text-blue-900 hover:underline">
                              mdl.gunathilaka@gmail.com
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 4. Bottom Quick Action Console */}
                <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-2.5">
                  <Link
                    href="/booking"
                    className="w-full sm:flex-1 bg-[#0B192C] hover:bg-blue-900 text-white font-bold py-3 px-4 rounded-xl transition flex items-center justify-center gap-2 text-xs shadow-md transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-amber-400" />
                    <span>Schedule Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href="https://wa.me/94718401434?text=Hello%20Lt.%20Col.%20Lakshman%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-3.5 rounded-xl transition flex items-center justify-center gap-1.5 text-xs shadow-xs"
                    title="Direct WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* ACADEMIC DEGREES & DISSERTATIONS - INTERACTIVE VERTICAL TIMELINE (Idea 2) */}
      <section className="bg-slate-100/70 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          
          <ScrollReveal direction="up">
            <div className="border-b border-slate-200/80 pb-6">
              <div className="max-w-3xl space-y-3">
                <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-900 border border-blue-200 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-700" />
                  <span>Higher Academic Credentials & Empirical Research</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
                  University Degrees & Research Chronology
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A 22-year academic trajectory anchoring empirical counseling interventions in adolescent psychology and post-conflict military rehabilitation.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Interactive Vertical Connecting Timeline */}
          <div className="relative pl-6 sm:pl-10 space-y-8">
            {/* Timeline Spine Line */}
            <div className="absolute left-2.5 sm:left-4.5 top-4 bottom-4 w-0.5 border-l-2 border-dashed border-amber-400/70" />

            {EDUCATION_MILESTONES.map((item) => {
              const Icon = item.icon;
              const isExpanded = !!expandedResearch[item.originalIndex];
              const hasDissertation = !!item.dissertation;

              return (
                <div key={item.originalIndex} className="relative group">
                  {/* Timeline Node Marker */}
                  <div className={`absolute -left-6 sm:-left-10 top-5 w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center border shadow-md group-hover:scale-110 transition-transform z-10 ${item.iconColor}`}>
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Milestone Card */}
                  <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 ml-4 sm:ml-6 space-y-4">
                    
                    {/* Top Row: Year, Category Badge & Honors */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-mono font-black text-xs sm:text-sm px-3 py-1 rounded-xl bg-slate-900 text-amber-300 shadow-xs">
                          {item.year}
                        </span>
                        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-lg border ${item.levelColor}`}>
                          {item.levelBadge}
                        </span>
                        {item.notes && (
                          <span className="bg-emerald-50 text-emerald-800 text-[11px] font-bold px-2.5 py-0.5 rounded-lg border border-emerald-200 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-emerald-600" />
                            <span>{item.notes}</span>
                          </span>
                        )}
                      </div>

                      <span className="text-xs font-semibold text-slate-500 font-mono">
                        Milestone {item.originalIndex + 1} of 6
                      </span>
                    </div>

                    {/* Degree Title & Institution */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                        {item.degree}
                      </h3>
                      <p className="text-xs font-bold text-amber-800 mt-0.5">
                        {item.sinhalaDegree}
                      </p>
                      <div className="flex items-center gap-2 mt-2 text-xs sm:text-sm font-semibold text-blue-900">
                        <Building2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <span>{item.institution}</span>
                        <span className="text-slate-300">•</span>
                        <span className="text-slate-500 font-normal">{item.sinhalaInstitution}</span>
                      </div>
                    </div>

                    {/* Summary for non-dissertation items */}
                    {item.summary && (
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                        {item.summary}
                      </p>
                    )}

                    {/* Dissertation & Interactive Research Drawer */}
                    {hasDissertation && item.researchMeta && (
                      <div className="pt-2">
                        <div className="bg-gradient-to-r from-blue-50/80 to-amber-50/40 border border-blue-200/80 rounded-2xl p-4 sm:p-5 space-y-3">
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <BookOpen className="w-4 h-4 text-blue-700" />
                              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-950 font-mono">
                                Groundbreaking Dissertation Study
                              </span>
                            </div>
                            <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                              Empirical Research
                            </span>
                          </div>

                          <p className="font-serif italic text-slate-900 text-sm sm:text-base leading-relaxed font-medium">
                            &ldquo;{item.dissertation}&rdquo;
                          </p>

                          {/* Toggle Button */}
                          <div className="pt-1">
                            <button
                              onClick={() => toggleResearch(item.originalIndex)}
                              className="inline-flex items-center gap-2 text-xs font-bold text-blue-900 hover:text-blue-700 bg-white/80 hover:bg-white border border-blue-200 px-3.5 py-1.5 rounded-xl transition cursor-pointer shadow-2xs"
                            >
                              <span>{isExpanded ? 'Collapse Research Abstract' : 'Explore Methodology & Modern Application'}</span>
                              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-amber-600' : ''}`} />
                            </button>
                          </div>

                          {/* Expandable Drawer */}
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden pt-3 border-t border-blue-200/60 space-y-3 text-xs"
                              >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                  <div className="bg-white p-3 rounded-xl border border-slate-200/80 space-y-0.5">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                                      Research Focus:
                                    </span>
                                    <p className="text-slate-800 font-semibold">{item.researchMeta.field}</p>
                                    <p className="text-[11px] text-slate-500">{item.researchMeta.faculty}</p>
                                  </div>

                                  <div className="bg-white p-3 rounded-xl border border-slate-200/80 space-y-0.5">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                                      Methodology & Clinical Base:
                                    </span>
                                    <p className="text-slate-800 font-medium">{item.researchMeta.methodology}</p>
                                  </div>
                                </div>

                                <div className="bg-amber-100/60 border border-amber-300/80 rounded-xl p-3.5 space-y-1">
                                  <div className="flex items-center gap-1.5 text-amber-900 font-bold text-xs">
                                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                                    <span>Real-World Practice & Institutional Impact Today:</span>
                                  </div>
                                  <p className="text-xs text-slate-800 leading-relaxed">
                                    {item.researchMeta.practicalImpact}
                                  </p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>

                        </div>
                      </div>
                    )}

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SPECIALIZED CERTIFICATIONS & ACCREDITATIONS - TWO-TIER HIERARCHY (Idea 3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200/80 pb-6">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-900 border border-amber-200/80 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                <span>Clinical Accreditations & International Standards</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
                Accredited Specialized Training
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Specialized clinical, trauma, and child-safeguarding certifications completed with international humanitarian agencies and statutory health bodies.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-3.5 py-1.5 rounded-xl text-xs font-semibold shadow-2xs">
              <Lock className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% Confidential Clinical Ethics Guarantee</span>
            </div>
          </div>
        </ScrollReveal>

        {/* TIER 1: FLAGSHIP INTERNATIONAL & HUMANITARIAN ACCREDITATIONS (2 Large Featured Cards) */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
            <Globe className="w-4 h-4 text-blue-600" />
            <span>Tier 1: Flagship International & Sensitive Care Programs</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Card 1: GTZ German Technical Cooperation */}
            <ScrollReveal direction="left">
              <div className="group relative bg-gradient-to-br from-[#07111E] via-[#0B192C] to-[#122338] text-white rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl overflow-hidden flex flex-col justify-between h-full">
                {/* Background Ambient Glow */}
                <div className="absolute top-0 right-0 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-5">
                  {/* Top Bar: Issuer & Year */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="w-10 h-10 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400 shadow-sm">
                        <Globe className="w-5 h-5" />
                      </span>
                      <div>
                        <span className="bg-amber-400/20 text-amber-300 font-mono text-[10px] font-black px-2 py-0.5 rounded border border-amber-400/30">
                          INTERNATIONAL ACCREDITATION
                        </span>
                        <p className="text-xs text-slate-300 font-semibold mt-0.5">
                          GTZ (German Technical Cooperation)
                        </p>
                      </div>
                    </div>

                    <span className="font-mono font-black text-amber-400 text-sm bg-white/10 px-3 py-1 rounded-xl border border-white/10 shadow-xs">
                      2004
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-white group-hover:text-amber-300 transition-colors leading-snug">
                      Trauma Counseling Specialized Program
                    </h3>
                    <p className="text-xs font-semibold text-amber-400 font-sans">
                      කම්පන හා ආපදා උපදේශන විශේෂඥ පුහුණුව
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                      Completed during the national crisis of the 2004 Indian Ocean Tsunami. Provided frontline trauma stabilization to grieving school children, displaced families in Ambalangoda, and critical psychosocial debriefing under German clinical standards.
                    </p>
                  </div>

                  {/* Core Clinical Competencies */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono block">
                      Core Clinical Mastery:
                    </span>
                    <div className="flex flex-wrap gap-2 text-[11px]">
                      <span className="bg-white/10 text-emerald-300 px-2.5 py-1 rounded-lg border border-white/10 font-medium">
                        Post-Disaster PTSD Recovery
                      </span>
                      <span className="bg-white/10 text-emerald-300 px-2.5 py-1 rounded-lg border border-white/10 font-medium">
                        Acute Grief & Bereavement
                      </span>
                      <span className="bg-white/10 text-emerald-300 px-2.5 py-1 rounded-lg border border-white/10 font-medium">
                        GTZ Psychosocial Protocol
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Verification Seal */}
                <div className="relative z-10 pt-5 mt-5 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Certified Humanitarian Counselor</span>
                  </span>
                  <span className="text-amber-300 font-mono text-[11px] font-bold">
                    Official Sri Lanka Mission
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: Escape Institute & Family Planning Authority */}
            <ScrollReveal direction="right">
              <div className="group relative bg-gradient-to-br from-[#0F1E32] via-[#0B192C] to-[#07111E] text-white rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl overflow-hidden flex flex-col justify-between h-full">
                {/* Background Ambient Glow */}
                <div className="absolute top-0 right-0 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-5">
                  {/* Top Bar: Issuer & Year */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="w-10 h-10 rounded-xl bg-blue-400/15 border border-blue-400/30 flex items-center justify-center text-blue-400 shadow-sm">
                        <ShieldCheck className="w-5 h-5" />
                      </span>
                      <div>
                        <span className="bg-blue-400/20 text-blue-300 font-mono text-[10px] font-black px-2 py-0.5 rounded border border-blue-400/30">
                          HIGH-DISCRETION ETHICS
                        </span>
                        <p className="text-xs text-slate-300 font-semibold mt-0.5">
                          Escape Institute & Family Planning Authority
                        </p>
                      </div>
                    </div>

                    <span className="font-mono font-black text-blue-300 text-xs bg-white/10 px-2.5 py-1 rounded-xl border border-white/10 shadow-xs">
                      Specialized Track
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-white group-hover:text-blue-300 transition-colors leading-snug">
                      Child Sexual Abuse & Reproductive Health
                    </h3>
                    <p className="text-xs font-semibold text-blue-300 font-sans">
                      ළමා සුරක්ෂිතතාව හා ප්‍රජනක සෞඛ්‍ය උපදේශනය
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                      Advanced clinical specialization in handling sensitive adolescent abuse disclosures, ethical safeguarding protocols, trauma-informed recovery, and adolescent reproductive psychological guidance.
                    </p>
                  </div>

                  {/* Core Clinical Competencies */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono block">
                      Core Clinical Mastery:
                    </span>
                    <div className="flex flex-wrap gap-2 text-[11px]">
                      <span className="bg-white/10 text-blue-300 px-2.5 py-1 rounded-lg border border-white/10 font-medium">
                        Child Protection Protocols
                      </span>
                      <span className="bg-white/10 text-blue-300 px-2.5 py-1 rounded-lg border border-white/10 font-medium">
                        100% Confidential Disclosure
                      </span>
                      <span className="bg-white/10 text-blue-300 px-2.5 py-1 rounded-lg border border-white/10 font-medium">
                        Adolescent Reproductive Guidance
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Verification Seal */}
                <div className="relative z-10 pt-5 mt-5 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-blue-400" />
                    <span>Statutory Ethical Compliance</span>
                  </span>
                  <span className="text-blue-300 font-mono text-[11px] font-bold">
                    Specialized Certification
                  </span>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>

        {/* TIER 2: INSTITUTIONAL, CLINICAL & PSYCHOLOGICAL FOUNDATIONS (Bottom 4 Cards) */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
            <Building2 className="w-4 h-4 text-amber-600" />
            <span>Tier 2: Clinical Psychology & State Leadership Foundations</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* Card 3: Diploma in Psychology */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 border border-purple-200 flex items-center justify-center font-bold">
                    <Award className="w-4 h-4" />
                  </span>
                  <span className="font-mono text-xs font-black text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md">
                    1999
                  </span>
                </div>
                <h4 className="font-serif font-bold text-slate-900 text-base leading-tight">
                  Diploma in Psychology
                </h4>
                <p className="text-xs font-semibold text-purple-900">
                  Institute of Psychological Studies – Colombo 03
                </p>
                <p className="text-[11px] text-slate-600 leading-relaxed pt-1">
                  Foundational behavioral psychology, psychopathology, cognitive models, and psychological assessment metrics.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span>Accredited 1999</span>
                <span className="text-purple-700 font-bold">Clinical Base</span>
              </div>
            </div>

            {/* Card 4: Higher Certificate in Guidance & Counseling */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 flex items-center justify-center font-bold">
                    <HeartHandshake className="w-4 h-4" />
                  </span>
                  <span className="font-mono text-xs font-black text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md">
                    2000
                  </span>
                </div>
                <h4 className="font-serif font-bold text-slate-900 text-base leading-tight">
                  Higher Certificate in Guidance & Counseling
                </h4>
                <p className="text-xs font-semibold text-blue-900">
                  Institute of Psychological Studies – Colombo 03
                </p>
                <p className="text-[11px] text-slate-600 leading-relaxed pt-1">
                  Therapeutic client communication, empathetic listening, cognitive behavioral therapy (CBT), and individual case formulation.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span>Accredited 2000</span>
                <span className="text-blue-700 font-bold">Counseling Practice</span>
              </div>
            </div>

            {/* Card 5: Management Skills Development Programme */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center font-bold">
                    <Building2 className="w-4 h-4" />
                  </span>
                  <span className="font-mono text-xs font-black text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md">
                    2008
                  </span>
                </div>
                <h4 className="font-serif font-bold text-slate-900 text-base leading-tight">
                  Management Skills for In-Service Advisors
                </h4>
                <p className="text-xs font-semibold text-amber-900">
                  Ministry of Education & Thumula Educare
                </p>
                <p className="text-[11px] text-slate-600 leading-relaxed pt-1">
                  Institutional leadership, zonal counselor supervision, educational governance, and national program management.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span>Accredited 2008</span>
                <span className="text-amber-700 font-bold">State Governance</span>
              </div>
            </div>

            {/* Card 6: Oncology & Defense Psychosocial Field Deployments */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center font-bold">
                    <HeartPulse className="w-4 h-4" />
                  </span>
                  <span className="font-mono text-xs font-black text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    Field Practice
                  </span>
                </div>
                <h4 className="font-serif font-bold text-slate-900 text-base leading-tight">
                  Hospital & Veterans Psychosocial Care
                </h4>
                <p className="text-xs font-semibold text-emerald-900">
                  Kandy General Hospital & Ranaviru Seva
                </p>
                <p className="text-[11px] text-slate-600 leading-relaxed pt-1">
                  Oncology patient counseling at Kandy General Hospital and psychological resilience programs for war veterans.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span>Continuous Practice</span>
                <span className="text-emerald-700 font-bold">Clinical Empathy</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ROLES & APPOINTMENTS - INTERACTIVE EXPANDING ACCORDION DECK (Concept 1) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200/80 pb-6">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-900 border border-blue-200 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-blue-700" />
                <span>National Directorships & Key Appointments</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
                Key Professional Appointments & Contributions
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Over 28 years of institutional leadership across the Ministry of Education, Armed Forces, Public Administration, and statutory counselor governance.
              </p>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-500 bg-white px-3.5 py-1.5 rounded-xl border border-slate-200/80 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Click any appointment to expand full mandate</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Interactive Accordion Deck */}
        <div className="space-y-3.5">
          {APPOINTMENTS_DATA.map((item, idx) => {
            const Icon = item.icon;
            const isOpen = activeDeckIndex === idx;

            return (
              <div
                key={item.id}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-blue-900/30 shadow-xl ring-2 ring-blue-900/5'
                    : 'bg-white/90 hover:bg-white border-slate-200/80 hover:border-slate-300 shadow-xs hover:shadow-md'
                }`}
              >
                {/* Clickable Header Bar */}
                <button
                  onClick={() => setActiveDeckIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer group"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center border shadow-2xs group-hover:scale-105 transition-transform flex-shrink-0 ${item.iconColor}`}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                          {item.category}
                        </span>
                        <span className="text-slate-300 hidden sm:inline">•</span>
                        <span className="text-xs font-bold text-amber-700 hidden sm:inline font-mono">
                          {item.highlightStat}
                        </span>
                      </div>

                      <h3 className="font-serif font-bold text-slate-900 text-base sm:text-lg group-hover:text-blue-900 transition-colors truncate">
                        {item.role}
                      </h3>
                      <p className="text-xs font-semibold text-blue-900 truncate mt-0.5">
                        {item.organization}
                      </p>
                    </div>
                  </div>

                  {/* Right Status Pill & Chevron */}
                  <div className="flex items-center gap-3 flex-shrink-0">
                    {item.isActive ? (
                      <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-2.5 py-1 rounded-full text-xs font-bold font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="hidden sm:inline">Active</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 border border-slate-200 px-2.5 py-1 rounded-full text-xs font-bold font-mono">
                        <span className="hidden sm:inline">{item.period}</span>
                      </span>
                    )}

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 group-hover:bg-blue-50 transition-colors ${isOpen ? 'bg-blue-100 text-blue-900' : 'text-slate-400'}`}>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-900' : ''}`} />
                    </div>
                  </div>
                </button>

                {/* Smooth Expandable Content Body */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-2 border-t border-slate-100 space-y-4">
                        
                        {/* Sinhala Sub-heading */}
                        <div className="flex items-center gap-2 text-xs font-bold text-amber-800">
                          <span>{item.sinhalaRole}</span>
                        </div>

                        {/* 3 Detail Pods Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                          
                          {/* Official Mandate (7 cols) */}
                          <div className="md:col-span-7 bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-5 space-y-1.5">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono block">
                              Official Mandate & Core Responsibilities:
                            </span>
                            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                              {item.mandate}
                            </p>
                          </div>

                          {/* Key Institutional Milestone (5 cols) */}
                          <div className="md:col-span-5 bg-gradient-to-br from-blue-50/80 to-amber-50/40 border border-blue-200/70 rounded-2xl p-4 sm:p-5 space-y-1.5">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-950 font-mono block flex items-center gap-1">
                              <Sparkles className="w-3 h-3 text-amber-500" />
                              <span>Key Milestone Achieved:</span>
                            </span>
                            <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                              {item.milestone}
                            </p>
                          </div>

                        </div>

                        {/* Bottom Scope Strip & Consultation CTA */}
                        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                          <div className="flex items-center gap-2">
                            <span className="text-slate-400 font-mono">Audience Scope:</span>
                            <span className="bg-white border border-slate-200 font-bold text-slate-800 px-2.5 py-1 rounded-lg shadow-2xs">
                              {item.scopePill}
                            </span>
                          </div>

                          <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-[#0B192C] hover:bg-blue-900 text-white font-bold py-2.5 px-4 rounded-xl transition shadow-xs text-xs"
                          >
                            <span>Inquire Advisory or Training</span>
                            <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                          </Link>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
