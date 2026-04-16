'use client';

import { Toaster } from '@/components/ui/sonner';
import { type PropsWithChildren } from 'react';
import { ReactQueryProvider } from './react-query';

export const Providers = ({ children }: PropsWithChildren) => {
    return (
        <ReactQueryProvider>
            <Toaster richColors expand />
            {children}
        </ReactQueryProvider>
    );
};
