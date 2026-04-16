import { Logo } from '@/components/shared/logo';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export const Header = () => {
    return (
        <header className="px-6 py-4 flex items-center justify-between border-b">
            <Logo href="/" />

            <nav className="flex items-center gap-6 text-sm">
                <a
                    href="/auth"
                    className="font-medium text-muted-foreground duration-150 transition-all hover:text-primary"
                >
                    Exemplos
                </a>
                <a
                    href="/auth"
                    className="font-medium text-muted-foreground duration-150 transition-all hover:text-primary"
                >
                    Como funciona
                </a>
                <a
                    href="/auth"
                    className="font-medium text-muted-foreground duration-150 transition-all hover:text-primary"
                >
                    Planos
                </a>
            </nav>

            <Link href="/auth" className={buttonVariants({ size: 'lg' })}>
                Acesse sua conta
            </Link>
        </header>
    );
};
