import React from 'react';
import { Typography, Button, Container, Card, CardContent, Tooltip, IconButton } from '@mui/material';
import { InfoOutlined, Star, StarBorder } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

import engLanguageJson from './eng.json';
import deuLanguageJson from './de.json';
import spaLanguageJson from './spa.json';

interface LanguageJSON {
  name: string;
  logoUrl: string;
  released: string;
  description: string[];
  learningCurve: string;
  salaryUS: string;
  salaryEU: string;
  highEndSalary: string;
  difficultyRating: number;
  jobs?: string;
}

interface Props {
  language: 'eng' | 'deu' | 'spa';
}

const enLanguages = engLanguageJson as unknown as LanguageJSON[];
const deLanguages = deuLanguageJson as unknown as LanguageJSON[];
const esLanguages = spaLanguageJson as unknown as LanguageJSON[];
const componentsProps = {tooltip: {sx: {fontSize: '0.8rem', maxWidth: '300px', p: 1, backgroundColor: '#636363'}}};

const lndata: Record<Props['language'], LanguageJSON[]> = {
    eng: enLanguages,
    deu: deLanguages,
    spa: esLanguages
};

const HomePage: React.FC<Props> = ({ language }) => {
    const navigate = useNavigate();
    const languages = lndata[language];
    const tooltipTextLearning = 'Depends what you will use it for.';
    const tooltipTextSalaryUS = 'Data for 2025 from devjobsscanner.com';
    const tooltipTextSalaryEU = 'This is not accurate';
    const tooltipTextJobs = 'Available jobs in the US only.';
    const tooltipTextHighEndSalary = 'This is the highest salary i was able to find.';

    return (
        <>
            <Container className="mainContainer">
                <Typography variant="h4" className="headline">
                    Just learning one language won't land you a job or help you build something big. 
                    You need to learn a combination of languages, frameworks, tools, databases and more.
                    More about that here: <NavLink className='highlight' to={'/profiles'}>job profiles</NavLink>
                </Typography>

            <div className="cardGrid">
                {languages.map((lang, idx) => (
                    <Card className="langCard" key={idx}>
                        <div className="logoBox">
                            <img src={lang.logoUrl} alt={`${lang.name} logo`} className="logoImg" />
                        </div>
                        <CardContent>
                            {lang.name === 'CSharp' ? (
                                <Typography variant="h6" className="desc-text">C#</Typography>
                            ) : (
                                <Typography variant="h6" className="desc-text">{lang.name}</Typography>
                            )}
                            <Typography variant="subtitle2" color="textSecondary" className="desc-text">
                              {lang.released}
                            </Typography>
                            <Typography variant="body2" className="descLine desc-text">
                              {lang.description[0]}
                            </Typography>
                            <Typography variant="body2" className="descLine desc-text">
                              {lang.description[1]}
                            </Typography>
                            <Typography variant="body2" className="desc-text fieldWithInfo">
                                <strong>Learning Curve:</strong> {lang.learningCurve}
                                <Tooltip title={tooltipTextLearning} arrow componentsProps={componentsProps}>
                                    <IconButton size="small" className="infoIcon">
                                        <InfoOutlined fontSize="small" />
                                    </IconButton>
                              </Tooltip>
                            </Typography>
                            <Typography variant="body2" className="desc-text fieldWithInfo">
                                <strong>Avg Salary (US):</strong> {lang.salaryUS}
                                <Tooltip title={tooltipTextSalaryUS} arrow componentsProps={componentsProps}>
                                    <IconButton size="small" className="infoIcon">
                                        <InfoOutlined fontSize="small" />
                                    </IconButton>
                                </Tooltip>
                            </Typography>
                            <Typography variant="body2" className="desc-text fieldWithInfo">
                                <strong>Avg Salary (EU):</strong> {lang.salaryEU}
                                <Tooltip title={tooltipTextSalaryEU} arrow componentsProps={componentsProps}>
                                    <IconButton size="small" className="infoIcon">
                                        <InfoOutlined fontSize="small" />
                                    </IconButton>
                                </Tooltip>
                            </Typography>
                            <Typography variant="body2" className="desc-text fieldWithInfo">
                                <strong>High-end Salary:</strong> {lang.highEndSalary || ''}
                                <Tooltip title={tooltipTextHighEndSalary} arrow componentsProps={componentsProps}>
                                    <IconButton size="small" className="infoIcon">
                                        <InfoOutlined fontSize="small" />
                                    </IconButton>
                                </Tooltip>
                            </Typography>

                            <Typography variant="body2" className="desc-text">
                                <strong>Jobs:</strong> {lang.jobs}
                                <Tooltip title={tooltipTextJobs} arrow componentsProps={componentsProps}>
                                    <IconButton size="small" className="infoIcon">
                                        <InfoOutlined fontSize="small" />
                                    </IconButton>
                                </Tooltip>
                            </Typography>

                            <div className="starRating">
                                <Typography variant="body2" className="desc-text">
                                    <strong>Difficulty:</strong>
                                </Typography>
                                {lang.name === 'Rust' ? (
                                    <span role="img" aria-label="skull" className='skulls'>💀💀💀💀💀</span>
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
                                onClick={() => navigate(`/languages/${lang.name.toLowerCase()}`)}
                            > Read More
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
            </Container>
        </>
    );
};

export default HomePage;
