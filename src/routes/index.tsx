import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Github, Linkedin, Mail, Download, ArrowRight, Menu, X, GraduationCap, School, Award, Code2, Eye,
  Globe, Database, Wrench, Brain, Users, Briefcase, Trophy, FileText, Send, ExternalLink, Cpu, CheckCircle2,
} from "lucide-react";
import photo from "@/assets/manikandan.jpg.asset.json";
import { motion } from "framer-motion";
import { Section, Card, Tag, Reveal, btnClass } from "@/components/portfolio/ui";
import { LINKS, NAV, SKILLS, PROJECTS, CERTS, HACKATHONS, PAPERS } from "@/components/portfolio/data";
import { ResumeViewer } from "@/components/portfolio/ResumeViewer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "P. A. Manikandan — IT Student & Software Developer" },
      { name: "description", content: "Portfolio of P. A. Manikandan, B.Tech IT student building practical software with Java, Python and JavaScript." },
      { property: "og:title", content: "P. A. Manikandan — Software Developer Portfolio" },
      { property: "og:description", content: "Projects, skills, internship and hackathons of IT student P. A. Manikandan." },
    ],
  }),
  component: Index,
});

const skillIcons = [Code2, Globe, Database, Wrench, Brain, Users];

function Socials({ size = 18 }: { size?: number }) {
  const items = [
    { href: LINKS.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: LINKS.github, icon: Github, label: "GitHub" },
    { href: `mailto:${LINKS.email}`, icon: Mail, label: "Email" },
  ];
  return (
    <div className="flex gap-3">
      {items.map(({ href, icon: I, label }) => (
        <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
          className="glass grid h-11 w-11 place-items-center rounded-xl text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-foreground">
          <I size={size} />
        </a>
      ))}
    </div>
  );
}

function Nav({ onResume }: { onResume: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="font-display text-lg font-bold tracking-wider">MANI<span className="text-gradient">KANDAN</span></a>
        <ul className="hidden items-center gap-6 lg:flex">
          {NAV.map((n) => (
            <li key={n}><a href={`#${n.toLowerCase()}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{n}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button onClick={onResume} className={`${btnClass()} hidden px-4 py-2 sm:inline-flex`}><Eye size={16} /> Resume</button>
          <button className="p-2 lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {open && (
        <ul className="border-t border-border bg-background px-5 py-4 lg:hidden">
          {NAV.map((n) => (
            <li key={n}><a onClick={() => setOpen(false)} href={`#${n.toLowerCase()}`} className="block py-2 text-muted-foreground hover:text-foreground">{n}</a></li>
          ))}
          <li><button onClick={() => { setOpen(false); onResume(); }} className={`${btnClass()} mt-3 w-full`}><Eye size={16} /> View Resume</button></li>
        </ul>
      )}
    </header>
  );
}

function Hero({ onResume }: { onResume: () => void }) {
  return (
    <section id="home" className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-5 pt-24 pb-12 md:grid-cols-[1.3fr_1fr]">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-xs text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-secondary" /> Open to internships & opportunities
        </p>
        <h1 className="font-display text-4xl font-bold leading-tight md:text-6xl">
          Hi, I'm <span className="text-gradient">P. A. Manikandan</span>
        </h1>
        <p className="mt-4 text-lg font-medium text-foreground/90">Information Technology Student | Software Developer | Problem Solver</p>
        <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
          I'm a passionate IT engineering student who enjoys building practical software solutions, exploring emerging technologies, and solving real-world problems through programming.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className={btnClass()}>Explore My Projects <ArrowRight size={16} /></a>
          <button onClick={onResume} className={btnClass("outline")}><Eye size={16} /> View Resume</button>
        </div>
        <div className="mt-8"><Socials /></div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="mx-auto w-full max-w-sm">
        <div className="bg-gradient-accent rounded-[2rem] p-[2px] shadow-glow">
          <img src={photo.url} alt="P. A. Manikandan" className="aspect-[4/5] w-full rounded-[calc(2rem-2px)] bg-background object-cover" />
        </div>
      </motion.div>
    </section>
  );
}

