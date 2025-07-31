import React from 'react';
import mansiImg from './assets/mansi.jpg';
import tusharImg from './assets/tushar.jpg';
import kushagraImg from './assets/kushagra.jpg';
import shrutikaImg from './assets/shrutika.jpg';

const AboutUs = () => {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.hero}>
          <h1 style={styles.heroTitle}>About Wellness Way</h1>
          <div style={styles.heroLine}></div>
          <p style={styles.heroDescription}>
            We are a passionate team of professionals committed to making mental health support accessible to everyone across India. <strong>Wellness Way</strong> blends cutting-edge technology with evidence-based mental health practices to offer screening, guidance, and resources to those in need.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Mission</h2>
          <div style={styles.missionBox}>
            <div style={styles.missionIcon}>🎯</div>
            <p style={styles.missionText}>
              To break the stigma surrounding mental health in India by providing culturally-sensitive, accessible mental health resources and screening tools. We aim to empower individuals to take the first step toward better mental wellness.
            </p>
          </div>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Technologies</h2>
          <div style={styles.flexBox}>
            {[
              { title: "ML Development", desc: "Advanced machine learning models for mental health analysis.", icon: "🧠" },
              { title: "AI Integration via Flask", desc: "Seamless integration of AI using Flask framework.", icon: "⚡" },
              { title: "Questionnaire Setup", desc: "Intelligent questionnaire design and implementation.", icon: "📋" },
              { title: "Facial Expression Analysis", desc: "Recognition-based questionnaire enhancements.", icon: "😊" }
            ].map((tech, i) => (
              <div key={i} style={styles.techCard}>
                <div style={styles.techIcon}>{tech.icon}</div>
                <h3 style={styles.techTitle}>{tech.title}</h3>
                <p style={styles.techDesc}>{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Meet Our Team</h2>
          <div style={styles.flexBox}>
            {[
              {
                name: 'Mansi Grover',
                roll: '23BCS159',
                phone: '8171160192',
                role: 'Web AI Integration & Frontend Developer',
                desc: 'Expert in Flask integration, questionnaires, and UI development for mental health platforms.',
                img: mansiImg
              },
              {
                name: 'Tushar Kumar Kannojia',
                roll: '23BCS251',
                phone: '9928907039',
                role: 'Full Stack Developer',
                desc: 'Works on facial recognition integration, logic design, and verification systems.',
                img: tusharImg
              },
              {
                name: 'Kushagra Awasthi',
                roll: '23BCS147',
                phone: '8887994993',
                role: 'ML Engineer & Research Developer',
                desc: 'Focuses on ML models, research tools, and optimization for mental health platforms.',
                img: kushagraImg
              },
              {
                name: 'Shrutika Shende Ashok',
                roll: '23BCS232',
                phone: '9021026384',
                role: 'Full Stack Developer',
                desc: 'Expert in full-stack solutions, both frontend and backend, for mental wellness tools.',
                img: shrutikaImg
              }
            ].map((member, i) => (
              <div key={i} style={styles.teamCard}>
                <div style={styles.imageWrapper}>
                  <img src={member.img} alt={member.name} style={styles.img} />
                  <div style={styles.imageOverlay}></div>
                </div>
                <div style={styles.memberInfo}>
                  <h4 style={styles.memberName}>{member.name}</h4>
                  <div style={styles.memberDetails}>
                    <span style={styles.rollNumber}>Roll No: {member.roll}</span>
                    <span style={styles.phoneNumber}>📞 {member.phone}</span>
                  </div>
                  <div style={styles.role}>{member.role}</div>
                  <p style={styles.memberDesc}>{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Get In Touch</h2>
          <div style={styles.contactBox}>
            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>📧</div>
              <div>
                <strong>Email:</strong> <a href="mailto: wellnsssWay@gmail.com" style={styles.link}>wellnsssWay@gmail.com</a>
              </div>
            </div>
            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>📞</div>
              <div>
                <strong>Phone:</strong> +91-8887994993
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <p>&copy; 2025 Wellness Way. All rights reserved.</p>
          <div style={styles.footerDecor}></div>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  body: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    minHeight: '100vh',
    color: '#2c3e50',
    fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    margin: 0,
    padding: 0,
    position: 'relative',
  },
  container: {
    maxWidth: '100%',
    width: '100vw',
    margin: '0',
    padding: '0 40px',
    position: 'relative',
  },
  hero: {
    textAlign: 'center',
    padding: '40px 0 30px',
    background: 'rgba(255, 255, 255, 0.95)',
    margin: '0 -40px 40px',
    borderRadius: '0 0 30px 30px',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
  },
  heroTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '15px',
    letterSpacing: '-1px',
  },
  heroLine: {
    width: '60px',
    height: '3px',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    margin: '0 auto 20px',
    borderRadius: '2px',
  },
  heroDescription: {
    fontSize: '1rem',
    lineHeight: '1.6',
    maxWidth: '700px',
    margin: '0 auto',
    color: '#555',
  },
  section: {
    marginBottom: '50px',
  },
  sectionTitle: {
    fontSize: '3em',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: '30px',
    color: '#fff',
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
  },
  missionBox: {
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85))',
    padding: '30px',
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    position: 'relative',
    overflow: 'hidden',
  },
  missionIcon: {
    fontSize: '2rem',
    marginBottom: '15px',
  },
  missionText: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#555',
    margin: 0,
  },
  flexBox: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '30px',
    overflowX: 'auto',
  },
  techCard: {
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85))',
    padding: '25px 20px',
    width: '300px',
    height: '250px',
    minWidth: '220px',
    borderRadius: '15px',
    textAlign: 'center',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
  },
  techIcon: {
    fontSize: '2.5rem',
    marginBottom: '15px',
  },
  techTitle: {
    fontSize: '1.2rem',
    fontWeight: '900',
    marginBottom: '10px',
    color: '#333',
  },
  techDesc: {
    fontSize: '1rem',
    lineHeight: '1.5',
    color: '#666',
    margin: 0,
  },
  teamCard: {
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85))',
    padding: '25px 20px',
    width: '350px',
    minWidth: '250px',
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
  },
  imageWrapper: {
    position: 'relative',
    display: 'inline-block',
    marginBottom: '15px',
  },
  img: {
    width: '200px',
    height: '250px',
    borderRadius: '10px',
    objectFit: 'cover',
    border: '3px solid transparent',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    padding: '3px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: '50%',
    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  memberInfo: {
    position: 'relative',
  },
  memberName: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#333',
  },
  memberDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
    marginBottom: '10px',
  },
  rollNumber: {
    fontSize: '1.2rem',
    color: '#777',
  },
  phoneNumber: {
    fontSize: '1.2rem',
    color: '#777',
  },
  role: {
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: 'white',
    padding: '6px 12px',
    borderRadius: '15px',
    fontSize: '1rem',
    fontWeight: '500',
    margin: '10px 0',
    display: 'inline-block',
  },
  memberDesc: {
    fontSize: '1rem',
    lineHeight: '1.5',
    color: '#666',
    margin: 0,
  },
  contactBox: {
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85))',
    padding: '50px',
    borderRadius: '25px',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    display: 'flex',
    justifyContent: 'center',
    gap: '60px',
    flexWrap: 'wrap',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    fontSize: '1.1rem',
    color: '#555',
  },
  contactIcon: {
    fontSize: '1.5rem',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    padding: '10px',
    borderRadius: '50%',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '40px',
    height: '40px',
  },
  link: {
    color: '#667eea',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.3s ease',
  },
  footer: {
    marginTop: '100px',
    background: 'rgba(0, 0, 0, 0.8)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  footerContent: {
    textAlign: 'center',
    padding: '40px 20px',
    color: '#fff',
    position: 'relative',
  },
  footerDecor: {
    width: '50px',
    height: '2px',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    margin: '20px auto 0',
    borderRadius: '1px',
  },
};

export default AboutUs;