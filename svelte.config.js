import sveltePreprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";

export default {
  preprocess: sveltePreprocess({
    postcss: true,
  }),
  kit: {
    adapter: adapter({
      fallback: "404.html",
    }),
  },
};
