import './App.css';
import Header from './components/Header';
import About from './components/About';
import CareInstructions from './components/CareInstructions';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container" >
      <Header />
      <About />
      <CareInstructions />
      <Contact />
      <footer className="footer" style={{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  backgroundColor: '#f5f5f5',
  textAlign: 'center',
  borderTop: '1px solid #ddd'
}}>
        <p style={{ margin: '5px 0', fontWeight: '500', color: '#333' }}>
    🌿 נבנה באהבה ע״י <strong>DelighTech</strong> 🌿
  </p>
  <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
    {/* אינסטגרם */}
    <a href="instagram://user?username=deligh_tech" target="_blank" rel="noreferrer" style={{ color: '#E1306C', fontSize: '24px' }}>
      <i className="fab fa-instagram"></i>
    </a>

    {/* טלפון */}
    <a href="tel:0545317545" style={{ color: '#25D366', fontSize: '24px' }}>
      <i className="fas fa-phone-alt"></i>
    </a>
  </div>

  <p style={{ marginTop: '10px', fontSize: '12px', color: '#777' }}>
    © {new Date().getFullYear()} DelighTech. כל הזכויות שמורות.
  </p>
      </footer>
    </div>
  );
}

export default App;
