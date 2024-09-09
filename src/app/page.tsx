import Link from 'next/link';
import { Component } from 'react';

export default function Home() {
  return (
    <>
      {/* <Component {...pageProps} /> */}
      <main className="flex min-h-screen bg-black text-white flex-col items-center p-24">
        <h1 className="text-4xl font-bold">Homepage do Site</h1>
        <hr />
        <nav className="mt-6">
          <Link className="text-sky-500 hover:text-sky-700" href="/portal/sign-in">
            Access the Portal
          </Link>{' '}
          ou{' '}
          <Link className="text-sky-500 hover:text-sky-700" href="/portal/sign-up">
            Create Account
          </Link>
        </nav>
      </main>
    </>
  );
}