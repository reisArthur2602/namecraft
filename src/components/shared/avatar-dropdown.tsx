'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CreditCard, LogOut, Settings, User } from 'lucide-react';

const menuItems = [
    { label: 'Perfil', href: '/dashboard/perfil', icon: User },
    {
        label: 'Configurações',
        href: '/dashboard/configuracoes',
        icon: Settings,
    },
    { label: 'Planos', href: '/dashboard/planos', icon: CreditCard },
];

export const AvatarDropdown = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="flex w-full items-center gap-2 rounded-md px-1.5 py-2 text-sm transition-colors text-muted-foreground hover:text-foreground outline-none">
                    <Avatar className="size-8 shrink-0">
                        <AvatarImage src="" alt="avatar" />
                        <AvatarFallback className="text-[10px] bg-primary/20 text-primary">
                            AR
                        </AvatarFallback>
                    </Avatar>
                    <span className="truncate text-xs">Arthur Reis</span>
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent side="right" align="end" className="w-48">
                <DropdownMenuLabel className="text-xs text-muted-foreground font-normal">
                    arthurdesouzareis222@gmail.com
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                {menuItems.map(({ label, href, icon: Icon }) => (
                    <DropdownMenuItem key={href} asChild>
                        <a
                            href={href}
                            className="flex items-center gap-2 cursor-pointer"
                        >
                            <Icon size={14} />
                            {label}
                        </a>
                    </DropdownMenuItem>
                ))}

                <DropdownMenuSeparator />

                <DropdownMenuItem className="flex items-center gap-2 text-destructive focus:text-destructive cursor-pointer">
                    <LogOut size={14} />
                    Sair
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
