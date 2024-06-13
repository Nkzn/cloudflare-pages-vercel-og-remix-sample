import vercelOGPagesPlugin from "@cloudflare/pages-plugin-vercel-og";

export const onRequest = vercelOGPagesPlugin({
	imagePathSuffix: "/og-image.png",
	component: ({ pathname }) => {
		return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>This is my article</h1>
        <p>{pathname}</p>
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