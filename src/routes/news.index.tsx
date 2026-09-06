import { createFileRoute } from '@tanstack/react-router'
import { fetchNews } from '../lib/api'
import { FadeIn } from '../components/FadeIn'
import { Link } from '@tanstack/react-router'
import { Newspaper } from 'lucide-react'

export const Route = createFileRoute('/news/')({
    loader: async () => {
        // Fetch up to 100 news items for the full page
        const news = await fetchNews(100);
        return { news };
    },
    component: NewsPage,
})

function NewsPage() {
    const { news } = Route.useLoaderData();

    return (
        <div className="w-full min-h-screen bg-background text-foreground pt-24 pb-16 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 clip-diagonal pointer-events-none" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0% 100%)' }} />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <FadeIn>
                    <div className="mb-12">
                        <Link to="/" className="text-primary hover:underline text-sm font-medium mb-4 inline-block">&larr; Back to Home</Link>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 text-foreground">
                            News & Announcements
                        </h1>
                        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
                            Stay updated with the latest news, events, and announcements from Hon. Amos Gwamna Magaji.
                        </p>
                    </div>
                </FadeIn>

                {news.length === 0 ? (
                    <FadeIn delay={0.2}>
                        <div className="flex flex-col items-center justify-center py-24 px-4 bg-muted/20 border border-dashed border-border text-center max-w-3xl mx-auto">
                            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                                <Newspaper className="w-10 h-10 text-primary" />
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Updates Coming Soon</h3>
                            <p className="text-lg text-muted-foreground max-w-lg mx-auto">
                                We are currently preparing our latest news and announcements. Check back shortly for updates on our campaign activities and progress.
                            </p>
                            <Link to="/" className="mt-8 inline-flex h-12 items-center justify-center bg-primary px-8 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                                Return to Home
                            </Link>
                        </div>
                    </FadeIn>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {news.map((item, index) => {
                            return (
                                <FadeIn key={item.id} delay={(index % 10) * 0.1}>
                                    <Link 
                                        to="/news/$slug" 
                                        params={{ slug: item.slug }}
                                        className="flex flex-col h-full bg-background border border-border overflow-hidden hover:border-primary/50 transition-colors group"
                                    >
                                        <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                                            {item.featured_image ? (
                                                <img src={item.featured_image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center bg-muted">
                                                    <span className="text-muted-foreground text-sm">No Image</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="p-6 flex flex-col flex-1">
                                            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit mb-3">
                                                News
                                            </span>
                                            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors line-clamp-2" dangerouslySetInnerHTML={{ __html: item.title }} />
                                            
                                            <div 
                                                className="text-muted-foreground text-sm line-clamp-3 mb-4 [&>p]:m-0 flex-1" 
                                                dangerouslySetInnerHTML={{ __html: item.excerpt || item.content }} 
                                            />

                                            <div className="mt-auto flex items-center text-primary text-sm font-bold uppercase tracking-wider group-hover:underline">
                                                Read More &rarr;
                                            </div>
                                        </div>
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
