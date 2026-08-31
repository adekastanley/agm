export function Footer() {
    return (
        <footer className="bg-foreground text-background py-16">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                    <h3 className="text-2xl font-bold tracking-tighter mb-4 text-white">HON. AMOS G. MAGAJI</h3>
                    <p className="text-muted-foreground max-w-sm">
                        Continuing the work. Delivering results for Zangon Kataf & Jaba. Dedicated to a community rooted in tolerance, hard work, and shared prosperity.
                    </p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                    <ul className="space-y-2 text-muted-foreground">
                        <li><a href="#about" className="hover:text-primary transition-colors">Meet Hon. Magaji</a></li>
                        <li><a href="#impact" className="hover:text-primary transition-colors">Impact Scorecard</a></li>
                        <li><a href="#health-agenda" className="hover:text-primary transition-colors">Health Agenda</a></li>
                        <li><a href="#volunteer" className="hover:text-primary transition-colors">Volunteer Registration</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
                    <p className="text-muted-foreground mb-4">
                        Join us in our mission to bring tangible development to our constituency.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-white">
                            Fb
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-white">
                            X
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-white">
                            Ig
                        </a>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} Hon. Amos Gwamna Magaji Campaign. All rights reserved.</p>
                <p className="mt-4 md:mt-0 italic">"In service to God and our community."</p>
            </div>
        </footer>
    )
}
