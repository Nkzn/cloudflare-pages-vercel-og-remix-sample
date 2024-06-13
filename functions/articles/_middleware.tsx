import vercelOGPagesPlugin from "@cloudflare/pages-plugin-vercel-og";

export const onRequest = vercelOGPagesPlugin({
  imagePathSuffix: "/og-image.png",
  component: ({ pathname }) => {
    // pathnameから最後の要素を抜き出す
    const paths = pathname.split("/");
    const slug = paths[paths.length - 1];
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundImage: 'url("https://cloudflare-pages-vercel-og-remix-sample.pages.dev/img/ogp-background.png")'
        }}
      >
        <h1 style={{ fontSize: "40px" }}>
          This is {slug} article
        </h1>
      </div>
    );
	},
  options: {
    width: 1200,
    height: 630,
  },
	autoInject: {
		openGraph: true,
	},
});