'use client';

import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { ArrowRight, Lightbulb, Mic } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const chatSchema = z.object({
    prompt: z.string().min(1),
});

type ChatSchema = z.infer<typeof chatSchema>;

const suggestions = [
    'SaaS de Produtividade',
    'Cafeteria Artesanal',
    'Estúdio de Yoga',
];

const useChatInput = () => {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<ChatSchema>({
        resolver: zodResolver(chatSchema),
    });

    const { mutateAsync: sendPrompt, isPending } = useMutation({
        mutationFn: async (data: ChatSchema) => {
            // TODO: conectar com a action de geração de nomes
            console.log(data);
        },
    });

    const onSubmit = handleSubmit((data) => sendPrompt(data));
    const prompt = watch('prompt');

    return { register, onSubmit, setValue, prompt, errors, isPending };
};

export const ChatInput = () => {
    const { register, onSubmit, setValue, prompt, isPending } = useChatInput();

    const handleSuggestion = (text: string) => {
        setValue('prompt', text, { shouldValidate: true });
    };

    return (
        <div className="flex flex-col items-center gap-4 w-full max-w-xl">
            <form
                onSubmit={onSubmit}
                className="w-full rounded-xl border border-border/40 bg-muted-foreground/2 p-4 focus-within:border-primary/50 transition-colors "
                noValidate
            >
                <textarea
                    {...register('prompt')}
                    rows={4}
                    placeholder="Ex: Uma marca de roupas sustentáveis para nômades digitais..."
                    className="w-full resize-none bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
                />

                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <button
                            type="button"
                            className="hover:text-foreground transition-colors"
                        >
                            <Mic size={16} />
                        </button>
                        <button
                            type="button"
                            className="hover:text-foreground transition-colors"
                        >
                            <Lightbulb size={16} />
                        </button>
                    </div>

                    <Button
                        type="submit"
                        size="icon"
                        disabled={!prompt || isPending}
                        className="h-8 w-8 rounded-lg bg-primary hover:bg-primary/90 disabled:opacity-30"
                    >
                        <ArrowRight size={15} />
                    </Button>
                </div>
            </form>

            <p className="text-xs text-muted-foreground">
                <span className="text-primary font-medium">Dica:</span> mencione
                o tom de voz desejado.
            </p>

            <div className="flex flex-wrap justify-center gap-2">
                {suggestions.map((s) => (
                    <button
                        key={s}
                        type="button"
                        onClick={() => handleSuggestion(s)}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                    >
                        {s}
                    </button>
                ))}
            </div>
        </div>
    );
};
