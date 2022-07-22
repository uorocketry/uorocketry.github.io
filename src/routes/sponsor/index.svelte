<script>
  import teamPic from "$lib/assets/img/IMG_5414.webp";

  // FIXME: Can we please use transparent webp/pngs here?
  import sponsors20 from "$lib/assets/img/2019_2020_V4.0_Sponsors.png";
  import sponsors19 from "$lib/assets/img/2017-2018-sponsors.png";
  import sponsors18 from "$lib/assets/img/logos black.jpg";

  import sponsorDoc from "$lib/assets/SPONSORSHIP PACKAGE 2021.pdf";
</script>

<svelte:head>
  <title>uORocketry - Sponsor</title>
</svelte:head>

<section class="prose-section">
  <h1 class="title-heading">Sponsor</h1>
  <h3>How to sponsor</h3>
  <div class="grid grid-cols-1 md:grid-cols-2  gap-8">
    <div>
      <p>
        We are always looking to see what new interesting technologies we can
        use for our mission! Partnering with the uOttawa Rocketry team allows
        for companies to test how their products apply in the realm of rocketry
        on a small scale.
      </p>
      <p>
        Without the valuable donation of materials, components and expertise
        from industry sponsors, our team would not be on the leading edge of
        performance.
      </p>
      <p>
        Your donation helps create a collaborative environment where students
        are able to apply their studies out of the lecture hall, meet, and
        compete against students from around the globe!
      </p>

      <a class="h-52 btn btn-primary" href={sponsorDoc}>
        Click here to download our Sponsorship Package!</a
      >
    </div>
    <aside>
      <div class="not-prose grid w-full justify-center">
        <div class="card card-normal bg-base-100 ">
          <img src={teamPic} alt="Team" />
          <div class="card-body ">
            <h2 class="card-title">We need your support!</h2>
            <p>
              To achieve our goals, we need your help. Your contribution will
              directly support our goals of being out of this world.
            </p>
            <div class="card-actions justify-center ">
              <a
                href="https://www.gofundme.com/f/uottawa-rocketry"
                class="btn btn-wide btn-primary">Go Fund Me</a
              >
            </div>
          </div>
        </div>
        <br />
        <div class="card  bg-base-100">
          <div class="card-body">
            <p>
              To donate and receive a tax receipt, you can donate directly
              through the university.
            </p>
            <div class="card-actions justify-center">
              <a
                href="https://alumni.uottawa.ca/donation-form?fid=J7igq1Gxqgs%3d&fdesc=vj8yiR3kw2%2bPwQCmy1Z8CRI6lsq79sGgB8Cxh9dPPcHz98MFCiqi33fCh8gjHTopXlb7FNPyERD3vLVgZUYX4oKLwuSahRs9UCaC0T8l5SLviFpHAFSaiQ%3d%3d"
                class="btn btn-wide btn-primary">Donate</a
              >
            </div>
          </div>
        </div>
        <br />
        <div class="card  bg-base-100">
          <div class="card-body">
            <p>
              If you are in any way interested in our team, please feel free to
              reach us out!
            </p>
            <div class="card-actions justify-center">
              <a
                href="https://alumni.uottawa.ca/donation-form?fid=J7igq1Gxqgs%3d&fdesc=vj8yiR3kw2%2bPwQCmy1Z8CRI6lsq79sGgB8Cxh9dPPcHz98MFCiqi33fCh8gjHTopXlb7FNPyERD3vLVgZUYX4oKLwuSahRs9UCaC0T8l5SLviFpHAFSaiQ%3d%3d"
                class="btn btn-wide btn-primary">Send us an email</a
              >
            </div>
          </div>
        </div>
      </div>
    </aside>
  </div>
  <div>
    <h3>Previous Sponsors</h3>
    <h4 class="centered-heading">2019-2020 Season Sponsors</h4>
    <img src={sponsors20} alt="2019-2020 Sponsors" class="sponsor-img" />
    <h4 class="centered-heading">2018-2019 Sponsors</h4>
    <img src={sponsors18} alt="2017-2018 Sponsors" class="sponsor-img" />
    <h4 class="centered-heading">2017-2018 Sponsors</h4>
    <img src={sponsors19} alt="2018-2019 Sponsors" class="sponsor-img" />
  </div>
</section>

<style>
  .sponsor-img {
    /* Overlay red */
  }
</style>
