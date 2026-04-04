import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { MdEmail, MdLanguage, MdLocationOn } from 'react-icons/md';
import { useLang } from '../context/LangContext';
import './Contact.css';

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const [submitted, setSubmitted] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.15 });

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    await fetch("https://formspree.io/f/xjgppvbw", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  return (
    <motion.section
      id="contact"
      className="contact-section"
      ref={ref}
      initial={{ opacity: 0, x: 150 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 150 }}
      transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container>
        <div className="text-center mb-5">
          <span className="section-label" style={{ color: 'var(--accent)' }}>{c.label}</span>
          <h2 style={{ color: '#fff' }}>{c.h2}</h2>
          <p className="contact-sub">{c.sub}</p>
        </div>

        <Row className="g-5 justify-content-center">
          <Col md={4}>
            <div className="contact-info-text">
              <h3>{c.infoTitle}</h3>
              <p>{c.infoSub}</p>
            </div>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon"><MdEmail /></div>
                <span>hello@proodoslab.com</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><MdLanguage /></div>
                <span>proodoslab.com</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><MdLocationOn /></div>
                <span>{c.location}</span>
              </div>
            </div>
          </Col>

          <Col md={7}>
            <form onSubmit={handleSubmit(onSubmit)} className="contact-form" noValidate>
              <Row className="g-3">
                <Col sm={6}>
                  <label>{c.fname}</label>
                  <input type="text" placeholder={c.placeholder.fname}
                    className={errors.fname ? 'error' : ''}
                    {...register('fname', { required: true })} />
                </Col>
                <Col sm={6}>
                  <label>{c.lname}</label>
                  <input type="text" placeholder={c.placeholder.lname}
                    className={errors.lname ? 'error' : ''}
                    {...register('lname', { required: true })} />
                </Col>
                <Col sm={12}>
                  <label>{c.company}</label>
                  <input type="text" placeholder={c.placeholder.company} {...register('company')} />
                </Col>
                <Col sm={12}>
                  <label>{c.email}</label>
                  <input type="email" placeholder={c.placeholder.email}
                    className={errors.email ? 'error' : ''}
                    {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })} />
                </Col>
                <Col sm={12}>
                  <label>{c.interest}</label>
                  <select {...register('interest')}>
                    <option value="">{c.selectDefault}</option>
                    {c.options.map((o, i) => <option key={i} value={o}>{o}</option>)}
                  </select>
                </Col>
                <Col sm={12}>
                  <label>{c.message}</label>
                  <textarea placeholder={c.placeholder.message}
                    className={errors.message ? 'error' : ''}
                    {...register('message', { required: true })} />
                </Col>
                <Col sm={12}>
                  <button type="submit" className={`btn-submit ${submitted ? 'sent' : ''}`}>
                    {submitted ? c.sent : c.submit}
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
}
