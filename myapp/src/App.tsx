import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import { useState } from 'react';

function App() {
    const [language, setLanguage] = useState<'eng' | 'deu' | 'spa'>('eng');
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage language={language} />} />
            </Routes>
        </div>
    );
}

export default App;
