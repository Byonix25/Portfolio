import { useLanguage } from '../i18n/LanguageContext';

export const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      role: t.experience.wiediiRole,
      company: 'Wiedii S.A.S (MD CloudPS)',
      date: 'Feb 2024 - Present',
      description: t.experience.wiediiDesc,
      tech: ['Go', 'Node.js', 'React.js', 'Docker', 'AWS', 'AI Workflows', 'MongoDB']
    },
    {
      role: t.experience.alianzaRole,
      company: 'Alianza Wellness Bienestar S.A.S',
      date: 'Feb 2023 - Dec 2023',
      description: t.experience.alianzaDesc,
      tech: ['WordPress', 'SEO', 'Technical Support', 'Multimedia']
    },
    {
      role: t.experience.libreRole,
      company: 'Universidad Libre ®',
      date: 'Feb 2023 - Jun 2023',
      description: t.experience.libreDesc,
      tech: ['Web Design', 'Content Creation', 'HTML/CSS']
    }
  ];

  return (
    <section>
      <h2 className="section-title">{t.experience.title}</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="exp-header">
              <div>
                <h3 className="exp-role">{exp.role}</h3>
                <div className="exp-company">{exp.company}</div>
              </div>
              <div className="exp-date">{exp.date}</div>
            </div>
            <ul className="exp-description-list">
              {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <div className="exp-tech-list">
              {exp.tech.map((tech, idx) => (
                <span key={idx} className="exp-tech-item">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
