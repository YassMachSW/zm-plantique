import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
import CareInstructions from './components/CareInstructions';

function App() {
  return (
    <div className="app-container">
      <Header />
      <CareInstructions />
      <Contact />
      <footer className="footer">
        <p>נבנה באהבה ע"י יאסמין 💚</p>
      </footer>
    </div>
  );
}

export default App;
