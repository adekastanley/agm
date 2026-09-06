import axios from 'axios';

// Get the base URL directly from env
const baseURL = import.meta.env.VITE_BASE_URL || '';

export const apiClient = axios.create({
    baseURL: baseURL,
    headers: {
        // Depending on how the plugin expects the key, it could be a Bearer token or a custom header
        'Authorization': `Bearer ${import.meta.env.VITE_PUB_KEY}`,
        // 'X-Idibia-Key': import.meta.env.VITE_PUB_KEY,
    }
});

export interface ImageObject {
    id?: number;
    url?: string;
    source_url?: string;
    src?: string;
    alt?: string;
    title?: string;
    sizes?: Record<string, {
        file?: string;
        width?: number;
        height?: number;
        source_url?: string;
    }>;
}

export type CMSImage = string | ImageObject | null | undefined;

export function getImageUrl(image: CMSImage): string | null {
    if (!image) return null;
    if (typeof image === 'string') {
        const trimmed = image.trim();
        return trimmed.length > 0 ? trimmed : null;
    }
    if (typeof image === 'object') {
        return (
            image.url ||
            image.source_url ||
            image.src ||
            image.sizes?.large?.source_url ||
            image.sizes?.full?.source_url ||
            image.sizes?.medium?.source_url ||
            null
        );
    }
    return null;
}

export interface HomePageData {
    hero_tagline?: string;
    hero_headline?: string;
    hero_description?: string;
    hero_image?: CMSImage;
    about_headline?: string;
    about_content?: string;
    about_image?: CMSImage;
    health_agenda_content?: string;
    // other fields omitted for brevity
}

export interface PostCategory {
    id: number;
    name: string;
    slug: string;
}

export interface PostData {
    id: number;
    slug: string;
    title: string;
    content: string;
    excerpt: string;
    date: string;
    author: string;
    featured_image: string | null;
    categories: PostCategory[];
}

export const fetchHomePageContent = async (): Promise<HomePageData | null> => {
    try {
        // Replace `/content/home_page` with the actual endpoint path expected by the CMS
        const response = await apiClient.get('/content/home_page');
        return response.data?.data || response.data;
    } catch (error) {
        console.error("Error fetching home page content from Idibia CMS:", error);
        return null;
    }
};

export const fetchProjects = async (limit: number = 10): Promise<PostData[]> => {
    try {
        // Fetch posts filtered by the 'projects' category
        const response = await apiClient.get('/posts', {
            params: {
                category: 'projects',
                per_page: limit,
            }
        });
        const posts: any[] = response.data?.data?.posts || [];
        return posts.map(p => ({
            ...p,
            featured_image: getImageUrl(p.featured_image)
        }));
    } catch (error) {
        console.error("Error fetching projects from Idibia CMS:", error);
        return [];
    }
};

export const fetchProjectBySlug = async (slug: string): Promise<PostData | null> => {
    try {
        // Since we don't have a known single-post endpoint in the custom API,
        // we fetch projects and find the matching slug.
        const response = await apiClient.get('/posts', {
            params: {
                category: 'projects',
                per_page: 100, // Fetch enough to ensure we find it
            }
        });
        const posts: any[] = response.data?.data?.posts || [];
        const post = posts.find(p => p.slug === slug);
        if (!post) return null;
        return {
            ...post,
            featured_image: getImageUrl(post.featured_image)
        };
    } catch (error) {
        console.error(`Error fetching project with slug ${slug}:`, error);
        return null;
    }
};

export const fetchNews = async (limit: number = 10): Promise<PostData[]> => {
    try {
        const response = await apiClient.get('/posts', {
            params: {
                category: 'news',
                per_page: limit,
            }
        });
        const posts: any[] = response.data?.data?.posts || [];
        return posts.map(p => ({
            ...p,
            featured_image: getImageUrl(p.featured_image)
        }));
    } catch (error) {
        console.error("Error fetching news from Idibia CMS:", error);
        return [];
    }
};

export const fetchNewsBySlug = async (slug: string): Promise<PostData | null> => {
    try {
        const response = await apiClient.get('/posts', {
            params: {
                category: 'news',
                per_page: 100, 
            }
        });
        const posts: any[] = response.data?.data?.posts || [];
        const post = posts.find(p => p.slug === slug);
        if (!post) return null;
        return {
            ...post,
            featured_image: getImageUrl(post.featured_image)
        };
    } catch (error) {
        console.error(`Error fetching news with slug ${slug}:`, error);
        return null;
    }
};

export interface AlbumImage {
    id: number;
    url: string;
    thumbnail: string;
    caption: string;
    alt: string;
}

export interface Album {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    featured_image: string | null;
    image_count: number;
    content?: string;
    images?: AlbumImage[];
}

export interface AlbumsResponse {
    albums: Album[];
    total: number;
    totalPages: number;
    page: number;
    perPage: number;
}

export const fetchAlbums = async (page: number = 1, perPage: number = 10): Promise<AlbumsResponse | null> => {
    try {
        const response = await apiClient.get('/albums', {
            params: {
                page,
                per_page: perPage,
            }
        });
        return response.data?.data || null;
    } catch (error) {
        console.error("Error fetching albums from Idibia CMS:", error);
        return null;
    }
};

export const fetchAlbumBySlug = async (slug: string): Promise<Album | null> => {
    try {
        const response = await apiClient.get(`/albums/${slug}`);
        return response.data?.data?.album || null;
    } catch (error) {
        console.error(`Error fetching album with slug ${slug}:`, error);
        return null;
    }
};

export interface AnnotatedImage extends AlbumImage {
    albumSlug: string;
    albumTitle: string;
}

export const fetchAllImagesFromAlbums = async (albums: Album[]): Promise<AnnotatedImage[]> => {
    try {
        const promises = albums.map(a => fetchAlbumBySlug(a.slug));
        const results = await Promise.all(promises);
        
        const allImages: AnnotatedImage[] = [];
        results.forEach((albumDetail, index) => {
            const album = albums[index];
            if (albumDetail && albumDetail.images) {
                albumDetail.images.forEach(img => {
                    allImages.push({
                        ...img,
                        albumSlug: album.slug,
                        albumTitle: album.title,
                    });
                });
            }
        });
        
        return allImages;
    } catch (error) {
        console.error("Error fetching all images from albums:", error);
        return [];
    }
};
