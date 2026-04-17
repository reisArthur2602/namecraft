import { Button } from '@/components/ui/button';
import { RefreshCw, Sparkles } from 'lucide-react';
import { NameResult, NameResultCard } from './name-result-card';

export const AiMessage = ({
    names,
    onSelect,
    onRegenerate,
    locked = false,
}: {
    names: NameResult[];
    onSelect?: (name: string) => void;
    onRegenerate?: () => void;
    locked?: boolean;
}) => {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
                    <Sparkles size={12} className="text-primary" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">namecraft IA</span>
            </div>

            <div className="flex flex-col gap-2">
                {names.map((item, index) => (
                    <NameResultCard key={item.id} item={item} index={index} onSelect={!locked ? onSelect : undefined} />
                ))}
            </div>

            {!locked && (
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={onRegenerate}
                    className="w-fit gap-1.5 text-xs text-muted-foreground hover:text-foreground"
                >
                    <RefreshCw size={13} />
                    Regerar nomes
                </Button>
            )}
        </div>
    );
};
