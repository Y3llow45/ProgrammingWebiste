import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
} from '@mui/material';
import { Star, StarBorder } from '@mui/icons-material';
import './HomePage.css';

interface Language {
  name: string;
  logoUrl: string;
  released: string;
  description: [string, string];
  learningCurve: 'Easy' | 'Moderate' | 'Hard';
  salaryUS: string;
  salaryEU: string;
  difficultyRating: number;
  jobs?: string; // fill in manually
}

interface Props {
  language: 'eng' | 'deu' | 'spa';
}

const languages: Language[] = [
  {
    name: 'JavaScript',
    logoUrl:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
    released: 'Released in 1995',
    description: [
      'Used by over 20 million developers worldwide.',
      'Primarily for building interactive web pages and UI.',
    ],
    learningCurve: 'Easy',
    salaryUS: '$116,000 / year',
    salaryEU: '€60,000 / year',
    difficultyRating: 2,
    jobs: '>420k',
  },
  {
    name: 'TypeScript',
    logoUrl:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
    released: 'Released in 2012',
    description: [
      'A superset of JavaScript that adds static typing.',
      'Popular in large-scale codebases and enterprise apps.',
    ],
    learningCurve: 'Moderate',
    salaryUS: '$116,000 / year',
    salaryEU: '€63,900 / year',
    difficultyRating: 3,
    jobs: '>190k',
  },
  {
    name: 'C#',
    logoUrl:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg',
    released: 'Released in 2000',
    description: [
      'Primary language for .NET ecosystem and Windows apps.',
      'Widely used in game development via Unity.',
    ],
    learningCurve: 'Moderate',
    salaryUS: '$117,000 / year',
    salaryEU: '€58,800 / year',
    difficultyRating: 3,
    jobs: '',
  },
  {
    name: 'Python',
    logoUrl:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    released: 'Released in 1991',
    description: [
      'Extremely popular in data science, AI, and scripting.',
      'Readable syntax makes it beginner-friendly.',
    ],
    learningCurve: 'Easy',
    salaryUS: '$124,000 / year',
    salaryEU: '€61,600 / year',
    difficultyRating: 2,
    jobs: '',
  },
  {
    name: 'Rust',
    logoUrl:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-original.svg',
    released: 'Released in 2010',
    description: [
      'Emphasizes memory safety without garbage collection.',
      'Used for systems programming and performance-critical code.',
    ],
    learningCurve: 'Hard',
    salaryUS: '$140,000 / year',
    salaryEU: '€65,900 / year',
    difficultyRating: 0, // no stars
    jobs: '',
  },
  {
    name: 'C++',
    logoUrl:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg',
    released: 'Released in 1972',
    description: [
      'Low-level language that influenced many modern languages.',
      'Still widespread in embedded and systems programming.',
    ],
    learningCurve: 'Moderate',
    salaryUS: '$132,000 / year',
    salaryEU: '€61,200 / year',
    difficultyRating: 5,
    jobs: '',
  },
  {
    name: 'Dart',
    logoUrl:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/dart/dart-original.svg',
    released: 'Released in 2011',
    description: [
      'Backed by Google, primarily used with Flutter for mobile apps.',
      'Offers modern syntax and strong tooling support.',
    ],
    learningCurve: 'Moderate',
    salaryUS: '$104,000 / year',
    salaryEU: '',
    difficultyRating: 3,
    jobs: '',
  },
  {
    name: 'Elixir',
    logoUrl:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/elixir/elixir-original.svg',
    released: 'Released in 2011',
    description: [
      'Functional language built on the Erlang VM for concurrency.',
      'Ideal for highly scalable, real-time applications.',
    ],
    learningCurve: 'Moderate',
    salaryUS: '$132,000 / year',
    salaryEU: '€66,000 / year',
    difficultyRating: 3,
    jobs: '',
  },
  {
    name: 'Erlang',
    logoUrl:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/erlang/erlang-original.svg',
    released: 'Released in 1986',
    description: [
      'Designed for fault-tolerant, concurrent systems in telecom.',
      'Used in messaging platforms and real-time servers.',
    ],
    learningCurve: 'Hard',
    salaryUS: '$104,000 / year',
    salaryEU: '',
    difficultyRating: 4,
    jobs: '',
  },
  {
    name: 'Fortran',
    logoUrl:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/fortran/fortran-original.svg',
    released: 'Released in 1957',
    description: [
      'One of the oldest languages, popular in scientific computing.',
      'Still used heavily in engineering simulations and physics.',
    ],
    learningCurve: 'Moderate',
    salaryUS: '$113,000 / year',
    salaryEU: '',
    difficultyRating: 3,
    jobs: '',
  },
  {
    name: 'Go',
    logoUrl:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg',
    released: 'Released in 2009',
    description: [
      'Created by Google for simple, fast, concurrent programming.',
      'Widely used in cloud services and backend APIs.',
    ],
    learningCurve: 'Easy',
    salaryUS: '$125,000 / year',
    salaryEU: '€67,500 / year',
    difficultyRating: 2,
    jobs: '',
  },
  {
    name: 'Haskell',
    logoUrl:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/haskell/haskell-original.svg',
    released: 'Released in 1990',
    description: [
      'Purely functional language emphasizing immutability.',
      'Popular in academic circles and advanced type systems.',
    ],
    learningCurve: 'Hard',
    salaryUS: '$121,000 / year',
    salaryEU: '',
    difficultyRating: 4,
    jobs: '',
  },
  {
    name: 'Java',
    logoUrl:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
    released: 'Released in 1995',
    description: [
      '“Write once, run anywhere” language for the JVM.',
      'Dominant in enterprise systems and Android development.',
    ],
    learningCurve: 'Moderate',
    salaryUS: '$119,000 / year',
    salaryEU: '€62,500 / year',
    difficultyRating: 3,
    jobs: '',
  },
  {
    name: 'Kotlin',
    logoUrl:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg',
    released: 'Released in 2011',
    description: [
      'Modern, concise language interoperable with Java.',
      'Officially supported for Android development by Google.',
    ],
    learningCurve: 'Moderate',
    salaryUS: '$124,000 / year',
    salaryEU: '€63,700 / year',
    difficultyRating: 3,
    jobs: '',
  },
  {
    name: 'Lua',
    logoUrl:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/lua/lua-original.svg',
    released: 'Released in 1993',
    description: [
      'Lightweight scripting language often embedded in apps and games.',
      'Known for its simple syntax and small footprint.',
    ],
    learningCurve: 'Easy',
    salaryUS: '$108,000 / year',
    salaryEU: '',
    difficultyRating: 2,
    jobs: '',
  },
  {
    name: 'PHP',
    logoUrl:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg',
    released: 'Released in 1995',
    description: [
      'Widely used server-side scripting language for the web.',
      'Still runs many popular CMSs and web applications.',
    ],
    learningCurve: 'Easy',
    salaryUS: '$98,000 / year',
    salaryEU: '€57,300 / year',
    difficultyRating: 2,
    jobs: '',
  },
  {
    name: 'Perl',
    logoUrl:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/perl/perl-original.svg',
    released: 'Released in 1987',
    description: [
      'Powerful text-processing and scripting language.',
      'Once a web dev staple; now more niche in DevOps and bioinformatics.',
    ],
    learningCurve: 'Moderate',
    salaryUS: '$113,000 / year',
    salaryEU: '',
    difficultyRating: 3,
    jobs: '',
  },
  {
    name: 'R',
    logoUrl:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/r/r-original.svg',
    released: 'Released in 1993',
    description: [
      'Statistical computing and graphics language popular in data science.',
      'Rich ecosystem of packages for analysis and visualization.',
    ],
    learningCurve: 'Moderate',
    salaryUS: '$107,000 / year',
    salaryEU: '',
    difficultyRating: 3,
    jobs: '',
  },
  {
    name: 'Ruby',
    logoUrl:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg',
    released: 'Released in 1995',
    description: [
      'Elegant, expressive language focusing on developer happiness.',
      'Well-known for Ruby on Rails framework in web development.',
    ],
    learningCurve: 'Easy',
    salaryUS: '$131,000 / year',
    salaryEU: '€62,200 / year',
    difficultyRating: 2,
    jobs: '',
  },
  {
    name: 'Solidity',
    logoUrl:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/solidity/solidity-original.svg',
    released: 'Released in 2015',
    description: [
      'Contract-oriented language for Ethereum smart contracts.',
      'Syntax resembles JavaScript/C++, tailored for blockchain development.',
    ],
    learningCurve: 'Moderate',
    salaryUS: '$178,000 / year',
    salaryEU: '',
    difficultyRating: 3,
    jobs: '',
  },
  {
    name: 'Swift',
    logoUrl:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg',
    released: 'Released in 2014',
    description: [
      'Modern language by Apple for iOS and macOS development.',
      'Emphasizes safety and performance with concise syntax.',
    ],
    learningCurve: 'Moderate',
    salaryUS: '$119,000 / year',
    salaryEU: '',
    difficultyRating: 3,
    jobs: '',
  },
];

