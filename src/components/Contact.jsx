import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, User, Code } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="app-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="contact-container glass">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p className="contact-subtitle">
              Feel free to reach out to me for any opportunities or collaborations.
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>6369627698</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>balamanivasakan@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4>Address</h4>
                  <p>26 Vasantham Garden, Merku pudur, Nasiyanur, Erode - 638107.</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-link"><User size={20} /></a>
              <a href="#" className="social-link"><Code size={20} /></a>
            </div>
          </div>

          <div className="contact-form">
            <form>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" rows="4" placeholder="Hello, I'd like to talk about..."></textarea>
              </div>
              <button type="button" className="btn btn-primary submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
