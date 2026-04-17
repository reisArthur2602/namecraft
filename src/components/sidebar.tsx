'use client';

import { AvatarDropdown } from '@/components/shared/avatar-dropdown';
import { Logo } from '@/components/shared/logo';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
    DollarSign,
    Home,
    LucideIcon,
    MessageSquareIcon,
    Plus,
    Star,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const recentProjects = [
    { id: '1', name: 'App de finanças pessoais', href: '/projeto/1' },
    { id: '2', name: 'Loja de sapatos eco', href: '/projeto/2' },
    { id: '3', name: 'Plataforma SaaS Devs', href: '/projeto/3' },
];

const menuItems = [
    { label: 'Inicio', href: '/dashboard', icon: Home },
    { label: 'Nomes', href: '/dashboard/nomes', icon: Star },
    { label: 'Planos', href: '/dashboard/planos', icon: DollarSign },
];

const NavSection = ({ label }: { label: string }) => (
    <span className="mb-1 px-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50">
        {label}
    </span>
);

const NavItem = ({
    href,
    icon: Icon,
    label,
    isActive,
    size = 'md',
}: {
    href: string;
    icon: LucideIcon;
    label: string;
    isActive: boolean;
    size?: 'sm' | 'md';
}) => (
    <Link
        href={href}
        className={cn(
            'flex items-center gap-2 rounded-md px-1.5 py-2 transition-colors',
            size === 'sm' ? 'text-xs' : 'text-sm',
            isActive
                ? 'text-foreground'
                : 'text-muted-foreground  hover:text-foreground'
        )}
    >
        <Icon
            size={size === 'sm' ? 14 : 16}
            className={isActive ? 'text-primary' : ''}
        />
        <span className="line-clamp-2 leading-tight">{label}</span>
    </Link>
);

export const Sidebar = () => {
    const pathname = usePathname();

    return (
        <aside className="flex flex-col border-r p-4 gap-4 bg-card/30">
            <Logo href="/dashboard" />

            <Link
                href="/dashboard/chat"
                className={buttonVariants({ variant: 'outline' })}
            >
                <Plus size={14} className="text-primary" />
                Novo Projeto
            </Link>



            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto">
                <NavSection label="Recentes" />
                {recentProjects.map((project) => (
                    <NavItem
                        key={project.id}
                        href={project.href}
                        icon={MessageSquareIcon}
                        label={project.name}
                        isActive={pathname === project.href}
                        size="sm"
                    />
                ))}
            </nav>

            <div>
                <AvatarDropdown />
            </div>
        </aside>
    );
};
