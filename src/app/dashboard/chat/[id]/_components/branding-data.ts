import { BrandingBrief } from './branding-message';

export const mockBrandings: Record<string, BrandingBrief> = {
    Finly: {
        name: 'Finly',
        tagline: 'Seu dinheiro, mais inteligente.',
        concept:
            'Finly é uma marca tech-first que combina simplicidade e sofisticação. O nome remete a "final" e "finanças" com a leveza de um produto digital moderno — curto, memorável e fácil de pronunciar em qualquer idioma.',
        palette: [
            { name: 'Obsidian', hex: '#09090b', role: 'Background' },
            { name: 'Violet', hex: '#7c3aed', role: 'Primary' },
            { name: 'Emerald', hex: '#34d399', role: 'Sucesso / Lucro' },
            { name: 'Zinc', hex: '#3f3f46', role: 'Surface' },
            { name: 'Snow', hex: '#fafafa', role: 'Texto principal' },
        ],
        typography: { heading: 'Sora', body: 'Inter' },
        personality: ['Confiante', 'Moderno', 'Acessível', 'Direto', 'Tech-savvy'],
        tone: 'Direto e encorajador. Fala como um amigo que entende de dinheiro — sem jargão, sem julgamento.',
        audience:
            'Jovens de 20 a 35 anos que estão começando a organizar as finanças. Familiarizados com apps, mas frustrados com bancos tradicionais.',
    },
    Grana: {
        name: 'Grana',
        tagline: 'Financeiro do jeito brasileiro.',
        concept:
            'Grana abraça o vocabulário popular brasileiro para criar uma conexão imediata com o público. É descomplicado, quente e próximo — o oposto do bancão frio e distante.',
        palette: [
            { name: 'Deep', hex: '#0f0f12', role: 'Background' },
            { name: 'Samba', hex: '#16a34a', role: 'Primary' },
            { name: 'Ouro', hex: '#ca8a04', role: 'Destaque' },
            { name: 'Cinza', hex: '#374151', role: 'Surface' },
            { name: 'Claro', hex: '#f9fafb', role: 'Texto principal' },
        ],
        typography: { heading: 'Nunito', body: 'Roboto' },
        personality: ['Brasileiro', 'Descomplicado', 'Caloroso', 'Próximo', 'Real'],
        tone: 'Coloquial e empático. Como um papo entre amigos sobre dinheiro, sem tabu e sem complicação.',
        audience:
            'Brasileiros das classes B e C entre 22 e 40 anos que querem controle financeiro sem precisar de MBA.',
    },
    Poupify: {
        name: 'Poupify',
        tagline: 'Poupar virou hábito.',
        concept:
            'O sufixo "-ify" remete aos grandes apps de streaming e SaaS, transmitindo inovação. "Poupify" soa como uma ação — você não apenas usa o app, você poupifica sua vida.',
        palette: [
            { name: 'Midnight', hex: '#0a0a0f', role: 'Background' },
            { name: 'Iris', hex: '#6366f1', role: 'Primary' },
            { name: 'Mint', hex: '#6ee7b7', role: 'Acento positivo' },
            { name: 'Slate', hex: '#334155', role: 'Surface' },
            { name: 'White', hex: '#ffffff', role: 'Texto principal' },
        ],
        typography: { heading: 'Poppins', body: 'DM Sans' },
        personality: ['Motivador', 'Gamificado', 'Jovem', 'Positivo', 'Dinâmico'],
        tone: 'Animado e encorajador. Celebra cada progresso, pequeno ou grande. Faz o usuário sentir que está ganhando.',
        audience:
            'Jovens adultos de 18 a 30 anos que querem criar o hábito de poupar mas acham o tema de finanças chato ou ansioso.',
    },
    Fluxo: {
        name: 'Fluxo',
        tagline: 'Dinheiro em movimento.',
        concept:
            'Fluxo evoca movimento, equilíbrio e naturalidade. É uma marca para pessoas que querem que o dinheiro flua — sem bloqueios, sem angústia. Conceitual e elegante.',
        palette: [
            { name: 'Void', hex: '#06060a', role: 'Background' },
            { name: 'Aqua', hex: '#0891b2', role: 'Primary' },
            { name: 'Wave', hex: '#22d3ee', role: 'Acento' },
            { name: 'Steel', hex: '#1e293b', role: 'Surface' },
            { name: 'Frost', hex: '#f8fafc', role: 'Texto principal' },
        ],
        typography: { heading: 'Outfit', body: 'Geist' },
        personality: ['Sereno', 'Sofisticado', 'Fluido', 'Equilibrado', 'Minimalista'],
        tone: 'Calmo e claro. Remove a ansiedade das finanças com uma comunicação tranquila e objetiva.',
        audience:
            'Profissionais de 28 a 42 anos que buscam equilíbrio financeiro e têm aversão a interfaces carregadas e estressantes.',
    },
    CashUp: {
        name: 'CashUp',
        tagline: 'Level up your money.',
        concept:
            'CashUp fala a língua global da geração que cresceu com videogame e cultura americana. Transmite evolução ("up"), é direto e tem energia de startup unicórnio.',
        palette: [
            { name: 'Carbon', hex: '#0c0c10', role: 'Background' },
            { name: 'Neon', hex: '#a855f7', role: 'Primary' },
            { name: 'Lime', hex: '#84cc16', role: 'Sucesso' },
            { name: 'Graphite', hex: '#27272a', role: 'Surface' },
            { name: 'Bright', hex: '#fafafa', role: 'Texto principal' },
        ],
        typography: { heading: 'Space Grotesk', body: 'Inter' },
        personality: ['Ambicioso', 'Global', 'Energético', 'Bold', 'Aspiracional'],
        tone: 'Confiante e aspiracional. Fala como um mentor que acredita no potencial do usuário e empurra para o próximo nível.',
        audience:
            'Jovens de 20 a 32 anos conectados à cultura global, empreendedores, freelancers e early adopters que querem crescer financeiramente.',
    },
};
