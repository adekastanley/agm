import { createFileRoute } from '@tanstack/react-router'
import { fetchHomePageContent, fetchProjects, fetchNews } from '../lib/api'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Impact } from '../components/Impact'
import { NewsCarousel } from '../components/NewsCarousel'
import { Volunteer } from '../components/Volunteer'

export const Route = createFileRoute('/')({
    loader: async () => {
        const [homeData, projects, news] = await Promise.all([
            fetchHomePageContent(),
            fetchProjects(6),
            fetchNews(6)
        ]);
        return { homeData, projects, news };
    },
    component: RouteComponent,
})

function RouteComponent() {
    const { homeData, projects, news } = Route.useLoaderData();

    return (
        <div className="w-full max-w-full overflow-x-hidden">
            <Hero data={homeData} />
            <About data={homeData} />
            <Impact projects={projects} />
            <NewsCarousel news={news} />
            <Volunteer />
        </div>
    )
}
