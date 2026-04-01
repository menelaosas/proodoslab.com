import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container, Row, Col } from 'react-bootstrap';
import { useLang } from '../context/LangContext';
import './Projects.css';

const tagClass = { ai: 'tag-ai', bc: 'tag-bc', ag: 'tag-ag' };

export default function Projects() {
  const { t } = useLang();
  const p = t.projects;
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.15 });

  return (
    <motion.section
      id="projects"
      className="projects-section"
      ref={ref}
      initial={{ opacity: 0, x: -150 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -150 }}
      transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container>
        <div className="text-center mb-5">
          <span className="section-label" style={{ color: 'var(--accent)' }}>{p.label}</span>
          <h2 style={{ color: '#0D0D0D' }}>{p.h2}</h2>
        </div>

        <Row className="g-4">
          {p.items.map((item, i) => (
            <Col key={i} md={4}>
              <motion.div
                className="project-card"
                whileHover={{ y: -5 }}
              >
                <span className={`project-tag ${tagClass[item.tagType]}`}>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </motion.section>
  );
}
