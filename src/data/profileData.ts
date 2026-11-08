export interface ServiceProgram {
  id: string;
  title: string;
  sinhalaTitle?: string;
  category: 'counseling' | 'corporate' | 'schools' | 'public_sector' | 'humanitarian';
  description: string;
  features: string[];
  duration: string;
  targetAudience: string;
  iconName: string;
}

export interface ClientInstitution {
  name: string;
  category: 'Corporate' | 'Public Sector' | 'Schools' | 'Defense & Police' | 'NGO & International';
  location?: string;
  year?: string;
  note?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  notes?: string;
  dissertation?: string;
}

export const PROFILE_DATA = {
  personal: {
    fullName: "M.D. Lakshman Gunathilake",
    nameWithTitle: "Lt. Col. M.D. Lakshman Gunathilaka",
    rank: "Lieutenant Colonel (O/3901)",
    militaryCorps: "National Cadet Corps (NCC) / Sri Lanka Army Volunteer Force",
    credentials: "M.Ed, PGDC, PGDE, B.A., Dip in Psy, HCGC",
    officialDesignation: "In-Service Advisor (Psychosocial Intervention and Counseling)",
    nationalTrainerRole: "National Trainer, Soft Skills & Leadership Skills Development (Ministry of Education)",
    phone: "071-8401434",
    phoneInternational: "+94718401434",
    email: "mdl.gunathilaka@gmail.com",
    address: "No: 64, Anagarika Dharmapala Mawatha, Kandy, Sri Lanka",
    officialAddress: "Zonal Education Office, Kandy, Sri Lanka",
    dob: "28.03.1966",
    nic: "660880062V",
    nationality: "Sri Lankan Sinhalese",
    religion: "Buddhism",
    civilStatus: "Married",
    sinhalaProfile: {
      title: "ජ්‍යෙෂ්ඨ මනෝවිද්‍යා උපදේශක",
      subtitle: "පුද්ගල සංවර්ධන හා නායකත්ව කුසලතා සංවර්ධන ජාතික පුහුණුකරු",
      roles: [
        "ජ්‍යෙෂ්ඨ මනෝවිද්‍යා උපදේශක",
        "පුද්ගල සංවර්ධන හා නායකත්ව කුසලතා සංවර්ධන ජාතික පුහුණුකරු",
        "මනෝවිද්‍යා හා උපදේශන පර්යේෂණ ආයතනයේ ජ්‍යෙෂ්ඨ කථිකාචාර්ය හා පාඨමාලා සම්බන්ධීකාරක",
        "විද්වත් උපදේශකවරුන්ගේ ජාතික ආයතනයේ විධායක සභික",
        "මහනුවර අධ්‍යාපන කලාපයේ උපදේශනය පිළිබඳ ගුරු උපදේශක",
        "ලුතිනන් කර්නල් ලක්ෂ්මන් ගුණතිලක"
      ]
    }
  },

  stats: [
    { label: "Years of Dedicated Service", targetNumber: 28, value: "28+", suffixPlus: "+", suffix: "Years" },
    { label: "Professionals & Students Trained", targetNumber: 75000, value: "75,000+", suffixPlus: "+", suffix: "Individuals" },
    { label: "Corporate & Govt Workshops", targetNumber: 350, value: "350+", suffixPlus: "+", suffix: "Sessions" },
    { label: "Schools & National Colleges", targetNumber: 120, value: "120+", suffixPlus: "+", suffix: "Institutions" }
  ],

  education: [
    {
      degree: "Master of Education (M.Ed)",
      institution: "University of Peradeniya",
      year: "2010",
      dissertation: "An action Research to Modify the Behavior of teenagers with Maladjusted Behavior including Drug addiction through Psychological Counseling."
    },
    {
      degree: "Postgraduate Diploma in Education (PGDE)",
      institution: "University of Peradeniya",
      year: "2002 / 2003",
      notes: "Awarded with Merit"
    },
    {
      degree: "Postgraduate Diploma in Guidance and Counseling (PGDC)",
      institution: "University of Colombo",
      year: "2008 / 2009",
      dissertation: "A survey to Identify the counseling needs of armed Forces and Police Personnel in the Post Conflict Era."
    },
    {
      degree: "Bachelor of Arts (B.A. General)",
      institution: "University of Peradeniya",
      year: "1997"
    },
    {
      degree: "National Diploma in Teaching",
      institution: "Hapitigama National College of Education",
      year: "1988 - 1990"
    },
    {
      degree: "Certificate Course in Professional Skills Development for Educational Administrators (CCPSD-III)",
      institution: "Peradeniya National College of Education",
      year: "2009"
    }
  ] as EducationItem[],

  certifications: [
    {
      title: "Diploma in Psychology",
      issuer: "Institute of Psychological Studies – Colombo 03",
      year: "1999"
    },
    {
      title: "Higher Certificate in Guidance and Counseling",
      issuer: "Institute of Psychological Studies – Colombo 03",
      year: "2000"
    },
    {
      title: "Trauma Counseling Specialized Program",
      issuer: "GTZ (German Technical Cooperation)",
      year: "2004"
    },
    {
      title: "Child Sexual Abuse Counseling Program",
      issuer: "Escape Institute",
      year: "Specialized"
    },
    {
      title: "Reproductive Health Counseling Program",
      issuer: "Sri Lanka Family Planning Authority",
      year: "Specialized"
    },
    {
      title: "Management Skills Development Programme for In-Service Advisors (Counseling)",
      issuer: "Ministry of Education & Thumula Educare (Pvt) Ltd",
      year: "2008"
    }
  ],

  experience: [
    {
      role: "In-Service Advisor in Psychosocial Intervention & Counseling",
      organization: "Kandy Education Zone, Ministry of Education",
      period: "Present / Long-standing",
      description: "Directing student psychosocial programs, guiding school counselors, overseeing crisis resolution, and formulating behavioral intervention strategies."
    },
    {
      role: "National Trainer of Trainers (ToT) in Counseling & Soft Skills",
      organization: "Guidance & Counseling Unit, Ministry of Education",
      period: "Continuous",
      description: "Co-author and lead trainer for the National Soft Skills Resource Manual. Training master trainers for schools and public institutions across Sri Lanka."
    },
    {
      role: "Visiting Lecturer in Counseling",
      organization: "Mahaweli National College of Education, Polgolla",
      period: "Visiting Faculty",
      description: "Lecturing pre-service teacher trainees in psychology, student guidance, cognitive development, and classroom emotional management."
    },
    {
      role: "Course Coordinator – Counseling Course for Armed Forces & Police",
      organization: "National Cadet Corps (NCC)",
      period: "2009",
      description: "Developed and coordinated mental resilience and post-conflict psychological support curricula for armed forces and police officers."
    },
    {
      role: "Executive Committee Member",
      organization: "Sri Lanka Institute of Professional Counselors",
      period: "Active",
      description: "Shaping ethical standards, continuing education, and national credentials for registered counselors in Sri Lanka."
    },
    {
      role: "Lead Trainer for Graduate Inductions",
      organization: "Government Sector / Ministry of Public Administration",
      period: "2004, 2006, 2009, 2015, 2019, 2022, 2023",
      description: "Orientation, leadership mindset, emotional stability, and workplace counseling training for thousands of newly inducted university graduates."
    }
  ],

  services: [
    {
      id: "clinical-counseling",
      title: "Psychological & Trauma Counseling",
      sinhalaTitle: "මනෝවිද්‍යාත්මක හා මානසික කම්පන උපදේශනය",
      category: "counseling",
      description: "Evidence-based confidential psychological counseling tailored for individuals, adolescents, couples, and trauma survivors.",
      features: [
        "Adolescent Behavioral Modification & Anti-addiction Therapy",
        "Trauma, PTSD & Post-Conflict Psychological Recovery (GTZ Certified)",
        "Depression, Anxiety & Stress Management Sessions",
        "Marriage, Relationship & Family Systems Counseling",
        "Palliative Psychosocial Care (Cancer patients & elderly care)"
      ],
      duration: "60 - 90 Mins per session",
      targetAudience: "Individuals, Youth, Families, Cancer Patients, Armed Forces Personnel",
      iconName: "HeartPulse"
    },
    {
      id: "corporate-training",
      title: "Corporate Leadership & Team Alignment",
      sinhalaTitle: "ආයතනික නායකත්ව හා මෘදු කුසලතා පුහුණුව",
      category: "corporate",
      description: "Transformational workshops blending psychological intelligence with military-grade discipline to boost productivity and resilience.",
      features: [
        "High-Performance Team Dynamics & Trust Building",
        "Executive Stress Mastery & Emotional Intelligence (EQ)",
        "Workplace Conflict Resolution & Positive Communication",
        "Apparel, Plantation & Banking Sector Specialized Modules",
        "Supervisory Soft Skills Development & Mental Wellbeing"
      ],
      duration: "Full-Day (7 hrs) / 2-Day Residential Retreats",
      targetAudience: "Executive Teams, Middle Management, Factory Team Leaders, Corporate Staff",
      iconName: "Briefcase"
    },
    {
      id: "youth-leadership",
      title: "School Leaders & Prefect Development",
      sinhalaTitle: "පාසල් නායකත්ව හා පෞරුෂ සංවර්ධන වැඩසටහන්",
      category: "schools",
      description: "Flagship leadership training trusted by prestigious national schools like Royal, Ananda, Dharmaraja, and Vidyartha Colleges.",
      features: [
        "Prefects' Guild Character & Ethics Conditioning",
        "Crisis Handling, Peer Conflict & Student Mentoring Skills",
        "Public Speaking, Protocol & Decisive Decision-Making",
        "Drug Abuse Prevention & Teen Mental Health Awareness",
        "Outbound & Team Synergy Simulation Challenges"
      ],
      duration: "1-Day Intensive or 2-Day Leadership Camp",
      targetAudience: "School Prefects, Student Leaders, Cadets, Senior Students",
      iconName: "GraduationCap"
    },
    {
      id: "public-administration",
      title: "Public Administration & Educator Capacity",
      sinhalaTitle: "රාජ්‍ය පරිපාලන හා ගුරු අධ්‍යාපන නිපුණතා",
      category: "public_sector",
      description: "Specialized training for the Sri Lanka Education Administrative Service (SLEAS), Principals Service, and State Auditing Officers.",
      features: [
        "SLEAS & Principals Service Capacity & Soft Skills Training",
        "National Audit Department Professional Mindset Coaching",
        "New Graduate Trainee Induction & Workplace Ethics",
        "Child Rights Promotion (CRPO) & Probation Officer Training",
        "Prison Inmate Rehabilitation & Reintegration Protocols"
      ],
      duration: "Customized multi-day or seminar format",
      targetAudience: "Government Administrators, School Principals, Auditing Officers, In-Service Advisors",
      iconName: "Building2"
    }
  ] as ServiceProgram[],

  clients: [
    { name: "MAS Holdings (Shadowline & Contourline)", category: "Corporate", note: "Management & Team Leader Training" },
    { name: "National Audit Department", category: "Public Sector", year: "2025", note: "Executive Staff Training" },
    { name: "Sri Lanka Education Administrative Service (SLEAS)", category: "Public Sector", year: "2015 & 2019" },
    { name: "Royal College, Colombo", category: "Schools", note: "Prefects & Student Leadership" },
    { name: "Ananda College, Colombo", category: "Schools", note: "Leadership Skills Development" },
    { name: "Dharmaraja College, Kandy", category: "Schools", note: "Student Leaders Program" },
    { name: "Vidyartha College, Kandy", category: "Schools", note: "Personality & Leadership" },
    { name: "Sanasa Insurance Head Office", category: "Corporate", note: "Staff Training & Mindset Mastery" },
    { name: "Sri Lanka Tea Board", category: "Public Sector", note: "Staff Performance & Motivation" },
    { name: "Tea Small Holdings Development Authority", category: "Public Sector", note: "Staff Capacity Development" },
    { name: "National Institute of Plantation Management (NIPM)", category: "Public Sector", note: "Executive Training" },
    { name: "Rubber Development Department & Rubber Research Agalawatta", category: "Public Sector", note: "Monaragala & Ratnapura" },
    { name: "World Vision Sri Lanka", category: "NGO & International", note: "Student Leadership & Life Skills" },
    { name: "Room to Read (NGO)", category: "NGO & International", note: "Training of Trainers (TOT)" },
    { name: "National Cadet Corps (NCC)", category: "Defense & Police", note: "Counseling for Armed Forces & Police" },
    { name: "Ranaviru Seva Authority", category: "Defense & Police", note: "Veteran & Senior Citizen Psychological Support" },
    { name: "Department of Probation and Child Care Services", category: "Public Sector", note: "Islandwide CRPO & Probation Training" },
    { name: "Nobels Ware BOI Kundasale", category: "Corporate", note: "Factory & Staff Dynamics" },
    { name: "D.S. Senanayake College (Mirigama & Ampara)", category: "Schools", note: "Student Leadership Workshops" },
    { name: "Kandy General Hospital Cancer Home", category: "NGO & International", note: "Palliative Psychological Counseling" }
  ] as ClientInstitution[],

  pricingRules: {
    baseRates: {
      counseling_individual: 4500,     // LKR per 60-90 min session
      counseling_family: 6500,         // LKR per couple/family session
      school_half_day: 25000,          // LKR
      school_full_day: 40000,          // LKR
      corporate_half_day: 50000,       // LKR
      corporate_full_day: 85000,       // LKR
      corporate_2day_residential: 150000, // LKR
      public_sector_full_day: 55000,   // LKR
      keynote_speech: 30000            // LKR (1-2 hours)
    },
    locationSurcharges: {
      kandy: 0,
      central_province: 5000,
      western_colombo: 15000,
      outstation_distant: 25000
    },
    participantTiers: [
      { max: 15, multiplier: 1.0 },
      { max: 50, multiplier: 1.15 },
      { max: 150, multiplier: 1.3 },
      { max: 300, multiplier: 1.5 },
      { max: 1000, multiplier: 1.8 }
    ],
    addons: [
      { id: 'certificates', label: 'Official Training Certificates (Per participant template & signature)', ratePerPerson: 250 },
      { id: 'workbook', label: 'Soft Skills Training Booklet & Psychosocial Guide', ratePerPerson: 400 },
      { id: 'psychometric', label: 'Pre & Post Psychological / Leadership Assessment Report', flatRate: 15000 },
      { id: 'followup', label: '1-Month Post-Program Follow-up & Mentoring Review Session', flatRate: 20000 }
    ]
  }
};
