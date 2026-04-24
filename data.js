class Resource {
  constructor(name, description, link, keywords, category) {
    this.name = name;
    this.description = description;
    this.link = link;
    this.keywords = keywords;
    this.category = category;
  }
}

const academicCounseling = new Resource(
  "Academic Counseling",
  "Get help with educational planning, class selection, prerequisites, registration issues, and academic goals.",
  "https://skylinecollege.edu/counseling/",
  [
    "counseling", "counselor", "classes", "class planning", "education plan",
    "major", "career path", "prerequisite", "registration error", "schedule",
    "what classes should i take", "academic plan"
  ],
  "Planning & Academics"
);

const admissionsRecords = new Resource(
  "Admissions & Records",
  "Get help applying, registering for classes, graduation petitions, forms, and transcripts.",
  "https://skylinecollege.edu/admissions/",
  [
    "apply", "application", "admissions", "register", "registration",
    "transcript", "transcripts", "graduation", "degree petition", "forms",
    "drop class", "add class", "websmart"
  ],
  "Enrollment"
);

const financialAid = new Resource(
  "Financial Aid Services",
  "Apply for grants, scholarships, and loans to help cover college costs.",
  "https://skylinecollege.edu/financialaid/",
  [
    "financial aid", "fafsa", "cadaa", "grants", "scholarships", "loan", "loans",
    "pay for college", "money for school", "tuition help", "aid application"
  ],
  "Money"
);

const transferCenter = new Resource(
  "Transfer Center",
  "Get transfer planning help, transfer resources, events, and application support.",
  "https://skylinecollege.edu/transfercenter/",
  [
    "transfer", "transferring", "university", "uc", "csu", "four year",
    "4 year", "college transfer", "transfer application", "igetC", "csumentor",
    "bachelor", "where can i transfer"
  ],
  "Transfer"
);

const careerServices = new Resource(
  "Career Services",
  "Get career counseling, resume help, interview prep, job and internship support, and workshops.",
  "https://skylinecollege.edu/careerservices/",
  [
    "career", "careers", "job", "jobs", "internship", "internships", "resume",
    "cover letter", "interview", "linkedin", "employment", "job board",
    "workshop", "career counseling"
  ],
  "Career"
);

const learningCenter = new Resource(
  "The Learning Center",
  "Access tutoring, workshops, peer support, and other academic help across many subjects.",
  "https://skylinecollege.edu/learningcenter/",
  [
    "tutoring", "tutor", "homework", "study help", "studying", "assignments",
    "writing help", "reading help", "esol", "peer mentoring", "supplemental instruction",
    "academic support", "class help", "behind in class"
  ],
  "Academic Support"
);

const tutoringServices = new Resource(
  "Tutoring Services",
  "Receive in-person or online tutoring, including one-on-one and group support in many subjects.",
  "https://skylinecollege.edu/tutoring/",
  [
    "tutoring", "drop in tutoring", "online tutoring", "one on one help",
    "group tutoring", "math tutor", "science tutor", "writing tutor",
    "reading tutor", "esol tutor", "business tutor"
  ],
  "Academic Support"
);

const stemCenter = new Resource(
  "STEM Center",
  "Find STEM tutoring, counseling, transfer and pathway support, internships, and community for STEM students.",
  "https://skylinecollege.edu/stemcenter/",
  [
    "stem", "math", "science", "chemistry", "biology", "physics", "engineering",
    "calculus", "algebra", "statistics", "stem tutoring", "stem transfer",
    "stem internship", "computer science"
  ],
  "Academic Support"
);

const library = new Resource(
  "Skyline College Library",
  "Use the library for research help, study space, materials, books, technology loans, and databases.",
  "https://skylinecollege.edu/library/",
  [
    "library", "research", "database", "databases", "study room", "study rooms",
    "books", "borrowing", "librarian", "quiet place to study", "group study",
    "research help", "citations"
  ],
  "Academic Support"
);

const healthWellness = new Resource(
  "Health & Wellness Services",
  "Access healthcare, wellness education, counseling connections, and referrals to outside resources.",
  "https://skylinecollege.edu/healthandwellness/",
  [
    "health", "wellness", "medical", "doctor", "nurse", "sick", "health center",
    "wellbeing", "healthy living", "mental wellness", "referral", "health education"
  ],
  "Health & Wellness"
);

