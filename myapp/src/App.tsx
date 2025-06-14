import './App.css';
import { Routes, Route, useParams, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import { useState } from 'react';
import Header from './components/Header/Header';
import Language from './components/Language/Language';

const LanguagePage: React.FC = () => {
  const { langKey } = useParams<{ langKey: string }>();
  if (!langKey) return <Navigate to="/" />;
  return <Language lang={langKey} />;
};

function App() {
    const [language, setLanguage] = useState<'eng' | 'deu' | 'spa'>('eng');
    return (
        <div className="App">
            <Header language={language} setLanguage={setLanguage} />
            <Routes>
                <Route path="/" element={<HomePage language={language} />} />
                <Route path="/languages/:langKey" element={<LanguagePage language={language} />} />
            </Routes>
        </div>
    );
}

export default App;
