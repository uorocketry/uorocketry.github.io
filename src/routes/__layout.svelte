<script context="module">
  export const load = async ({ url }) => ({ props: { url } });
</script>

<script lang="ts">
  import desertBg from "$lib/assets/img/desert-sunrise.webp";
  import desertVid from "$lib/assets/background.mp4";
  import logo from "$lib/assets/icon.svg";

  import "@fortawesome/fontawesome-free/css/all.css";
  import "../app.css";

  import Breadcrumb from "$lib/components/Breadcrumb.svelte";
  import { page } from "$app/stores";

  import PageTransition from "$lib/components/PageTransition.svelte";
  export let url = "";
</script>

<img src={desertBg} alt="Background" class="bg" />
<!-- <video src={desertVid} autoplay loop muted class="bg" /> -->

<svelte:head>
  <link rel="icon" href={logo} />
</svelte:head>

<Breadcrumb path={$page.url.pathname} />
<PageTransition {url}>
  <div
    class="wrapper lg:justify-center lg:p-16 bg-base-300/80 lg:bg-transparent "
  >
    <main class="max-w-none  lg:max-w-4xl lg:bg-base-300/80 rounded-xl">
      <slot />
    </main>
  </div>
</PageTransition>

<style>
  .wrapper {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
    z-index: 0;
  }
</style>
