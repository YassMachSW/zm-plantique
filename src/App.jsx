import './App.css';
import Header from './components/Header';
import About from './components/About';
import CareInstructions from './components/CareInstructions';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      <Header />
      <About />
      <CareInstructions />
      <Contact />
      <footer className="footer">
        <p>🌿נבנה באהבה ע״י יאסמין 🌿</p>
      </footer>
    </div>
  );
}

export default App;
