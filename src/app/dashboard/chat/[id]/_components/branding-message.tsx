'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Check, Copy, Sparkles } from 'lucide-react';
import { useState } from 'react';

export interface BrandColor {
    name: string;
    hex: string;
    role: string;
}

export interface BrandingBrief {
    name: string;
    tagline: string;
    concept: string;
    palette: BrandColor[];
    typography: { heading: string; body: string };
    personality: string[];
    tone: string;
    audience: string;
}

const Section = ({ label, children }: { label: string; children: React.ReactNode }) => (
    <div className="flex flex-col gap-2">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60">
            {label}
        </span>
        {children}
    </div>
);

const ColorSwatch = ({ color }: { color: BrandColor }) => (
    <div className="flex flex-col gap-1.5">
        <div
            className="h-10 w-full rounded-md border border-border"
            style={{ backgroundColor: color.hex }}
        />
        <div className="flex flex-col">
            <span className="text-xs font-medium text-foreground">{color.name}</span>
            <span className="font-mono text-[10px] text-muted-foreground">{color.hex}</span>
            <span className="text-[10px] text-muted-foreground/60">{color.role}</span>
        </div>
    </div>
);

const formatBriefAsText = (brief: BrandingBrief) => `
${brief.name}
"${brief.tagline}"

CONCEITO
${brief.concept}

PALETA DE CORES
${brief.palette.map((c) => `${c.name} — ${c.hex} (${c.role})`).join('\n')}

TIPOGRAFIA
Heading: ${brief.typography.heading}
Body: ${brief.typography.body}

PERSONALIDADE
${brief.personality.join(', ')}

TOM DE VOZ
${brief.tone}

PÚBLICO-ALVO
${brief.audience}
`.trim();

export const BrandingMessage = ({ brief }: { brief: BrandingBrief }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(formatBriefAsText(brief));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
                    <Sparkles size={12} className="text-primary" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">namecraft IA</span>
            </div>

            <div className="flex flex-col gap-5 rounded-xl border border-border bg-card p-5">
                <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
                    <div className="flex flex-col gap-1">
                        <h2 className="font-heading text-2xl font-black tracking-tight text-foreground">
                            {brief.name}
                        </h2>
                        <p className="text-sm italic text-muted-foreground">&ldquo;{brief.tagline}&rdquo;</p>
                    </div>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={handleCopy}
                        className="h-7 shrink-0 gap-1.5 text-xs"
                    >
                        {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                        {copied ? 'Copiado!' : 'Copiar branding'}
                    </Button>
                </div>

                <Section label="Conceito">
                    <p className="text-sm leading-relaxed text-muted-foreground">{brief.concept}</p>
                </Section>

                <Section label="Paleta de cores">
                    <div className="grid grid-cols-5 gap-3">
                        {brief.palette.map((color) => (
                            <ColorSwatch key={color.hex} color={color} />
                        ))}
                    </div>
                </Section>

                <Section label="Tipografia">
                    <div className="flex gap-4">
                        <div className="flex flex-1 flex-col gap-1 rounded-lg border border-border bg-background p-3">
                            <span className="text-[10px] text-muted-foreground/60">Heading</span>
                            <span
                                className="text-lg font-bold text-foreground"
                                style={{ fontFamily: brief.typography.heading }}
                            >
                                {brief.typography.heading}
                            </span>
                        </div>
                        <div className="flex flex-1 flex-col gap-1 rounded-lg border border-border bg-background p-3">
                            <span className="text-[10px] text-muted-foreground/60">Body</span>
                            <span
                                className="text-sm text-foreground"
                                style={{ fontFamily: brief.typography.body }}
                            >
                                {brief.typography.body}
                            </span>
                        </div>
                    </div>
                </Section>

                <div className="grid grid-cols-2 gap-5">
                    <Section label="Personalidade">
                        <div className="flex flex-wrap gap-1.5">
                            {brief.personality.map((trait) => (
                                <span
                                    key={trait}
                                    className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-xs text-primary"
                                >
                                    {trait}
                                </span>
                            ))}
                        </div>
                    </Section>

                    <Section label="Tom de voz">
                        <p className="text-sm text-muted-foreground">{brief.tone}</p>
                    </Section>
                </div>

                <Section label="Público-alvo">
                    <p className="text-sm text-muted-foreground">{brief.audience}</p>
                </Section>
            </div>
        </div>
    );
};
