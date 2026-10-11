import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  HeartHandshake, 
  Scale, 
  Users2, 
  HeartPulse, 
  ArrowRight 
} from 'lucide-react';
import './AreasOfWork.css';

const areasData = [
  {
    id: 'posh',
    title: 'POSH Awareness & Training',
    icon: Building2,
    tag: 'Workplace Dignity',
    description: 'Workplace awareness on the prevention and prohibition of sexual harassment under Indian statutory standards. Focuses on fostering respectful professional environments, clear prevention practices, Internal Committee (IC) familiarisation, and responsible, ethical reporting mechanisms.',
    audience: 'Corporate teams, HR leaders, IC members, and management'
  },
  {
    id: 'pocso',
    title: 'POCSO Awareness & Training',
    icon: ShieldCheck,
    tag: 'Child Protection Framework',
    description: 'Comprehensive child-protection education under the Protection of Children from Sexual Offences (POCSO) framework. Delivers crucial statutory awareness, prevention protocols, institutional safeguards, and age-appropriate safety education for school ecosystems.',
    audience: 'School management, teachers, administrative staff, and transport teams'
  },
  {
    id: 'child-safety',
    title: 'Child Safety & Protection',
    icon: HeartHandshake,
    tag: 'Safe Environments',
    description: 'Institutional and community initiatives to build safe physical and psychological environments for young learners. Covers identifying warning indicators, institutional safety audits, preventative boundaries, and trauma-informed supportive interventions.',
    audience: 'Educational institutions, parent associations, and childcare caregivers'
  },
  {
    id: 'legal-awareness',
    title: 'Legal Awareness & Basic Legal Education',
    icon: Scale,
    tag: 'Civic Literacy',
    description: 'Accessible, non-intimidating legal literacy programmes introducing fundamental legal principles, constitutional guarantees, children\'s rights, and statutory compliance. Tailored specifically for non-lawyers and students to cultivate responsible civic awareness.',
    audience: 'Students, young adults, community leaders, and citizen groups'
  },
  {
    id: 'gender-sensitisation',
    title: 'Gender Sensitisation',
    icon: Users2,
    tag: 'Respect & Dignity',
    description: 'Reflective and interactive programmes designed to dismantle workplace and academic biases, promote mutual respect, encourage inclusive behaviour, and cultivate environments where all genders feel secure, valued, and empowered.',
    audience: 'College students, corporate workplaces, and community groups'
  },
  {
    id: 'counselling-support',
    title: 'Child-Centred Counselling Support',
    icon: HeartPulse,
    tag: 'Developmental Care',
    description: 'Supportive counselling informed by child psychology principles to assist children experiencing emotional, academic, or social distress. Offers compassionate listening, parent guidance, and developmental support without claiming medical or clinical psychiatry treatment.',
    audience: 'Children, adolescents, parents, and school pastoral mentors'
  }
];

export const AreasOfWork = () => {
  return (
    <section id="areas" className="section section--beige areas-section">
      <div className="container">
        <div className="section-header-center">
          <div className="eyebrow">Professional Focus & Capabilities</div>
          <h2 className="section-title">Areas of Professional Work</h2>
          <p className="section-subtitle">
            Distinct training modules, awareness workshops, and supportive guidance designed to cultivate safe, respectful, and legally compliant ecosystems.
          </p>
        </div>

        <div className="areas-grid">
          {areasData.map((area) => {
            const Icon = area.icon;
            return (
              <div key={area.id} className="area-card">
                <div className="area-card-header">
                  <div className="area-icon-container">
                    <Icon size={24} className="area-icon" />
                  </div>
                  <span className="area-tag">{area.tag}</span>
                </div>

                <h3 className="area-card-title">{area.title}</h3>
                
                <p className="area-card-description">
                  {area.description}
                </p>

                <div className="area-card-audience">
                  <strong>Audience Focus:</strong> {area.audience}
                </div>

                <div className="area-card-footer">
                  <a href="#contact" className="area-link">
                    <span>Enquire for session</span>
                    <ArrowRight size={15} />
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

