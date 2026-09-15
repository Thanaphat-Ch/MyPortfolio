"use client"

import React from "react"
import { ChevronDown, ExternalLink, Briefcase, User, Code, Terminal, Menu, X, ImageIcon, Github, Phone, Mail } from "lucide-react"
import { useNavigation } from "@/Hooks/useNavigation"
import { useProjectLightbox } from "@/Hooks/useProjectLightbox"
import { useScrollReveal } from "@/Hooks/useScrollReveal"
import ProjectLightbox from "./ProjectLightbox";
import { Project, Experience, Skill } from "@/types";

export default function PortfolioView({ projects, experiences, skills }: { projects: Project[], experiences: Experience[], skills: Skill[] }) {
    const nav = useNavigation()
    const lightbox = useProjectLightbox()

    useScrollReveal()

    return (
        <div className="min-h-screen bg-linear-to-tr from-neutral-50 via-neutral-50 to-indigo-50/30 text-neutral-900 font-sans selection:bg-indigo-600 selection:text-white">
            {/* Navigation */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${nav.isScrolled ? "bg-white/80 backdrop-blur-md shadow-xs py-3 border-b border-neutral-200/50" : "bg-transparent py-5 md:py-6"}`}>
                <div className="container mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center max-w-10xl">
                    <div className="text-xl font-bold tracking-tighter cursor-pointer group" onClick={() => nav.scrollTo("home")}>
                        THANAPHAT.<span className="text-indigo-600 transition-colors group-hover:text-indigo-500">CH</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 text-sm font-medium text-neutral-500">
                        {["About", "Experience", "Projects"].map((item) => (
                            <button key={item} onClick={() => nav.scrollTo(item.toLowerCase())} className={`transition-colors relative py-1 hover:text-indigo-600 ${nav.activeSection === item.toLowerCase() ? "text-indigo-600 font-semibold" : ""}`}>
                                {item}
                                {nav.activeSection === item.toLowerCase() && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 rounded-full animate-fade-in" />
                                )}
                            </button>
                        ))}
                    </div>
                    <button onClick={() => nav.scrollTo("contact")} className="hidden md:block px-5 py-2 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-indigo-600 transition-all duration-300 hover:shadow-md hover:shadow-indigo-600/20">
                        ติดต่อฉัน
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden text-neutral-600 hover:text-indigo-600 transition-colors" onClick={() => nav.setIsMobileMenuOpen(!nav.isMobileMenuOpen)}>
                        {nav.isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 overflow-hidden ${nav.isMobileMenuOpen ? "max-h-64 py-4 border-t border-neutral-100" : "max-h-0 py-0"}`}>
                    <div className="flex flex-col space-y-4 px-6">
                        {["About", "Experience", "Projects"].map((item) => (
                            <button key={item} onClick={() => nav.scrollTo(item.toLowerCase())} className={`text-left font-medium transition-colors text-neutral-600 hover:text-indigo-600 ${nav.activeSection === item.toLowerCase() ? "text-indigo-600" : ""}`}>
                                {item}
                            </button>
                        ))}
                        <button onClick={() => nav.scrollTo("contact")} className="w-full text-center px-5 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-indigo-600 transition-colors mt-2 shadow-xs">
                            contact me
                        </button>
                    </div>
                </div>
            </nav>

            <main>
                {/* Hero Section */}
                <section id="home" className="min-h-screen flex flex-col justify-center items-center pt-24 pb-12 px-6 sm:px-10 lg:px-20 relative overflow-hidden">
                    {/* Background Decorative Blur */}
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />
                    
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center animate-fade-in-up w-full relative z-10">
                        <div className="text-left space-y-6">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
                                Hi, I&apos;m <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 via-purple-600 to-neutral-900">Thanaphat</span>
                            </h1>
                            <p className="text-base sm:text-lg text-neutral-500 max-w-md font-light leading-relaxed">
                                Software Developer with a passion for creating clean, minimal, and functional web and mobile applications.                            
                            </p>

                            <div className="flex flex-wrap items-center gap-3 pt-2">
                                <a href="https://github.com/thanaphat-ch" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white border border-neutral-200 text-neutral-700 rounded-full hover:bg-indigo-600 hover:border-indigo-600 hover:text-white transition-all shadow-xs" title="GitHub">
                                    <Github size={18} />
                                </a>

                                <a href="tel:+66917701746" className="w-10 h-10 flex items-center justify-center bg-white border border-neutral-200 text-neutral-700 rounded-full hover:bg-indigo-600 hover:border-indigo-600 hover:text-white transition-all shadow-xs" title="โทรหาฉัน">
                                    <Phone size={18} />
                                </a>

                                <a href="mailto:thanaphat.chn@gmail.com" className="px-5 py-2.5 flex items-center gap-2 bg-white border border-neutral-200 text-neutral-700 text-sm font-medium rounded-full hover:bg-neutral-50 transition-all shadow-xs hover:border-neutral-300">
                                    <Mail size={16} className="text-indigo-600" />
                                    <span>Email Me</span>
                                </a>

                                <button onClick={() => nav.scrollTo("projects")} className="px-5 py-2.5 bg-linear-to-r from-indigo-600 to-indigo-700 text-white text-sm font-medium rounded-full hover:from-indigo-700 hover:to-indigo-800 transition-all shadow-md shadow-indigo-600/10 hover:scale-[1.02]">
                                    View Projects
                                </button>
                            </div>
                        </div>

                        {/* ฝั่งขวา: Terminal พร้อม Glow Effect */}
                        <div className="w-full max-w-md mx-auto aspect-video rounded-2xl bg-neutral-950 shadow-xl shadow-indigo-950/20 border border-neutral-800/80 p-4 font-mono text-xs sm:text-sm text-neutral-400 flex flex-col justify-between relative group hover:border-indigo-500/30 transition-colors duration-500">
                            <div className="absolute inset-0 bg-linear-to-b from-indigo-500/5 to-transparent rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="flex items-center gap-1.5 border-b border-neutral-800/80 pb-3 mb-2 relative z-10">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                <span className="text-neutral-600 text-xs ml-2">thanaphat.ts</span>
                            </div>
                            <div className="flex-1 space-y-2 pt-2 relative z-10">
                                <p className="text-neutral-600">{"//" + " Current tech stack"}</p>
                                <p><span className="text-indigo-400">const</span> developer = {"{"}</p>
                                <p className="pl-4">name: <span className="text-amber-200/90">&apos;Thanaphat&apos;</span>,</p>
                                <p className="pl-4">role: <span className="text-amber-200/90">&apos;Software Developer&apos;</span>,</p>
                                <p className="pl-4">focus: <span className="text-indigo-400">[</span><span className="text-amber-200/90">&apos;React&apos;, &apos;React Native&apos;, &apos;Next.js&apos;</span><span className="text-indigo-400">]</span></p>
                                <p>{"};"}</p>
                                <p className="text-indigo-500 animate-pulse font-bold">| </p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-neutral-400 hover:text-indigo-600 transition-colors cursor-pointer p-4 z-10" onClick={() => nav.scrollTo("about")}>
                        <ChevronDown size={24} />
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-20 sm:py-24 px-6 sm:px-12 lg:px-20 bg-white relative">
                    <div className="max-w-4xl mx-auto reveal">
                        <div className="flex items-center gap-4 mb-10 sm:mb-12">
                            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl border border-indigo-100">
                                <User size={24} />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">About Me</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-10 sm:gap-12 items-start">
                            <div className="space-y-5 sm:space-y-6 text-neutral-600 leading-relaxed font-light text-base sm:text-lg">
                                <p>
                                    Recent Computer Science graduate passionate about software development, with hands-on experience in web and mobile application development. Skilled in React.js, Tailwind CSS, React Native, Node.js, Express.js, and MySQL, with a solid understanding of full-stack development principles. Eager to contribute technical skills, learn from experienced professionals, and grow as a Software Developer.
                                </p>
                            </div>

                            <div className="reveal delay-100">
                                <h3 className="text-lg font-semibold mb-5 sm:mb-6 flex items-center gap-2 text-neutral-800">
                                    <Terminal size={18} className="text-indigo-500" />
                                    ทักษะและความเชี่ยวชาญ
                                </h3>
                                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                                    {skills.map((skill) => {
                                        const IconComponent: React.FC<{ className?: string }> = skill.icon;
                                        return (
                                            <span key={skill.name} className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-neutral-50/50 border border-neutral-200/80 text-neutral-700 rounded-xl text-xs sm:text-sm font-medium hover:border-indigo-500 hover:bg-indigo-50/30 transition-all duration-300 cursor-default shadow-xs">
                                                <IconComponent className={`text-base sm:text-lg ${skill.color}`} />
                                                {skill.name}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section id="experience" className="py-20 sm:py-24 px-6 sm:px-12 lg:px-20 bg-neutral-50/60 relative">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-4 mb-12 sm:mb-16 reveal">
                            <div className="p-3 bg-white shadow-xs border border-neutral-200 rounded-xl text-indigo-600">
                                <Briefcase size={24} />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Experience</h2>
                        </div>

                        <div className="space-y-10 sm:space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-neutral-300 before:to-transparent">
                            {experiences.map((exp, index) => (
                                <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active reveal" style={{ transitionDelay: `${index * 150}ms` }}>
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-neutral-50 bg-white shadow-xs shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors duration-300 group-hover:border-indigo-100">
                                        <div className="w-2.5 h-2.5 bg-neutral-400 rounded-full group-hover:bg-indigo-600 transition-colors duration-300"></div>
                                    </div>

                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 sm:p-6 rounded-2xl bg-white border border-neutral-200/60 shadow-xs group-hover:shadow-md group-hover:border-indigo-100 transition-all duration-300">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                                            <h3 className="font-bold text-base sm:text-lg text-neutral-900 group-hover:text-indigo-600 transition-colors">{exp.role}</h3>
                                            <span className="text-[10px] sm:text-xs font-medium px-2.5 sm:px-3 py-1 bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-full inline-block w-fit">{exp.period}</span>
                                        </div>
                                        <div className="text-neutral-400 text-sm font-medium mb-3 sm:mb-4">{exp.company}</div>
                                        <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-light">{exp.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-20 sm:py-24 px-6 sm:px-12 lg:px-20 bg-white">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-center gap-4 mb-10 sm:mb-12 reveal">
                            <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-xl text-indigo-600">
                                <Code size={24} />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Projects</h2>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                            {projects.map((project, index) => (
                                <div key={project.id} className="group rounded-2xl bg-white border border-neutral-200/80 overflow-hidden hover:shadow-xl hover:shadow-indigo-950/5 transition-all duration-500 hover:-translate-y-1.5 flex flex-col reveal" style={{ transitionDelay: `${index * 150}ms` }}>
                                    <div className="relative h-40 sm:h-44 overflow-hidden bg-neutral-900">
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-90" />
                                        <div className="absolute inset-0 bg-linear-to-t from-neutral-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                                            <span className="px-2.5 py-1 bg-white/90 backdrop-blur-xs text-neutral-800 text-[10px] sm:text-xs font-semibold rounded-md shadow-xs border border-neutral-200/40">{project.category}</span>
                                        </div>
                                    </div>

                                    <div className="p-5 flex-1 flex flex-col bg-white border-t border-neutral-100 relative">
                                        <div className="flex justify-between items-start mb-3 sm:mb-4">
                                            <h3 className="font-bold text-lg text-neutral-900 group-hover:text-indigo-600 transition-colors duration-300">{project.title}</h3>
                                            <div className="flex gap-2">
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-indigo-600 transition-colors p-1 hover:bg-neutral-50 rounded-lg">
                                                    <ExternalLink size={18} />
                                                </a>

                                                {project.screenshots && (
                                                    <button onClick={() => lightbox.openProjectPreview(project)} className="text-neutral-400 hover:text-indigo-600 transition-colors p-1 hover:bg-neutral-50 rounded-lg">
                                                        <ImageIcon size={18} />
                                                    </button>
                                                )}
                                            </div>
                                        </div>

                                        <p className="text-neutral-500 text-xs sm:text-sm mb-5 sm:mb-6 flex-1 font-light leading-relaxed">{project.description}</p>

                                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                                            {project.tech.map((t) => (
                                                <span key={t} className="text-[10px] sm:text-xs font-medium text-neutral-600 bg-neutral-50 border border-neutral-200 px-2 py-0.5 rounded-md group-hover:border-indigo-100 group-hover:bg-indigo-50/20 transition-colors duration-300">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact/CTA Section (Gradient Background) */}
                <section id="contact" className="py-24 px-6 bg-linear-to-br from-neutral-900 via-neutral-950 to-indigo-950 text-white text-center relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="max-w-2xl mx-auto space-y-6 sm:space-y-8 reveal relative z-10">
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">พร้อมที่จะร่วมงานด้วยกันหรือยัง?</h2>
                        <p className="text-neutral-400 font-light text-base sm:text-lg px-4 sm:px-0">หากคุณกำลังมองหานักพัฒนาเว็บไซต์เพื่อสร้างสรรค์โปรเจกต์ต่อไปของคุณ สามารถติดต่อพูดคุยกันได้เลยครับ</p>
                        <a href="mailto:thanaphat_chan@hotmail.com" className="inline-block px-8 py-4 bg-white text-neutral-900 text-sm sm:text-base font-bold rounded-full hover:bg-indigo-50 transition-all hover:scale-105 shadow-xl shadow-indigo-500/5">
                            ส่งอีเมลหาฉัน
                        </a>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="py-8 px-6 bg-neutral-950 text-neutral-500 text-xs sm:text-sm text-center border-t border-neutral-800/60">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>© {new Date().getFullYear()} Thanaphat. All rights reserved.</p>
                    <div className="flex gap-5 sm:gap-6">
                        <a href="tel:+66917701746" className="hover:text-white transition-colors">
                            +66 91 770 1746
                        </a>
                    </div>
                </div>
            </footer>

            {/* Lightbox Modal Preview */}
            <ProjectLightbox
                isOpen={!!lightbox.selectedProject}
                project={lightbox.selectedProject}
                currentImage={lightbox.currentImage}
                onClose={lightbox.closeProject}
                onPrev={lightbox.prevImage}
                onNext={lightbox.nextImage}
            />

            {/* Styles สำหรับ Animation */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal.active { opacity: 1; transform: translateY(0); }
        .delay-100 { transition-delay: 100ms; }
      `}} />
        </div>
    )
}