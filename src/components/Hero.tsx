import { useLanguage } from '../i18n/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          {t.hero.title.split('\n').map((line, i) => (
            <span key={i}>{line}{i === 0 && <br/>}</span>
          ))}
        </h1>
        <h2 className="hero-subtitle" style={{ fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: 600 }}>
          {t.hero.subtitle}
        </h2>
        <p className="hero-subtitle">
          {t.hero.description}
        </p>
        <div className="hero-cta-group" style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
          <a href="https://www.linkedin.com/in/e-pino/" target="_blank" rel="noopener noreferrer">
            <button className="hero-cta">{t.hero.linkedin}</button>
          </a>
          <a href="mailto:byonix25@gmail.com">
            <button className="hero-cta" style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'var(--text-primary)' }}>{t.hero.email}</button>
          </a>
        </div>
      </div>
      <div className="hero-image-container">
        <div className="profile-image-placeholder">
          <span>{t.hero.profileImage}</span>
        </div>
      </div>
    </section>
  );
};
