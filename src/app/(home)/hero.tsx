import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const Hero = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-8 px-6 py-24 text-center">
            <span className="py-2 px-4 bg-primary/10 text-primary font-medium rounded-full border shadow-xl shadow-primary/2">
                IA Generativa de Nomes
            </span>

            <h1 className="max-w-2xl font-semibold tracking-tight md:text-6xl font-heading">
                O nome certo para o seu{' '}
                <span className="text-primary">negócio</span>
            </h1>

            <div className="flex w-full max-w-xl items-center gap-2 rounded-xl border border-[#27272a] bg-[#0c0c0f] px-3 py-2">
                <input
                    placeholder="Ex: app de finanças pessoais..."
                    className="flex-1 bg-transparent text-sm text-[#fafafa] placeholder:text-[#52525b] outline-none"
                />
                <Link
                    href="/auth"
                    className={cn('px-6 py-5', buttonVariants())}
                >
                    Gerar nomes
                    <ArrowRight className="size-4" />
                </Link>
            </div>

            <small>
                Grátis para começar. Nenhuma conta necessária para testar.
            </small>
        </section>
    );
};
