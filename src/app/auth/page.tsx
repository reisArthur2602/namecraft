import { Logo } from '@/components/shared/logo';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import Link from 'next/link';
import { AuthForm } from './auth-form';

const AuthPage = () => {
    return (
        <div className="flex min-h-dvh flex-col bg-background">
            <header className="flex items-center justify-between border-b border-border px-6 py-4">
                <Logo href="/" />
                
            </header>

            <main className="flex flex-1 items-center justify-center px-4 py-12">
                <AuthForm />
            </main>
        </div>
    );
};

export default AuthPage;
