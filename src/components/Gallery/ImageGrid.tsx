import { useState } from "react";
import type { AlbumImage } from "@/lib/api";
import { EmptyState } from "./EmptyState";

interface ImageGridProps {
    images: AlbumImage[];
}

export function ImageGrid({ images }: ImageGridProps) {
    const [visibleCount, setVisibleCount] = useState(12);

    if (!images || images.length === 0) {
        return <EmptyState message="This album doesn't have any images yet." />;
    }

    const visibleImages = images.slice(0, visibleCount);
    const hasMore = visibleCount < images.length;

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 12);
    };

    return (
        <div className="space-y-10">
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {visibleImages.map((image) => (
                    <div 
                        key={image.id} 
                        className="relative group overflow-hidden rounded-xl bg-gray-100 break-inside-avoid shadow-sm hover:shadow-md transition-shadow"
                    >
                        <img 
                            src={image.url} 
                            alt={image.alt || image.caption || "Gallery Image"} 
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                        />
                        {(image.caption || image.alt) && (
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-sm line-clamp-2">
                                    {image.caption || image.alt}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {hasMore && (
                <div className="flex justify-center pt-6">
                    <button 
                        onClick={handleLoadMore}
                        className="px-6 py-2.5 bg-white border border-gray-200 text-gray-900 rounded-full font-medium shadow-sm hover:bg-gray-50 hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                        Load More Images
                    </button>
                </div>
            )}
        </div>
    );
}
