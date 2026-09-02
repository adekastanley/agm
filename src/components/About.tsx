import { FadeIn } from './FadeIn'

export function About() {
    return (
        <section id="about" className="py-16 sm:py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-5 relative h-[450px] sm:h-[550px] lg:h-[700px]">
                        <FadeIn className="h-full">
                            <div className="w-full h-[450px] sm:h-[550px] lg:h-[700px] bg-muted flex items-center justify-center relative z-10 shadow-lg">
                                <img src="/agm1.jpg" className='w-full h-full object-cover' alt="agm" />
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-48 sm:w-64 h-48 sm:h-64 bg-primary/10 -z-10" />
                            <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 w-24 sm:w-32 h-24 sm:h-32 bg-background border-4 sm:border-8 border-primary -z-10" />
                        </FadeIn>
                    </div>

                    <div className="lg:col-span-7 lg:pl-12">
                        <FadeIn>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-12 h-1 bg-primary"></span>
                                <span className="text-sm font-bold uppercase tracking-widest text-primary">About Hon. Magaji</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter mb-8 text-foreground">
                                A Life of Service,<br />Guided by Purpose.
                            </h2>

                            <div className="space-y-6 text-lg text-muted-foreground">
                                <p>
                                    Born in 1971, Hon. Amos Gwamna Magaji has always been driven by a singular vision: to improve the lives of the people around him. From his early dreams of medicine, leading to his studies in Human Physiology, to his successful career consulting in occupational health and safety across Abuja and Lagos, his path has been defined by care.
                                </p>
                                <p>
                                    His transition into public service was not born of ambition, but of necessity. Recognizing that true change required systemic influence, he stepped forward to represent Zangon Kataf/Jaba.
                                </p>
                                <p className="font-medium text-foreground border-l-4 border-primary pl-4 py-2">
                                    "Leadership is a calling to serve, uplift, and unite. Our strength lies in our community, our tolerance, and our shared faith in a better tomorrow."
                                </p>
                                <p>
                                    Now serving his second term and chairing the House Committee on Health, his journey from the private sector to national leadership stands as a testament to lifelong dedication to public well-being.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    )
}
