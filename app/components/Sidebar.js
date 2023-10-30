'use client';

import { LayoutGroup } from 'framer-motion';
import NavItem from './NavItem';
import React, { Suspense } from 'react';

const navItems = {
  '/': {
    name: 'home',
  },
  '/experiences': {
    name: 'experiences',
  },
  '/contact-me': {
    name: 'contact me',
  },
};

export default function Navbar() {
  return (
    <aside className='-ml-[8px] mb-16 tracking-tight'>
      <div className='lg:sticky lg:top-20'>
        <LayoutGroup>
          <nav
            className='flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative'
            id='nav'
          >
            <div className='flex flex-row space-x-0 justify-between w-full'>
              <Suspense fallback={null}>
                <div className='flex'>
                  {Object.entries(navItems).map(([path, { name }]) => {
                    return <NavItem key={path} path={path} name={name} />;
                  })}
                </div>
              </Suspense>
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}
