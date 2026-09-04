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

export interface HomePageData {
    hero_tagline?: string;
    hero_headline?: string;
    hero_description?: string;
    hero_image?: string;
    about_headline?: string;
    about_content?: string;
    about_image?: string;
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
        return response.data?.data?.posts || [];
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
        const posts: PostData[] = response.data?.data?.posts || [];
        return posts.find(p => p.slug === slug) || null;
    } catch (error) {
        console.error(`Error fetching project with slug ${slug}:`, error);
        return null;
    }
};

