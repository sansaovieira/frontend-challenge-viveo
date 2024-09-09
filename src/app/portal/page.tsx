import { AuthProvider } from '@/contexts/AuthContext';
import Link from 'next/link';

export default function PortalPage() {
  return (
    <>
      <AuthProvider>
        <main className="flex min-h-screen flex-col items-center p-24">
          <h1 className="text-4xl font-bold">Página do Portal</h1>
          <Link href="/api/logout">Logout</Link>
        </main>
      </AuthProvider>
    </>
  );
}