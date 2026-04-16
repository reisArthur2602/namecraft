import { cn } from '@/lib/utils';
import * as React from 'react';

const Input = ({ className, type, ...props }: React.ComponentProps<'input'>) => {
    return (
        <input
            type={type}
            data-slot="input"
            className={cn(
                'flex h-9 w-full rounded-lg border border-border bg-input px-3 py-1 text-sm text-foreground shadow-xs transition-colors',
                'placeholder:text-muted-foreground',
                'focus-visible:outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50',
                'disabled:pointer-events-none disabled:opacity-50',
                className,
            )}
            {...props}
        />
    );
};

export { Input };
