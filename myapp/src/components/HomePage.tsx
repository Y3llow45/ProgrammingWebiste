import { AppBar, Toolbar, Typography, Button, Container, Card, CardContent } from '@mui/material';
import './HomePage.css';

interface Language {
  name: string;
  logoUrl: string;
  tagline: string;
  details: string[];
}

interface Props {
  language: 'eng' | 'deu' | 'spa';
}

const languages: Language[] = [
  {
    name: 'JavaScript',
    logoUrl:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
    tagline: 'Created in 1995',
    details: [
      'Used by 20M+ developers',
      'Primarily for web development',
      'Can be used for backend (Node.js)',
      'Essential for front-end/full-stack',
      'Learning curve: Easy to moderate',
    ],
  },
  {
    name: 'TypeScript',
    logoUrl:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
    tagline: 'Released in 2012',
    details: [
      'Superset of JavaScript',
      'Adds static typing',
      'Popular in large codebases',
      'Better tooling & refactoring',
      'Learning curve: Moderate',
    ],
  },
  {
    name: 'C#',
    logoUrl:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg',
    tagline: 'First appeared in 2000',
    details: [
      'Main language for .NET',
      'Used in game dev (Unity)',
      'Strongly typed, OOP',
      'Back-end APIs, desktop apps',
      'Learning curve: Moderate',
    ],
  },
  {
    name: 'Python',
    logoUrl:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    tagline: 'Created in 1991',
    details: [
      'Popular in data science & AI',
      'Easy to read and write',
      'Versatile: web, scripting, automation',
      'Huge ecosystem of libraries',
      'Learning curve: Easy',
    ],
  },
  {
    name: 'Rust',
    logoUrl:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-original.svg',
    tagline: 'Created in 2010',
    details: [
      'Focus on safety & performance',
      'Used in systems programming',
      'Growing community',
      'Steeper learning curve',
      'Learning curve: Moderate to hard',
    ],
  },
];

const HomePage: React.FC<Props> = ({language}) => (
  <>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Logo</Typography>
        <div className="navLinks">
          <Button color="inherit">{language}</Button>
          <Button color="inherit">What language should I choose?</Button>
          <Button color="inherit">IT Fields</Button>
          <Button color="inherit">About the Project</Button>
        </div>
      </Toolbar>
    </AppBar>

    <Container className="mainContainer">
      <Typography variant="h4" className="headline">
        Explore languages <span className="highlight">or</span> <u>check IT fields</u>
      </Typography>

      <div className="cardGrid">
        {languages.map((lang, idx) => (
          <Card className="langCard" key={idx}>
            <div className="logoBox">
              <img src={lang.logoUrl} alt={`${lang.name} logo`} className="logoImg" />
            </div>
            <CardContent>
              <Typography variant="h6">{lang.name}</Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {lang.tagline}
              </Typography>
              {lang.details.map((line, i) => (
                <Typography key={i} variant="body2">
                  {line}
                </Typography>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  </>
);

export default HomePage;
