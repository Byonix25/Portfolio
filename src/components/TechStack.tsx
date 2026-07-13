import { useLanguage } from '../i18n/LanguageContext';

export const TechStack = () => {
  const { t } = useLanguage();

  const techCategories = [
    {
      category: t.tech.languages,
      skills: [
        { name: 'Go', icon: '🐹' },
        { name: 'TypeScript', icon: '📘' },
        { name: 'JavaScript', icon: '💛' },
        { name: 'Python', icon: '🐍' },
        { name: 'PHP', icon: '🐘' }
      ]
    },
    {
      category: t.tech.ai,
      skills: [
        { name: 'Antigravity IDE', icon: '🚀' },
        { name: 'Context Eng.', icon: '🧠' },
        { name: 'AI-First Dev', icon: '🤖' },
        { name: 'Code Review', icon: '👁️' }
      ]
    },
    {
      category: t.tech.backend,
      skills: [
        { name: 'Node.js', icon: '🟢' },
        { name: 'Docker', icon: '🐳' },
        { name: 'AWS', icon: '☁️' },
        { name: 'Microservices', icon: '🧩' }
      ]
    },
    {
      category: t.tech.db,
      skills: [
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'MariaDB', icon: '🐬' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'Redis', icon: '⚡' }
      ]
    },
    {
      category: t.tech.frontend,
      skills: [
        { name: 'React.js', icon: '⚛️' },
        { name: 'HTML/CSS', icon: '🎨' },
        { name: 'SCSS', icon: '💅' }
      ]
    }
  ];

  return (
    <section>
      <h2 className="section-title">{t.tech.title}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {techCategories.map((group) => (
          <div key={group.category}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{group.category}</h3>
            <div className="tech-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
              {group.skills.map((tech) => (
                <div key={tech.name} className="tech-card" style={{ padding: '1.5rem', gap: '0.5rem' }}>
                  <div className="tech-icon" style={{ fontSize: '2.5rem' }}>{tech.icon}</div>
                  <div className="tech-name">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
