import { FadeIn } from './FadeIn'

export function MediaHub() {
    return (
        <section id="media" className="py-16 sm:py-24 bg-white border-t border-border relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <FadeIn>
                        <span className="text-sm font-bold uppercase tracking-widest text-primary mb-4 block">Campaign Hub</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground">
                            On the Trail.
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <a href="#" className="text-primary font-bold hover:underline flex items-center gap-2 text-sm sm:text-base">
                            See all news &rarr;
                        </a>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div className="group cursor-pointer">
                                <div className="h-56 sm:h-64 bg-muted mb-6 overflow-hidden relative">
                                    <div className="absolute inset-0 flex items-center justify-center bg-muted transition-transform duration-500 group-hover:scale-105">
                                        <span className="text-muted-foreground text-sm">News Image {i}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-xs sm:text-sm text-muted-foreground mb-3 font-medium">
                                    <span>Oct {i + 12}, 2026</span>
                                    <span className="w-1 h-1 rounded-full bg-primary"></span>
                                    <span>Press Release</span>
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                                    Hon. Magaji hosts Zonkwa Townhall, emphasizes peace and unity
                                </h3>
                                <p className="text-muted-foreground text-sm line-clamp-2">
                                    Addressing thousands of supporters, the representative called for continued religious tolerance and communal effort in achieving our shared goals.
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    )
}
