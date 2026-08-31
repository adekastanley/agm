import { FadeIn } from './FadeIn'

export function HealthAgenda() {
    return (
        <section id="health-agenda" className="py-24 bg-secondary">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <FadeIn>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-12 h-1 bg-primary"></span>
                                <span className="text-sm font-bold uppercase tracking-widest text-primary">National Leadership</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter mb-6 text-foreground">
                                The Health Agenda.
                            </h2>
                            <p className="text-xl font-medium text-foreground mb-8">
                                As Chairman of the House Committee on Health, Hon. Magaji is at the forefront of transforming Nigeria's healthcare system.
                            </p>
                            <ul className="space-y-6">
                                {[
                                    { title: "Combating the 'Japa' Syndrome", desc: "Pushing legislative interventions to retain medical talent and improve working conditions for healthcare professionals." },
                                    { title: "National Policy Reform", desc: "Championing bills that ensure affordable healthcare access for the most vulnerable populations." },
                                    { title: "Local Medical Outreaches", desc: "Sponsoring free medical missions that have treated thousands of constituents back home." }
                                ].map((item, idx) => (
                                    <li key={idx} className="flex gap-4">
                                        <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                                            {idx + 1}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-foreground mb-1">{item.title}</h4>
                                            <p className="text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </FadeIn>
                    </div>
                    <div className="relative h-[600px]">
                        <FadeIn delay={0.2}>
                            <div className="absolute inset-0 bg-white border border-border shadow-xl flex flex-col">
                                <div className="h-2/3 bg-muted flex items-center justify-center">
                                    <span className="text-muted-foreground font-medium">Healthcare Action Placeholder</span>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-2">Legislative Impact</h3>
                                    <p className="text-muted-foreground">Elevating our local representation to a national platform, ensuring that the health of the nation remains a top priority.</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    )
}
