'use client';

import { Button } from '@/components/ui/button';
import { Plus, Share2 } from 'lucide-react';

export const ConversationHeader = ({ title }: { title: string }) => {
    return (
        <header className="flex h-12 shrink-0 items-center justify-between border-b border-border px-5">
            <span className="text-sm font-medium text-foreground">{title}</span>

            <div className="flex items-center gap-1">
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 text-muted-foreground hover:text-foreground"
                >
                    <Plus size={16} />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 text-muted-foreground hover:text-foreground"
                >
                    <Share2 size={15} />
                </Button>
            </div>
        </header>
    );
};
