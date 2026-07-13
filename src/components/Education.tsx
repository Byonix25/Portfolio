import { useLanguage } from '../i18n/LanguageContext';

export const Education = () => {
  const { t } = useLanguage();

  const education = [
    {
      degree: t.education.degree,
      institution: 'Universidad Libre ®',
      date: '2019 - 2023'
    }
  ];

  const certifications = t.education.certifications;

  return (
    <section>
      <h2 className="section-title">{t.education.title}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
        
        {/* Education Column */}
        <div>
          <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>{t.education.academicTitle}</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {education.map((edu, idx) => (
              <div key={idx} className="experience-card" style={{ padding: '1.5rem', borderLeft: '4px solid #a855f7' }}>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.3rem' }}>{edu.degree}</h4>
                <div style={{ color: 'var(--accent-color)', fontWeight: 500, marginBottom: '0.5rem' }}>{edu.institution}</div>
                <div className="exp-date" style={{ display: 'inline-block' }}>{edu.date}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Column */}
        <div>
          <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>{t.education.certTitle}</h3>
          <ul style={{ 
            listStyleType: 'none', 
            padding: 0, 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '0.8rem' 
          }}>
            {certifications.map((cert, idx) => (
              <li key={idx} style={{ 
                background: 'var(--glass-bg)', 
                border: '1px solid var(--glass-border)',
                padding: '0.8rem 1.2rem',
                borderRadius: '8px',
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem'
              }}>
                <span style={{ color: 'var(--accent-color)' }}>❖</span> {cert}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};
