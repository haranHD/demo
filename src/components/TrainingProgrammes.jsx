import React from 'react';
import { Layers, CalendarCheck, HelpCircle, ArrowRight, Check } from 'lucide-react';
import './TrainingProgrammes.css';

const programmes = [
  {
    id: 'posh-workplace',
    category: 'Workplace Safety',
    title: 'POSH Awareness for Workplaces & Corporate Teams',
    intendedAudience: 'Employees, Managers, HR Professionals & Internal Committees (IC)',
    purpose: 'To ensure statutory compliance under the POSH Act 2013 and cultivate a zero-tolerance workplace environment rooted in dignity and equity.',
    description: 'Comprehensive modules covering what constitutes sexual harassment, subtle versus overt behaviours, the duties of the employer, the role and constitution of the Internal Committee, enquiry processes, and non-retaliation protections.',
    highlights: ['Statutory duties under POSH Act', 'IC conciliation & enquiry basics', 'Preventive cultural guidelines']
  },
  {
    id: 'pocso-school',
    category: 'Institutional Safeguarding',
    title: 'POCSO & Child-Safety Awareness for Schools',
    intendedAudience: 'School Management, Teaching Faculty, Non-Teaching Staff & Support Teams',
    purpose: 'To institutionalise statutory child-protection protocols and mandatory reporting obligations in educational facilities.',
    description: 'Detailed orientation on POCSO legislation, duty of mandatory reporting, safe physical spaces on school campuses, staff code of conduct, recognizing distress cues in students, and establishing standard operating procedures for crisis response.',
    highlights: ['Mandatory reporting legal mandates', 'Child safeguarding protocols', 'School staff code of conduct']
  },
  {
    id: 'parent-caregiver',
    category: 'Family Education',
    title: 'Parent & Caregiver Child Protection Awareness',
    intendedAudience: 'Parents, Guardians, Grandparents & Community Caregivers',
    purpose: 'To bridge communication gaps and equip families with age-appropriate boundary vocabulary and protective awareness.',
    description: 'Interactive workshops helping caregivers discuss safe and unsafe touch without fear, recognize behavioral indicators of exploitation or cyberbullying, maintain open dialogue with children, and navigate protective reporting without stigma.',
    highlights: ['Open parent-child dialogue', 'Digital safety & online risks', 'Recognizing trauma & distress signs']
  },
  {
    id: 'gender-sensitisation-prog',
    category: 'Cultural Inclusivity',
    title: 'Gender Sensitisation & Dignity in Institutions',
    intendedAudience: 'Higher Education Students, Corporate Workforces & Community Groups',
    purpose: 'To address subconscious bias, foster mutual respect across genders, and build inclusive organisational cultures.',
    description: 'Reflective dialogues addressing gender stereotypes, workplace and academic banter, mutual boundary respect, microaggressions, and cultivating empathetic, non-discriminatory day-to-day interactions.',
    highlights: ['Stereotype dismantling', 'Constructive communication', 'Inclusive institutional climate']
  },
  {
    id: 'legal-intro',
    category: 'Civic Literacy',
    title: 'Introductory Legal Awareness & Basic Rights',
    intendedAudience: 'Secondary Students, College Youth & Non-Governmental Organisations',
    purpose: 'To demystify fundamental rights, basic criminal and civil remedies, and constitutional protections in everyday life.',
    description: 'Accessible civic sessions breaking down key legal principles into plain language, covering cyber safety laws, youth rights, police interaction procedures, and accessible legal aid mechanisms in India.',
    highlights: ['Constitutional protections', 'Cyber safety & digital law basics', 'How to access legal assistance']
  },
  {
    id: 'student-safety-prog',
    category: 'Child Empowerment',
    title: 'Child Safety, Personal Boundaries & Support',
    intendedAudience: 'Primary & Middle School Children (Age-Calibrated Groups)',
    purpose: 'To empower children with boundary awareness, personal body safety concepts, and trusted help-seeking skills.',
    description: 'Sensitive, non-fear-based interactive sessions focusing on "My Body, My Boundaries", the "No-Go-Tell" principle, distinguishing between safe and unsafe secrets, and identifying trusted family and school support figures.',
    highlights: ['Safe vs. unsafe boundaries', 'Voice empowerment & speaking up', 'Identifying trusted support networks']
  }
];

export const TrainingProgrammes = () => {
  return (
    <section id="training" className="section section--beige training-section">
      <div className="container">
        <div className="section-header-center">
          <div className="eyebrow">Programmes & Workshops</div>
          <h2 className="section-title">Awareness That Leads to Action</h2>
          <p className="section-subtitle">
            Structured awareness sessions designed to build institutional resilience, legal literacy, and empathetic human connections across varied settings.
          </p>
        </div>

        <div className="programmes-grid">
          {programmes.map((prog) => (
            <div key={prog.id} className="programme-card">
              <div className="programme-top">
                <span className="programme-category-pill">{prog.category}</span>
                <h3 className="programme-title">{prog.title}</h3>
              </div>

              <div className="programme-meta-block">
                <div className="meta-row">
                  <span className="meta-label">Intended Audience:</span>
                  <span className="meta-val">{prog.intendedAudience}</span>
                </div>
                <div className="meta-row">
                  <span className="meta-label">Purpose:</span>
                  <span className="meta-val">{prog.purpose}</span>
                </div>
              </div>

              <p className="programme-description">
                {prog.description}
              </p>

              <div className="programme-highlights">
                <span className="highlights-title">Key Themes Addressed:</span>
                <ul className="highlights-list">
                  {prog.highlights.map((item, idx) => (
                    <li key={idx} className="highlight-item">
                      <Check size={14} className="highlight-check" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="programme-footer">
                <a href="#contact" className="btn btn--primary btn--sm btn--full">
                  <span>Enquire About This Programme</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Customization Callout Banner */}
        <div className="customisation-note-card">
          <div className="note-card-icon">
            <CalendarCheck size={26} />
          </div>
          <div className="note-card-text">
            <h4>Tailored Institutional Delivery</h4>
            <p>
              Programme modules, durations, and formats are individually adapted to align with your institution’s specific timeline, audience maturity, and compliance focus. Contact Subakeerthii MP to explore a bespoke session outline.
            </p>
          </div>
          <div className="note-card-action">
            <a href="#contact" className="btn btn--secondary btn--sm">
              Custom Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

