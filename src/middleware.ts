import { APIContext, MiddlewareNext } from 'astro';
import { defaultLang, languages } from './i18n/langUtils';

const DEV_MODE = process.env.NODE_ENV !== 'production';
const pathLanguageCache = new Map<string, string>();

// Fast path handlers for static assets - no processing needed
const isStaticAsset = (pathname: string): boolean => {
  return pathname.match(/\.(css|js|jpg|jpeg|png|webp|gif|svg|ico|woff|woff2|avif)$/) !== null ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/_astro/') ||
    pathname.startsWith('/optimized-images/');
};

// Fast path handlers for admin routes - no language processing
const isAdminRoute = (pathname: string): boolean => {
  return pathname.startsWith('/admin/');
};

export const onRequest = async (context: APIContext, next: MiddlewareNext) => {
  const { request, locals, redirect } = context;
  const url = new URL(request.url);
  const pathname = url.pathname;
  
  // Fast track for static assets - immediate pass through
  if (isStaticAsset(pathname)) {
    return next();
  }
  
  // Skip language handling for admin routes
  if (isAdminRoute(pathname)) {
    return next();
  }
  
  // Extract language from URL if present
  const pathSegments = pathname.split('/').filter(Boolean);
  const pathLang = pathSegments[0];
  const isValidLangInPath = languages.includes(pathLang as any);
  
  // If language is already in path, set it and continue immediately
  if (isValidLangInPath) {
    locals.lang = pathLang as typeof defaultLang;
    return next();
  }
  
  // Development optimization: Use cached redirects for paths we've seen before
  if (pathLanguageCache.has(pathname)) {
    return redirect(pathLanguageCache.get(pathname) || `/${defaultLang}/`, 307);
  }
  
  // Handle root path redirect (this is very common, optimize it)
  if (pathname === '/') {
    if (DEV_MODE) {
      pathLanguageCache.set(pathname, `/${defaultLang}/`);
    }
    return redirect(`/${defaultLang}/`, 307);
  }
  
  // For all other paths without language prefix, add default language
  const redirectPath = `/${defaultLang}${pathname}`;
  if (DEV_MODE) {
    pathLanguageCache.set(pathname, redirectPath);
  }
  return redirect(redirectPath, 307);
}; 