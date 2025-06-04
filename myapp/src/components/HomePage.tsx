import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import './HomePage.css';

const languages = [
  {
    name: 'JavaScript',
    logoBg: '#ffeb3b',
    logoText: 'JS',
    tagline: 'Made in 2012',
    details: [
      'Widely used by 20 mil people',
      'Mostly used for websites',
      'Could be used for backend (Node.js)',
      'Important for front-end/full-stack',
      'Easy to learn: 1 mo syntax, 5 mo basic, 6 mo React',
    ],
  },
  { name: 'Rust', logoBg: '#dea584', logoText: 'R', tagline: '2021 Stable', details: [] },
  { name: 'Go', logoBg: '#00add8', logoText: 'Go', tagline: '2012 Stable', details: [] },
];

const HomePage: React.FC = () => (
  <>
    <AppBar position="static" className="appBar">
      <Toolbar>
        <Typography variant="h6" className="logo">
          Logo
        </Typography>
        <div className="navLinks">
          <Button color="inherit">Home</Button>
          <Button color="inherit">What language?</Button>
          <Button color="inherit">IT Fields</Button>
          <Button color="inherit">About</Button>
        </div>
      </Toolbar>
    </AppBar>

    <Container className="mainContainer">
      <Typography variant="h4" className="headline">
        Explore languages <span className="highlight">or</span> <u>check IT fields</u>
      </Typography>

      <div className="cardGrid">
        {languages.map((lang, idx) => (
          <div className="cardItem" key={idx}>
            <Card className="langCard">
              {lang.name && (
                <>
                  <CardMedia
                    className="logoBox"
                    style={{ backgroundColor: lang.logoBg }}
                  >
                    <Typography variant="h3" className="logoText">
                      {lang.logoText}
                    </Typography>
                  </CardMedia>
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
                </>
              )}
            </Card>
          </div>
        ))}
      </div>
    </Container>
  </>
);

export default HomePage;
