import type { AppProps } from "next/app";
import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';

import "../styles/globals.css";

import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";

import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";
import "@fontsource/jost/700.css";
import "@fontsource/sen/400.css";
import "@fontsource/sen/700.css";

function MyApp({ Component, pageProps }: AppProps) {
  // Umami Analytics
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://analytics.eu.umami.is/script.js";
    script.dataset.websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID; // Mengambil nilai dari variabel lingkungan
    document.head.appendChild(script);
  }, []);

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
        `}
      </Script>

      <Analytics />

      <NextSeo
        title="Fruatre Maou | 悪魔の王の夢"
        titleTemplate="Fruatre Maou - Mostly Sleepless"
        defaultTitle="Fruatre Maou | Mostly Sleepless"
        description="Hey! I'm Fruatre, I love exploring everything related to technology. Aside from that, I have a great interest in the world of photography, especially virtual photography in video games!"
        openGraph={{
          url: "http://wa.me/6285817597752",
          title: "Fruatre Maou | 悪魔の王の夢",
          description:
            "Hey! I'm Fruatre , I love exploring everything related to technology. Aside from that, I have a great interest in the world of photography, especially virtual photography in video games!",
          images: [
            {
              url: "https://hi-lrmn.is-a.dev/og-image.png",
              alt: "Fruatre Maou | いつか、私がヒトじゃなくなっても",
            },
          ],
        }}
        twitter={{
          handle: "@romanromannya",
          site: "@romanromannya",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Gaming, Coding, Virtual Photography, Blogger, Whatsapp Bot Developer, Student,Anime, Sleep Lover",
          },
        ]}
      />

      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