const personalCounseling = new Resource(
  "Personal Counseling",
  "Talk with licensed mental health professionals for personal and emotional support.",
  "https://skylinecollege.edu/healthandwellness/personalcounseling.php",
  [
    "stress", "stressed", "overwhelmed", "anxiety", "anxious", "mental health",
    "sad", "depressed", "lonely", "burnout", "burned out", "panic",
    "counseling", "therapy", "emotional support", "personal problems"
  ],
  "Health & Wellness"
);

const healthServices = new Resource(
  "Health Services",
  "Schedule in-person or virtual health appointments when classes are in session.",
  "https://skylinecollege.edu/healthandwellness/healthservices.php",
  [
    "health services", "appointment", "clinic", "medical appointment",
    "nurse visit", "not feeling well", "health appointment", "health portal"
  ],
  "Health & Wellness"
);

const sparkPoint = new Resource(
  "SparkPoint",
  "Get help with food, housing, personal finance, and other basic-needs support.",
  "https://skylinecollege.edu/sparkpoint/",
  [
    "food", "housing", "basic needs", "money", "finances", "rent",
    "groceries", "calfresh", "emergency money", "financial coaching",
    "food insecurity", "housing insecurity"
  ],
  "Basic Needs"
);

const educationalAccessCenter = new Resource(
  "Educational Access Center (EAC)",
  "Get accommodations, counseling, and support services for documented disabilities.",
  "https://skylinecollege.edu/educationalaccesscenter/",
  [
    "disability", "accommodations", "accessibility", "accessible", "eac",
    "learning disability", "testing accommodations", "alternate media",
    "assistive technology", "documented disability"
  ],
  "Accessibility"
);

const eopsCare = new Resource(
  "EOPS / CARE",
  "Receive over-and-above support to improve access, retention, and completion if you face economic or educational barriers.",
  "https://skylinecollege.edu/eops/",
  [
    "eops", "care", "book voucher", "support program", "low income support",
    "educational barriers", "retention support", "completion support",
    "single parent support"
  ],
  "Support Programs"
);

const trio = new Resource(
  "TRIO",
  "Eligible students can get academic, personal, and social support while working toward their goals.",
  "https://skylinecollege.edu/trio/",
  [
    "trio", "first generation", "low income", "academic need",
    "college support program", "student support services", "sss",
    "transfer support", "student success program"
  ],
  "Support Programs"
);

const veteransCenter = new Resource(
  "Veterans Resource & Opportunity Center",
  "Veterans and military-connected students can get help with benefits, transition, and campus/community support.",
  "https://skylinecollege.edu/veterans/",
  [
    "veteran", "veterans", "military", "gi bill", "va benefits",
    "chapter 33", "chapter 35", "calvet", "military connected",
    "service member", "reservist", "dependent benefits"
  ],
  "Veteran Support"
);

const studentClubs = new Resource(
  "Student Clubs",
  "Join clubs and organizations for leadership, volunteering, community, and student involvement.",
  "https://skylinecollege.edu/studentclubs/",
  [
    "clubs", "club", "join a club", "student organization", "organizations",
    "community", "friends", "meet people", "volunteer", "leadership",
    "get involved", "campus involvement"
  ],
  "Campus Life"
);

const studentLife = new Resource(
  "Center for Student Life and Leadership Development",
  "Get help with campus events, leadership opportunities, student body cards, issues resolution, and more.",
  "https://skylinecollege.edu/centerforstudentlife/",
  [
    "student life", "leadership", "campus events", "event planning",
    "student body card", "commencement", "issues resolution",
    "get involved", "activities", "leadership development"
  ],
  "Campus Life"
);

const studentGovernment = new Resource(
  "Student Government (ASSC)",
  "Represent student voices, join student government, and connect with educational, cultural, and social programs.",
  "https://skylinecollege.edu/studentgovernment/",
  [
    "student government", "assc", "advocacy", "student voice", "leadership",
    "elections", "represent students", "campus decision making", "commissioner",
    "senator", "get involved in government"
  ],
  "Campus Life"
);

const studentServicesOffice = new Resource(
  "Student Services Office",
  "Start here for broad help across admissions, financial aid, educational planning, career planning, and counseling.",
  "https://skylinecollege.edu/officevpss/",
  [
    "student services", "where do i go", "general help", "campus help",
    "not sure who to ask", "student support office", "help me find resources"
  ],
  "General Support"
);

const undocumentedCommunityCenter = new Resource(
  "Undocumented Community Center (UCC)",
  "Get support with AB540, DACA, the California Dream Act, and undocumented-student questions.",
  "https://skylinecollege.edu/financialaid/californiadreamact.php"
);
undocumentedCommunityCenter.keywords = [
  "ab540", "daca", "dream act", "undocumented", "immigration",
  "ucc", "california dream act"
];

