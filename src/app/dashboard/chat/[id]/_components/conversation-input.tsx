'use client';

import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({ prompt: z.string().min(1) });
type Schema = z.infer<typeof schema>;

const useConversationInput = () => {
    const { register, handleSubmit, watch, reset } = useForm<Schema>({
        resolver: zodResolver(schema),
    });

    const { mutateAsync: sendMessage, isPending } = useMutation({
        mutationFn: async (data: Schema) => {
            // TODO: conectar com a action de continuação de conversa
            console.log(data);
            reset();
        },
    });

    const onSubmit = handleSubmit((data) => sendMessage(data));
    const prompt = watch('prompt');

    return { register, onSubmit, prompt, isPending };
};

export const ConversationInput = () => {
    const { register, onSubmit, prompt, isPending } = useConversationInput();

    return (
        <div className="border-t border-border bg-background px-6 py-4">
            <form
                onSubmit={onSubmit}
                className="flex items-end gap-3 rounded-xl border border-border bg-card px-4 py-3 focus-within:border-primary/50 transition-colors"
                noValidate
            >
                <textarea
                    {...register('prompt')}
                    rows={2}
                    placeholder="Continue a conversa..."
                    className="flex-1 resize-none bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
                />
                <Button
                    type="submit"
                    size="icon"
                    disabled={!prompt || isPending}
                    className="h-8 w-8 shrink-0 rounded-lg bg-primary hover:bg-primary/90 disabled:opacity-30"
                >
                    <ArrowRight size={15} />
                </Button>
            </form>
        </div>
    );
};
