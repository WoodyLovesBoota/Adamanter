import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { ROUTES } from "./constants/route.constant";
import { STORAGE_KEY } from "./constants/storage.constant";
import { redirect } from "next/dist/server/api-utils";

const locales = ["ko", "en"];

export default async function middleware(request: NextRequest) {
  const defaultLocale = request.headers.get("x-default-locale") || "ko";

  const requestHeaders = new Headers(request.headers);

  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale: "ko",
  });
  requestHeaders.set("x-pathname", request.nextUrl.pathname);
  requestHeaders.set("x-locale-pathname", request.nextUrl.pathname);
  requestHeaders.set("x-host", request.nextUrl.host);

  const response = handleI18nRouting(
    Object.create(request, {
      headers: {
        value: requestHeaders,
      },
    })
  );

  response.headers.set("x-default-locale", defaultLocale);
  response.headers.set("x-pathname", request.nextUrl.pathname);
  response.headers.set("x-locale-pathname", request.nextUrl.pathname);
  response.headers.set("x-host", request.nextUrl.host);

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|.next|.*\\..*).*)"],
};
