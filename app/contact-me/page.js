import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';

const contacts = [
  {
    text: 'gmail',
    icon: <EmailIcon className='dark:fill-neutral-200' />,
    href: 'mailto:omerfrkolcy@gmail.com',
  },
  {
    text: 'linkedin',
    icon: <LinkedInIcon className='dark:fill-neutral-200' />,
    href: 'https://linkedin.com/in/omerfrkolcy',
  },
  {
    text: 'github',
    icon: <GitHubIcon className='dark:fill-neutral-200' />,
    href: 'https://github.com/omerfrkolcy',
  },
  {
    text: 'github (company)',
    icon: <GitHubIcon className='dark:fill-neutral-200' />,
    href: 'https://github.com/omerfolcay',
  },
  {
    text: 'medium',
    icon: <ArticleIcon className='dark:fill-neutral-200' />,
    href: 'https://medium.com/@omerfrkolcy',
  },
];

export default function ContactMe() {
  return (
    <div>
      <Typography variant='h6' gutterBottom>
        Here is how you can reach me via:
      </Typography>
      <List>
        {contacts.map(({ text, href, icon }, index) => (
          <ListItem key={index} target='_blank' component='a' href={href}>
            <ListItemIcon className='min-w-fit mr-4'>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
