import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import { useState } from 'react';
import Header from './components/Header/Header';

function App() {
    const [language, setLanguage] = useState<'eng' | 'deu' | 'spa'>('eng');
    return (
        <div className="App">
            <Header language={language} setLanguage={setLanguage} />
            <Routes>
                <Route path="/" element={<HomePage language={language} />} />
            </Routes>
        </div>
    );
}

export default App;