const HomePage: React.FC<Props> = ({ language }) => (
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
              <img
                src={lang.logoUrl}
                alt={`${lang.name} logo`}
                className="logoImg"
              />
            </div>

            <CardContent>
              <Typography variant="h6" className="desc-text">{lang.name}</Typography>
              <Typography variant="subtitle2" color="textSecondary" className="desc-text">
                {lang.released}
              </Typography>

              <Typography variant="body2" className="descLine desc-text">
                {lang.description[0]}
              </Typography>
              <Typography variant="body2" className="descLine desc-text">
                {lang.description[1]}
              </Typography>

              <Typography variant="body2" className="desc-text">
                <strong>Learning Curve:</strong> {lang.learningCurve}
              </Typography>

              <Typography variant="body2" className="desc-text">
                <strong>Avg Salary (US):</strong> {lang.salaryUS}
              </Typography>
              <Typography variant="body2" className="desc-text">
                <strong>Avg Salary (EU):</strong> {lang.salaryEU}
              </Typography>
              <Typography variant="body2" className="desc-text">
                <strong>Jobs:</strong> {lang.jobs}
              </Typography>

              <div className="starRating">
                <Typography variant="body2" className="desc-text">
                  <strong>Difficulty:</strong>
                </Typography>
                {lang.name === 'Rust' ? (
                  <span role="img" aria-label="skull">💀💀💀💀💀</span>
                ) : (
                  Array.from({ length: 5 }, (_, i) =>
                    i < lang.difficultyRating ? (
                      <Star key={i} className="starFilled" />
                    ) : (
                      <StarBorder key={i} className="starEmpty" />
                    )
                  )
                )}
              </div>

              <Button
                variant="contained"
                color="primary"
                size="small"
                className="readMoreBtn"
                onClick={() =>
                  (window.location.href = `/languages/${lang.name.toLowerCase()}`)
                }
              >
                Read More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  </>
);

export default HomePage;
