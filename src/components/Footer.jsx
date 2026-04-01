import { Container } from 'react-bootstrap';
import { useLang } from '../context/LangContext';
import './Footer.css';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="app-footer">
      <Container>
        <div className="footer-inner">
          <div className="footer-logo">Proodos<span>lab</span></div>
          <p>{t.footer}</p>
        </div>
      </Container>
    </footer>
  );
}
