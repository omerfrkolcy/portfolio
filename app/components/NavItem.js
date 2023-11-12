'use client';

import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function NavItem({ path, name }) {
  const pathname = usePathname() || '/';
  const router = useRouter();
  const isActive = path === pathname;

  return (
    <div
      onClick={() => router.push(path)}
      className={clsx(
        'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle cursor-pointer',
        {
          'text-neutral-500': !isActive,
        }
      )}
    >
      <span className='relative py-1 px-2'>
        {name}
        {path === pathname ? (
          <motion.div
            className='absolute h-[1px] top-7 mx-2 inset-0 bg-neutral-200 dark:bg-neutral-800 z-[-1] dark:bg-gradient-to-r from-transparent to-neutral-900'
            layoutId='sidebar'
            transition={{
              type: 'spring',
              stiffness: 350,
              damping: 30,
            }}
          />
        ) : null}
      </span>
    </div>
  );
}
