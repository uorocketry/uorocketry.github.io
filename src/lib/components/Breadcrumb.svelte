<script lang="ts">
  import { toSpaceCase } from "$lib/utils";

  export let path: string;

  let crumbs: { label: string; href: string }[] = [];
  $: {
    // Remove zero-length tokens.
    const tokens = path.split("/").filter((t) => t !== "");

    // Create { label, href } pairs for each token.
    let tokenPath = "";
    crumbs = tokens.map((t) => {
      tokenPath += "/" + t;
      return {
        label: t,
        href: tokenPath,
      };
    });

    // Add a way to get home too.
    crumbs.unshift({ label: "home", href: "/" });
  }
</script>

<div class="p-4 breadcrumbs bg-base-300/80">
  <ul>
    {#each crumbs as c, i}
      <li><a class="capitalize" href={c.href}> {toSpaceCase(c.label)}</a></li>
    {/each}
  </ul>
</div>
