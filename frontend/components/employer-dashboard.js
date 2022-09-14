import Link from 'next/link';

export default function dashboard() {
  return (
    <>
      <h1>employer dashboard</h1>
      <h2 className='text-white'>
        <Link href="./Home">Back to home</Link>
      </h2>
    </>
  );
}