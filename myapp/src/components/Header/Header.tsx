import './Header.css';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

interface HeaderProps {
  language: 'eng' | 'deu' | 'spa';
  setLanguage: React.Dispatch<React.SetStateAction<'eng' | 'deu' | 'spa'>>;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
  const changeLanguage = (lang: 'eng' | 'deu' | 'spa') => {
    setLanguage(lang);
  };

  return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">Logo</Typography>
                <div className="navLinks">
                    <Button color="inherit">{language}</Button>
                    <Button color="inherit">What language should I choose?</Button>
                    <Button color="inherit">IT Fields</Button>
                    <Button color="inherit">About the Project</Button>
                </div>
                <div className="language-buttons">
                    <button onClick={() => changeLanguage('eng')}>ENG</button>
                    <button onClick={() => changeLanguage('deu')}>DEU</button>
                    <button onClick={() => changeLanguage('spa')}>SPA</button>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
