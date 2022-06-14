import Router from "next/router";
// types
import type { AppProps } from "next/app";
import NProgress from "nprogress";
// SEO
import SEO from "next-seo.config";
import { DefaultSeo } from "next-seo";
// ui
import { AppLayout, ThemeLayout } from "components/layouts";

// css
import "styles/app.css";
import "nprogress/nprogress.css";
// fonts
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

// NProgress binding routes
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeLayout>
      <AppLayout>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </AppLayout>
    </ThemeLayout>
  );
}

export default MyApp;