const honorsTransferProgram = new Resource(
  "Honors Transfer Program",
  "Complete honors coursework and research while building a stronger transfer pathway to four-year schools.",
  "https://catalog.skylinecollege.edu/current/studentresources/honorstransferprogram.php"
);
honorsTransferProgram.keywords = [
  "honors", "honors transfer", "research", "tap", "transfer alliance program",
  "scholar", "advanced coursework"
];

const learningCommunities = new Resource(
  "Learning Communities",
  "Join a cohort-based learning experience where students take linked classes together and get extra support.",
  "https://catalog.skylinecollege.edu/current/studentresources/learningcommunities.php"
);
learningCommunities.keywords = [
  "learning community", "cohort", "community", "connected", "group classes",
  "belonging", "supportive classes", "friends"
];

academicCounseling.nextStep = "Visit the counseling page and book an appointment so you can talk with a counselor about your class plan, major, or education goals.";

admissionsRecords.nextStep = "Open the Admissions & Records page and find the exact form or process you need, like registration, transcripts, adding or dropping a class, or graduation paperwork.";

financialAid.nextStep = "Go to the Financial Aid page and start with the aid option that fits your situation, like FAFSA, Dream Act, scholarships, or grants.";

transferCenter.nextStep = "Visit the Transfer Center page and look for transfer planning help, appointments, or application resources for UC, CSU, or other universities.";

careerServices.nextStep = "Open the Career Services page and start with the service you need most, like resume help, internships, interview prep, or job search support.";

learningCenter.nextStep = "Go to the Learning Center page and check what tutoring or academic support is available for the class or skill you need help with.";

tutoringServices.nextStep = "Visit the Tutoring Services page and look for the tutoring format that works best for you, like drop-in, online, group, or one-on-one support.";

stemCenter.nextStep = "Open the STEM Center page and check for tutoring, workshops, transfer support, or internship resources related to your STEM classes or goals.";

library.nextStep = "Go to the Library page and decide whether you need research help, a study room, databases, books, or a quiet place to work.";

healthWellness.nextStep = "Visit the Health & Wellness page and choose the kind of support you need, like health services, wellness resources, or referrals to other support.";

personalCounseling.nextStep = "Open the Personal Counseling page and look for appointment or contact information so you can connect with a counselor.";

healthServices.nextStep = "Visit the Health Services page and review appointment options, hours, and available services before scheduling a visit.";

sparkPoint.nextStep = "Go to the SparkPoint page and start with the support area that fits your needs most, like food, housing, finances, or basic-needs help.";

educationalAccessCenter.nextStep = "Visit the EAC page and follow the intake or contact steps to request accommodations, accessibility services, or disability support.";

eopsCare.nextStep = "Open the EOPS / CARE page and review the eligibility requirements and support services to see if the program fits your situation.";

trio.nextStep = "Visit the TRIO page and check whether you qualify, then look for application or contact information to get started.";

veteransCenter.nextStep = "Go to the Veterans page and review the support, benefits help, and contact information for veteran and military-connected students.";

studentClubs.nextStep = "Visit the Student Clubs page, look through the club list, and pick one or two organizations that match your interests to contact or attend.";

studentLife.nextStep = "Open the Student Life page and check for leadership opportunities, campus events, or involvement options that interest you.";

studentGovernment.nextStep = "Visit the Student Government page to learn about meetings, leadership roles, elections, and ways to get involved in student advocacy.";

studentServicesOffice.nextStep = "Start with the Student Services Office page if you are unsure where to go, then use it to find the office or support area that best matches your need.";

undocumentedCommunityCenter.nextStep = "Visit the Undocumented Community Center or Dream Act information page and look for support, eligibility info, and contact details that fit your situation.";

honorsTransferProgram.nextStep = "Open the Honors Transfer Program page and review the requirements, benefits, and application steps to see if it matches your academic goals.";

learningCommunities.nextStep = "Visit the Learning Communities page and explore whether a cohort-based or connected learning program would be a good fit for you.";

const allResources = [
  academicCounseling,
  admissionsRecords,
  financialAid,
  transferCenter,
  careerServices,
  learningCenter,
  tutoringServices,
  stemCenter,
  library,
  healthWellness,
  personalCounseling,
  healthServices,
  sparkPoint,
  educationalAccessCenter,
  eopsCare,
  trio,
  veteransCenter,
  studentClubs,
  studentLife,
  studentGovernment,
  studentServicesOffice,
  undocumentedCommunityCenter,
  honorsTransferProgram,
  learningCommunities 
];