'use client';

import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Insider from '@/public/insider.svg';

const experiences = [
  {
    date: '2018 Jun',
    logo: <Insider className='w-48 fill-black dark:fill-white' />,
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
    logo: <Insider className='w-48 fill-black dark:fill-white' />,
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
    logo: <Insider className='w-48 fill-black dark:fill-white' />,
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
