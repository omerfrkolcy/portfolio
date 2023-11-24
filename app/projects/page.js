import * as React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { Fingerprint, GitHub } from '@mui/icons-material';

const PROJECT_CONFIG = [
  {
    Title: 'ask-me-gpt',
    Header: 'Ask Me GPT',
    Image: '/ask-me-gpt.png',
    Description: 'A GPT-3.5 turbo powered question answering app, written in Next.js and OpenAI API',
    Repository: 'https://github.com/omerfrkolcy/ask-me-gpt',
    Link: 'https://ask-me-gpt.vercel.app/',
  },
  {
    Title: 'scheduled-news',
    Header: 'Scheduled News',
    Image: '/scheduled-news.png',
    Description: 'A news app that you can fetch news from HackerNews to read later, written in Next.js',
    Repository: 'https://github.com/omerfrkolcy/scheduled-news',
    Link: 'https://scheduled-news.vercel.app/',
  },
  {
    Title: 'react-draggable-layout',
    Header: 'React Draggable Layout',
    Description: 'A draggable layout component, written in React',
    Image: '/react-draggable-layout.png',
    Repository: 'https://github.com/omerfrkolcy/react-draggable-layout',
    Link: 'https://react-draggable-layout.vercel.app/',
  },
  {
    Title: 'travis',
    Header: 'Travis',
    Image: '/golang-api.svg',
    Description: 'A simple, fast, and secure web app (REST API), written in Go',
    Repository: 'https://github.com/omerfrkolcy/travis',
  },
  {
    Title: 'view-analytics',
    Header: 'View Analytics',
    Image: '/nodejs-api.svg',
    Description: 'User Analytics Logger for web apps, sentry.io powered, written in Node.js',
    Repository: 'https://github.com/omerfrkolcy/view-analytics',
  },
  {
    Title: 'molly',
    Header: 'Molly',
    Image: '/golang-api.svg',
    Description: 'Socket.io powered chat app service, written in Go',
    Repository: 'https://github.com/omerfrkolcy/molly',
  },
];

export default function Projects() {
  return (
    <>
      <div className='grid grid-cols-1 gap-5 lg:grid-cols-2'>
        {PROJECT_CONFIG.map(({ Title, Header, Description, Image, Repository, Link }, index) => (
          <Card
            key={index}
            sx={{ maxWidth: 360 }}
            className='dark:text-white dark:bg-gray-800 text-gray-800 bg-gray-100'
          >
            <CardMedia sx={{ height: 180 }} image={Image} title={Title} className=' bg-cover' />
            <CardContent>
              <Typography gutterBottom variant='h6' component='div'>
                {Header}
              </Typography>
              <Typography variant='body2'>{Description}</Typography>
            </CardContent>
            <CardActions className='flex justify-between'>
              {Repository && (
                <Button
                  className='text-black dark:text-white bg-gray-100 dark:bg-gray-900 hover:bg-white dark:hover:bg-black'
                  variant='contained'
                  href={Repository}
                  target='_blank'
                  size='small'
                  startIcon={<GitHub className='lg:w-8 h-6 fill-gray-900 dark:fill-gray-100' />}
                >
                  GitHub
                </Button>
              )}
              {Link && (
                <Button
                  className='text-black dark:text-white bg-gray-100 dark:bg-gray-900 hover:bg-white dark:hover:bg-black'
                  variant='contained'
                  href={Link}
                  target='_blank'
                  size='small'
                  startIcon={<Fingerprint className='lg:w-8 h-6 fill-black dark:fill-white' />}
                >
                  PREVIEW
                </Button>
              )}
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
}
