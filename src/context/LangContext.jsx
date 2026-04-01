import { createContext, useContext, useState } from 'react';

const LangContext = createContext();

export const translations = {
  en: {
    nav: { services: 'Services', projects: 'Projects', contact: 'Contact' },
    hero: {
      eyebrow: 'AI - Blockchain - Agile',
      h1a: 'Intelligent',
      h1em: 'systems',
      h1b: 'for modern business',
      sub: 'We help organizations boost performance through AI-driven solutions, blockchain integration, and Agile methodologies at every stage of their production.',
      cta1: 'View Projects',
      cta2: 'Get in Touch',
      pill1: 'AI Consulting',
      pill2: 'Blockchain',
      pill3: 'Agile Transformation',
      stat1num: '3 times',
      stat1label: 'Average productivity gain',
      stat2num: '100%',
      stat2label: 'End-to-end stage coverage',
    },
    services: {
      label: 'What We Do',
      h2: 'Three pillars of transformation',
      sub: 'From planning to delivery, we embed intelligence and agility at every stage of your organization.',
      cards: [
        { icon: '🤖', title: 'AI Integration', body: 'We embed machine learning models into your production pipeline — from demand forecasting and quality control to predictive maintenance and intelligent automation.' },
        { icon: '⛓', title: 'Blockchain Solutions', body: 'Transparent, tamper-proof systems for supply chain traceability, smart contracts, and decentralized data management bringing trust to every transaction.' },
        { icon: '⚡', title: 'Agile Transformation', body: 'We redesign your planning, organization, and quality assurance stages using Agile principles — making your teams faster, more adaptive, and consistently aligned.' },
      ],
    },
    projects: {
      label: 'Our Work',
      h2: 'Selected projects',
      items: [
        { tag: 'AI Consulting', tagType: 'ai', title: 'Predictive Quality Control System', body: 'Deployed an ML pipeline for a manufacturing client that reduced defect rate by 41% through real-time anomaly detection on the production floor.' },
        { tag: 'Blockchain', tagType: 'bc', title: 'Supply Chain Traceability Platform', body: 'Built a permissioned blockchain network for a logistics company enabling end-to-end product tracking, reducing dispute resolution time from weeks to hours.' },
        { tag: 'Agile', tagType: 'ag', title: 'Enterprise Agile Rollout', body: 'Led a 6-month Agile transformation for a 200-person engineering organization — introducing sprint cadence, OKRs, and quality gates at every delivery stage.' },
        { tag: 'AI Consulting', tagType: 'ai', title: 'Demand Forecasting Engine', body: 'Designed a time-series forecasting model for a retail client, cutting inventory waste by 28% while improving on-shelf availability across 120 SKUs.' },
        { tag: 'Blockchain', tagType: 'bc', title: 'Smart Contract Audit & Deployment', body: 'Audited and deployed smart contracts for an automated payment settlement system, eliminating intermediary costs and processing delays for a fintech firm.' },
        { tag: 'Agile', tagType: 'ag', title: 'Agile QA Framework Design', body: 'Developed a custom QA framework integrated into the CI/CD pipeline of a software company — ensuring quality assurance at planning, development, and delivery stages.' },
      ],
    },
    contact: {
      label: 'Get In Touch',
      h2: "Let's build something together",
      sub: "Whether you're exploring AI for the first time or need a blockchain audit or Agile coach, we're happy to talk about how Proodoslab can help your organization.",
      infoTitle: 'Contact us',
      infoSub: "Fill in the form and we'll get back to you within one business day.",
      location: 'Athens, Greece',
      fname: 'First Name', lname: 'Last Name', company: 'Company',
      email: 'Email', interest: 'Area of Interest', message: 'Message',
      placeholder: { fname: 'Maria', lname: 'Papadaki', company: 'Your company', email: 'maria@company.com', message: 'Tell us about your project...' },
      selectDefault: 'Select a service...',
      options: ['AI Integration', 'Blockchain', 'Agile Transformation', 'All Three'],
      submit: 'Send Message', sent: 'Sent ✓',
    },
    footer: '© 2025 Proodoslab. All rights reserved.',
  },
  el: {
    nav: { services: 'Υπηρεσίες', projects: 'Έργα', contact: 'Επικοινωνία' },
    hero: {
      eyebrow: 'ΤΝ - Blockchain - Agile',
      h1a: 'Έξυπνα',
      h1em: 'συστήματα',
      h1b: 'για τη σύγχρονη επιχείρηση',
      sub: 'Βοηθάμε οργανισμούς να αυξήσουν την απόδοσή τους μέσω λύσεων ΤΝ, ενσωμάτωσης blockchain και Agile μεθοδολογιών σε κάθε στάδιο της παραγωγής τους.',
      cta1: 'Δείτε Έργα',
      cta2: 'Επικοινωνήστε',
      pill1: 'Συμβουλευτική ΤΝ',
      pill2: 'Blockchain',
      pill3: 'Agile Μεταμόρφωση',
      stat1num: '3×',
      stat1label: 'Μέση αύξηση παραγωγικότητας',
      stat2num: '100%',
      stat2label: 'Κάλυψη όλων των σταδίων',
    },
    services: {
      label: 'Τι Κάνουμε',
      h2: 'Τρεις πυλώνες μεταμόρφωσης',
      sub: 'Από τον σχεδιασμό έως την παράδοση, ενσωματώνουμε νοημοσύνη και ευελιξία σε κάθε στάδιο του οργανισμού σας.',
      cards: [
        { icon: '🤖', title: 'Ενσωμάτωση ΤΝ', body: 'Ενσωματώνουμε μοντέλα μηχανικής μάθησης στην παραγωγή σας — από πρόβλεψη ζήτησης και έλεγχο ποιότητας έως προβλεπτική συντήρηση και έξυπνη αυτοματοποίηση.' },
        { icon: '⛓', title: 'Λύσεις Blockchain', body: 'Διαφανή, αναλλοίωτα συστήματα για ιχνηλασιμότητα αλυσίδας εφοδιασμού, έξυπνα συμβόλαια και αποκεντρωμένη διαχείριση δεδομένων.' },
        { icon: '⚡', title: 'Agile Μεταμόρφωση', body: 'Επανασχεδιάζουμε τα στάδια σχεδιασμού, οργάνωσης και διασφάλισης ποιότητάς σας χρησιμοποιώντας Agile αρχές.' },
      ],
    },
    projects: {
      label: 'Το Έργο Μας',
      h2: 'Επιλεγμένα έργα',
      items: [
        { tag: 'Συμβουλευτική ΤΝ', tagType: 'ai', title: 'Σύστημα Προβλεπτικού Ελέγχου Ποιότητας', body: 'Αναπτύξαμε pipeline μηχανικής μάθησης που μείωσε τα ελαττώματα κατά 41% μέσω ανίχνευσης ανωμαλιών σε πραγματικό χρόνο.' },
        { tag: 'Blockchain', tagType: 'bc', title: 'Πλατφόρμα Ιχνηλασιμότητας Αλυσίδας Εφοδιασμού', body: 'Δημιουργήσαμε δίκτυο blockchain για εταιρεία logistics που επιτρέπει πλήρη παρακολούθηση προϊόντων.' },
        { tag: 'Agile', tagType: 'ag', title: 'Εφαρμογή Agile σε Επίπεδο Επιχείρησης', body: 'Ηγηθήκαμε 6μηνης Agile μεταμόρφωσης σε οργανισμό 200 ατόμων εισάγοντας sprint cadence, OKRs και quality gates.' },
        { tag: 'Συμβουλευτική ΤΝ', tagType: 'ai', title: 'Μηχανή Πρόβλεψης Ζήτησης', body: 'Σχεδιάσαμε μοντέλο πρόβλεψης χρονοσειρών για πελάτη λιανικής που μείωσε τα απόβλητα αποθέματος κατά 28%.' },
        { tag: 'Blockchain', tagType: 'bc', title: 'Έλεγχος & Ανάπτυξη Smart Contract', body: 'Ελέγξαμε και αναπτύξαμε smart contracts για σύστημα αυτόματης εκκαθάρισης πληρωμών.' },
        { tag: 'Agile', tagType: 'ag', title: 'Σχεδιασμός Agile QA Framework', body: 'Αναπτύξαμε προσαρμοσμένο QA framework ενσωματωμένο στο CI/CD pipeline εταιρείας λογισμικού.' },
      ],
    },
    contact: {
      label: 'Επικοινωνία',
      h2: 'Ας δημιουργήσουμε κάτι μαζί',
      sub: 'Είτε εξερευνάτε την ΤΝ για πρώτη φορά είτε χρειάζεστε έλεγχο blockchain ή Agile coach, χαιρόμαστε να συζητήσουμε πώς η Proodoslab μπορεί να βοηθήσει τον οργανισμό σας.',
      infoTitle: 'Επικοινωνήστε μαζί μας',
      infoSub: 'Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας εντός μιας εργάσιμης ημέρας.',
      location: 'Αθήνα, Ελλάδα',
      fname: 'Όνομα', lname: 'Επώνυμο', company: 'Εταιρεία',
      email: 'Email', interest: 'Τομέας Ενδιαφέροντος', message: 'Μήνυμα',
      placeholder: { fname: 'Μαρία', lname: 'Παπαδάκη', company: 'Η εταιρεία σας', email: 'maria@company.com', message: 'Πείτε μας για το έργο σας...' },
      selectDefault: 'Επιλέξτε υπηρεσία...',
      options: ['Ενσωμάτωση ΤΝ', 'Blockchain', 'Agile Μεταμόρφωση', 'Και τα τρία'],
      submit: 'Αποστολή Μηνύματος', sent: 'Απεστάλη ✓',
    },
    footer: '© 2025 Proodoslab. Με επιφύλαξη παντός δικαιώματος.',
  },
};

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en');
  const t = translations[lang];
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
