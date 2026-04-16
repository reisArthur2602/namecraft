'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import type { PropsWithChildren } from 'react';
import { toast } from 'sonner';

export const queryClient = new QueryClient({
    defaultOptions: {
        mutations: { onError: (error) => toast(error.message) },
    },
});

export const ReactQueryProvider = ({ children }: PropsWithChildren) => {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
