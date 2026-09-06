import { createFileRoute } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { fetchAlbums, fetchAlbumBySlug } from '@/lib/api';
import type { Album } from '@/lib/api';
import { AlbumCard } from '@/components/Gallery/AlbumCard';
import { ImageGrid } from '@/components/Gallery/ImageGrid';
import { EmptyState } from '@/components/Gallery/EmptyState';
import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

export const Route = createFileRoute('/gallery')({
    component: GalleryPage,
});

function GalleryPage() {
    const [page, setPage] = useState(1);
    const [allAlbums, setAllAlbums] = useState<Album[]>([]);
    const [selectedAlbumSlug, setSelectedAlbumSlug] = useState<string | null>(null);

    const { data: albumsData, isLoading: isLoadingAlbums, error: albumsError } = useQuery({
        queryKey: ['albums', page],
        queryFn: () => fetchAlbums(page, 12),
    });

    useEffect(() => {
        if (albumsData?.albums) {
            setAllAlbums(prev => {
                const newAlbums = albumsData.albums.filter(a => !prev.some(p => p.id === a.id));
                return [...prev, ...newAlbums];
            });
        }
    }, [albumsData]);

    const { data: activeAlbumData, isLoading: isLoadingAlbumDetails } = useQuery({
        queryKey: ['albumDetails', selectedAlbumSlug],
        queryFn: () => selectedAlbumSlug ? fetchAlbumBySlug(selectedAlbumSlug) : null,
        enabled: !!selectedAlbumSlug,
    });

    const hasMoreAlbums = albumsData ? page < albumsData.totalPages : false;

    return (
        <main className="min-h-screen bg-gray-50/50 pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
                        Gallery
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore our collection of albums and moments captured from various events and projects.
                    </p>
                </div>

                {/* Filter / Tabs */}
                <div className="mb-10 flex items-center justify-center">
                    <div className="flex flex-wrap gap-2 justify-center max-w-4xl bg-white p-1.5 rounded-2xl shadow-sm border border-gray-100">
                        <button
                            onClick={() => setSelectedAlbumSlug(null)}
                            className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${
                                selectedAlbumSlug === null 
                                    ? "bg-gray-900 text-white shadow" 
                                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                            }`}
                        >
                            All Albums
                        </button>
                        
                        {allAlbums.map(album => (
                            <button
                                key={album.id}
                                onClick={() => setSelectedAlbumSlug(album.slug)}
                                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                                    selectedAlbumSlug === album.slug 
                                        ? "bg-gray-900 text-white shadow" 
                                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                }`}
                            >
                                {album.title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className="min-h-[400px]">
                    {/* Error State */}
                    {albumsError && (
                        <div className="text-center text-red-500 py-10">
                            Failed to load gallery. Please try again later.
                        </div>
                    )}

                    {/* View: All Albums */}
                    {selectedAlbumSlug === null && (
                        <>
                            {allAlbums.length === 0 && !isLoadingAlbums ? (
                                <EmptyState message="No albums have been published yet." />
                            ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {allAlbums.map(album => (
                                        <AlbumCard 
                                            key={album.id} 
                                            album={album} 
                                            onClick={(a) => setSelectedAlbumSlug(a.slug)} 
                                        />
                                    ))}
                                </div>
                            )}

                            {/* Load More Albums */}
                            {hasMoreAlbums && (
                                <div className="flex justify-center mt-12">
                                    <button
                                        onClick={() => setPage(p => p + 1)}
                                        disabled={isLoadingAlbums}
                                        className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-900 rounded-full font-medium shadow-sm hover:bg-gray-50 hover:shadow transition-all disabled:opacity-50"
                                    >
                                        {isLoadingAlbums && <Loader2 className="w-4 h-4 animate-spin" />}
                                        {isLoadingAlbums ? "Loading..." : "Load More Albums"}
                                    </button>
                                </div>
                            )}

                            {isLoadingAlbums && allAlbums.length === 0 && (
                                <div className="flex justify-center py-20">
                                    <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
                                </div>
                            )}
                        </>
                    )}

                    {/* View: Single Album Images */}
                    {selectedAlbumSlug !== null && (
                        <>
                            {isLoadingAlbumDetails ? (
                                <div className="flex justify-center py-20">
                                    <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
                                </div>
                            ) : activeAlbumData ? (
                                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <ImageGrid images={activeAlbumData.images || []} />
                                </div>
                            ) : (
                                <EmptyState message="Could not load images for this album." />
                            )}
                        </>
                    )}
                </div>

            </div>
        </main>
    );
}
