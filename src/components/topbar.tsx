'use client';

import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';

interface TopbarProps {
    title: string;
}

export const Topbar = ({ title }: TopbarProps) => {
    return (
        <header className="flex h-12 shrink-0 items-center justify-between border-b border-[#27272a] bg-[#0c0c0f] px-5">
            <span className="text-sm font-medium text-[#fafafa]">{title}</span>
            <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 text-[#a1a1aa] hover:bg-[#18181b] hover:text-[#fafafa]"
            >
                <Share2 size={15} />
            </Button>
        </header>
    );
};
