import Router from "next/router";
import NProgress from "nprogress";
import { GlobalLayout } from "components/shared/Layouts";
// SEO
import { Head } from "components/shared";
// Chakra-UI
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "utility/chakra-theme";

// Global CSS
import "nprogress/nprogress.css";
import "styles/global.scss";

// NProgress binding routes
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const App = ({ Component, pageProps }) => {
  return (
    <>
      {/* Global Meta Tags + SEO */}
      <Head />
      {/* Chakra theme provider */}
      <ChakraProvider theme={customTheme}>
        {/* Global Layout */}
        <GlobalLayout>
          <Component {...pageProps} />
        </GlobalLayout>
      </ChakraProvider>
    </>
  );
};
export default App;
