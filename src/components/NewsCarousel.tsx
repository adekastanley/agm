import { FadeIn } from './FadeIn'
import { Link } from '@tanstack/react-router'
import type { PostData } from '../lib/api'
import { format } from 'date-fns'

export function NewsCarousel({ news = [] }: { news?: PostData[] }) {
    if (!news || news.length === 0) return null;

    return (
        <section id="news" className="py-16 sm:py-24 bg-white border-t border-border relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <FadeIn>
                        <span className="text-sm font-bold uppercase tracking-widest text-primary mb-4 block">Campaign Hub</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground">
                            News & Announcements
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <Link to="/news" className="text-primary font-bold hover:underline flex items-center gap-2 text-sm sm:text-base">
                            See all news &rarr;
                        </Link>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {news.slice(0, 3).map((item, index) => {
                        const dateObj = new Date(item.date);
                        const formattedDate = isNaN(dateObj.getTime()) ? '' : format(dateObj, 'MMM d, yyyy');

                        return (
                            <FadeIn key={item.id} delay={index * 0.1}>
                                <Link
                                    to="/news/$slug"
                                    params={{ slug: item.slug }}
                                    className="group cursor-pointer block"
                                >
                                    <div className="h-56 sm:h-64 bg-muted mb-6 overflow-hidden relative">
                                        {item.featured_image ? (
                                            <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                                                <img src={item.featured_image} alt={item.title} className="w-full h-full object-cover" />
                                            </div>
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center bg-muted transition-transform duration-500 group-hover:scale-105">
                                                <span className="text-muted-foreground text-sm">No Image</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-4 text-xs sm:text-sm text-muted-foreground mb-3 font-medium">
                                        {formattedDate && <span>{formattedDate}</span>}
                                        {formattedDate && <span className="w-1 h-1 rounded-full bg-primary"></span>}
                                        <span>News</span>
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug line-clamp-2" dangerouslySetInnerHTML={{ __html: item.title }} />
                                    <div className="text-muted-foreground text-sm line-clamp-2 [&>p]:m-0" dangerouslySetInnerHTML={{ __html: item.excerpt || item.content }} />
                                </Link>
                            </FadeIn>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

