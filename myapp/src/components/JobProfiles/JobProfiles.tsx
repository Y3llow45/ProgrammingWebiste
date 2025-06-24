import './JobProfiles.css';
import { Card, CardMedia, CardContent, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText} from '@mui/material';

const profiles = [
  {
    title: 'ReactJS Developer',
    cardImage: '/images/frontend.jpg',
    techs: [
        { name: 'React', icon: '/react.svg' },
        { name: 'NextJS', icon: '/nextjs.svg' },
        { name: 'JavaScript', icon: '/js.svg' },
        { name: 'TypeScript', icon: '/ts.svg' },
        { name: 'HTML', icon: '/html.svg' },
        { name: 'CSS', icon: '/css.svg' },
        { name: 'Git', icon: '/git.svg' },
        { name: 'Redux', icon: '/redux.svg' },
        { name: 'Socket.io', icon: '/socketio.svg' },
        { name: 'MaterialUI', icon: '/materialui.svg' },
        { name: 'GraphQl', icon: '/graphql.svg' },
    ],
  },
  {
    title: 'Backend Java Developer',
    cardImage: '/images/backend.jpg',
    techs: [
      { name: 'Java', icon: '/icons/java.png' },
      { name: 'Spring Boot', icon: '/icons/spring.png' },
      { name: 'SQL', icon: '/icons/sql.png' },
      { name: 'Docker', icon: '/icons/docker.png' },
      { name: 'Git', icon: '/icons/git.png' },
    ],
  },
  {
    title: 'Full Stack Developer',
    cardImage: '/images/fullstack.jpg',
    techs: [
      { name: 'React', icon: '/icons/react.png' },
      { name: 'Node.js', icon: '/icons/nodejs.png' },
      { name: 'Express', icon: '/icons/express.png' },
      { name: 'MongoDB', icon: '/icons/mongodb.png' },
      { name: 'Docker', icon: '/icons/docker.png' },
    ],
  },
  {
    title: 'DevOps Engineer',
    cardImage: '/images/devops.jpg',
    techs: [
      { name: 'Docker', icon: '/icons/docker.png' },
      { name: 'Kubernetes', icon: '/icons/kubernetes.png' },
      { name: 'AWS', icon: '/icons/aws.png' },
      { name: 'CI/CD', icon: '/icons/ci.png' },
      { name: 'Terraform', icon: '/icons/terraform.png' },
    ],
  },
  {
    title: 'Cybersecurity Specialist',
    cardImage: '/images/cyber.jpg',
    techs: [
      { name: 'Wireshark', icon: '/icons/wireshark.png' },
      { name: 'Metasploit', icon: '/icons/metasploit.png' },
      { name: 'Nmap', icon: '/icons/nmap.png' },
      { name: 'Linux', icon: '/icons/linux.png' },
      { name: 'Python', icon: '/icons/python.png' },
    ],
  },
];

export default function JobProfilesPage() {
  return (
    <div className="cardGrid">
      {profiles.map((p) => (
        <div className="cardItem" key={p.title}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={p.cardImage}
              alt={p.title}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {p.title}
              </Typography>
              <List dense>
                {p.techs.map((t) => (
                  <ListItem key={t.name} disableGutters>
                    <ListItemAvatar>
                      <Avatar
                        src={t.icon}
                        alt={t.name}
                        sx={{ width: 24, height: 24 }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={t.name}
                      primaryTypographyProps={{ fontSize: '0.9rem' }}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
