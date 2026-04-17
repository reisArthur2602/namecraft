'use client';

import { resendVerificationEmail } from '@/actions/auth';
import { Logo } from '@/components/shared/logo';
import { Button } from '@/components/ui/button';
import { useMutation } from '@tanstack/react-query';
import { CheckCircle2, Loader2, Mail } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const maskEmail = (email: string): string => {
    const [local, domain] = email.split('@');
    if (!domain) return email;
    const visible = local.slice(0, 2);
    const masked = '*'.repeat(Math.max(local.length - 2, 2));
    return `${visible}${masked}@${domain}`;
};

const useResendEmail = (email: string) => {
    const {
        mutateAsync: handleResend,
        isPending,
        isSuccess,
    } = useMutation({
        mutationFn: () => resendVerificationEmail(email),
    });

    return { handleResend, isPending, isSuccess };
};

const steps = [
    {
        label: 'Abra o e-mail em seu ',
        highlight: 'computador',
        suffix: ' ou ',
        highlight2: 'celular',
    },
    {
        label: 'Clique no ',
        highlight: 'link mágico',
        suffix: ' de acesso seguro',
    },
    { label: 'A página será ', highlight: 'atualizada automaticamente' },
];

const VerifyEmailPage = () => {
    const searchParams = useSearchParams();
    const email = searchParams.get('email') ?? '';
    const { handleResend, isPending, isSuccess } = useResendEmail(email);

    return (
        <div className="flex-1 flex flex-col">
            <header className="flex items-center justify-between border-b border-border px-6 py-4">
                <Logo href="/" />
            </header>

            <div className="flex-1 flex items-center justify-center">
                <div className="max-w-md ">
                    {/* Icon */}
                    <div className="mb-6 flex justify-center">
                        <div className="flex size-14 items-center justify-center rounded-xl bg-[#a78bfa]/15">
                            <Mail className="size-6 text-[#a78bfa]" />
                        </div>
                    </div>

                    {/* Heading */}
                    <div className="mb-6 space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight ">
                            Verifique seu e-mail
                        </h1>
                        <div className="my-4 space-y-2">
                            <p>Enviamos um link de acesso para</p>
                            {email && (
                                <p className="inline-block border-border rounded-full px-3 py-1.5 text-sm font-medium bg-muted/40 ">
                                    {maskEmail(email)}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Steps */}
                    <div className="mb-6 divide-y divide-[#27272a] rounded-lg border border-[#27272a] bg-[#18181b]">
                        {steps.map((step, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-3 px-4 py-3"
                            >
                                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#a78bfa]/15 text-xs font-semibold text-[#a78bfa]">
                                    {i + 1}
                                </span>
                                <p className="text-sm text-[#a1a1aa]">
                                    {step.label}
                                    <span className="font-medium text-[#fafafa]">
                                        {step.highlight}
                                    </span>
                                    {step.suffix && <span>{step.suffix}</span>}
                                    {step.highlight2 && (
                                        <span className="font-medium text-[#fafafa]">
                                            {step.highlight2}
                                        </span>
                                    )}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="space-y-3">
                        <Button
                            onClick={() => handleResend()}
                            disabled={isPending || isSuccess}
                            variant="outline"
                            className="w-full h-10 gap-2 border-[#27272a] bg-transparent text-[#fafafa] hover:bg-[#27272a]"
                        >
                            {isPending ? (
                                <Loader2 className="size-4 animate-spin" />
                            ) : isSuccess ? (
                                <CheckCircle2 className="size-4 text-[#34d399]" />
                            ) : null}
                            {isSuccess ? 'Link reenviado!' : 'Reenviar link'}
                        </Button>

                        <div className="flex justify-center">
                            <Link
                                href="/auth"
                                className="text-sm text-[#a78bfa] underline-offset-4 hover:underline"
                            >
                                Usar outro e-mail
                            </Link>
                        </div>
                    </div>

                    {/* Footer */}
                    <p className="mt-6 text-center text-xs text-[#52525b]">
                        Não recebeu? Verifique a pasta de spam. O link expira em{' '}
                        <span className="text-[#71717a]">10 minutos</span>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VerifyEmailPage;
