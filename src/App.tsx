import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, BarChart3, BrainCircuit, Code2, Database, Github, Layers3, Linkedin, Menu, Network, Workflow, X, Zap } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { contact, projects, services, technologies } from './data/portfolio'

gsap.registerPlugin(ScrollTrigger)

const nav = [{ label: 'Inicio', href: '#inicio' }, { label: 'Perfil', href: '#perfil' }, { label: 'Proyectos', href: '#proyectos' }, { label: 'Servicios', href: '#servicios' }, { label: 'Contacto', href: '#contacto' }]
const projectIcons = [BarChart3, Layers3, Workflow]
const serviceIcons = [Database, BrainCircuit, BarChart3, Zap]

function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="navbar"><a className="brand" href="#inicio" onClick={() => setOpen(false)}><span className="brand-mark">D<span>.</span></span><span>DATA<br/>INTELLIGENCE</span></a>
    <button className="menu-toggle" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Navegación principal">{nav.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}</nav>
    <a className="nav-cta" href="#contacto">Hablemos <ArrowUpRight size={15}/></a>
  </header>
}

function Hero() {
  const root = useRef<HTMLElement>(null)
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !root.current) return
    const ctx = gsap.context(() => {
      gsap.from('.hero-copy > *', { y: 28, opacity: 0, duration: .85, stagger: .12, ease: 'power3.out', delay: .15 })
      gsap.from('.hero-visual', { opacity: 0, scale: .94, duration: 1.2, ease: 'power3.out', delay: .35 })
      gsap.to('.orbit-a', { rotation: 360, duration: 42, repeat: -1, ease: 'none' })
      gsap.to('.orbit-b', { rotation: -360, duration: 56, repeat: -1, ease: 'none' })
    }, root)
    return () => ctx.revert()
  }, [])
  return <section id="inicio" className="hero section-wrap" ref={root}>
    <div className="hero-copy"><div className="eyebrow"><span className="status-dot"/> DATA / SCIENCE / INTELLIGENCE</div>
      <h1>Transformando datos en <em>decisiones inteligentes.</em></h1>
      <p className="hero-lead">Analítica de datos, inteligencia artificial y soluciones tecnológicas para resolver problemas reales.</p>
      <div className="hero-actions"><a className="button button-primary" href="#proyectos">Explorar proyectos <ArrowUpRight size={17}/></a><a className="button button-ghost" href="#contacto">Contactar <ArrowRight size={16}/></a></div>
      <div className="hero-footnote"><span>01 — 05</span><span>SCROLL TO EXPLORE <ArrowDown size={13}/></span></div>
    </div>
    <div className="hero-visual" aria-label="Visualización abstracta de datos" role="img"><div className="visual-glow"/><div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="visual-core"><div className="core-grid"/><span className="core-label">DATA<br/>IN MOTION</span><div className="core-cross">+</div></div><span className="visual-tag tag-top">FIG. 001 / SYSTEMS</span><span className="visual-tag tag-bottom">SIGNAL DETECTED <span className="status-dot"/></span><span className="visual-coordinate">24° 48' N<br/>ANALYTICS LAB</span></div>
  </section>
}

