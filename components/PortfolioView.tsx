"use client"

import React from "react"
import { ExternalLink, ImageIcon } from "lucide-react"
import { useNavigation } from "@/Hooks/useNavigation"
import { useProjectLightbox } from "@/Hooks/useProjectLightbox"
import { useScrollReveal } from "@/Hooks/useScrollReveal"
import ProjectLightbox from "./ProjectLightbox";
import { Project, Experience, Skill } from "@/types";
import FloatingDock from "./Navigation";


export default function PortfolioView({ projects, experiences, skills }: { projects: Project[], experiences: Experience[], skills: Skill[] }) {
    const nav = useNavigation()
    const lightbox = useProjectLightbox()

    useScrollReveal()

    return (
        <div className="min-h-screen font-sans text-foreground bg-background selection:bg-primary selection:text-primary-foreground">
            <main className="flex flex-col gap-16 py-24 md:py-28 lg:pt-32 px-6 sm:px-16 max-w-3xl mx-auto">
                <section id="home" className="flex flex-col relative overflow-hidden ">
                    <div className="grid gap-12 animate-fade-in-up w-full relative z-10 ">
                        <div className="text-left space-y-4 ">
                            <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.15]">
                                Hi, I&apos;m <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-purple-600 to-neutral-900">Thanaphat</span>
                            </h1>
                            <p className="text-base text-muted-foreground sm:text-xl max-w-lg leading-relaxed">
                                Software Developer with a passion for creating clean, minimal, and functional web and mobile applications.
                            </p>
                        </div>
                    </div>
                </section>

                <section id="about">
                    <h4 className="heading-1"> About Me </h4>
                    <div className="max-w-4xl mx-auto reveal">
                        <div className="grid sm:gap-12 items-start">
                            <div className="space-y-5 sm:space-y-6 text-base text-muted-foreground leading-relaxed">
                                <p>
                                    Recent Computer Science graduate passionate about software development, with hands-on experience in web and mobile application development. Skilled in React.js, Tailwind CSS, React Native, Node.js, Express.js, and MySQL, with a solid understanding of full-stack development principles. Eager to contribute technical skills, learn from experienced professionals, and grow as a Software Developer.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="skills" className="delay-100">
                    <h4 className="heading-1"> Skills </h4>
                    <div className="flex flex-wrap gap-2.5 sm:gap-3">
                        {skills.map((skill) => {
                            const IconComponent: React.FC<{ className?: string }> = skill.icon;
                            return (
                                <span key={skill.name} className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-background text-foreground text-xs sm:text-sm font-medium border border-border ring-2 ring-border/20 rounded-xl hover:border-primary hover:bg-indigo-50/30 transition-all duration-300 cursor-default shadow-xs reveal delay-100">
                                    <IconComponent className={`text-base sm:text-lg ${skill.color}`} />
                                    {skill.name}
                                </span>
                            );
                        })}
                    </div>
                </section>

                <section id="experience" className="relative">
                    <h4 className="heading-1"> Experience </h4>
                    <div className="max-w-3xl mx-auto space-y-8">
                        {experiences.map((exp) => (
                            <div key={exp.id} className="flex items-start gap-4 reveal delay-100">
                                <div className="w-12 h-12 rounded-full border-[3px] border-border/80 bg-background flex items-center justify-center shrink-0 overflow-hidden shadow-xs">
                                    {exp.logo ? (
                                        <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm">
                                            {exp.company.charAt(0)}
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1 min-w-0 text-muted-foreground">
                                    <div className="flex items-baseline justify-between gap-4">
                                        <div>
                                            <div className="flex items-center gap-1.5 ">
                                                <h5 className="sm:text-lg font-semibold text-foreground">{exp.company}</h5>
                                                <svg
                                                    className="w-3.5 h-3.5 text-muted-foreground stroke-2"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                                </svg>
                                            </div>
                                            <div className="mt-0.5 text-sm">
                                                {exp.role}
                                            </div>
                                        </div>

                                        <span className="whitespace-nowrap text-sm shrink-0">
                                            {exp.period}
                                        </span>
                                    </div>

                                    <p className="mt-3 text-sm leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="projects">
                    <h4 className="heading-1"> My Projects </h4>
                    <div className="max-w-5xl mx-auto">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                            {projects.map((project, index) => (
                                <div key={project.id} className="group rounded-2xl bg-background border border-border overflow-hidden hover:shadow-xl hover:shadow-indigo-950/5 transition-all duration-500 hover:-translate-y-1.5 flex flex-col reveal" style={{ transitionDelay: `${index * 150}ms` }}>
                                    <div className="relative h-40 sm:h-44 overflow-hidden bg-neutral-900">
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-90" />
                                        <div className="absolute inset-0 bg-linear-to-t from-neutral-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                                            <span className="px-2.5 py-1 bg-background backdrop-blur-xs text-muted-foreground text-[10px] sm:text-xs font-semibold rounded-md shadow-xs border border-border">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-5 flex-1 flex flex-col bg-background border-t border-border relative">
                                        <div className="flex justify-between items-start mb-3 sm:mb-4">
                                            <h5>{project.title}</h5>
                                            <div className="flex gap-2 text-muted-foreground">
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors p-1">
                                                    <ExternalLink size={18} />
                                                </a>

                                                {project.screenshots && (
                                                    <button onClick={() => lightbox.openProjectPreview(project)} className="hover:text-foreground transition-colors p-1">
                                                        <ImageIcon size={18} />
                                                    </button>
                                                )}
                                            </div>
                                        </div>

                                        <p className="text-xs mb-5 sm:mb-6 flex-1 font-light text-muted-foreground leading-relaxed">{project.description}</p>

                                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                                            {project.tech.map((t) => (
                                                <span key={t} className="px-2 py-0.5 rounded-md text-xs font-medium text-foreground bg-background border border-border">
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

                <section id="contact" className="py-14 sm:py-16 px-6 m-6 rounded-2xl bg-linear-to-br from-neutral-900 via-neutral-950 to-indigo-950 text-white text-center border-2 border-border relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-300px h-300px bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="max-w-xl mx-auto space-y-4 sm:space-y-6 reveal relative z-10">
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Get in Touch</h2>
                        <p className="font-light text-base sm:text-lg px-4 sm:px-0">Feel free to reach out if you have any questions or opportunities!</p>
                        <a href="mailto:thanaphat_chan@hotmail.com" className="inline-block px-6 py-2 bg-white text-neutral-900 text-sm sm:text-base font-bold rounded-full hover:bg-indigo-50 transition-all hover:scale-105 shadow-xl shadow-indigo-500/5">
                            Contact Me
                        </a>
                    </div>
                </section>

            </main>

            <FloatingDock activeSection={nav.activeSection} onNavigate={nav.scrollTo} />
            <ProjectLightbox
                isOpen={!!lightbox.selectedProject}
                project={lightbox.selectedProject}
                currentImage={lightbox.currentImage}
                onClose={lightbox.closeProject}
                onPrev={lightbox.prevImage}
                onNext={lightbox.nextImage}
            />
        </div>
    )
}