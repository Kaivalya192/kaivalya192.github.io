import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '/portfolio/pdf/cv.pdf', label: 'Resume', external: true },
];

function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    handler();
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const closeOnResize = () => setOpen(false);
    window.addEventListener('resize', closeOnResize);
    return () => window.removeEventListener('resize', closeOnResize);
  }, [open]);

  return (
    <motion.header
      role="banner"
      initial={false}
      animate={{
        backgroundColor: scrolled ? 'rgba(2,6,23,0.85)' : 'rgba(2,6,23,0.5)',
        borderColor: scrolled ? 'rgba(30,41,59,0.9)' : 'rgba(30,41,59,0)',
        boxShadow: scrolled ? '0 12px 40px rgba(15,23,42,0.45)' : '0 0 0 rgba(0,0,0,0)',
      }}
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl"
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12"
      >
        <a
          href="#top"
          className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200"
        >
          KAIVALYA
        </a>

        <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              rel={link.external ? 'noreferrer' : undefined}
              target={link.external ? '_blank' : undefined}
              className="rounded-lg px-2 py-1 transition hover:text-cyan-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="rounded-full border border-slate-700 bg-slate-900/70 p-2 text-slate-200"
          >
            <span className="sr-only">Toggle menu</span>
            <Menu size={18} />
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-nav" className="border-t border-slate-800 bg-slate-950/95 px-5 pb-6 pt-4 text-sm text-slate-200 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                rel={link.external ? 'noreferrer' : undefined}
                target={link.external ? '_blank' : undefined}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 transition hover:bg-cyan-500/10 hover:text-cyan-100"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.header>
  );
}

export default NavBar;