function About() {
  const pillars = [{ icon: BrainCircuit, title: 'Data Science & Machine Learning', text: 'De los datos al modelo: exploración, experimentación y predicción.' }, { icon: BarChart3, title: 'Business Intelligence', text: 'Información clara para entender el presente y orientar decisiones.' }, { icon: Network, title: 'Statistical Modeling & Analytics', text: 'Métodos cuantitativos para explicar relaciones y medir escenarios.' }]
  return <section id="perfil" className="section-wrap about section-pad reveal"><div className="section-kicker"><span>01 / PERFIL</span><span>ANALYTICAL THINKING × TECHNOLOGY</span></div><div className="about-grid"><h2>Más allá<br/>de los <em>datos.</em></h2><div className="about-intro"><p>Combinamos pensamiento analítico, modelado estadístico y tecnología para convertir información compleja en soluciones comprensibles y accionables.</p><span className="micro-note">CURIOSIDAD COMO MÉTODO. CLARIDAD COMO RESULTADO.</span></div></div><div className="pillar-grid">{pillars.map(({icon:Icon,title,text},i)=><article className="pillar" key={title}><div className="pillar-top"><Icon size={21}/><span>0{i+1}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>
}

function Projects() {
  return <section id="proyectos" className="section-wrap section-pad projects reveal"><div className="section-kicker"><span>02 / TRABAJO SELECCIONADO</span><span>CONCEPTUAL CASE STUDIES</span></div><div className="section-heading"><h2>Ideas que toman<br/><em>forma.</em></h2><p>Una selección de ejercicios conceptuales que muestran cómo abordamos los retos desde los datos.</p></div><div className="project-list">{projects.map((project,i)=>{const Icon=projectIcons[i] ?? Code2;return <article className="project-card" key={project.number}><div className="project-number">{project.number}</div><div className="project-art"><div className="art-ring"/><div className="art-icon"><Icon size={30}/></div><span className="art-index">0{i+1} / CASE</span></div><div className="project-info"><span className="project-category">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div><div className="project-arrow"><ArrowUpRight size={20}/></div></article>})}</div><p className="demo-disclaimer"><span>NOTE /</span> Proyectos demostrativos. Los escenarios y datos son ilustrativos; no representan clientes ni resultados reales.</p></section>
}

function Services() {
  return <section id="servicios" className="services section-pad reveal"><div className="section-wrap"><div className="section-kicker"><span>03 / CAPACIDADES</span><span>FROM INSIGHT TO IMPACT</span></div><div className="section-heading"><h2>Resolver mejor.<br/><em>Decidir con claridad.</em></h2><p>Capacidades que conectan análisis, tecnología y objetivos de negocio.</p></div><div className="service-grid">{services.map((service,i)=>{const Icon=serviceIcons[i];return <article className="service-card" key={service.number}><div className="service-head"><Icon size={22}/><span>{service.number}</span></div><h3>{service.title}</h3><p>{service.description}</p><div className="service-line"/></article>})}</div></div></section>
}

function Technologies() {
  return <section className="section-wrap tech-section section-pad reveal"><div className="section-kicker"><span>04 / STACK TECNOLÓGICO</span><span>TOOLS ARE A MEANS, NOT THE END</span></div><div className="tech-content"><h2>El stack detrás<br/>de cada <em>solución.</em></h2><div className="tech-cloud">{technologies.map((tech,i)=><span className="tech-chip" key={tech}><i>{String(i+1).padStart(2,'0')}</i>{tech}</span>)}</div></div></section>
}

function Contact() {
  return <section id="contacto" className="contact-section section-pad reveal"><div className="section-wrap"><div className="section-kicker"><span>05 / CONTACTO</span><span>OPEN FOR NEW IDEAS</span></div><div className="contact-main"><div><span className="eyebrow"><span className="status-dot"/> LET'S BUILD SOMETHING MEANINGFUL</span><h2>Los buenos proyectos<br/>comienzan con una <em>pregunta.</em></h2><p>¿Tienes un reto de datos o una idea que merece explorarse? Conversemos.</p></div><a className="contact-link" href={`mailto:${contact.email}?subject=Conversemos%20sobre%20un%20proyecto`}><span>Cuéntame tu idea</span><ArrowUpRight size={24}/></a></div><div className="contact-bottom"><a href={`mailto:${contact.email}`}>{contact.email}</a><div className="social-links"><a href={contact.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15}/> LinkedIn <ArrowUpRight size={13}/></a><a href={contact.github} target="_blank" rel="noreferrer"><Github size={15}/> GitHub <ArrowUpRight size={13}/></a></div><span className="micro-note">EDITA LOS DATOS DE CONTACTO EN PORTFOLIO.TS</span></div></div></section>
}

function Footer() {
  return <footer className="footer section-wrap"><a className="brand" href="#inicio"><span className="brand-mark">D<span>.</span></span><span>DATA<br/>INTELLIGENCE</span></a><span>© {new Date().getFullYear()} DATA INTELLIGENCE</span><span>DESIGNED WITH CURIOSITY. BUILT WITH DATA.</span><a href="#inicio" aria-label="Volver al inicio" className="back-top"><ArrowUpRight size={17}/></a></footer>
}

export default function App() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((element) => {
        gsap.from(element, { y: 34, opacity: 0, duration: .8, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 84%', once: true } })
      })
    })
    return () => ctx.revert()
  }, [])
  return <><Navbar/><main><Hero/><About/><Projects/><Services/><Technologies/><Contact/></main><Footer/></>
}
