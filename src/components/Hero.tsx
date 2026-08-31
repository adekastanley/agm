import { motion } from 'motion/react'

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center bg-background overflow-hidden pt-20">
            <div className="absolute inset-0 z-0 flex">
                <div className="w-1/2 bg-background h-full" />
                <div className="w-1/2 bg-primary h-full clip-diagonal" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }} />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-2xl py-20"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-12 h-1 bg-primary"></span>
                        <span className="text-sm font-bold uppercase tracking-widest text-primary">Continuing the Work</span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-6 text-balance text-foreground">
                        Faith in Action.<br />
                        <span className="text-primary">Results for the People.</span>
                    </h1>
                    <p className="text-lg text-muted-foreground mb-8 text-balance max-w-lg">
                        Delivering tangible development and steadfast leadership for Zangon Kataf & Jaba. Together, we build a community rooted in tolerance, hard work, and shared prosperity.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="#impact" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-8 text-sm font-medium text-white shadow-sm hover:bg-primary/90 transition-colors">
                            See My Impact
                        </a>
                        <a href="#volunteer" className="inline-flex h-12 items-center justify-center rounded-sm border-2 border-primary px-8 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors">
                            Join the Campaign
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative h-[600px] w-full"
                >
                    <div className="absolute inset-0 bg-muted/20 border border-white/10 flex items-center justify-center shadow-2xl">
                        <img src="/agm2.jpg" className='w-full h-full object-cover' alt="agm" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
