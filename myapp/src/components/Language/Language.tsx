import { Typography, Container, Box, Link } from '@mui/material';
import { useParams } from 'react-router-dom';
import './Language.css';

import langDetailsEn from './langDetailsEng.json';
import langDetailsDe from './langDetailsDe.json';
import langDetailsEs from './langDetailsSpa.json';

interface LanguageDetail {
  shortDescription: string;
  longDescription: string[];
  youtubeUrl: string;
}

interface Props {
  language: string;
  locale: 'eng' | 'deu' | 'spa';
}

const localeData: Record<Props['locale'], Record<string, LanguageDetail>> = {
  eng: langDetailsEn as Record<string, LanguageDetail>,
  deu: langDetailsDe as Record<string, LanguageDetail>,
  spa: langDetailsEs as Record<string, LanguageDetail>,
};

const Language: React.FC<Props> = ({ language, locale }) => {
  const data = localeData[locale][language.toLowerCase()];

  if (!data) {
    return (
      <Container className="languageContainer">
        <Typography variant="h5">Language not found</Typography>
        <Typography variant="body1">No details available for "{language}".</Typography>
      </Container>
    );
  }

  return (
    <Container className="languageContainer">
      <Typography variant="h4" className="langTitle">
        {language.charAt(0).toUpperCase() + language.slice(1)}
      </Typography>
      <Typography variant="subtitle1" className="shortDesc">
        {data.shortDescription}
      </Typography>
      <Box className="longDesc">
        {data.longDescription.map((para, idx) => (
          <Typography key={idx} variant="body1" paragraph>
            {para}
          </Typography>
        ))}
      </Box>
      {data.youtubeUrl && (
        <Box className="videoContainer">
          <Typography variant="h6">Watch a tutorial:</Typography>
          <div className="iframeWrapper">
            <iframe
              src={data.youtubeUrl}
              title={`${language} tutorial`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Box>
      )}
    </Container>
  );
};

export default Language;
