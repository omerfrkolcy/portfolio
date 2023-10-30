'use client';

import Typewriter from 'typewriter-effect';

const MESSAGES = [
  `Hello there! `,
  `it's me, `,
  `Ömer, `,
  `a curious software engineer with over 6 years of experience at Insider, a global tech SaaS firm. `,
  `I am currently leading a product development team of 8-10 members as a Scrum Master, `,
  `also responsible for creating customer dashboards and data analytics visualization tools. `,
];

export default function Main() {
  return (
    <section>
      <h1 className='font-semibold text-2xl mb-8 tracking-tighter'>welcome.</h1>
      <Typewriter
        className='prose prose-neutral dark:prose-invert'
        onInit={(typewriter) => {
          MESSAGES.forEach((message) => typewriter.changeDelay(50).typeString(message).pauseFor(500).start());
        }}
      />
    </section>
  );
}
