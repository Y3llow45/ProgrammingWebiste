import './Header.scss';

interface HeaderProps {
  language: 'eng' | 'deu' | 'spa';
  setLanguage: React.Dispatch<React.SetStateAction<'eng' | 'deu' | 'spa'>>;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
  const changeLanguage = (lang: 'eng' | 'deu' | 'spa') => {
    setLanguage(lang);
  };

  return (
      <div className="language-buttons">
        <button onClick={() => changeLanguage('eng')}>ENG</button>
        <button onClick={() => changeLanguage('deu')}>DEU</button>
        <button onClick={() => changeLanguage('spa')}>SPA</button>
      </div>
  );
};

export default Header;
