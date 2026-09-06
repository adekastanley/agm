import { Mail, Globe, Sparkles, ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'

export function UnderConstruction() {
    return (
        <div className="relative min-h-screen w-full flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-zinc-950 text-zinc-100 selection:bg-emerald-500 selection:text-white overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-emerald-600/15 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-10 right-1/4 w-[350px] h-[250px] bg-teal-600/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Subtle grid texture */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)`,
                    backgroundSize: '24px 24px',
                }}
            />

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full max-w-2xl mx-auto"
            >
                {/* Main Card */}
                <div className="relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-900/70 p-8 sm:p-12 shadow-2xl backdrop-blur-2xl ring-1 ring-white/5">
                    {/* Top gradient highlight border */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />

                    <div className="flex flex-col items-center text-center">
                        {/* Status Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.15, duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs sm:text-sm font-medium mb-6 shadow-inner"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                            </span>
                            <span>Under Construction • Launching Soon</span>
                        </motion.div>



                        {/* Inquiries Box */}
                        <div className="w-full rounded-2xl bg-zinc-950/60 border border-zinc-800/80 p-5 mb-8 text-left sm:text-center">
                            <p className="text-xs sm:text-sm text-zinc-300 font-medium mb-1">
                                Have questions or need to get in touch?
                            </p>
                            <p className="text-xs text-zinc-500">
                                For inquiries, official media requests, or project collaborations, reach out to our team directly.
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
                            <a
                                id="cta-email"
                                href="mailto:idibiaonline@gmail.com?subject=Website%20Inquiry%20-%20Hon.%20Amos%20Gwamna%20Magaji"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-emerald-900/30 hover:shadow-emerald-900/50 active:scale-[0.98]"
                            >
                                <Mail className="w-4 h-4" />
                                <span>Send Us a Message</span>
                            </a>

                            <a
                                id="cta-website"
                                href="https://idibia.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-800/80 hover:bg-zinc-800 border border-zinc-700/70 hover:border-zinc-600 text-zinc-200 text-sm font-semibold transition-all duration-200 hover:text-white active:scale-[0.98]"
                            >
                                <Globe className="w-4 h-4 text-zinc-400" />
                                <span>Visit idibia.com</span>
                                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Note */}
                <div className="mt-8 text-center text-xs text-zinc-600">

                    <p className="mt-1">
                        &copy; {new Date().getFullYear()} AGM All rights reserved.
                    </p>
                </div>
            </motion.div>
        </div>
    )
}
