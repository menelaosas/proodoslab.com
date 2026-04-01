import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';
import { LangProvider } from './context/LangContext';
import AppNavbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <LangProvider>
      <AppNavbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  );
}
