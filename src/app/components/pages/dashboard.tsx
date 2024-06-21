"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchUserData } from '../api/api';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    } else {
      fetchUserData(token)
        .then(data => setUser(data))
        .catch(() => {
          localStorage.removeItem('token');
          router.push('/login');
        });
    }
  }, [router]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <p>This is your dashboard.</p>
    </div>
  );
};

export default Dashboard;
