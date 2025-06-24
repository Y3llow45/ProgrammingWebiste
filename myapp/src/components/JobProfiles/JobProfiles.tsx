import './JobProfiles.css';
import { Card, CardMedia, CardContent, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText} from '@mui/material';

const profiles = [
  {
    title: 'ReactJS Developer',
    cardImage: '/frontend.jpg',
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
    title: 'Front-end Developer',
    cardImage: '/frontend.jpg',
    techs: [
        { name: 'React', icon: '/react.svg' },
        { name: 'Angular', icon: '/angular.svg' },
        { name: 'Vue', icon: '/vue.svg' },
        { name: 'JavaScript', icon: '/js.svg' },
        { name: 'TypeScript', icon: '/ts.svg' },
        { name: 'HTML', icon: '/html.svg' },
        { name: 'CSS', icon: '/css.svg' },
        { name: 'Git', icon: '/git.svg' },
        { name: 'Tailwind CSS', icon: '/tailwindcss.svg' },
        { name: 'Figma', icon: '/figma.svg' },
        { name: 'Photoshop', icon: '/photoshop.svg' },
    ],
  },
  {
    title: 'Backend Java Developer',
    cardImage: '/backend.jpg',
    techs: [
      { name: 'Java', icon: '/java.svg' },
      { name: 'Spring Boot', icon: '/spring.svg' },
      { name: 'PostgreSQL', icon: '/postgresql.svg' },
      { name: 'Docker', icon: '/docker.svg' },
      { name: 'Azure/AWS or GCP', icon: '/azure.svg' },
      { name: 'Git', icon: '/git.svg' },
    ],
  },
  {
    title: 'Full Stack Developer',
    cardImage: '/fullstack.jpg',
    techs: [
      { name: 'React', icon: 'react.png' },
      { name: 'Node.js', icon: 'nodejs.png' },
      { name: 'Express', icon: 'express.png' },
      { name: 'MongoDB', icon: 'mongodb.png' },
      { name: 'Docker', icon: 'docker.png' },
    ],
  },
  {
    title: 'DevOps Engineer',
    cardImage: '/devops.jpg',
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
    cardImage: '/cyber.jpg',
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
    <div className="cardGridJP">
      {profiles.map((p) => (
        <div className="cardItemJP" key={p.title}>
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
