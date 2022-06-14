const shareImage =
  "https://chakraui-nextjs-starter.vercel.app/brand/meta_image.png";
const title = "Chakra UI, TypeScript, Next-seo & Next.js starter template";
const defaultSeo = {
  title,
  description: "Chakra UI, TypeScript, Next-seo & Next.js starter template",
  canonical: "https://chakraui-nextjs-starter.vercel.app",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chakraui-nextjs-starter.vercel.app",
    site_name: "ByMoe",
    images: [{ url: shareImage }],
  },
  twitter: {
    handle: "@immoej",
    site: "@immoej",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "viewport",
      content:
        "width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover",
    },
    {
      name: "theme-color",
      content: "#000000",
    },
    {
      name: "author",
      content: "immoej",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/brand/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/brand/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "manifest",
      href: "/manifest.webmanifest",
    },
  ],
};
export default defaultSeo;
