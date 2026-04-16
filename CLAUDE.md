# CLAUDE.md

## Visão Geral

Este projeto deve seguir uma arquitetura consistente, previsível e organizada.
Toda implementação deve respeitar estritamente as regras abaixo.

---

## Stack e Padrões Gerais

- Utilizar Next.js com App Router
- Utilizar shadcn/ui para UI
- Utilizar Zod para validação no client

---

## UI e Componentização

- Sempre usar componentes do shadcn/ui
- Nunca usar elementos HTML puros diretamente

---

## Actions

- Local: src/actions
- Não usar validação com Zod nas actions
- Validação é feita no client

---

## Componentes Compartilhados

- Local: src/components/shared

---

## Estrutura por Página

src/app/(rota)

- page.tsx
- componentes da rota

---

## Zod

- Usado apenas no client
- Schemas claros e reutilizáveis
- Usar z.infer

---

## 🧩 Padrão de Formulários (OBRIGATÓRIO)

Todos os formulários devem seguir este padrão:

- react-hook-form
- zodResolver
- shadcn/ui
- useMutation
- Hook separado (ex: useLogin)

### Exemplo padrão

'use client';

import { Button } from '@/components/ui/button';
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { useState } from 'react';

const useLogin = () => {
const {
register,
handleSubmit,
formState: { errors },
} = useForm({ resolver: zodResolver(signInSchema) });

    const { mutateAsync: handleLogin, isPending } = useMutation({
        mutationFn: signIn,
    });

    const onSubmit = handleSubmit((data) => handleLogin(data));

    return { register, onSubmit, errors, isPending };

};

export function LoginForm() {
const { errors, isPending, onSubmit, register } = useLogin();
const [showPassword, setShowPassword] = useState(false);

    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-6" noValidate>
            <FieldGroup>
                <Field>
                    <FieldLabel htmlFor="email">E-mail</FieldLabel>
                    <Input {...register('email')} />
                    <FieldError errors={[errors.email]} />
                </Field>

                <Field>
                    <FieldLabel htmlFor="password">Senha</FieldLabel>
                    <Input {...register('password')} />
                    <FieldError errors={[errors.password]} />
                </Field>
            </FieldGroup>

            <Button type="submit" disabled={isPending}>
                {isPending && <Loader2 className="animate-spin" />}
                Entrar
            </Button>
        </form>
    );

}

---

## Diretriz Final

- Seguir todas as regras obrigatoriamente.

- Sempre usar arrow functions para as funçoes e componentes. ex:. const exemplo = ()=>{}

- Use o arquivo DESIGN.md como base na criacao dos componentes e interfaces para manter a consistencia.
