
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../../styles/Contact.css';

export default function Contact() {
  const form = useRef(null);

  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: '',
    }));

    if (status) setStatus('');
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }

    if (!values.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!values.message.trim()) {
      nextErrors.message = 'Please enter a message.';
    } else if (values.message.trim().length < 10) {
      nextErrors.message = 'Please enter at least 10 characters.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('');

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_zezn407',
        'template_qo7g4m8',
        form.current,
        't-dfFqeX4KEVQG46U'
      );

      setStatus('success');
      setValues({
        name: '',
        email: '',
        message: '',
      });
      setErrors({});
      form.current?.reset();
    } catch (error) {
      console.error('EmailJS submission failed:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="contact-page">
      <div className="contact-container">
        <header className="contact-heading">
          <p className="contact-eyebrow">GET IN TOUCH</p>
          <h1>
            Let's talk about
            <br />
            <span>your next project.</span>
          </h1>
          <p className="contact-intro">
            Have a website idea, need help with a web application, or want
            to discuss a project? Send me a message using the form below.
          </p>
        </header>

        <div className="contact-layout">
          <aside className="contact-info">
            <p className="contact-eyebrow">LET'S CONNECT</p>
            <h2>Tell me what you're building.</h2>
            <p>
              Share a little about your goals, what you need help with, and
              what you'd like your website or application to do.
            </p>

            <div className="contact-info-divider" />

            <div className="contact-detail">
              <span className="contact-detail-icon" aria-hidden="true">
                ↗
              </span>
              <div>
                <h3>Project inquiries</h3>
                <p>Use the form to send your message directly.</p>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-icon" aria-hidden="true">
                {'</>'}
              </span>
              <div>
                <h3>Web development</h3>
                <p>Websites, interfaces, and full-stack applications.</p>
              </div>
            </div>

            <div className="contact-note">
              <span className="contact-note-dot" />
              I look forward to hearing about your project.
            </div>
          </aside>

          <section className="contact-form-card">
            <div className="contact-form-heading">
              <h2>Send a message</h2>
              <p>Fields marked with * are required.</p>
            </div>

            <form ref={form} onSubmit={handleSubmit} noValidate>
              <div className="contact-field">
                <label htmlFor="contact-name">Your name *</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Jane Smith"
                  autoComplete="name"
                  value={values.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  required
                />
                {errors.name && (
                  <p className="contact-error" id="contact-name-error">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">Email address *</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="jane@example.com"
                  autoComplete="email"
                  value={values.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  required
                />
                {errors.email && (
                  <p className="contact-error" id="contact-email-error">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">Your message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me a little about your project..."
                  rows="6"
                  value={values.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? 'contact-message-error' : undefined
                  }
                  required
                />
                {errors.message && (
                  <p className="contact-error" id="contact-message-error">
                    {errors.message}
                  </p>
                )}
              </div>

              {status === 'success' && (
                <p className="contact-status contact-status-success" role="status">
                  Your message was sent successfully. Thank you for reaching out!
                </p>
              )}

              {status === 'error' && (
                <p className="contact-status contact-status-error" role="alert">
                  Sorry, your message could not be sent. Please try again later.
                </p>
              )}

              <button
                type="submit"
                className="contact-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending message...' : 'Send message'}
                {!isSubmitting && <span aria-hidden="true">↗</span>}
              </button>

              <p className="contact-form-footnote">
                Your information will be used to respond to your inquiry.
              </p>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
