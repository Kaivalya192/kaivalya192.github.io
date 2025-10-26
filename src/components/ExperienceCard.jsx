import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function ExperienceCard({ item }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="flex h-full flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-950/60 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.35)]"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-50">{item.role}</h3>
          <p className="text-sm text-cyan-200">{item.company}</p>
        </div>
        <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
          {item.date}
        </div>
      </div>
      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.location}</p>
      <ul className="space-y-2 text-sm text-slate-300">
        {item.points.map((point) => (
          <li key={point} className="flex items-start gap-2">
            <span className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

ExperienceCard.propTypes = {
  item: PropTypes.shape({
    role: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ExperienceCard;
