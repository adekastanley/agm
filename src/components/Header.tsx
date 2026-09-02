import { Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'

export function Header() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border' : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 max-w-[85%] sm:max-w-none">
                    <span className={`text-xl sm:text-2xl font-bold tracking-tighter truncate ${scrolled ? 'text-foreground' : 'text-foreground lg:text-white'}`}>
                        HON. AMOS G. MAGAJI
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {['About', 'Impact', 'Health Agenda', 'Media', 'Volunteer'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                            className={`text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors ${scrolled ? 'text-muted-foreground' : 'text-foreground lg:text-white/80'
                                }`}
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <a
                    href="#volunteer"
                    className={`hidden md:inline-flex h-10 items-center justify-center rounded-sm px-6 text-sm font-medium shadow-sm transition-colors ${scrolled
                            ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                            : 'bg-white text-primary hover:bg-white/90'
                        }`}
                >
                    Join Campaign
                </a>
            </div>
        </header>
    )
}
