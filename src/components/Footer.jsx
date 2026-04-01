import { Container, Row, Col } from 'react-bootstrap';
import { useLang } from '../context/LangContext';
import './Footer.css';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 76, behavior: 'smooth' });
  else window.scrollTo({ top: 0, behavior: 'smooth' });
};

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="app-footer">
      <Container>

        {/* ── SITEMAP AREA ── */}
        <div className="footer-sitemap">
          <Row className="g-4">

            {/* Brand column */}
            <Col md={4}>
              <div className="footer-logo">Proodos<span>lab</span></div>
              <p className="footer-tagline">
                AI · Blockchain · Agile consulting for organizations that want to move faster and smarter.
              </p>
              <p className="footer-contact-line">📧 hello@proodoslab.com</p>
              <p className="footer-contact-line">📍 Athens, Greece</p>
            </Col>

            {/* Navigation */}
            <Col md={2} xs={6}>
              <h6 className="sitemap-heading">Navigation</h6>
              <ul className="sitemap-list">
                <li><button onClick={() => scrollTo('hero')}>Home</button></li>
                <li><button onClick={() => scrollTo('services')}>Services</button></li>
                <li><button onClick={() => scrollTo('projects')}>Projects</button></li>
                <li><button onClick={() => scrollTo('contact')}>Contact</button></li>
              </ul>
            </Col>

            {/* Services */}
            <Col md={3} xs={6}>
              <h6 className="sitemap-heading">Services</h6>
              <ul className="sitemap-list">
                <li><button onClick={() => scrollTo('services')}>AI Integration</button></li>
                <li><button onClick={() => scrollTo('services')}>Blockchain Solutions</button></li>
                <li><button onClick={() => scrollTo('services')}>Agile Transformation</button></li>
              </ul>
            </Col>

            {/* Contact / Social */}
            <Col md={3}>
              <h6 className="sitemap-heading">Connect</h6>
              <ul className="sitemap-list">
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
                </li>
                <li>
                  <a href="https://github.com/menelaosas" target="_blank" rel="noreferrer">GitHub</a>
                </li>
                <li>
                  <button onClick={() => scrollTo('contact')}>Get in Touch</button>
                </li>
              </ul>
            </Col>

          </Row>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="footer-bottom">
          <p>{t.footer}</p>
          <p className="footer-built">Built with React · Hosted on GitHub Pages</p>
        </div>

      </Container>
    </footer>
  );
}
