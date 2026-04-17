import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const CTA = () => {
    return (
        <section className="mx-auto max-w-5xl px-6 py-16">
            <div className="flex flex-col items-center gap-6 rounded-2xl bg-gradient-to-b from-[#1a1a2e] to-[#0d0d1a] border border-border px-8 py-16 text-center">
                <h2 className="font-heading text-4xl font-black leading-tight tracking-tight text-foreground max-w-sm">
                    Pronto para encontrar seu nome?
                </h2>

                <Button asChild size="lg" className="rounded-full px-8">
                    <Link href="/dashboard/chat">
                        Começar agora — grátis
                    </Link>
                </Button>

                <p className="text-xs text-muted-foreground">
                    Junte-se a mais de 10.000 empreendedores que encontraram sua identidade.
                </p>
            </div>
        </section>
    );
};
