import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://fluffy-zabaione-bd8d47.netlify.app/blog/",
  integrations: [preact()]
});