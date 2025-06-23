import { Typography, Container, Box, Button, List, ListItem, ListItemText } from '@mui/material';
import './Language.css';
import YouTubeIcon from '@mui/icons-material/YouTube';

import engLanguageJson from '../HomePage/eng.json';
import langDetailsEng from './langDetailsEng.json';
import langDetailsDe from './langDetailsDe.json';
import langDetailsSpa from './langDetailsSpa.json';

interface LanguageDetail {
  shortDescription: string;
  longDescription: string[];
  youtubeUrl: string;
  learnWith: string[];
}

interface LocaleData {
  [key: string]: LanguageDetail;
}

const localeData: Record<'eng' | 'deu' | 'spa', LocaleData> = {
  eng: langDetailsEng as unknown as LocaleData,
  deu: langDetailsDe as unknown as LocaleData,
  spa: langDetailsSpa as unknown as LocaleData,
};

interface RouteParams {
  langKey: string;
  lang: string;
}

interface Props {
  language: 'eng' | 'deu' | 'spa';
  langKey: any;
}

const normalizeName = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]/g, '');

const Language: React.FC<Props> = ({ language, langKey }) => {
  const locale: 'eng' | 'deu' | 'spa' = 'eng';

  if (!langKey) {
    return (
      <Container className="languageContainer">
        <Typography variant="h5">No language specified</Typography>
      </Container>
    );
  }
  const key = normalizeName(langKey.toLowerCase()); 
  const data = localeData[locale][key];
  console.log(`key is ${key}`)
  console.log(`data is ${data}`)
  if (!data) {
    return (
      <Container className="languageContainer">
        <Typography variant="h5">Language not found</Typography>
        <Typography variant="body1">No details available for "{langKey}".</Typography>
      </Container>
    );
  }

  const allLangs: Array<{ name: string; logoUrl: string }> =
    engLanguageJson as unknown as Array<{ name: string; logoUrl: string }>;
  const logoEntry = allLangs.find(
    (item) => normalizeName(item.name) === key
  );
  const logoUrl = logoEntry?.logoUrl || '';

  return (
    <Container className="languageContainer">
        <Box className="headerBox">
            {logoUrl && (
                <Box className="logoWrapper">
                    <img src={logoUrl} alt={`${langKey} logo`} className="langPageLogo" />
                </Box>
          )}
            <Box className="textWrapper">
                <Typography variant="h4" className="langTitle">
                    {langKey.charAt(0).toUpperCase() + langKey.slice(1)}
                </Typography>
                <Typography variant="subtitle1" className="shortDesc">
                    {data.shortDescription}
                </Typography>
            </Box>
        </Box>

        <Box className="learnWithSection">
            <Typography variant="h6">Learn With: </Typography>
            <List dense>
                {data.learnWith.map((item, idx) => (
                    <ListItem key={idx} disableGutters>
                        <ListItemText primary={item} primaryTypographyProps={{fontSize: '1rem'}} />
                    </ListItem>
                ))}
            </List>
        </Box>

        <Box className="longDesc">
            {data.longDescription.map((para, idx) => (
                <Typography key={idx} variant="body1" paragraph>
                    {para}
                </Typography>
            ))}
        </Box>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '16px' }}>
            {data.youtubeUrl && (
                <Button
                    variant="contained"
                    onClick={() => window.open(data.youtubeUrl, '_blank')}
                    sx={{
                        backgroundColor: '#FF0000',
                        color: '#fff',
                        '&:hover': { backgroundColor: '#cc0000' },
                        textTransform: 'none',
                        fontWeight: 'bold',
                        gap: '6px',
                    }}
                    startIcon={<YouTubeIcon />}
                >
                Watch short intro
                </Button>
            )}
            <Button
                variant="contained"
                color="primary"
                onClick={() => window.location.href = '/languages/javascript'}
                sx={{ textTransform: 'none', fontWeight: 'bold' }}
            >
                Job profiles
            </Button>
        </div>
    </Container>
  );
};

export default Language;
