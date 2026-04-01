import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container, Row, Col } from 'react-bootstrap';
import { useLang } from '../context/LangContext';
import './Services.css';

const iconClasses = ['icon-ai', 'icon-bc', 'icon-ag'];

export default function Services() {
  const { t } = useLang();
  const s = t.services;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.section
      id="services"
      className="services-section"
      ref={ref}
      initial={{ opacity: 0, x: 150 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container>
        <div className="text-center mb-5">
          <span className="section-label" style={{ color: 'var(--accent)' }}>{s.label}</span>
          <h2 style={{ color: '#fff' }}>{s.h2}</h2>
          <p className="services-sub">{s.sub}</p>
        </div>

        <Row className="g-4">
          {s.cards.map((card, i) => (
            <Col key={i} md={4}>
              <motion.div
                className="service-card"
                whileHover={{ y: -5, borderColor: 'var(--accent)' }}
              >
                <div className={`service-icon ${iconClasses[i]}`}>{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </motion.section>
  );
}
