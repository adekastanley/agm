export async function onRequest(context) {
  // 1. Attempt to load the actual file (JS, CSS, Images, etc.)
  const response = await context.next();
  
  // 2. If the file exists, return it cleanly (this fixes the blank screen)
  if (response.status !== 404) {
    return response;
  }
  
  // 3. If it's a 404 (like direct navigation to /news), serve index.html
  const url = new URL(context.request.url);
  url.pathname = '/index.html';
  return context.env.ASSETS.fetch(new Request(url, context.request));
}