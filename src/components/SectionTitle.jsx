import PropTypes from 'prop-types';

function SectionTitle({ icon: Icon, id, label, eyebrow }) {
  return (
    <header className="space-y-3" id={id}>
      <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-200">
        <Icon size={14} aria-hidden="true" /> {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">{label}</h2>
    </header>
  );
}

SectionTitle.propTypes = {
  icon: PropTypes.elementType.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  eyebrow: PropTypes.string.isRequired,
};

export default SectionTitle;
