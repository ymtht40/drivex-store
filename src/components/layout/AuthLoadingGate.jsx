
'use client';

import { Fragment } from 'react';
import { useUser } from '@/providers/UserProvider';
import QuantumLoader from '@/components/QuantumLoader';

// Module ID: 540374
export default function AuthLoadingGate({ children }) {
  const { loading } = useUser();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <QuantumLoader size="40" />
      </div>
    );
  }

  return <Fragment>{children}</Fragment>;
}

