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
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form data:', data);
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); reset(); }, 3500);
  };

  return (
    <section id="contact" className="contact-section">
      <Container>
        <motion.div
          ref={ref}
          className="text-center mb-5"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label" style={{ color: 'var(--accent)' }}>{c.label}</span>
          <h2 style={{ color: '#fff' }}>{c.h2}</h2>
          <p className="contact-sub">{c.sub}</p>
        </motion.div>

        <Row className="g-5 justify-content-center">
          {/* Info */}
          <Col md={4}>
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h3 className="contact-info-title">{c.infoTitle}</h3>
              <p className="contact-info-sub">{c.infoSub}</p>
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
            </motion.div>
          </Col>

          {/* Form */}
          <Col md={7}>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="contact-form" noValidate>
                <Row className="g-3">
                  <Col sm={6}>
                    <label>{c.fname}</label>
                    <input
                      type="text"
                      placeholder={c.placeholder.fname}
                      className={errors.fname ? 'error' : ''}
                      {...register('fname', { required: true })}
                    />
                  </Col>
                  <Col sm={6}>
                    <label>{c.lname}</label>
                    <input
                      type="text"
                      placeholder={c.placeholder.lname}
                      className={errors.lname ? 'error' : ''}
                      {...register('lname', { required: true })}
                    />
                  </Col>
                  <Col sm={12}>
                    <label>{c.company}</label>
                    <input type="text" placeholder={c.placeholder.company} {...register('company')} />
                  </Col>
                  <Col sm={12}>
                    <label>{c.email}</label>
                    <input
                      type="email"
                      placeholder={c.placeholder.email}
                      className={errors.email ? 'error' : ''}
                      {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                    />
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
                    <textarea
                      placeholder={c.placeholder.message}
                      className={errors.message ? 'error' : ''}
                      {...register('message', { required: true })}
                    />
                  </Col>
                  <Col sm={12}>
                    <button type="submit" className={`btn-submit ${submitted ? 'sent' : ''}`}>
                      {submitted ? c.sent : c.submit}
                    </button>
                  </Col>
                </Row>
              </form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
