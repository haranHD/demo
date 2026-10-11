import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, AlertCircle, CheckCircle2, Clock, ShieldAlert } from 'lucide-react';
import './Contact.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    organisation: '',
    enquiryType: '',
    areaOfInterest: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [demoNotice, setDemoNotice] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }
    if (!formData.organisation.trim()) {
      errs.organisation = 'Please specify your organisation or institution.';
    }
    if (!formData.enquiryType) {
      errs.enquiryType = 'Please select an enquiry category.';
    }
    if (!formData.areaOfInterest) {
      errs.areaOfInterest = 'Please choose your primary area of interest.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide details about your session or enquiry.';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Please provide at least 15 characters describing your requirements.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      setDemoNotice(false);
      return;
    }
    setErrors({});
    setDemoNotice(true);
  };

  return (
    <section id="contact" className="section section--white contact-section">
      <div className="container">
        <div className="contact-grid">
          {/* Left Column: Direct Info & Editorial Notice */}
          <div className="contact-info-side">
            <div className="eyebrow">Initiate a Collaboration</div>
            <h2 className="section-title">
              Let's Work Towards Safer Environments.
            </h2>
            <p className="contact-intro">
              For school awareness programmes, workplace training enquiries, or professional collaboration, get in touch to discuss your requirements.
            </p>

            <div className="contact-details-list">
              <a href="tel:+917789937789" className="contact-channel-card">
                <div className="channel-icon-box">
                  <Phone size={20} />
                </div>
                <div className="channel-info">
                  <span className="channel-label">Telephone Contact</span>
                  <span className="channel-value">+91 7789937789</span>
                  <span className="channel-action">Click to call directly</span>
                </div>
              </a>

              <a href="mailto:llbsubakeerthii@gmail.com" className="contact-channel-card">
                <div className="channel-icon-box">
                  <Mail size={20} />
                </div>
                <div className="channel-info">
                  <span className="channel-label">Email Enquiries</span>
                  <span className="channel-value">llbsubakeerthii@gmail.com</span>
                  <span className="channel-action">Click to open email client</span>
                </div>
              </a>

              <div className="contact-channel-card contact-channel-card--static">
                <div className="channel-icon-box">
                  <MapPin size={20} />
                </div>
                <div className="channel-info">
                  <span className="channel-label">Location / Base</span>
                  <span className="channel-value">Erode, Tamil Nadu, India</span>
                  <span className="channel-action">Available for regional & on-site sessions</span>
                </div>
              </div>
            </div>

            {/* Crucial Ethical Boundary Notice */}
            <div className="ethical-notice-card">
              <ShieldAlert size={20} className="notice-icon" />
              <div>
                <h5>Safety & Ethical Protocol</h5>
                <p>
                  Please do not submit confidential case records, sensitive disclosures, or specific allegations of child abuse through web forms. For active child protection emergencies, immediately notify local authorities or contact <strong>Childline (1098)</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="contact-form-side">
            <div className="form-card">
              <div className="form-header">
                <h3>Discuss a Training Session</h3>
                <p>Provide preliminary details regarding your institution or event to tailor the session format.</p>
              </div>

              {demoNotice && (
                <div className="demo-notice-alert">
                  <CheckCircle2 size={20} className="demo-alert-icon" />
                  <div>
                    <strong>Demonstration Form Notice:</strong>
                    <p>
                      This website is a portfolio demonstration without an active backend mailer. Your enquiry details have been verified locally. To deliver your request directly to Subakeerthii MP, please email her at{' '}
                      <a href={`mailto:llbsubakeerthii@gmail.com?subject=Training Enquiry: ${encodeURIComponent(formData.areaOfInterest || 'Session Request')}&body=Name: ${encodeURIComponent(formData.fullName)}%0D%0AOrganisation: ${encodeURIComponent(formData.organisation)}%0D%0AType: ${encodeURIComponent(formData.enquiryType)}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(formData.message)}`}>
                        llbsubakeerthii@gmail.com
                      </a>{' '}
                      or call <strong>+91 7789937789</strong>.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="enquiry-form">
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">
                    Full Name <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Dr. Ramesh Kumar / Ms. Ananya"
                    className={`form-input ${errors.fullName ? 'form-input--error' : ''}`}
                  />
                  {errors.fullName && <span className="field-error">{errors.fullName}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="organisation" className="form-label">
                    Organisation or Institution <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="organisation"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                    placeholder="e.g. Greenwood Matriculation School / Apex Tech Pvt Ltd"
                    className={`form-input ${errors.organisation ? 'form-input--error' : ''}`}
                  />
                  {errors.organisation && <span className="field-error">{errors.organisation}</span>}
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="enquiryType" className="form-label">
                      Enquiry Category <span className="req">*</span>
                    </label>
                    <select
                      id="enquiryType"
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      className={`form-select ${errors.enquiryType ? 'form-input--error' : ''}`}
                    >
                      <option value="">Select category...</option>
                      <option value="School / Educational Institution">School / Educational Institution</option>
                      <option value="Parent or Caregiver Group">Parent or Caregiver Group</option>
                      <option value="Workplace / Corporate Organisation">Workplace / Corporate Organisation</option>
                      <option value="NGO / Community Group">NGO / Community Group</option>
                      <option value="Other Collaboration">Other Collaboration</option>
                    </select>
                    {errors.enquiryType && <span className="field-error">{errors.enquiryType}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="areaOfInterest" className="form-label">
                      Area of Interest <span className="req">*</span>
                    </label>
                    <select
                      id="areaOfInterest"
                      name="areaOfInterest"
                      value={formData.areaOfInterest}
                      onChange={handleChange}
                      className={`form-select ${errors.areaOfInterest ? 'form-input--error' : ''}`}
                    >
                      <option value="">Select area...</option>
                      <option value="POSH Workplace Training">POSH Workplace Training</option>
                      <option value="POCSO School Awareness">POCSO School Awareness</option>
                      <option value="Child Safety & Boundaries">Child Safety & Boundaries</option>
                      <option value="Parent Guidance Workshop">Parent Guidance Workshop</option>
                      <option value="Gender Sensitisation">Gender Sensitisation</option>
                      <option value="Basic Legal Education">Basic Legal Education</option>
                      <option value="Child Counselling Consultation">Child Counselling Consultation</option>
                      <option value="Custom Programme Consultation">Custom Programme Consultation</option>
                    </select>
                    {errors.areaOfInterest && <span className="field-error">{errors.areaOfInterest}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Programme Requirements & Notes <span className="req">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your intended audience size, preferred format (in-person in Erode / Tamil Nadu or online), and focal topics..."
                    className={`form-textarea ${errors.message ? 'form-input--error' : ''}`}
                  ></textarea>
                  {errors.message && <span className="field-error">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn--primary btn--full submit-btn">
                  <span>Submit Training Enquiry</span>
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

