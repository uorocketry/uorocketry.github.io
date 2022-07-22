<!-- PageTransition.svelte -->
<script>
  import { fade } from "svelte/transition";
  export let url = "";
  let lastUrl = "";
  let goingBack = false;
  const pageTransitionDuration = 500;

  function swipeColor(node, params) {
    const { duration, delay, easing } = params || {};
    const { color } = window.getComputedStyle(node);
    return {
      duration,
      delay,
      easing,
      css(t) {
        if (t > 0.5) {
          const u = t - 0.5;
          // percentage: 0 -> 100
          const percentage = u * 200;
          return `background: linear-gradient(to right, transparent 0, ${percentage}%, ${color} ${percentage}%); color: ${color}`;
        } else {
          const percentage = t * 200;
          return `background: linear-gradient(to right, ${color} 0, ${percentage}%, transparent ${percentage}%); color: transparent`;
        }
      },
    };
  }
  $: {
    if (url.pathname !== lastUrl) {
      // If url.pathname is smaller than lastUrl.pathname, we are going back.
      goingBack = url.pathname.length > lastUrl.length;
      lastUrl = url.pathname;
    }
  }
</script>

{#key url}
  {#if goingBack}
    <div
      in:swipeColor={{ duration: pageTransitionDuration * goingBack }}
      out:swipeColor={{ duration: pageTransitionDuration * !goingBack }}
      class="absolute top-0 left-0 w-full h-full z-10 pointer-events-none text-base-300"
    />
  {/if}
{/key}

<div class="transition-outer">
  {#key url}
    <div transition:fade={{ duration: 0, delay: pageTransitionDuration / 2 }}>
      <slot />
    </div>
  {/key}
</div>
