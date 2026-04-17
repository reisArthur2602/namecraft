import { Button } from '@/components/ui/button';
import { MessageSquarePlus } from 'lucide-react';

const DashboardPage = () => {
    return (
        <div className="flex flex-1 flex-col items-center justify-center gap-4 ">
            <div className="flex flex-col items-center gap-2 text-center">
                <MessageSquarePlus size={32} className="text-primary" />
                <h2>Nenhum projeto selecionado</h2>
                <p className="text-xs text-muted-foreground">
                    Selecione um projeto recente ou crie um novo para começar.
                </p>
            </div>
            <Button
                variant="outline"
                size="sm"
                className="gap-2 border-[#27272a] bg-transparent text-xs text-[#a1a1aa] hover:border-[#a78bfa] hover:text-[#fafafa]"
            >
                + Novo Projeto
            </Button>
        </div>
    );
};

export default DashboardPage;
