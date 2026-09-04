import { createFileRoute } from '@tanstack/react-router'
import { fetchProjects } from '../lib/api'
import { FadeIn } from '../components/FadeIn'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/')({
    loader: async () => {
        // Fetch up to 100 projects for the full page
        const projects = await fetchProjects(100);
        return { projects };
    },
    component: ProjectsPage,
})

function ProjectsPage() {
    const { projects } = Route.useLoaderData();

    return (
        <div className="w-full min-h-screen bg-foreground text-background pt-24 pb-16 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 clip-diagonal pointer-events-none" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0% 100%)' }} />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <FadeIn>
                    <div className="mb-12">
                        <Link to="/" className="text-primary hover:underline text-sm font-medium mb-4 inline-block">&larr; Back to Home</Link>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 text-white">
                            All Projects
                        </h1>
                        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
                            Explore the comprehensive list of projects, bills, and community interventions spearheaded by Hon. Amos Gwamna Magaji.
                        </p>
                    </div>
                </FadeIn>

                {projects.length === 0 ? (
                    <FadeIn delay={0.2}>
                        <div className="text-center py-20 bg-background/5 border border-white/10">
                            <p className="text-muted-foreground">No projects found.</p>
                        </div>
                    </FadeIn>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {projects.map((project, index) => {
                            // Filter out the 'Projects' category itself to show the actual type (e.g., 'Health')
                            const tags = project.categories.filter(c => c.slug !== 'projects');
                            const displayTag = tags.length > 0 ? tags[0].name : 'Project';

                            return (
                                <FadeIn key={project.id} delay={(index % 10) * 0.1}>
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
                                        {/* Inject the excerpt safely and clamp it */}
                                        <div 
                                            className="text-white/70 text-sm line-clamp-2 [&>p]:m-0" 
                                            dangerouslySetInnerHTML={{ __html: project.excerpt || project.content }} 
                                        />
                                    </Link>
                                </FadeIn>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}
