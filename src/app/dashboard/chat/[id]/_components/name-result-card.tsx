'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Bookmark } from 'lucide-react';
import { useState } from 'react';

export interface NameResult {
    id: string;
    name: string;
    tags: string[];
}

const avatarColors = [
    'bg-emerald-500',
    'bg-violet-500',
    'bg-sky-500',
    'bg-pink-500',
    'bg-orange-500',
    'bg-teal-500',
];

const getColor = (index: number) => avatarColors[index % avatarColors.length];

export const NameResultCard = ({
    item,
    index,
    onSelect,
}: {
    item: NameResult;
    index: number;
    onSelect?: (name: string) => void;
}) => {
    const [saved, setSaved] = useState(false);

    return (
        <div
            onClick={() => onSelect?.(item.name)}
            className="group flex cursor-pointer items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 transition-colors hover:border-primary/30 hover:bg-accent/20"
        >
            <span
                className={cn(
                    'flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white',
                    getColor(index),
                )}
            >
                {item.name.charAt(0)}
            </span>

            <div className="flex flex-1 flex-col gap-0.5">
                <span className="text-sm font-semibold text-foreground">{item.name}</span>
                <span className="text-xs text-muted-foreground">{item.tags.join(' · ')}</span>
            </div>

            <Button
                variant="ghost"
                size="icon"
                onClick={() => setSaved((v) => !v)}
                className={cn(
                    'h-7 w-7 opacity-0 transition-all group-hover:opacity-100',
                    saved ? 'text-primary opacity-100' : 'text-muted-foreground hover:text-primary',
                )}
            >
                <Bookmark size={14} className={saved ? 'fill-primary' : ''} />
            </Button>
        </div>
    );
};
