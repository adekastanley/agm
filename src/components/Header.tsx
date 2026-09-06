import { Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'

const navItems = ['About', 'Projects', 'News', 'Gallery', 'Contact']

export function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-200 bg-background/85 backdrop-blur-md border-b border-border/50 ${scrolled ? 'shadow-sm' : ''
                    }`}
            >
                <div className="container mx-auto px-4 sm:px-6 h-20 flex items-center justify-between relative z-50">
                    <Link to="/" className="flex items-center gap-2 max-w-[85%] sm:max-w-none" onClick={() => setIsOpen(false)}>
                        <span className="text-xl sm:text-2xl font-bold tracking-tighter truncate text-foreground">
                            AGM
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            ['Projects', 'News', 'Gallery', 'Contact'].includes(item) ? (
                                <Link
                                    key={item}
                                    // @ts-ignore
                                    to={`/${item.toLowerCase()}`}
                                    className="text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors [&.active]:text-primary"
                                >
                                    {item}
                                </Link>
                            ) : (
                                <a
                                    key={item}
                                    href={`/#${item.toLowerCase().replace(' ', '-')}`}
                                    className="text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {item}
                                </a>
                            )
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <Link
                            to="/contact"
                            className="hidden md:inline-flex h-10 items-center justify-center rounded-sm px-6 text-sm font-medium bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
                        >
                            Join Campaign
                        </Link>
                        
                        {/* Mobile Menu Toggle */}
                        <button 
                            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors focus:outline-none"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle Menu"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {isOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ opacity: 0, rotate: -90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: 90 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X size={20} strokeWidth={2.5} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ opacity: 0, rotate: 90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: -90 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu size={20} strokeWidth={2.5} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20, transition: { delay: 0.2, duration: 0.2 } }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-40 bg-background/98 backdrop-blur-3xl pt-28 pb-12 px-6 flex flex-col justify-between overflow-y-auto md:hidden"
                    >
                        <nav className="flex flex-col gap-6 mt-8">
                            {navItems.map((item, i) => {
                                const isLink = ['Projects', 'News', 'Gallery', 'Contact'].includes(item);
                                return (
                                    <motion.div
                                        key={item}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -30 }}
                                        transition={{ duration: 0.4, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        {isLink ? (
                                            <Link
                                                // @ts-ignore
                                                to={`/${item.toLowerCase()}`}
                                                className="text-4xl sm:text-5xl font-bold tracking-tighter text-foreground hover:text-primary transition-colors block"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item}
                                            </Link>
                                        ) : (
                                            <a
                                                href={`/#${item.toLowerCase().replace(' ', '-')}`}
                                                className="text-4xl sm:text-5xl font-bold tracking-tighter text-foreground hover:text-primary transition-colors block"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item}
                                            </a>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </nav>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.4, delay: navItems.length * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-12"
                        >
                            <Link
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="inline-flex h-14 w-full items-center justify-center rounded-sm px-8 text-lg font-bold uppercase tracking-widest bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
                            >
                                Join Campaign
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
