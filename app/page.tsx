"use client"

import { Card } from "@/components/ui/card"
import { Mail, Linkedin, ArrowUpRight, GraduationCap, Sparkles, Github } from "lucide-react"
import { useEffect, useState } from "react"

const technologies = [
  { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: ".NET", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Oracle", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
]

const skillsData = [
  {
    category: "Programming Languages",
    items: [
      { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ],
  },
  {
    category: "Backend & Frameworks",
    items: [
      { name: ".NET", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
      { name: "Spring", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    ],
  },
  {
    category: "DevOps & Cloud",
    items: [
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "Oracle", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "SQL Server", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
    ],
  },
  {
    category: "Tools & Version Control",
    items: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "IntelliJ", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
    ],
  },
]

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "skills", "education", "contact"]
      const scrollPosition = window.scrollY + 200

      // Check if we're at the bottom of the page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        setActiveSection("contact")
        return
      }

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <button onClick={() => scrollToSection("hero")} className="text-2xl font-bold tracking-tight hover:text-muted-foreground transition-colors">
              ENY<span className="text-muted-foreground">.</span>
            </button>
            <div className="flex items-center gap-2">
              {[
                { id: "about", label: "About" },
                { id: "experience", label: "Experience" },
                { id: "skills", label: "Skills" },
                { id: "education", label: "Education" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-base font-medium transition-all duration-300 px-5 py-2.5 rounded-full ${activeSection === item.id ? "text-background bg-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-muted/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-muted/20 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 border border-border rounded-full mb-8">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Open to opportunities</span>
              </div>

              <h1 className="text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
                Eslem Nur
                <br />
                <span className="text-muted-foreground">Yıldırım</span>
              </h1>

              <p className="text-2xl text-muted-foreground mb-10 leading-relaxed">
                Computer Engineering student passionate about building
                <span className="text-foreground font-medium"> scalable backend systems</span>,
                <span className="text-foreground font-medium"> DevOps automation</span>, and
                <span className="text-foreground font-medium"> enterprise solutions</span>.
              </p>

              <div className="flex gap-4 mb-12">
                <button onClick={() => scrollToSection("contact")} className="px-8 py-4 text-lg bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-all duration-300">
                  Get in Touch
                </button>
                <button onClick={() => scrollToSection("experience")} className="px-8 py-4 text-lg border border-border text-foreground rounded-full font-medium hover:bg-muted/50 transition-all duration-300">
                  View Work
                </button>
              </div>

              <div>
                <p className="text-base text-muted-foreground mb-4">Tech Stack</p>
                <div className="flex gap-3 flex-wrap">
                  {technologies.map((tech) => (
                    <div key={tech.name} className="w-12 h-12 bg-card border border-border rounded-xl p-2.5 hover:scale-110 transition-all duration-300" title={tech.name}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                <div className="w-80 h-80 bg-muted/30 border border-border/50 rounded-3xl rotate-6 absolute top-4 left-4" />
                <div className="w-80 h-80 bg-muted/20 border border-border/30 rounded-3xl -rotate-3 absolute top-2 left-2" />
                <div className="w-80 h-80 bg-card border border-border rounded-3xl relative overflow-hidden flex items-center justify-center">
                  <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-border/50 shadow-2xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/image.png" alt="Eslem Nur Yıldırım" className="w-full h-full object-cover object-center" />
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 w-14 h-14 bg-card border border-border rounded-2xl p-2.5 shadow-xl z-20 hover:scale-110 transition-transform">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-full h-full object-contain" />
                </div>
                <div className="absolute -bottom-3 -left-3 w-14 h-14 bg-card border border-border rounded-2xl p-2.5 shadow-xl z-20 hover:scale-110 transition-transform">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" className="w-full h-full object-contain" />
                </div>
                <div className="absolute top-1/2 -right-6 -translate-y-1/2 w-12 h-12 bg-card border border-border rounded-xl p-2 shadow-xl z-20 hover:scale-110 transition-transform">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-full h-full object-contain" />
                </div>
                <div className="absolute top-1/2 -left-6 -translate-y-1/2 w-12 h-12 bg-card border border-border rounded-xl p-2 shadow-xl z-20 hover:scale-110 transition-transform">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" alt=".NET" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-muted/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-4">About</h2>
            <div className="w-20 h-1.5 bg-foreground rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <Card className="p-10 bg-card/50 border-border">
              <h3 className="text-2xl font-semibold mb-6">Who I Am</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a fourth-year Computer Engineering student at Tekirdağ Namık Kemal University
                with a deep passion for software development and system architecture. My journey
                in tech has been driven by curiosity and a desire to build solutions that matter.
                I thrive on solving complex problems and turning ideas into functional, efficient software.
              </p>
            </Card>

            <Card className="p-10 bg-card/50 border-border">
              <h3 className="text-2xl font-semibold mb-6">What I Do</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With hands-on experience in <span className="text-foreground font-medium">C#</span>,
                <span className="text-foreground font-medium"> Java</span>, and modern frameworks, I specialize
                in backend development, API design, and database optimization. I believe in writing
                clean, maintainable code that stands the test of time and scales with business needs.
              </p>
            </Card>

            <Card className="lg:col-span-2 p-10 bg-card/50 border-border">
              <h3 className="text-2xl font-semibold mb-6">Where I&apos;m Headed</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently exploring the world of DevOps and cloud infrastructure, I&apos;m fascinated
                by how automation and containerization can transform software delivery. My goal is to
                become a well-rounded engineer who can design, build, and deploy robust systems end-to-end.
                I&apos;m actively seeking opportunities where I can contribute to impactful projects while
                continuing to grow as a developer.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-4">Experience</h2>
            <div className="w-20 h-1.5 bg-foreground rounded-full" />
          </div>

          <div className="space-y-8">
            {[
              {
                company: "Cloud4Next",
                role: "DevOps Intern",
                period: "Dec 2025 – Present",
                description: "Contributing to the design and implementation of CI/CD pipelines that streamline deployment processes across multiple environments. Working closely with senior engineers to automate cloud infrastructure provisioning and manage containerized applications. Gaining hands-on experience with monitoring tools and incident response procedures while learning best practices for system reliability and scalability.",
                tags: ["Docker", "CI/CD", "Cloud Infrastructure", "Automation"],
              },
              {
                company: "Baditech",
                role: "Intern Engineer",
                period: "Sep – Dec 2025",
                description: "Participated in full-stack development projects spanning both web and mobile platforms. Collaborated with cross-functional teams to deliver user-facing features from concept to deployment. Worked on implementing responsive UI components, integrating RESTful APIs, and optimizing application performance. Gained valuable experience in agile development workflows and code review processes.",
                tags: ["Full-Stack", "Mobile Development", "REST API", "Agile"],
              },
              {
                company: "Buhari Automotive",
                role: "IT Support & Backend Developer",
                period: "Sep – Dec 2025",
                description: "Provided technical support for IT infrastructure while developing backend services to improve internal operations. Designed and implemented APIs for data exchange between different business systems. Managed database operations including query optimization and data integrity maintenance. Troubleshot network and system issues to ensure minimal downtime for business-critical applications.",
                tags: ["Backend Development", "API Design", "Database Management", "IT Support"],
              },
              {
                company: "EPİAŞ",
                role: "Software Developer",
                period: "Jun – Sep 2025",
                description: "Developed Java-based software solutions for processing and analyzing TEİAŞ energy data. Built robust data pipelines that handled large volumes of information with high accuracy requirements. Integrated applications with Oracle Database, writing optimized SQL queries and stored procedures. Collaborated with domain experts to understand business requirements and translate them into technical specifications.",
                tags: ["Java", "Oracle Database", "Data Processing", "SQL"],
              },
              {
                company: "Adesso",
                role: "Enterprise Software Project",
                period: "Aug – Oct 2024",
                description: "Contributed to enterprise software development using .NET framework and C#. Implemented integration with Central Bank APIs, handling complex authentication flows and data validation. Developed comprehensive error handling mechanisms to ensure system reliability. Wrote unit tests and documentation to maintain code quality standards. Participated in technical discussions and architecture reviews with senior developers.",
                tags: [".NET", "C#", "API Integration", "Enterprise Software"],
              },
            ].map((job, index) => (
              <Card key={index} className="p-10 bg-card/50 border-border hover:border-foreground/20 transition-all duration-500 group">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold group-hover:text-foreground transition-colors">{job.role}</h3>
                    <p className="text-lg text-muted-foreground mt-1">{job.company}</p>
                  </div>
                  <span className="text-base text-muted-foreground bg-muted px-5 py-2.5 rounded-full w-fit">{job.period}</span>
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{job.description}</p>
                <div className="flex gap-3 flex-wrap">
                  {job.tags.map((tag) => (
                    <span key={tag} className="text-sm px-4 py-1.5 bg-muted text-muted-foreground rounded-full">{tag}</span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-muted/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1.5 bg-foreground rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((category, index) => (
              <Card key={index} className="p-8 bg-card/50 border-border hover:border-foreground/20 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-6">{category.category}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.items.map((item) => (
                    <div key={item.name} className="flex items-center gap-3 p-3 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors">
                      <div className="w-9 h-9 flex-shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={item.logo} alt={item.name} className="w-full h-full object-contain" />
                      </div>
                      <span className="text-base font-medium text-foreground">{item.name}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <Card className="p-10 bg-card/50 border-border">
              <h3 className="text-xl font-semibold mb-6">Core Competencies</h3>
              <div className="flex flex-wrap gap-3">
                {["Problem Solving", "Algorithms & Data Structures", "System Design", "API Development", "Database Optimization", "Team Collaboration", "Agile Methodologies", "Technical Documentation"].map((skill) => (
                  <span key={skill} className="px-5 py-2.5 bg-muted text-muted-foreground rounded-full text-base hover:bg-foreground hover:text-background transition-all duration-300 cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-4">Education</h2>
            <div className="w-20 h-1.5 bg-foreground rounded-full" />
          </div>

          <Card className="p-10 bg-card/50 border-border">
            <div className="flex flex-col lg:flex-row lg:items-start gap-8">
              <div className="w-20 h-20 bg-muted rounded-2xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-10 h-10" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold">B.Sc. Computer Engineering</h3>
                    <p className="text-lg text-muted-foreground mt-1">Tekirdağ Namık Kemal University</p>
                  </div>
                  <span className="text-base text-muted-foreground bg-muted px-5 py-2.5 rounded-full w-fit">2022 – 2026</span>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Comprehensive education in computer engineering covering software development,
                  algorithms, data structures, system design, and modern software architecture.
                  Actively participating in practical projects and internships to bridge theory with practice.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Let&apos;s Connect</h2>
            <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
              I&apos;m always interested in hearing about new opportunities and collaborations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <a href="mailto:eslemyldrrm@gmail.com" className="group p-6 bg-card/50 border border-border rounded-2xl hover:border-foreground/20 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300 mx-auto mb-4">
                <Mail className="w-7 h-7" />
              </div>
              <div>
                <p className="text-base text-muted-foreground mb-2">Email</p>
                <p className="text-lg font-medium break-all">eslemyldrrm@gmail.com</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/eslem-nur-y%C4%B1ld%C4%B1r%C4%B1m-ba29b5249/" target="_blank" rel="noopener noreferrer" className="group p-6 bg-card/50 border border-border rounded-2xl hover:border-foreground/20 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300 mx-auto mb-4">
                <Linkedin className="w-7 h-7" />
              </div>
              <div>
                <p className="text-base text-muted-foreground mb-2">LinkedIn</p>
                <p className="text-lg font-medium flex items-center justify-center gap-2">View Profile <ArrowUpRight className="w-4 h-4" /></p>
              </div>
            </a>

            <a href="https://github.com/eslemnuryildirim" target="_blank" rel="noopener noreferrer" className="group p-6 bg-card/50 border border-border rounded-2xl hover:border-foreground/20 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300 mx-auto mb-4">
                <Github className="w-7 h-7" />
              </div>
              <div>
                <p className="text-base text-muted-foreground mb-2">GitHub</p>
                <p className="text-lg font-medium flex items-center justify-center gap-2">View Profile <ArrowUpRight className="w-4 h-4" /></p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-4">
            <p className="text-lg font-medium">
              designed by{" "}
              <a
                href="https://www.linkedin.com/in/eslem-nur-y%C4%B1ld%C4%B1r%C4%B1m-ba29b5249/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-bold hover:text-muted-foreground transition-colors"
              >
                eslem nur yıldırım
              </a>
            </p>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}