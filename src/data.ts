import { PortfolioData } from "./types";

export const initialPortfolioData: PortfolioData = {
  profile: {
    name: "Sarvesh Gotmare",
    role: "Data Analytics & Full Stack Developer",
    tagline: "Transforming data into meaningful insights and business decisions",
    about: "Smart worker, fast learner, and passionate about turning challenges into innovative solutions. I love building beautiful, responsive web applications while leveraging the power of data analytics to uncover trends, make data-driven decisions, and create intelligent digital products.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=600",
    location: "Nagpur, Maharashtra, India",
    email: "gotmaresarvesh9@gmail.com",
    phone: "7821977954",
    linkedin: "www.linkedin.com/in/sarvesh-gotmare-b57172332",
    github: "https://github.com/Sarvesh113",
    experienceYears: "2+"
  },
  skills: [
    { id: "s1", name: "Python", category: "Programming", icon: "Code2", color: "blue" },
    { id: "s2", name: "SQL", category: "Database", icon: "Database", color: "cyan" },
    { id: "s3", name: "Power BI", category: "Data Visualization", icon: "BarChart3", color: "amber" },
    { id: "s4", name: "Pandas", category: "Data Analytics", icon: "Table2", color: "indigo" },
    { id: "s5", name: "Excel", category: "Data Analytics", icon: "FileSpreadsheet", color: "green" },
    { id: "s6", name: "Data Analysis", category: "Data Analytics", icon: "LineChart", color: "emerald" },
    { id: "s7", name: "Data Visualization", category: "Data Visualization", icon: "PieChart", color: "orange" },
    { id: "s8", name: "HTML", category: "Frontend", icon: "FileCode2", color: "red" },
    { id: "s9", name: "CSS", category: "Frontend", icon: "Layout", color: "sky" },
    { id: "s10", name: "JavaScript", category: "Frontend", icon: "FileJson", color: "yellow" }
  ],
  projects: [
    {
      id: "p1",
      title: "Sales Performance Analysis Dashboard",
      description: "Cleaned and analyzed sales data using Excel, SQL, Python (Pandas), and created an interactive Power BI dashboard with KPIs, geographic insights, and month-over-month trends.",
      tags: ["Excel", "SQL", "Python", "Pandas", "Power BI"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      id: "p2",
      title: "Customer Segmentation & Churn Analysis",
      description: "Performed customer segmentation using RFM (Recency, Frequency, Monetary) analysis, wrote SQL churn prediction queries, and built a Power BI churn dashboard with Python data analysis.",
      tags: ["RFM Analysis", "SQL", "Python", "Power BI", "Data Analytics"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      id: "p3",
      title: "Smart Street Light Control & Monitoring System",
      description: "Developed an IoT-based smart lighting solution for energy-efficient automation and real-time monitoring of energy consumption, fault detection, and light scheduling.",
      tags: ["IoT", "Automation", "Real-time Monitoring", "Hardware Integration"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600&h=400"
    }
  ],
  experiences: [
    {
      id: "e1",
      role: "Data Analyst Intern",
      company: "Nextlite",
      duration: "Present Intern",
      description: "Worked on data cleaning, processing, SQL queries, Python (Pandas), Excel, and Power BI dashboards to generate key business insights, improving decision making efficiency.",
      skills: ["SQL", "Python", "Pandas", "Excel", "Power BI"]
    },
    {
      id: "e2",
      role: "Web Development Intern",
      company: "Unisoft Technology",
      duration: "Past Intern",
      description: "Developed and improved web applications, worked with frontend technologies (HTML, CSS, JavaScript), and gained experience in building responsive user interfaces with dynamic data bindings.",
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design"]
    }
  ],
  educations: [
    {
      id: "edu1",
      degree: "Bachelor of Engineering",
      institution: "St. Vincent Pallotti College of Engineering and Technology",
      year: "Pursuing",
      details: "Focus on Computer Science & Information Technology engineering principles, data structures, and web technologies."
    },
    {
      id: "edu2",
      degree: "Diploma in Polytechnic Engineering",
      institution: "Priyadarshini Polytechnic",
      year: "Completed in 2024",
      details: "Gained core fundamentals of electronics, computer networks, and basic programming frameworks."
    },
    {
      id: "edu3",
      degree: "Higher Secondary Education (12th)",
      institution: "Dinanath High School & Junior College",
      year: "Completed in 2022",
      details: "Science major with Mathematics and Computer Science elective focus."
    },
    {
      id: "edu4",
      degree: "Secondary Education (10th)",
      institution: "Saraswati Vidyalaya",
      year: "Completed in 2020",
      details: "General studies with distinction."
    }
  ]
};
