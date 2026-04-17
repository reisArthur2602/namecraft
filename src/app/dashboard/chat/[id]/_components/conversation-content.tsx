'use client';

import { useEffect, useRef, useState } from 'react';
import { mockBrandings } from './branding-data';
import { BrandingMessage } from './branding-message';
import { AiMessage } from './ai-message';
import { UserMessage } from './user-message';
import { NameResult } from './name-result-card';

const initialNames: NameResult[] = [
    { id: '1', name: 'Finly', tags: ['curto', 'tech'] },
    { id: '2', name: 'Grana', tags: ['BR', 'coloquial'] },
    { id: '3', name: 'Poupify', tags: ['memorável'] },
    { id: '4', name: 'Fluxo', tags: ['conceitual'] },
    { id: '5', name: 'CashUp', tags: ['inglês'] },
];

const regeneratedNames: NameResult[] = [
    { id: '6', name: 'Vesti', tags: ['curto', 'tech'] },
    { id: '7', name: 'Moni', tags: ['global', 'simples'] },
    { id: '8', name: 'Caixa+', tags: ['direto', 'BR'] },
    { id: '9', name: 'Renda', tags: ['conceitual'] },
    { id: '10', name: 'Zeal', tags: ['inglês', 'aspiracional'] },
];

interface Round {
    names: NameResult[];
    selectedName: string | null;
    showBranding: boolean;
}

export const ConversationContent = () => {
    const [rounds, setRounds] = useState<Round[]>([
        { names: initialNames, selectedName: null, showBranding: false },
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [rounds, isLoading]);

    const handleSelect = (roundIndex: number, name: string) => {
        const round = rounds[roundIndex];
        if (round.selectedName || isLoading) return;

        setRounds((prev) =>
            prev.map((r, i) => (i === roundIndex ? { ...r, selectedName: name } : r)),
        );
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            setRounds((prev) =>
                prev.map((r, i) => (i === roundIndex ? { ...r, showBranding: true } : r)),
            );
        }, 1400);
    };

    const handleRegenerate = () => {
        if (isLoading) return;
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            setRounds((prev) => [
                ...prev,
                { names: regeneratedNames, selectedName: null, showBranding: false },
            ]);
        }, 1200);
    };

    const lastRoundIndex = rounds.length - 1;

    return (
        <div className="min-h-0 flex flex-1 flex-col gap-6 overflow-y-auto px-6 py-6 scroll-smooth">
            <UserMessage content="App de finanças pessoais para jovens de 20 a 30 anos. Quero algo moderno, curto, com vibe tech mas acessível." />

            {rounds.map((round, roundIndex) => {
                const isLastRound = roundIndex === lastRoundIndex;
                const branding = round.selectedName ? mockBrandings[round.selectedName] : null;

                return (
                    <div key={roundIndex} className="flex flex-col gap-6">
                        <AiMessage
                            names={round.names}
                            onSelect={(name) => handleSelect(roundIndex, name)}
                            onRegenerate={isLastRound && !round.selectedName ? handleRegenerate : undefined}
                            locked={!!round.selectedName || (!isLastRound)}
                        />

                        {round.selectedName && (
                            <UserMessage content={`Quero usar o ${round.selectedName}.`} />
                        )}

                        {round.showBranding && branding && (
                            <BrandingMessage brief={branding} />
                        )}
                    </div>
                );
            })}

            {isLoading && (
                <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
                        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground">
                        namecraft IA está pensando...
                    </span>
                </div>
            )}

            <div ref={bottomRef} />
        </div>
    );
};
