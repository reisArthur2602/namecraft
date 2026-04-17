const examples = [
    {
        prompt: '"Plataforma de investimentos para jovens investidores focado em simplicidade"',
        names: [
            { name: 'Finly', tag: 'Curto' },
            { name: 'Vesta', tag: 'Clássico' },
            { name: 'UpRise', tag: 'Composto' },
        ],
    },
    {
        prompt: '"Marca de café artesanal torrado em pequenas quantidades em Minas"',
        names: [
            { name: 'GrãoPuro', tag: 'Direto' },
            { name: 'Aura Cafe', tag: 'Abstrato' },
            { name: 'Torreia', tag: 'Único' },
        ],
    },
    {
        prompt: '"Software de gestão de projetos focado em equipes remotas e agilidade"',
        names: [
            { name: 'Syncro', tag: 'Moderno' },
            { name: 'Flowly', tag: 'Fluido' },
            { name: 'Orbital', tag: 'Vasto' },
        ],
    },
];

export const RealExamples = () => {
    return (
        <section className="mx-auto max-w-5xl px-6 py-24">
            <p className="mb-12 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Exemplos reais
            </p>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {examples.map((example) => (
                    <div
                        key={example.prompt}
                        className="flex flex-col gap-6 rounded-xl border border-border bg-card p-6"
                    >
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            {example.prompt}
                        </p>

                        <div className="flex flex-col gap-3">
                            {example.names.map(({ name, tag }) => (
                                <div
                                    key={name}
                                    className="flex items-center justify-between"
                                >
                                    <span className="text-sm font-semibold text-foreground">
                                        {name}
                                    </span>
                                    <span className="rounded border border-border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                                        {tag}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
