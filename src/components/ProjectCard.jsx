import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.04, duration: 0.5, ease: 'easeOut' },
  }),
};

function Metric({ metric }) {
  return (
    <span className="rounded-lg border border-slate-700/70 bg-slate-900/70 px-2 py-1 text-xs text-cyan-100">
      <span className="font-semibold text-slate-200">{metric.k}:</span> {metric.v}
    </span>
  );
}

Metric.propTypes = {
  metric: PropTypes.shape({
    k: PropTypes.string.isRequired,
    v: PropTypes.string.isRequired,
  }).isRequired,
};

function ProjectCard({ project, index }) {
  return (
    <motion.article
      layout
      custom={index}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: 20 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/60 shadow-[0_20px_50px_rgba(15,23,42,0.45)] transition hover:border-cyan-500/50 hover:shadow-[0_20px_60px_rgba(14,165,233,0.18)]"
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-transparent to-indigo-500/10 opacity-0 transition group-hover:opacity-100" />
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="h-48 w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {project.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-cyan-100"
              >
                {badge}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-semibold text-slate-50">{project.title}</h3>
          <p className="text-sm text-slate-300">{project.desc}</p>
        </div>

        {project.metrics?.length ? (
          <div className="flex flex-wrap gap-2">
            {project.metrics.map((metric) => (
              <Metric key={metric.k} metric={metric} />
            ))}
          </div>
        ) : null}

        <div className="mt-auto flex items-center justify-between pt-4">
          <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.2em] text-slate-500">
            {project.tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
          <div className="flex gap-2">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/60 px-3 py-1 text-xs font-semibold text-slate-200 transition hover:border-cyan-500/50 hover:text-cyan-200"
              >
                {link.label}
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    badges: PropTypes.arrayOf(PropTypes.string).isRequired,
    metrics: PropTypes.arrayOf(
      PropTypes.shape({
        k: PropTypes.string.isRequired,
        v: PropTypes.string.isRequired,
      }),
    ),
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ProjectCard;
