export default {
  async fetch(request, env) {
    // 1. Attempt to serve the request as a static asset
    const response = await env.ASSETS.fetch(request);

    // 2. If the asset exists (e.g. status 200) or is a valid response, return it
    if (response.status !== 404) {
      return response;
    }

    // 3. If the asset is not found (404), return index.html for SPA routing
    // This handles deep links like /contact by returning the SPA shell
    return env.ASSETS.fetch(new Request(new URL("/", request.url)));
  },
};
