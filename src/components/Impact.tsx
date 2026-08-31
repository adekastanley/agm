import { FadeIn } from './FadeIn'

export function Impact() {
    return (
        <section id="impact" className="py-24 bg-foreground text-background relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 clip-diagonal" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0% 100%)' }} />

            <div className="container mx-auto px-6 relative z-10">
                <FadeIn>
                    <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                        <span className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Impact Scorecard</span>
                        <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter mb-6 text-white">
                            Promises Made.<br />Promises Kept.
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            We measure our success not by words, but by the tangible improvements in the lives of our constituents across Zangon Kataf & Jaba.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div className="group relative bg-background/5 border border-white/10 hover:border-primary/50 transition-colors h-[400px] flex flex-col justify-end p-8 overflow-hidden">
                                <div className="absolute inset-0 bg-muted/20 -z-10 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
                                    <span className="text-muted-foreground text-sm">Project Image Placeholder {i}</span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent -z-10" />

                                <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-wider mb-4 w-fit">
                                    {i % 2 === 0 ? 'Infrastructure' : 'Education'}
                                </span>
                                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                                    Construction of Community Borehole {i}
                                </h3>
                                <p className="text-white/70 line-clamp-2">
                                    Providing clean and accessible water to over 5,000 residents, ensuring better health outcomes and community well-being.
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="inline-flex h-12 items-center justify-center border border-white/20 px-8 text-sm font-medium text-white hover:bg-white hover:text-foreground transition-colors">
                        View All Projects
                    </button>
                </div>
            </div>
        </section>
    )
}
