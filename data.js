// Categories: Getting Involved, Academic Support, Personal Support
class Category {
  constructor(name, keywords, resources) {
    this.name = name;
    this.keywords = keywords;
    this.resources = resources;
  }
} 

class Resource {
  constructor(name, description, link) {
    this.name = name;
    this.description = description;
    this.link = link;
  }
} 

// Getting Involved: studentClubs, studentLife, eventCalendar
const studentClubs = new Resource (
  "Student Clubs", 
  "Joining student clubs is a great way to get involved. We have over 30 clubs at Skyline College!",
  "skylinecollege.edu/studentclubs/"
)

const studentLife = new Resource (
  "Associate Students of Skyline College (ASSC)",
  "Joining the student government is a great way to build leadership skills, represent student voices, and get involved in campus decision-making.",
  "skylinecollege.edu/studentgovernment/"
)

const eventCalendar = new Resource (
  "Skyline College Event Calendar",
  "Attending campus events is a great way to meet new people and stay conneted to the community.",
  "events.skylinecollege.edu"
)

// Academic Support: skylineLibrary, theLearningCenter, theStemCenter
const skylineLibrary = new Resource (
  "Skyline Library",
  "Find a place to study, explore research materials, and work with your friends in private study rooms.",
  "skylinecollege.edu/library/"
)

const theLearningCenter = new Resource (
  "The Learning Center",
  "Check out the Learning Center to get free tutoring help for any classes!",
  "skylinecollege.edu/learningcenter/index.php"
)

const theStemCenter = new Resource (
  "The STEM Center",
  "Get directly help with math and science and study with others.",
  "skylinecollege.edu/stemcenter/"
)

// Personal Support: personalCounseling, sparkPoint, careerCenter
const personalCounseling = new Resource (
  "Personal Counseling",
  "Talk with a counselor and get support for stress and personal challenges.",
  "skylinecollege.edu/healthandwellness/personalcounseling.php"
)

const sparkPoint = new Resource (
  "SparkPoint",
  "Get support with finances, food, and other basic needs.",
  "skylinecollege.edu/sparkpoint/"
)

const careerCenter = new Resource (
  "Career Center",
  "Build your resume, explore careers, and get ready for internships and jobs.",
  "skylinecollege.edu/careerservices/"
)

const gettingInvolved = new Category (
  "Getting Involved",
  ["involved", "join", "club", "clubs", "student life", "activities", "events", "community", 
  "meet people", "campus life", "organizations", "leadership", "volunteer", "engagement", "make friends"],
  [studentClubs, studentLife, eventCalendar]
)

const personalSupport = new Category (
  "Personal Support",
  [
    "stress",
    "stressed",
    "overwhelmed",
    "anxiety",
    "mental health",
    "sad",
    "lonely",
    "burnout",
    "counseling",
    "counselor",
    "therapy",
    "wellness",
    "food",
    "basic needs",
    "finances",
    "money",
    "rent",
    "housing",
    "job",
    "jobs",
    "career",
    "resume",
    "internship",
    "internships",
    "employment",
    "interview"
  ],
  [personalCounseling, sparkPoint, careerCenter]
)

const academicSupport = new Category (
  "Academic Support",
  [
    "study",
    "homework",
    "assignments",
    "class help",
    "academic support",
    "tutoring",
    "grades",
    "failing",
    "exam",
    "test",
    "quiz",
    "midterm",
    "final",
    "research",
    "library",
    "study room",
    "group study",
    "math help",
    "science help",
    "stem",
    "chemistry",
    "biology",
    "physics",
    "calculus",
    "algebra",
    "statistics",
    "writing help"
  ],
  [skylineLibrary, theLearningCenter, theStemCenter]
)