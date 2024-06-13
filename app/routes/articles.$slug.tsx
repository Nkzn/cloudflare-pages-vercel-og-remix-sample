import { LoaderFunctionArgs, json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

export function loader({ params }: LoaderFunctionArgs) {
  const { slug } = params;
  return json({ slug });
}

export default function Article() {
  const { slug } = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>Article</h1>
      <p>I am {slug}!</p>
    </div>
  );
}