import { createFileRoute } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { fetchAlbums, fetchAllImagesFromAlbums } from '@/lib/api';
import type { Album, AnnotatedImage } from '@/lib/api';
import { AlbumCard } from '@/components/Gallery/AlbumCard';
import { ImageGrid } from '@/components/Gallery/ImageGrid';
import { EmptyState } from '@/components/Gallery/EmptyState';
import { useState, useMemo } from 'react';
import { Loader2, Grid2X2, Image as ImageIcon } from 'lucide-react';

export const Route = createFileRoute('/gallery')({
    component: GalleryPage,
});

function GalleryPage() {
    const [viewMode, setViewMode] = useState<'images' | 'albums'>('images');
    const [selectedAlbumSlug, setSelectedAlbumSlug] = useState<string>('all');
    
    // Fetch a large number of albums to act as our "all" list. 
    // For a production app with hundreds of albums, this might need infinite scrolling or 
    // a dedicated backend endpoint for all images.
    const { data: albumsData, isLoading: isLoadingAlbums, error: albumsError } = useQuery({
        queryKey: ['albums', 'all'],
        queryFn: () => fetchAlbums(1, 100),
    });

    const albums = albumsData?.albums || [];

    // Fetch all images for all these albums
    const { data: allImages, isLoading: isLoadingImages } = useQuery({
        queryKey: ['allImages', albums.map(a => a.id).join(',')],
        queryFn: () => fetchAllImagesFromAlbums(albums),
        enabled: albums.length > 0,
    });

    // Filter images based on selected album
    const filteredImages = useMemo(() => {
        if (!allImages) return [];
        if (selectedAlbumSlug === 'all') return allImages;
        return allImages.filter(img => img.albumSlug === selectedAlbumSlug);
    }, [allImages, selectedAlbumSlug]);

    const handleAlbumClick = (album: Album) => {
        setSelectedAlbumSlug(album.slug);
        setViewMode('images');
    };

    return (
        <main className="min-h-screen bg-gray-50/50 pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
                        Gallery
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore our collection of albums and moments captured from various events and projects.
                    </p>
                </div>

                {/* Controls Section */}
                <div className="mb-10 flex justify-end">
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 bg-transparent sm:bg-white sm:p-2 sm:rounded-2xl sm:shadow-sm sm:border sm:border-gray-200 w-full sm:w-auto">
                        
                        {/* View Toggle */}
                        <div className="flex items-center bg-gray-100 rounded-xl p-1 w-full sm:w-auto bg-white sm:bg-gray-100 shadow-sm sm:shadow-none border border-gray-200 sm:border-none">
                            <button
                                onClick={() => setViewMode('images')}
                                className={`flex-1 sm:flex-none flex justify-center items-center gap-2 px-4 py-2.5 sm:py-2 rounded-lg text-sm font-medium transition-all ${
                                    viewMode === 'images'
                                        ? 'bg-white text-gray-900 shadow-sm sm:shadow-sm'
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                <ImageIcon className="w-4 h-4" />
                                Images
                            </button>
                            <button
                                onClick={() => setViewMode('albums')}
                                className={`flex-1 sm:flex-none flex justify-center items-center gap-2 px-4 py-2.5 sm:py-2 rounded-lg text-sm font-medium transition-all ${
                                    viewMode === 'albums'
                                        ? 'bg-white text-gray-900 shadow-sm sm:shadow-sm'
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                <Grid2X2 className="w-4 h-4" />
                                Albums
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="hidden sm:block w-px h-8 bg-gray-200"></div>

                        {/* Filter Dropdown */}
                        <div className="relative w-full sm:w-auto">
                            <select
                                value={selectedAlbumSlug}
                                onChange={(e) => {
                                    setSelectedAlbumSlug(e.target.value);
                                    if (viewMode === 'albums') setViewMode('images');
                                }}
                                className="appearance-none bg-white sm:bg-gray-50 border border-gray-200 text-gray-900 text-sm font-medium sm:font-normal rounded-xl shadow-sm sm:shadow-none focus:ring-primary focus:border-primary block w-full py-3 sm:py-2.5 pl-4 pr-10 hover:bg-gray-50 sm:hover:bg-gray-100 transition-colors cursor-pointer outline-none"
                            >
                                <option value="all">All Albums</option>
                                {albums.map(album => (
                                    <option key={album.id} value={album.slug}>
                                        {album.title}
                                    </option>
                                ))}
                            </select>
                            {/* Custom dropdown arrow */}
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 sm:px-3 text-gray-500">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Content Area */}
                <div className="min-h-[400px]">
                    {albumsError && (
                        <div className="text-center text-red-500 py-10">
                            Failed to load gallery. Please try again later.
                        </div>
                    )}

                    {(isLoadingAlbums || (isLoadingImages && viewMode === 'images')) ? (
                        <div className="flex justify-center py-20">
                            <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
                        </div>
                    ) : (
                        <>
                            {viewMode === 'albums' && (
                                albums.length === 0 ? (
                                    <EmptyState message="No albums have been published yet." />
                                ) : (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        {albums.map(album => (
                                            <AlbumCard 
                                                key={album.id} 
                                                album={album} 
                                                onClick={handleAlbumClick} 
                                            />
                                        ))}
                                    </div>
                                )
                            )}

                            {viewMode === 'images' && (
                                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <ImageGrid images={filteredImages} />
                                </div>
                            )}
                        </>
                    )}
                </div>

            </div>
        </main>
    );
}
