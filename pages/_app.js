import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="cEHMvS7TWSxmTdrHaXujawu14-aIg5SmkC1rSlsbpUE"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
