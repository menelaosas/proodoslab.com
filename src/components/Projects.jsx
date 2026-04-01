import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container, Row, Col } from 'react-bootstrap';
import { useLang } from '../context/LangContext';
import './Projects.css';

const tagClass = { ai: 'tag-ai', bc: 'tag-bc', ag: 'tag-ag' };

export default function Projects() {
  const { t } = useLang();
  const p = t.projects;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="projects-section">
      <Container>
        <motion.div
          ref={ref}
          className="text-center mb-5"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label" style={{ color: 'var(--accent)' }}>{p.label}</span>
          <h2 style={{ color: '#0D0D0D' }}>{p.h2}</h2>
        </motion.div>

        <Row className="g-4">
          {p.items.map((item, i) => (
            <Col key={i} md={4}>
              <motion.div
                className="project-card"
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.08 }}
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
    </section>
  );
}
