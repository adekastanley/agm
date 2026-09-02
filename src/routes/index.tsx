import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Impact } from '../components/Impact'
import { HealthAgenda } from '../components/HealthAgenda'
import { MediaHub } from '../components/MediaHub'
import { Volunteer } from '../components/Volunteer'

export const Route = createFileRoute('/')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div className="w-full max-w-full overflow-x-hidden">
            <Hero />
            <About />
            <Impact />
            <HealthAgenda />
            <MediaHub />
            <Volunteer />
        </div>
    )
}
