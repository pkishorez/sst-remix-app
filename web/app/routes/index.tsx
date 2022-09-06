import {json, LoaderFunction} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";

export const loader: LoaderFunction = ()=>{
  return json({
    url: process.env.ENDPOINT
  })
}

export default function Index() {
  const {url} = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <h2>Url is {url}</h2>
    </div>
  );
}
