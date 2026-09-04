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
    // other fields omitted for brevity
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
