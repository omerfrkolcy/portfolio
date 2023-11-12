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
import { Typography } from '@mui/material';
import Insider from '@/public/insider.svg';

const experiences = [
  {
    date: '2018 Jun',
    logo: <Insider className='lg:w-48 w-24 fill-black dark:fill-white' />,
    role: 'Software Engineer in QA',
    color: 'secondary',
    variant: 'default',
    align: 'items-start',
    connector: {
      upper: '',
      lower: 'secondary.main',
    },
  },
  {
    date: '2020 Nov - 2021 Jul (Secondary Role)',
    logo: <Insider className='lg:w-48 w-24 fill-black dark:fill-white' />,
    role: 'Technical Account Manager',
    color: 'primary',
    variant: 'outlined',
    align: 'items-end',
    connector: {
      upper: 'secondary.main',
      lower: 'secondary.main',
    },
  },
  {
    date: '2019 Oct - Present',
    logo: <Insider className='lg:w-48 w-24 fill-black dark:fill-white' />,
    role: 'Software Engineer & Scrum Master',
    color: 'secondary',
    variant: 'default',
    align: 'items-start',
    connector: {
      upper: 'secondary.main',
      lower: '',
    },
  },
];

export default function Experiences() {
  return (
    <Timeline position='alternate'>
      {experiences.map(({ date, logo, role, color, variant, align, connector = '' }, index) => (
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
            {logo}
            <Typography>{role}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
