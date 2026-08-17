import { useLanguage } from '../i18n/LanguageContext';
import {
  SiCss,
  SiDocker,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiSass,
  SiTypescript
} from 'react-icons/si';
import {
  FiCpu,
  FiDatabase,
  FiEye,
  FiLayers,
  FiServer,
  FiZap
} from 'react-icons/fi';
import { TbBrandAws } from 'react-icons/tb';

export const TechStack = () => {
  const { t } = useLanguage();

  const techCategories = [
    {
      category: t.tech.languages,
      skills: [
        { name: 'Go', icon: SiGo },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'Python', icon: SiPython },
        { name: 'PHP', icon: SiPhp }
      ]
    },
    {
      category: t.tech.ai,
      skills: [
        { name: 'Antigravity IDE', icon: FiServer },
        { name: 'Context Eng.', icon: FiCpu },
        { name: 'AI-First Dev', icon: FiZap },
        { name: 'Code Review', icon: FiEye }
      ]
    },
    {
      category: t.tech.backend,
      skills: [
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'Docker', icon: SiDocker },
        { name: 'AWS', icon: TbBrandAws },
        { name: 'Microservices', icon: FiLayers }
      ]
    },
    {
      category: t.tech.db,
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'MariaDB', icon: FiDatabase },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'Redis', icon: SiRedis }
      ]
    },
    {
      category: t.tech.frontend,
      skills: [
        { name: 'React.js', icon: SiReact },
        { name: 'HTML/CSS', icon: SiHtml5 },
        { name: 'SCSS', icon: SiSass },
        { name: 'CSS', icon: SiCss }
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
              {group.skills.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div key={tech.name} className="tech-card" style={{ padding: '1.5rem', gap: '0.5rem' }}>
                    <Icon className="tech-icon" style={{ fontSize: '2.5rem' }} />
                    <div className="tech-name">{tech.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
