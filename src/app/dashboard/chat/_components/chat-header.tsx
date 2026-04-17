'use client';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Progress } from '@/components/ui/progress';
import { HelpCircle, Sparkles, Zap } from 'lucide-react';

const CREDITS_USED = 7;
const CREDITS_TOTAL = 10;
const creditsPercent = (CREDITS_USED / CREDITS_TOTAL) * 100;
const creditsLow = CREDITS_USED >= CREDITS_TOTAL * 0.8;

export const ChatHeader = () => {
    return (
        <header className="flex h-12 shrink-0 items-center justify-between px-5">
            <div className="flex items-center gap-3">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="flex items-center gap-2">
                            <Sparkles size={14} className="text-primary" />
                            <span className="text-sm font-medium text-foreground">
                                Namecraft AI
                            </span>
                        </div>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end" className="w-64 p-4">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-semibold text-foreground">
                                    Seus créditos
                                </span>
                                <span
                                    className={`text-xs font-bold ${creditsLow ? 'text-red-400' : 'text-primary'}`}
                                >
                                    {CREDITS_TOTAL - CREDITS_USED} restantes
                                </span>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between text-xs text-muted-foreground">
                                    <span>Usados</span>
                                    <span>
                                        {CREDITS_USED} de {CREDITS_TOTAL}
                                    </span>
                                </div>
                                <Progress
                                    value={creditsPercent}
                                    className={`h-2 ${creditsLow ? '[&>div]:bg-red-500' : '[&>div]:bg-primary'}`}
                                />
                                {creditsLow && (
                                    <span className="text-[11px] text-red-400">
                                        Você está quase sem créditos.
                                    </span>
                                )}
                            </div>

                            <div className="flex flex-col gap-1.5 rounded-lg border border-border bg-muted/30 p-3 text-xs text-muted-foreground">
                                <span className="font-medium text-foreground">
                                    Plano Free
                                </span>
                                <span>
                                    Renova todo mês. Faça upgrade para créditos
                                    ilimitados.
                                </span>
                            </div>

                            <Button
                                size="sm"
                                className="w-full gap-1.5 text-xs"
                            >
                                <Zap size={12} />
                                Fazer upgrade
                            </Button>
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>

                <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 text-muted-foreground hover:text-foreground"
                >
                    <HelpCircle size={15} />
                </Button>
            </div>
        </header>
    );
};
