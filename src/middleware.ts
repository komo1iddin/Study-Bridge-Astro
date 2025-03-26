import { defineMiddleware } from 'astro:middleware';
import { defaultLang, languages } from './i18n/langUtils';

// Language detection priorities:
// 1. URL path parameter
// 2. Browser preference (Accept-Language header)
// 3. Default language

export const onRequest = defineMiddleware(async ({ request, locals, redirect }, next) => {
  const url = new URL(request.url);
  const pathname = url.pathname;
  
  // Skip for static assets
  if (
    pathname.match(/\.(css|js|jpg|jpeg|png|webp|gif|svg|ico|woff|woff2)$/) ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/_astro/')
  ) {
    return next();
  }
  
  // Skip language handling for admin routes
  if (pathname.startsWith('/admin/')) {
    return next();
  }
  
  // Extract language from URL if present
  const pathSegments = pathname.split('/').filter(Boolean);
  const pathLang = pathSegments[0];
  const isValidLangInPath = languages.includes(pathLang as any);
  
  // If no valid language in path, detect from browser and redirect
  if (!isValidLangInPath && pathname !== '/') {
    // Detect browser language
    let detectedLang = defaultLang;
    const acceptLang = request.headers.get('accept-language');
    
    if (acceptLang) {
      // Parse Accept-Language header and find the best match
      const browserLangs = acceptLang
        .split(',')
        .map(lang => lang.split(';')[0].trim().substring(0, 2).toLowerCase());
      
      // Find the first matching language
      for (const browserLang of browserLangs) {
        if (languages.includes(browserLang as any)) {
          detectedLang = browserLang as typeof defaultLang;
          break;
        }
      }
    }
    
    // Construct the new path with the detected language
    const newPath = `/${detectedLang}${pathname === '/' ? '' : pathname}`;
    return redirect(newPath, 307); // Temporary redirect
  }
  
  // Add language to locals for use in components
  if (isValidLangInPath) {
    locals.lang = pathLang as typeof defaultLang;
  } else {
    locals.lang = defaultLang;
  }
  
  return next();
}); 