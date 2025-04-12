import { p as defineMiddleware, q as sequence } from "./chunks/vendor_BAzprikM.mjs";
import { l as languages, e as defaultLang } from "./chunks/ui_DFpIJiEG.mjs";
import "es-module-lexer";
import "kleur/colors";
import "clsx";
import "cookie";
const onRequest$1 = defineMiddleware(async ({ request, locals, redirect }, next) => {
  const url = new URL(request.url);
  const pathname = url.pathname;
  if (pathname.match(/\.(css|js|jpg|jpeg|png|webp|gif|svg|ico|woff|woff2)$/) || pathname.startsWith("/favicon") || pathname.startsWith("/_astro/")) {
    return next();
  }
  if (pathname.startsWith("/admin/")) {
    return next();
  }
  const pathSegments = pathname.split("/").filter(Boolean);
  const pathLang = pathSegments[0];
  const isValidLangInPath = languages.includes(pathLang);
  if (!isValidLangInPath && pathname !== "/") {
    let detectedLang = defaultLang;
    const acceptLang = request.headers.get("accept-language");
    if (acceptLang) {
      const browserLangs = acceptLang.split(",").map((lang) => lang.split(";")[0].trim().substring(0, 2).toLowerCase());
      for (const browserLang of browserLangs) {
        if (languages.includes(browserLang)) {
          detectedLang = browserLang;
          break;
        }
      }
    }
    const newPath = `/${detectedLang}${pathname === "/" ? "" : pathname}`;
    return redirect(newPath, 307);
  }
  if (pathname === "/") {
    return redirect(`/${defaultLang}/`, 307);
  }
  if (isValidLangInPath) {
    locals.lang = pathLang;
  } else {
    locals.lang = defaultLang;
  }
  return next();
});
const onRequest = sequence(
  onRequest$1
);
export {
  onRequest
};
