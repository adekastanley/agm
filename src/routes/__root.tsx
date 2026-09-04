import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
    component: () => {
        return (
            <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-zinc-950 font-sans text-zinc-100">
                <Outlet />
            </div>
        )
    }
})