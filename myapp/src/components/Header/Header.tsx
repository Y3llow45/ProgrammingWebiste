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
                <Typography variant="h6"><img className='imglogo' src='./logo.png'></img></Typography>
                <div className="navLinks">
                    <Button className='btnnav' color="inherit">What should I learn?</Button>
                    <Button className='btnnav' color="inherit">Job profiles</Button>
                    <Button className='btnnav' color="inherit">About</Button>
                </div>
                <div className="language-buttons">
                    <button className='btnlang' onClick={() => changeLanguage('eng')}><img className='imglang' src='./uk.png'></img></button>
                    <button className='btnlang' onClick={() => changeLanguage('deu')}><img className='imglang' src='./german.png'></img></button>
                    <button className='btnlang' onClick={() => changeLanguage('spa')}><img className='imglang' src='./spain.png'></img></button>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
