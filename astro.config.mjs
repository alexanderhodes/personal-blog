import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import robotsTxt from 'astro-robots-txt';
import webmanifest from 'astro-webmanifest';

// https://astro.build/config
export default defineConfig({
  site: "https://spiffy-chaja-5c7f8f.netlify.app",
  experimental: {
    integrations: true,
  },
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    compress({
      css: true,
      html: false,
      js: true,
      img: false,
      svg: false,
    }),
    robotsTxt({
      sitemapBaseFileName: 'sitemap-index',
      policy: [
        {
          userAgent: 'Googlebot',
          allow: '/',
          crawlDelay: 2,
        },
      ],
    }),
    webmanifest({
      name: 'awesome blog',
      icon: './public/favicon.svg',
      lang: 'de-de',
      short_name: 'awesome',
      description: "This is the description about your awesome blog",
      theme_color: '#22C55E',
      background_color: '#22C55E',
      display: 'standalone',
    }),
  ],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});