import { FadeIn } from './FadeIn'
import { Link } from '@tanstack/react-router'
import type { PostData } from '../lib/api'

export function Impact({ projects = [] }: { projects?: PostData[] }) {
    // If no projects, we can either return null or show a message.
    // For now, we'll render whatever we have.

    return (
        <section id="impact" className="py-16 sm:py-24 bg-foreground text-background relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 clip-diagonal pointer-events-none" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0% 100%)' }} />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <FadeIn>
                    <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                        <span className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Impact Scorecard</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter mb-6 text-white">
                            Promises Made.<br />Promises Kept.
                        </h2>
                        <p className="text-base sm:text-lg text-muted-foreground">
                            We measure our success not by words, but by the tangible improvements in the lives of our constituents across Zangon Kataf & Jaba.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {projects.map((project, index) => {
                        // Filter out the 'Projects' category itself to show the actual type (e.g., 'Health')
                        const tags = project.categories.filter(c => c.slug !== 'projects');
                        const displayTag = tags.length > 0 ? tags[0].name : 'Project';

                        return (
                            <FadeIn key={project.id} delay={index * 0.1}>
                                <Link 
                                    to="/projects/$slug" 
                                    params={{ slug: project.slug }}
                                    className="group relative bg-background/5 border border-white/10 hover:border-primary/50 transition-colors h-[360px] sm:h-[400px] flex flex-col justify-end p-6 sm:p-8 overflow-hidden block"
                                >
                                    <div className="absolute inset-0 bg-muted/20 -z-10 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
                                        {project.featured_image ? (
                                            <img src={project.featured_image} alt={project.title} className="w-full h-full object-cover" />
                                        ) : (
                                            <span className="text-muted-foreground text-sm">No Image</span>
                                        )}
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent -z-10" />

                                    <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-wider mb-4 w-fit">
                                        {displayTag}
                                    </span>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight" dangerouslySetInnerHTML={{ __html: project.title }} />
                                    {/* The excerpt usually contains <p> tags from WP, so we inject it safely and use line-clamp */}
                                    <div 
                                        className="text-white/70 text-sm line-clamp-2 [&>p]:m-0" 
                                        dangerouslySetInnerHTML={{ __html: project.excerpt || project.content }} 
                                    />
                                </Link>
                            </FadeIn>
                        )
                    })}
                </div>

                <div className="mt-12 text-center">
                    <Link to="/projects" className="inline-flex h-12 items-center justify-center border border-white/20 px-8 text-sm font-medium text-white hover:bg-white hover:text-foreground transition-colors">
                        View All Projects
                    </Link>
                </div>
            </div>
        </section>
    )
}
