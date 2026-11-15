export const categories = [
  {
    number: "01",
    title: "Product Design",
    description: "Turn complex problems into clear, useful experiences.",
  },
  {
    number: "02",
    title: "Technology",
    description: "Build a stronger understanding of the tools shaping digital products.",
  },
  {
    number: "03",
    title: "Business",
    description: "Develop practical skills for better decisions and stronger teams.",
  },
  {
    number: "04",
    title: "Creative",
    description: "Explore new ways to communicate, create and tell stories.",
  },
] as const;

export const learningSteps = [
  {
    label: "Step 01",
    title: "Choose your focus",
    description:
      "Find courses based on the skill you want to build, not endless content categories.",
    tone: "blue",
  },
  {
    label: "Step 02",
    title: "Learn from experience",
    description: "Follow concise lessons created by professionals who use these skills.",
    tone: "peach",
  },
  {
    label: "Step 03",
    title: "Put it into practice",
    description:
      "Every course includes practical exercises designed to turn knowledge into action.",
    tone: "yellow",
  },
] as const;

export const footerGroups = [
  {
    title: "Explore",
    links: [
      { label: "Courses", href: "#courses" },
      { label: "Categories", href: "#courses" },
      { label: "Instructors", href: "#community" },
      { label: "For Teams", href: "#contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Careers", href: "#contact" },
      { label: "Journal", href: "#featured-course" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#contact" },
      { label: "Contact", href: "#contact" },
      { label: "Terms", href: "#footer" },
      { label: "Privacy", href: "#footer" },
    ],
  },
] as const;

export const peopleImages = [
  { src: "/images/student-study.webp", alt: "Student writing notes at a desk" },
  { src: "/images/graduate.webp", alt: "Graduate holding a diploma" },
  { src: "/images/campus-speaker.webp", alt: "Student speaking on campus" },
  { src: "/images/online-class.webp", alt: "Learner joining an online class" },
  { src: "/images/studio-session.webp", alt: "People collaborating in a studio" },
  { src: "/images/campus-student.webp", alt: "Student reading outside" },
  { src: "/images/library-student.webp", alt: "Student working in a library" },
  { src: "/images/study-group.webp", alt: "Small group learning together" },
] as const;
