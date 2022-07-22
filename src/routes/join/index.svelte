<script type="ts">
  import subteams from "$lib/subteams/subteams";

  // type of icon tooltip
  type Subteam = {
    icon: string;
    name: string;
    component: any;
  };

  let selectedSubteam: Subteam = subteams[5];
</script>

<svelte:head>
  <title>uORocketry - Join Us</title>
</svelte:head>

<section class="prose-section min-h-screen">
  <h1 class="title-heading ">Join Us</h1>
  <p>
    Do you want to be a member of the uORocketry team? If yes, you are at the
    right place! The uORocketry team is actively recruiting people to work on
    our exciting projects.
  </p>
  <p>
    Before completing the form to join us (link at the bottom of the page), we
    highly encourage you to read the description of each subteam to have a
    better idea of what we do and what you could work on 🙂
  </p>

  <a
    href="https://forms.office.com/r/c0xjMLxsrp"
    class="btn w-full my-4 h-32 btn-primary"
  >
    Apply Now
  </a>

  <div class="flex button-flex flex-wrap justify-between">
    {#each subteams as subteam}
      <!--  -->
      <div class="tooltip " data-tip={subteam.name}>
        <div
          class="btn btn-lg btn-circle"
          on:pointerover={() => {
            selectedSubteam = subteam;
          }}
        >
          <i class="fa {subteam.icon}  fa-inverse" />
        </div>
      </div>
    {/each}
  </div>
  <br />
  <svelte:component this={selectedSubteam.component} />
</section>
