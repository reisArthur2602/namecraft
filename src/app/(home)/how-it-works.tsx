const steps = [
    {
        number: '01',
        title: 'Descreva seu negócio',
        description:
            'Conte-nos o que você faz, seu público-alvo e o tom da marca que deseja transmitir.',
    },
    {
        number: '02',
        title: 'Receba sugestões',
        description:
            'Nossa IA processa milhares de combinações fonéticas e semânticas em segundos.',
    },
    {
        number: '03',
        title: 'Salve os favoritos',
        description:
            'Verifique a disponibilidade de domínios e redes sociais para seus nomes preferidos.',
    },
];

export const HowItWorks = () => {
    return (
        <section className="mx-auto max-w-5xl px-6 py-24">
            <p className="mb-12 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Como funciona
            </p>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {steps.map((step) => (
                    <div
                        key={step.number}
                        className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6"
                    >
                        <span className="text-sm font-bold text-primary">{step.number}</span>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
