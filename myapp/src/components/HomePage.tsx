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
  difficultyRating: number; // 1–5 stars
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
    salaryUS: '$120,000 / year',
    salaryEU: '€55,000 / year',
    difficultyRating: 2,
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
    salaryUS: '$120,000 / year',
    salaryEU: '€55,000 / year',
    difficultyRating: 3,
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
    salaryUS: '$120,000 / year',
    salaryEU: '€55,000 / year',
    difficultyRating: 3,
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
    salaryUS: '$120,000 / year',
    salaryEU: '€55,000 / year',
    difficultyRating: 2,
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
    salaryUS: '$120,000 / year',
    salaryEU: '€55,000 / year',
    difficultyRating: 4,
  },
  {
    name: 'C',
    logoUrl:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg',
    released: 'Released in 1972',
    description: [
      'Low-level language that influenced many modern languages.',
      'Still widespread in embedded and systems programming.',
    ],
    learningCurve: 'Moderate',
    salaryUS: 'Data not available',
    salaryEU: 'Data not available',
    difficultyRating: 3,
  },
  {
    name: 'Bash',
    logoUrl:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/bash/bash-original.svg',
    released: 'Released in 1989',
    description: [
      'Shell scripting language for automating command-line tasks.',
      'Commonly used in DevOps and system administration.',
    ],
    learningCurve: 'Easy',
    salaryUS: 'Data not available',
    salaryEU: 'Data not available',
    difficultyRating: 2,
  },
  {
    name: 'CSS3',
    logoUrl:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
    released: 'Released in 1999',
    description: [
      'Stylesheet language controlling layout and visuals on the web.',
      'Essential for front-end web development alongside HTML.',
    ],
    learningCurve: 'Easy',
    salaryUS: 'Data not available',
    salaryEU: 'Data not available',
    difficultyRating: 1,
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
    salaryUS: 'Data not available',
    salaryEU: 'Data not available',
    difficultyRating: 3,
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
    salaryUS: 'Data not available',
    salaryEU: 'Data not available',
    difficultyRating: 3,
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
    salaryUS: 'Data not available',
    salaryEU: 'Data not available',
    difficultyRating: 4,
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
    salaryUS: 'Data not available',
    salaryEU: 'Data not available',
    difficultyRating: 3,
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
    salaryUS: 'Data not available',
    salaryEU: 'Data not available',
    difficultyRating: 2,
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
    salaryUS: 'Data not available',
    salaryEU: 'Data not available',
    difficultyRating: 4,
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
    salaryUS: 'Data not available',
    salaryEU: 'Data not available',
    difficultyRating: 3,
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
    salaryUS: 'Data not available',
    salaryEU: 'Data not available',
    difficultyRating: 3,
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
    salaryUS: 'Data not available',
    salaryEU: 'Data not available',
    difficultyRating: 2,
  },
  {
    name: 'PowerShell',
    logoUrl:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/powershell/powershell-original.svg',
    released: 'Released in 2006',
    description: [
      'Microsoft’s shell language for Windows automation.',
      'Now cross-platform, used in DevOps and automation scripts.',
    ],
    learningCurve: 'Easy',
    salaryUS: 'Data not available',
    salaryEU: 'Data not available',
    difficultyRating: 2,
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
    salaryUS: 'Data not available',
    salaryEU: 'Data not available',
    difficultyRating: 2,
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
    salaryUS: 'Data not available',
    salaryEU: 'Data not available',
    difficultyRating: 3,
  },
  {
    name: 'Processing',
    logoUrl:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/processing/processing-original.svg',
    released: 'Released in 2001',
    description: [
      'Java-based creative coding language for visual arts.',
      'Commonly used in education and interactive installations.',
    ],
    learningCurve: 'Easy',
    salaryUS: 'Data not available',
    salaryEU: 'Data not available',
    difficultyRating: 2,
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
    salaryUS: 'Data not available',
    salaryEU: 'Data not available',
    difficultyRating: 3,
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
    salaryUS: 'Data not available',
    salaryEU: 'Data not available',
    difficultyRating: 2,
  },
  {
    name: 'Rails',
    logoUrl:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg',
    released: 'Released in 2005',
    description: [
      'Opinionated web framework built on Ruby for rapid development.',
      'Favors “Convention over Configuration” for simplicity.',
    ],
    learningCurve: 'Moderate',
    salaryUS: 'Data not available',
    salaryEU: 'Data not available',
    difficultyRating: 3,
  },
  {
    name: 'Scala',
    logoUrl:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/scala/scala-original.svg',
    released: 'Released in 2004',
    description: [
      'Hybrid language combining functional and OOP paradigms on the JVM.',
      'Used extensively in big data frameworks like Spark.',
    ],
    learningCurve: 'Hard',
    salaryUS: 'Data not available',
    salaryEU: 'Data not available',
    difficultyRating: 4,
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
    salaryUS: 'Data not available',
    salaryEU: 'Data not available',
    difficultyRating: 3,
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
    salaryUS: 'Data not available',
    salaryEU: 'Data not available',
    difficultyRating: 3,
  },
  {
    name: 'Zig',
    logoUrl:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/zig/zig-original.svg',
    released: 'Released in 2016',
    description: [
      'Low-level systems programming language aiming to replace C/C++.',
      'Gives manual control over memory with modern tooling.',
    ],
    learningCurve: 'Hard',
    salaryUS: 'Data not available',
    salaryEU: 'Data not available',
    difficultyRating: 5,
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
              <Typography variant="h6">{lang.name}</Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {lang.released}
              </Typography>

              <Typography variant="body2" className="descLine">
                {lang.description[0]}
              </Typography>
              <Typography variant="body2" className="descLine">
                {lang.description[1]}
              </Typography>

              <Typography variant="body2">
                <strong>Learning Curve:</strong> {lang.learningCurve}
              </Typography>

              <Typography variant="body2">
                <strong>Avg Salary (US):</strong> {lang.salaryUS}
              </Typography>
              <Typography variant="body2">
                <strong>Avg Salary (EU):</strong> {lang.salaryEU}
              </Typography>

              <div className="starRating">
                <Typography variant="body2">
                    <strong>Difficulty:</strong>
                </Typography>
                {Array.from({ length: 5 }, (_, i) =>
                  i < lang.difficultyRating ? (
                    <Star key={i} className="starFilled" />
                  ) : (
                    <StarBorder key={i} className="starEmpty" />
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