function About() {
  const facts = [
    { icon: GraduationCap, k: "Degree", v: "B.Tech Information Technology" },
    { icon: School, k: "College", v: "KonguNadu College of Engineering and Technology" },
    { icon: Award, k: "CGPA", v: "7.54" },
    { icon: Code2, k: "Programming", v: "Java, Python, JavaScript" },
  ];
  return (
    <Section id="about" eyebrow="About Me" title="A developer in the making">
      <div className="grid gap-10 md:grid-cols-2">
        <Reveal className="space-y-4 leading-relaxed text-muted-foreground">
          <p>I'm P. A. Manikandan, a B.Tech Information Technology student at KonguNadu College of Engineering and Technology, Tiruchirappalli.</p>
          <p>I am interested in software development, web technologies, databases, and emerging technologies. I enjoy developing innovative projects that address real-world challenges.</p>
          <p>My goal is to continuously improve my technical knowledge and contribute to meaningful software development projects.</p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {facts.map(({ icon: I, k, v }, i) => (
            <Reveal key={k} delay={i * 0.08}>
              <Card className="h-full p-5">
                <I className="mb-3 text-primary" size={22} />
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{k}</p>
                <p className="mt-1 font-medium">{v}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Technical Skills" title="What I work with">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((s, i) => {
          const I = skillIcons[i] ?? Code2;
          return (
            <Reveal key={s.title} delay={i * 0.06}>
              <Card className="h-full">
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-secondary"><I size={20} /></span>
                  <h3 className="font-display font-semibold">{s.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">{s.items.map((x) => <Tag key={x}>{x}</Tag>)}</div>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Featured Projects" title="Things I've built">
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <Card className="flex h-full flex-col">
              <div className="mb-4 flex items-start justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary"><Cpu size={22} /></span>
                <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="font-display text-xl font-semibold">{p.title}</h3>
              {p.subtitle && <p className="text-sm text-secondary">{p.subtitle}</p>}
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              {p.features && (
                <ul className="mt-4 space-y-1.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground/85"><CheckCircle2 size={15} className="mt-0.5 shrink-0 text-secondary" />{f}</li>
                  ))}
                </ul>
              )}
              <div className="mt-5 flex flex-wrap gap-2">{p.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
              <div className="mt-auto pt-6">
                <a href={p.github ?? LINKS.github} target="_blank" rel="noreferrer" className={btnClass("outline")}>
                  <Github size={16} /> {p.github ? "View on GitHub" : "GitHub Profile"} <ExternalLink size={14} />
                </a>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  const points = [
    "Assisted in web development and application logic implementation using Java.",
    "Worked with relational databases, including MySQL.",
    "Learned server-side workflows.",
    "Collaborated with team members in a real-world development environment.",
  ];
  return (
    <Section id="experience" eyebrow="Internship" title="Experience">
      <div className="relative border-l border-border pl-8">
        <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-gradient-accent shadow-glow" />
        <Reveal>
          <Card>
            <div className="flex flex-wrap items-center gap-3">
              <Briefcase className="text-primary" size={20} />
              <h3 className="font-display text-xl font-semibold">Web Development Intern</h3>
            </div>
            <p className="mt-1 text-secondary">Media Wave Technologies, Tiruchirappalli</p>
            <ul className="mt-4 space-y-2">
              {points.map((p) => <li key={p} className="flex gap-2 text-muted-foreground"><ArrowRight size={16} className="mt-1 shrink-0 text-primary" />{p}</li>)}
            </ul>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}

function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Continuous learning">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CERTS.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.06}>
            <Card className="h-full">
              <Award className="mb-4 text-secondary" size={26} />
              <h3 className="font-display font-semibold">{c.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Timeline({ items, icon: I }: { items: { place: string; project: string }[]; icon: typeof Trophy }) {
  return (
    <div className="space-y-4">
      {items.map((h, i) => (
        <Reveal key={h.place + i} delay={i * 0.06}>
          <Card className="flex items-center gap-4 p-5">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent text-primary"><I size={18} /></span>
            <div>
              <p className="font-medium">{h.place}</p>
              <p className="text-sm text-muted-foreground">{h.project}</p>
            </div>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}

function Achievements() {
  return (
    <Section id="achievements" eyebrow="Hackathons & Achievements" title="Competing and presenting">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="mb-5 font-display text-lg font-semibold">Hackathons</h3>
          <Timeline items={HACKATHONS} icon={Trophy} />
        </div>
        <div>
          <h3 className="mb-5 font-display text-lg font-semibold">Paper Presentations</h3>
          <Timeline items={PAPERS} icon={FileText} />
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${LINKS.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
  };
  const field = "w-full rounded-xl border border-input bg-muted/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";
  const info = [
    { icon: Mail, label: LINKS.email, href: `mailto:${LINKS.email}` },
    { icon: Linkedin, label: "linkedin.com/in/manikandan-p-a", href: LINKS.linkedin },
    { icon: Github, label: "github.com/Mani-413", href: LINKS.github },
  ];
  return (
    <Section id="contact" eyebrow="Contact" title="Let's Build Something Amazing Together">
      <div className="grid gap-8 md:grid-cols-[1fr_1.3fr]">
        <Reveal className="space-y-4">
          <p className="leading-relaxed text-muted-foreground">I'm always interested in connecting with developers, exploring opportunities, and collaborating on innovative projects.</p>
          {info.map(({ icon: I, label, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="glass glass-hover flex items-center gap-3 rounded-xl p-4 text-sm break-all">
              <I size={18} className="shrink-0 text-secondary" />{label}
            </a>
          ))}
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={submit} className="glass space-y-4 rounded-2xl p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <input required maxLength={100} placeholder="Name" className={field} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <input required type="email" maxLength={255} placeholder="Email" className={field} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <input required maxLength={150} placeholder="Subject" className={field} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
            <textarea required maxLength={2000} rows={5} placeholder="Message" className={field} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            <button type="submit" className={`${btnClass()} w-full`}><Send size={16} /> Send Message</button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function Index() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const openResume = () => setResumeOpen(true);
  return (
    <div className="min-h-screen">
      <Nav onResume={openResume} />
      <main>
        <Hero onResume={openResume} /><About /><Skills /><Projects /><Experience /><Certifications /><Achievements /><Contact />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">Designed & Developed by P. A. Manikandan</p>
          <div className="flex gap-4 text-muted-foreground">
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-foreground"><Linkedin size={18} /></a>
            <a href={LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-foreground"><Github size={18} /></a>
          </div>
        </div>
      </footer>
      <ResumeViewer open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
