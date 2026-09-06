import { Image as ImageIcon } from "lucide-react";
import type { Album } from "@/lib/api";

interface AlbumCardProps {
    album: Album;
    onClick: (album: Album) => void;
}

export function AlbumCard({ album, onClick }: AlbumCardProps) {
    // If the API returns a featured_image string, use it. Otherwise placeholder.
    // Also, handle the case where featured_image is null by falling back to the first image if we had it, but for Album list we might not.
    const imageUrl = album.featured_image || "https://placehold.co/600x400/eeeeee/999999?text=No+Cover";

    return (
        <div 
            onClick={() => onClick(album)}
            className="group cursor-pointer rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col"
        >
            <div className="relative aspect-video overflow-hidden bg-gray-100">
                <img 
                    src={imageUrl} 
                    alt={album.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1.5 text-xs font-medium text-gray-700 shadow-sm">
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>{album.image_count}</span>
                </div>
            </div>
            
            <div className="p-4">
                <h3 className="font-semibold text-gray-900 line-clamp-1 group-hover:text-primary transition-colors">
                    {album.title}
                </h3>
                {album.excerpt && (
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2" dangerouslySetInnerHTML={{ __html: album.excerpt }} />
                )}
            </div>
        </div>
    );
}
