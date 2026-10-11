import React from 'react';
import { GraduationCap, Award, Calendar, Building, ArrowRight, ShieldCheck, FileText } from 'lucide-react';
import './Background.css';

const educationData = [
  {
    institution: 'Vijayalakshmi Law College',
    qualification: 'Bachelor of Laws (LL.B.)',
    period: '2026 – 2029',
    status: 'Currently Pursuing',
    details: 'Comprehensive legal education focusing on constitutional jurisprudence, civil & criminal law, human rights, child protection statutes, and institutional compliance frameworks.'
  },
  {
    institution: 'Harsha Mind Counselling',
    qualification: 'Diploma in Child Psychology',
    period: '2026',
    status: 'Listed Credential',
    details: 'Specialised study in developmental child psychology, emotional coping mechanisms, behavioral assessment, trauma awareness, and communication methodologies for young minds.'
  },
  {
    institution: 'Bharathiyar University',
    qualification: 'Bachelor of Science in Biotechnology',
    period: '2020 – 2023',
    status: 'Completed',
    details: 'Scientific foundations establishing rigorous analytical enquiry, evidence assessment, methodical problem solving, and disciplined presentation skills.'
  }
];

const trainingCredentialsData = [
  {
    credential: 'Certified POCSO Trainer',
    issuingBody: 'AK Law Associates',
    year: '2026',
    focus: 'Protection of Children from Sexual Offences (POCSO Act)',
    description: 'Certified expertise in child safeguarding frameworks, statutory compliance for educational institutions, institutional response systems, and mandatory reporting guidelines.'
  },
  {
    credential: 'Certified POSH Trainer',
    issuingBody: 'Harsha Counselling Academy',
    year: '2026',
    focus: 'Prevention of Sexual Harassment at Workplace (POSH Act 2013)',
    description: 'Certified expertise in workplace anti-harassment training, Internal Committee (IC) familiarisation, policy interpretation, gender sensitivity, and compliant enquiry proceedings.'
  }
];

export const Background = () => {
  return (
    <section id="background" className="section section--beige background-section">
      <div className="container">
        <div className="section-header-center">
          <div className="eyebrow">Academic & Professional Journey</div>
          <h2 className="section-title">Education & Professional Credentials</h2>
          <p className="section-subtitle">
            A transparent and accurate record of academic scholarship, child psychology qualifications, and certified trainer accreditations.
          </p>
        </div>

        <div className="background-columns">
          {/* Left Column: Education Timeline */}
          <div className="bg-col">
            <div className="col-header">
              <div className="col-icon-box">
                <GraduationCap size={22} />
              </div>
              <div>
                <h3 className="col-title">Academic Education</h3>
                <span className="col-subtitle">Formal degrees & specialised diplomas</span>
              </div>
            </div>

            <div className="timeline-list">
              {educationData.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker">
                    <span className="marker-dot"></span>
                    {index < educationData.length - 1 && <span className="marker-line"></span>}
                  </div>
                  
                  <div className="timeline-card">
                    <div className="timeline-top">
                      <span className="timeline-badge">{item.status}</span>
                      <span className="timeline-period">
                        <Calendar size={13} />
                        {item.period}
                      </span>
                    </div>

                    <h4 className="timeline-degree">{item.qualification}</h4>
                    <div className="timeline-institution">
                      <Building size={14} />
                      <span>{item.institution}</span>
                    </div>

                    <p className="timeline-description">
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Training Credentials */}
          <div className="bg-col">
            <div className="col-header">
              <div className="col-icon-box">
                <Award size={22} />
              </div>
              <div>
                <h3 className="col-title">Training Accreditations</h3>
                <span className="col-subtitle">Certified trainer credentials</span>
              </div>
            </div>

            <div className="credentials-list">
              {trainingCredentialsData.map((cred, index) => (
                <div key={index} className="credential-card">
                  <div className="cred-card-top">
                    <div className="cred-badge">
                      <ShieldCheck size={14} />
                      <span>Certified Trainer</span>
                    </div>
                    <span className="cred-year">{cred.year}</span>
                  </div>

                  <h4 className="cred-title">{cred.credential}</h4>
                  
                  <div className="cred-issuer">
                    <span className="issuer-label">Accredited by:</span>
                    <strong>{cred.issuingBody}</strong>
                  </div>

                  <div className="cred-focus">
                    <span className="focus-label">Statutory Domain:</span>
                    <p>{cred.focus}</p>
                  </div>

                  <p className="cred-desc">
                    {cred.description}
                  </p>
                </div>
              ))}

              {/* Contact for Profile Notice */}
              <div className="profile-request-card">
                <div className="profile-req-header">
                  <FileText size={20} className="profile-req-icon" />
                  <h4>Institutional Due Diligence</h4>
                </div>
                <p>
                  For institutional verification or detailed syllabi for compliance training, educational bodies and corporate HR teams are welcome to request her complete profile details directly.
                </p>
                <a href="#contact" className="btn btn--secondary btn--sm">
                  <span>Contact for Professional Profile</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

