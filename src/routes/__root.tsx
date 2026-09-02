import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Route = createRootRoute({
    component: () => {
        return (
            <div className="flex min-h-screen flex-col font-sans w-full max-w-full overflow-x-hidden">
                <Header />
                <main className="flex-1 w-full max-w-full overflow-x-hidden">
                    <Outlet />
                </main>
                <Footer />
            </div>
        )
    }
})