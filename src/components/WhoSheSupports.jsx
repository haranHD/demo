import React from 'react';
import { School, Heart, Sparkles, Briefcase, ArrowUpRight } from 'lucide-react';
import './WhoSheSupports.css';

const audiences = [
  {
    id: 'schools',
    icon: School,
    title: 'Schools & Educational Institutions',
    badge: 'Institutions',
    description: 'Empowering school leadership, teachers, non-teaching staff, security personnel, and transport operators with statutory POCSO awareness, safe child interactions, anti-bullying protocols, and institutional grievance response readiness.',
    actionText: 'Enquire for School Sessions'
  },
  {
    id: 'parents',
    icon: Heart,
    title: 'Parents & Caregivers',
    badge: 'Families & Guardians',
    description: 'Guiding parents on recognizing subtle behavioral changes, initiating comfortable body-safety conversations, fostering trust-based home dialogues, and navigating digital safety concerns with confidence.',
    actionText: 'Enquire for Parent Workshops'
  },
  {
    id: 'children',
    icon: Sparkles,
    title: 'Children & Young People',
    badge: 'Students & Youth',
    description: 'Conducting age-appropriate, compassionate sessions focused on understanding personal boundaries, identifying safe vs. unsafe touch, building assertive communication, and identifying trusted adults to seek help from.',
    actionText: 'Enquire for Student Workshops'
  },
  {
    id: 'workplaces',
    icon: Briefcase,
    title: 'Workplaces & Organisations',
    badge: 'Corporate & NGOs',
    description: 'Equipping management teams, HR professionals, and employees with clear POSH compliance knowledge, fostering a culture of psychological safety, zero tolerance for harassment, and responsible reporting pathways.',
    actionText: 'Enquire for Corporate Training'
  }
];

export const WhoSheSupports = () => {
  return (
    <section id="audience" className="section section--white audience-section">
      <div className="container">
        <div className="section-header-center">
          <div className="eyebrow">Target Beneficiaries & Partnerships</div>
          <h2 className="section-title">Who She Supports</h2>
          <p className="section-subtitle">
            Every session is customised to address the unique dynamics, legal accountabilities, and developmental needs of each community stakeholder.
          </p>
        </div>

        <div className="audience-grid">
          {audiences.map((aud) => {
            const Icon = aud.icon;
            return (
              <div key={aud.id} className="audience-card">
                <div className="audience-card-top">
                  <div className="audience-icon-box">
                    <Icon size={26} className="audience-icon" />
                  </div>
                  <span className="audience-badge">{aud.badge}</span>
                </div>

                <h3 className="audience-title">{aud.title}</h3>
                
                <p className="audience-desc">
                  {aud.description}
                </p>

                <div className="audience-action">
                  <a href="#contact" className="btn btn--rose btn--sm btn--full audience-cta-btn">
                    <span>{aud.actionText}</span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

