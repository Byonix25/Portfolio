import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { useLanguage } from './i18n/LanguageContext';
import './index.css';

function App() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="app-container animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '-2rem', gap: '0.5rem' }}>
        <button 
          onClick={() => setLanguage('en')} 
          style={{ background: language === 'en' ? 'var(--accent-gradient)' : 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: '#fff', padding: '0.5rem 1rem', borderRadius: '50px', cursor: 'pointer', fontWeight: 600 }}
        >
          EN
        </button>
        <button 
          onClick={() => setLanguage('es')} 
          style={{ background: language === 'es' ? 'var(--accent-gradient)' : 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: '#fff', padding: '0.5rem 1rem', borderRadius: '50px', cursor: 'pointer', fontWeight: 600 }}
        >
          ES
        </button>
      </div>
      <Hero />
      <TechStack />
      <Experience />
      <Education />
    </div>
  );
}

export default App;
