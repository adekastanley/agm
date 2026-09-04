import { createFileRoute } from '@tanstack/react-router'
import { fetchHomePageContent, fetchProjects } from '../lib/api'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Impact } from '../components/Impact'
import { HealthAgenda } from '../components/HealthAgenda'
import { MediaHub } from '../components/MediaHub'
import { Volunteer } from '../components/Volunteer'

export const Route = createFileRoute('/')({
    loader: async () => {
        const [homeData, projects] = await Promise.all([
            fetchHomePageContent(),
            fetchProjects(6)
        ]);
        return { homeData, projects };
    },
    component: RouteComponent,
})

function RouteComponent() {
    const { homeData, projects } = Route.useLoaderData();

    return (
        <div className="w-full max-w-full overflow-x-hidden">
            <Hero data={homeData} />
            <About data={homeData} />
            <Impact projects={projects} />
            <HealthAgenda />
            <MediaHub />
            <Volunteer />
        </div>
    )
}
