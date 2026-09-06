import { createFileRoute, Link } from '@tanstack/react-router'
import { fetchNewsBySlug } from '../lib/api'
import { FadeIn } from '../components/FadeIn'
import { format } from 'date-fns'

export const Route = createFileRoute('/news/$slug')({
    loader: async ({ params }) => {
        const item = await fetchNewsBySlug(params.slug);
        if (!item) {
            throw new Error('News item not found');
        }
        return { item };
    },
    errorComponent: () => (
        <div className="w-full min-h-screen flex flex-col items-center justify-center bg-foreground text-background">
            <h1 className="text-4xl font-bold mb-4">News Not Found</h1>
            <p className="text-muted-foreground mb-8">The news item you are looking for does not exist or has been removed.</p>
            <Link to="/news" className="bg-primary text-white px-6 py-3 font-medium hover:bg-primary/90 transition-colors">
                Back to News
            </Link>
        </div>
    ),
    component: NewsDetailPage,
})

function NewsDetailPage() {
    const { item } = Route.useLoaderData();
    const tags = item.categories.filter(c => c.slug !== 'news');
    const displayTag = tags.length > 0 ? tags[0].name : 'News';

    // Format the date if valid
    const dateObj = new Date(item.date);
    const formattedDate = isNaN(dateObj.getTime()) ? '' : format(dateObj, 'MMMM d, yyyy');

    return (
        <div className="w-full min-h-screen bg-background text-foreground pt-24 pb-16">
            <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
                <FadeIn>
                    <div className="mb-8">
                        <Link to="/news" className="text-primary hover:underline text-sm font-medium mb-6 inline-block">
                            &larr; Back to News
                        </Link>
                        
                        <div className="flex items-center gap-4 mb-4">
                            <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-wider">
                                {displayTag}
                            </span>
                            {formattedDate && (
                                <span className="text-sm text-muted-foreground">{formattedDate}</span>
                            )}
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-8" dangerouslySetInnerHTML={{ __html: item.title }} />
                    </div>
                </FadeIn>
                
                {item.featured_image && (
                    <FadeIn delay={0.1}>
                        <div className="w-full aspect-video md:aspect-[21/9] mb-12 overflow-hidden bg-muted/20">
                            <img 
                                src={item.featured_image} 
                                alt={item.title} 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                    </FadeIn>
                )}

                <FadeIn delay={0.2}>
                    <div 
                        className="prose prose-lg dark:prose-invert max-w-none 
                            [&>p]:text-muted-foreground [&>p]:leading-relaxed [&>p]:mb-6
                            [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-6
                            [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:mt-8 [&>h3]:mb-4
                            [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:my-8 [&>blockquote]:text-xl
                            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:mb-2 [&>ul>li]:text-muted-foreground
                            [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>ol>li]:mb-2 [&>ol>li]:text-muted-foreground"
                        dangerouslySetInnerHTML={{ __html: item.content }} 
                    />
                </FadeIn>
            </div>
        </div>
    )
}
