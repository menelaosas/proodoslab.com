import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';
import { useLang } from '../context/LangContext';
import './Hero.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 76, behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section">
      <Container>
        <div className="hero-inner">
          <motion.div className="hero-eyebrow" {...fadeUp(0.05)}>
            <span className="eyebrow-line" />
            {h.eyebrow}
            <span className="eyebrow-line" />
          </motion.div>

          <motion.h1 {...fadeUp(0.15)}>
            {h.h1a} <em>{h.h1em}</em> {h.h1b}
          </motion.h1>

          <motion.p className="hero-sub" {...fadeUp(0.25)}>
            {h.sub}
          </motion.p>

          <motion.div className="hero-actions" {...fadeUp(0.35)}>
            <button className="btn-primary-dark" onClick={() => scrollTo('projects')}>
              {h.cta1}
            </button>
            <button className="btn-ghost-light" onClick={() => scrollTo('contact')}>
              {h.cta2}
            </button>
          </motion.div>

          <motion.div className="hero-pills" {...fadeUp(0.45)}>
            <span className="pill pill-ai">{h.pill1}</span>
            <span className="pill pill-bc">{h.pill2}</span>
            <span className="pill pill-ag">{h.pill3}</span>
          </motion.div>

          <motion.div className="stats-row" {...fadeUp(0.55)}>
            <div className="stat-card">
              <div className="stat-num">{h.stat1num}</div>
              <div className="stat-label">{h.stat1label}</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">{h.stat2num}</div>
              <div className="stat-label">{h.stat2label}</div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
