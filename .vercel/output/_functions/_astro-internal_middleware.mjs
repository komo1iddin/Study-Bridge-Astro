import { e as defaultLang, l as languages } from "./chunks/ui_CkL6hZGM.mjs";
import "es-module-lexer";
import { p as sequence } from "./chunks/vendor_BkHgkSTi.mjs";
import "kleur/colors";
import "clsx";
import "cookie";
const DEV_MODE = process.env.NODE_ENV !== "production";
const pathLanguageCache = /* @__PURE__ */ new Map();
const isStaticAsset = (pathname) => {
  return pathname.match(/\.(css|js|jpg|jpeg|png|webp|gif|svg|ico|woff|woff2|avif)$/) !== null || pathname.startsWith("/favicon") || pathname.startsWith("/_astro/") || pathname.startsWith("/optimized-images/");
};
const isAdminRoute = (pathname) => {
  return pathname.startsWith("/admin/");
};
const onRequest$1 = async (context, next) => {
  const { request, locals, redirect } = context;
  const url = new URL(request.url);
  const pathname = url.pathname;
  if (isStaticAsset(pathname)) {
    return next();
  }
  if (isAdminRoute(pathname)) {
    return next();
  }
  const pathSegments = pathname.split("/").filter(Boolean);
  const pathLang = pathSegments[0];
  const isValidLangInPath = languages.includes(pathLang);
  if (isValidLangInPath) {
    locals.lang = pathLang;
    return next();
  }
  if (pathLanguageCache.has(pathname)) {
    return redirect(pathLanguageCache.get(pathname) || `/${defaultLang}/`, 307);
  }
  if (pathname === "/") {
    if (DEV_MODE) {
      pathLanguageCache.set(pathname, `/${defaultLang}/`);
    }
    return redirect(`/${defaultLang}/`, 307);
  }
  const redirectPath = `/${defaultLang}${pathname}`;
  if (DEV_MODE) {
    pathLanguageCache.set(pathname, redirectPath);
  }
  return redirect(redirectPath, 307);
};
const onRequest = sequence(
  onRequest$1
);
export {
  onRequest
};
