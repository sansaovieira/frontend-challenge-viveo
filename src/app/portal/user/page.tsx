'use client'; // Caso precise usar client-side features

import { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Link from 'next/link';
import { CardFooter } from '@/components/ui/card';
import { User } from './interface';

function UserProfile() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('https://randomuser.me/api/?results=5');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data.results);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <TableContainer component={Paper} style={{ maxWidth: '100%', overflowX: 'auto' }}>
        <Table className="w-['40px'] flex flex-col md:w-full md:max-w-screen-lg md:mx-auto" aria-label="responsive table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Nationality</TableCell>
              <TableCell>Picture</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.login.uuid}>
                <TableCell>{`${user.name.title} ${user.name.first} ${user.name.last}`}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.nat}</TableCell>
                <TableCell>
                  <img
                    src={user.picture.large}
                    alt={`Profile Picture of ${user.name.first} ${user.name.last}`}
                    style={{ width: '50px', height: 'auto' }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <CardFooter className="mt-4 flex justify-center">
        <Link href="/" className="btn">
          Back to portal
        </Link>
      </CardFooter>
    </>
  );
}

export default UserProfile;
