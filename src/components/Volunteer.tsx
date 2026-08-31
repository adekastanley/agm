import { FadeIn } from './FadeIn'

export function Volunteer() {
    return (
        <section id="volunteer" className="py-24 bg-primary text-white relative overflow-hidden">
            {/* Subtle pattern or texture can go here */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <FadeIn>
                            <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter mb-6">
                                Stand With Us.
                            </h2>
                            <p className="text-xl text-white/80 mb-8 max-w-lg leading-relaxed">
                                The work of building a prosperous community requires all hands on deck. Add your voice, volunteer your time, and let’s secure a brighter future for Zangon Kataf & Jaba.
                            </p>

                            <div className="space-y-6">
                                <div className="bg-black/20 p-6 border-l-4 border-white">
                                    <p className="font-bold text-lg italic mb-2">"He has shown that leadership is about service, not power."</p>
                                    <p className="text-sm text-white/70">— Community Leader, Jaba</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="bg-white p-8 lg:p-12 shadow-2xl text-foreground">
                        <FadeIn delay={0.2}>
                            <h3 className="text-2xl font-bold mb-6">Join the Grassroots Movement</h3>
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Full Name</label>
                                        <input type="text" className="w-full bg-secondary border-none p-4 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Phone Number</label>
                                        <input type="tel" className="w-full bg-secondary border-none p-4 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="0800 000 0000" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Ward</label>
                                        <input type="text" className="w-full bg-secondary border-none p-4 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Enter Ward" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Polling Unit</label>
                                        <input type="text" className="w-full bg-secondary border-none p-4 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Enter Polling Unit" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">How can you help?</label>
                                    <select className="w-full bg-secondary border-none p-4 focus:ring-2 focus:ring-primary outline-none transition-all">
                                        <option>Canvassing & Mobilization</option>
                                        <option>Media & Communications</option>
                                        <option>Event Organization</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <button type="submit" className="w-full bg-primary text-white font-bold h-14 hover:bg-foreground transition-colors tracking-wide uppercase">
                                    Register as Volunteer
                                </button>
                            </form>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    )
}
