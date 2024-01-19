'use client';

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from '@mui/lab';
import { Link, Typography } from '@mui/material';
import Insider from '@/public/insider.svg';

const experiences = [
  {
    company: 'https://useinsider.com/',
    date: '2021 Jul - Present',
    logo: <Insider className='lg:w-48 w-24 fill-black dark:fill-white' />,
    role: 'Software Engineer & Scrum Master in Product Development',
    color: 'secondary',
    variant: 'default',
    align: 'items-start',
    connector: {
      upper: 'success.main',
      lower: 'secondary.main',
    },
  },
  {
    company: 'https://useinsider.com/',
    date: '2019 Nov - 2021 Jul',
    logo: <Insider className='lg:w-48 w-24 fill-black dark:fill-white' />,
    role: 'Technical Lead in OnSite Development',
    color: 'primary',
    variant: 'outlined',
    align: 'items-end',
    connector: {
      upper: 'secondary.main',
      lower: 'primary.main',
    },
  },
  {
    company: 'https://useinsider.com/',
    date: '2018 Jun - 2019 Oct',
    logo: <Insider className='lg:w-48 w-24 fill-black dark:fill-white' />,
    role: 'Software Engineer in OnSite Development',
    color: 'secondary',
    variant: 'default',
    align: 'items-start',
    connector: {
      upper: 'primary.main',
      lower: '',
    },
  },
];

export default function Experiences() {
  return (
    <Timeline position='alternate'>
      {experiences.map(({ company, date, logo, role, color, variant, align, connector = '' }, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent sx={{ m: 'auto 0' }} variant='body2'>
            {date}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: connector.upper }} />
            <TimelineDot color={color} variant={variant} />
            <TimelineConnector sx={{ bgcolor: connector.lower }} />
          </TimelineSeparator>
          <TimelineContent className={`flex flex-col ${align} py-4`}>
            <Link href={company} target='_blank' rel='noopener noreferrer'>
              {logo}
            </Link>
            <Typography>{role}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
