import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useLang } from '../context/LangContext';
import './Navbar.css';

export default function AppNavbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setExpanded(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 76, behavior: 'smooth' });
  };

  return (
    <Navbar
      expand="md"
      fixed="top"
      expanded={expanded}
      onToggle={setExpanded}
      className={`app-nav ${scrolled ? 'scrolled' : ''}`}
    >
      <Container fluid className="nav-inner">
        {/* Logo */}
        <Navbar.Brand href="#" className="nav-logo" onClick={() => scrollTo('hero')}>
          <div className="logo-mark" />
          <span className="logo-text">Proodos<span>lab</span></span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" className="nav-toggler" />

        <Navbar.Collapse id="main-nav">
          <Nav className="nav-links mx-auto">
            {['services', 'projects', 'contact'].map(id => (
              <Nav.Link key={id} onClick={() => scrollTo(id)}>
                {t.nav[id]}
              </Nav.Link>
            ))}
          </Nav>

          {/* Language toggle */}
          <div className="lang-toggle">
            {['en', 'el'].map(l => (
              <button
                key={l}
                className={`lang-btn ${lang === l ? 'active' : ''}`}
                onClick={() => setLang(l)}
              >
                {l === 'en' ? 'EN' : 'ΕΛ'}
              </button>
            ))}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
