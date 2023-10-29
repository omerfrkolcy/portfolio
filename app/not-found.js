import Link from 'next/link';

export default function Custom404() {
  return (
    <div>
      <p>The page you are looking for does not exist.</p>

      <Link href='/'>Go back to the homepage</Link>
    </div>
  );
}
