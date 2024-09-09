import { AuthProvider } from '@/contexts/AuthContext';
import Link from 'next/link';
import { Component } from 'react';

export default function Home() {
  return (
    <>
      {/* <Component {...pageProps} /> */}
      <main className="flex min-h-screen flex-col items-center p-24">
        <h1 className="text-4xl font-bold">Homepage do Site</h1>
        <hr />
        <nav className="mt-6">
          <Link className="text-blue-500" href="/portal">
            Access the Portal
          </Link>{' '}
          ou{' '}
          <Link className="text-blue-500" href="/portal/sign-up">
            Create Account
          </Link>
        </nav>
      </main>
    </>
  );
}