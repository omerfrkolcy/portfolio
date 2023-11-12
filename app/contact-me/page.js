import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { GitHub, LinkedIn, Email, Article } from '@mui/icons-material';

const contacts = [
  {
    text: 'gmail',
    icon: <Email />,
    href: 'mailto:omerfrkolcy@gmail.com',
  },
  {
    text: 'linkedin',
    icon: <LinkedIn />,
    href: 'https://linkedin.com/in/omerfrkolcy',
  },
  {
    text: 'github',
    icon: <GitHub />,
    href: 'https://github.com/omerfrkolcy',
  },
  {
    text: 'github (company)',
    icon: <GitHub />,
    href: 'https://github.com/omerfolcay',
  },
  {
    text: 'medium',
    icon: <Article />,
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
            <div className='w-12 mr-4 dark:fill-neutral-200'>{icon}</div>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
