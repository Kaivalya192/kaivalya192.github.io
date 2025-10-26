import { useMemo, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Rocket, Sparkles, Filter, SortAsc, Github, Linkedin, Mail } from 'lucide-react';
import NavBar from './components/NavBar.jsx';
import SectionTitle from './components/SectionTitle.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import ExperienceCard from './components/ExperienceCard.jsx';
import SkillCloud from './components/SkillCloud.jsx';
import GridGlow from './components/GridGlow.jsx';
import projectsData from './data/projects.js';
import experienceData from './data/experience.js';

const sorters = {
  impact: (a, b) => a.impactRank - b.impactRank,
  az: (a, b) => a.title.localeCompare(b.title),
};

const filterOptions = [
  {
    id: 'vision',
    label: 'Computer Vision',
    match: (tags) => tags.includes('vision') || tags.includes('ocr'),
  },
  {
    id: 'perception',
    label: '3D Perception',
    match: (tags) => tags.includes('perception') || tags.includes('pointcloud') || tags.includes('depth'),
  },
  {
    id: 'ros2',
    label: 'ROS2 Systems',
    match: (tags) => tags.includes('ros2'),
  },
  {
    id: 'industrial',
    label: 'Industrial Deployments',
    match: (tags) => tags.includes('industrial'),
  },
  {
    id: 'agentic',
    label: 'Agentic AI',
    match: (tags) => tags.includes('ai') || tags.includes('agentic'),
  },
  {
    id: 'grasping',
    label: 'Grasping',
    match: (tags) => tags.includes('grasping'),
  },
  {
    id: 'robots',
    label: 'Robots & Platforms',
    match: (tags) => tags.includes('robot') || tags.includes('robotics'),
  },
];

const heroBadges = ['Vision Systems', 'Edge AI', 'Perception', 'ROS2 Integration'];

function App() {
  const [activeFilters, setActiveFilters] = useState(() => new Set());
  const [sortKey, setSortKey] = useState('impact');
  const prefersReducedMotion = useReducedMotion();

  const filteredProjects = useMemo(() => {
    const sorted = [...projectsData].sort(sorters[sortKey]);
    if (!activeFilters.size) return sorted;
    return sorted.filter((project) =>
      Array.from(activeFilters).every((filterId) => {
        const option = filterOptions.find((item) => item.id === filterId);
        return option ? option.match(project.tags) : true;
      }),
    );
  }, [activeFilters, sortKey]);

  const toggleFilter = (filterId) => {
    setActiveFilters((prev) => {
      const next = new Set(prev);
      if (next.has(filterId)) {
        next.delete(filterId);
      } else {
        next.add(filterId);
      }
      return next;
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <GridGlow />
      <NavBar />
      <main className="relative mx-auto flex w-full max-w-7xl flex-col gap-24 px-5 pb-24 pt-24 sm:px-8 md:gap-28 md:px-10 lg:px-16">
        <section className="grid gap-10 pb-10 pt-4 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-16 lg:pt-6">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-6 md:space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-cyan-200 backdrop-blur">
              <Sparkles size={14} /> Computer Vision & Robotics Engineer
            </div>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Shipping <span className="gradient-text">vision-first autonomy</span> that keeps robots perceptive and precise.
            </h1>
            <p className="max-w-2xl text-lg text-slate-300 md:text-xl">
              I design high-fidelity perception stacks - multi-camera, depth, and neural vision - that power dependable manipulation and mobility. Robotics and ROS2 remain the backbone, but computer vision leads every deployment.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {heroBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-cyan-500/40 bg-slate-900/80 px-4 py-1 text-sm text-cyan-100 shadow-neon"
                >
                  {badge}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300 md:text-base">
              <a
                href="mailto:kaivalya192@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 font-semibold text-slate-100 transition hover:border-cyan-500/70 hover:text-cyan-200"
              >
                <Mail size={16} /> Contact
              </a>
              <a
                href="https://github.com/Kaivalya192"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-slate-400 transition hover:text-cyan-200"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/kaivalya"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-slate-400 transition hover:text-cyan-200"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="/pdf/cv.pdf" className="inline-flex items-center gap-2 text-cyan-300 transition hover:text-cyan-100">
                Resume ↗
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative h-64 w-64 overflow-hidden rounded-[32px] border border-cyan-500/40 bg-slate-900/70 p-2 shadow-[0_30px_60px_rgba(15,23,42,0.6)] backdrop-blur sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-[22rem] lg:w-[22rem]">
              <div className="absolute inset-3 rounded-[24px] bg-gradient-to-br from-cyan-500/20 via-transparent to-indigo-500/20 mix-blend-screen" />
              <img
                src="/img/avatar.webp"
                alt="Kaivalya - Robotics Engineer"
                loading="eager"
                decoding="async"
                className="relative z-10 h-full w-full rounded-[24px] object-cover object-center"
              />
            </div>
          </motion.div>
        </section>

        <section id="projects" aria-labelledby="projects-title" className="space-y-10">
          <SectionTitle icon={Rocket} id="projects-title" label="Vision-Led Impact" eyebrow="Computer vision powering autonomy" />
          <div className="flex flex-wrap items-center gap-4 rounded-3xl border border-slate-800 bg-slate-900/50 p-5 backdrop-blur lg:p-6">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-cyan-200">
              <Filter size={16} /> Filters
            </div>
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((option) => {
                const isActive = activeFilters.has(option.id);
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => toggleFilter(option.id)}
                    className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                      isActive
                        ? 'border-cyan-500/70 bg-cyan-500/20 text-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.25)]'
                        : 'border-slate-700/80 bg-slate-900 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-100'
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
            <div className="ml-auto flex items-center gap-2 text-sm text-slate-400">
              <SortAsc size={16} />
              <label className="sr-only" htmlFor="sort-projects">
                Sort projects
              </label>
              <select
                id="sort-projects"
                value={sortKey}
                onChange={(event) => setSortKey(event.target.value)}
                className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-1 text-sm text-slate-200 focus:border-cyan-500"
              >
                <option value="impact">Impact</option>
                <option value="az">A -> Z</option>
              </select>
            </div>
          </div>

          <AnimatePresence initial={false}>
            <motion.div
              layout
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {!filteredProjects.length && (
            <p className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center text-slate-400">
              No projects match those filters yet. Clear selections to view all work.
            </p>
          )}
        </section>

        <section id="experience" aria-labelledby="experience-title" className="space-y-10">
          <SectionTitle icon={Sparkles} id="experience-title" label="Experience" eyebrow="Vision systems with robotics reliability" />
          <div className="grid gap-6 md:grid-cols-2">
            {experienceData.map((item) => (
              <ExperienceCard key={`${item.role}-${item.company}`} item={item} />
            ))}
          </div>
        </section>

        <section id="skills" aria-labelledby="skills-title" className="space-y-10">
          <SectionTitle icon={Sparkles} id="skills-title" label="Skill Cloud" eyebrow="Stack & tooling" />
          <SkillCloud />
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950/80 py-10 text-sm text-slate-400 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
          <p>&copy; {new Date().getFullYear()} Kaivalya. Vision-led robotics engineered with ROS2, perception, and agentic AI.</p>
          <p className="flex items-center gap-2">
            Built with <span className="text-cyan-300">React + Vite + TailwindCSS + Framer Motion</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
