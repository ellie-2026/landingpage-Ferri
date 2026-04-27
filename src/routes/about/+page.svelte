<script>
  const images = [
    "/images/about/01.jpeg",
    "/images/about/02.jpeg",
    "/images/about/03.jpeg",
    "/images/about/04.jpeg",
    "/images/about/05.jpeg",
    "/images/about/06.jpeg",
    "/images/about/07.jpeg",
    "/images/about/08.jpeg",
    "/images/about/09.jpeg",
    "/images/about/10.jpeg",
    "/images/about/11.jpeg",
    "/images/about/12.jpeg",
    "/images/about/13.jpeg",
    "/images/about/14.jpeg",
    "/images/about/15.jpeg",
    "/images/about/16.jpeg",
  ];
</script>

<main>
  <section class="about">

    <div class="about__intro">
      <div class="about__left">
        <h2 class="about__title">UNSCRIPTED | <span>AS IT IS</span></h2>
        <div class="about__bio-wrap">
          <p class="about__bio">
            I'm not particularly skilled at photography, but I enjoy taking pictures whenever something catches my eye.
            I like capturing even the simplest moments, the ones that often go unnoticed. I just use my phone, nothing special, but it's enough for me to keep a memory and give it meaning.
            <br /><br />
            "Unscripted" means exactly that to me: no staging, no forced poses, just real moments as they are. Each photo becomes a small way to express how I feel in that moment.
          </p>
          <span class="about__signature">Ellie</span>
          <div class="about__line"></div>
        </div>
      </div>
      <div class="about__right"><!-- vuoto --></div>
    </div>

    <div class="about__bottom">
      <blockquote class="about__quote">
        <p>"Photographier, c'est mettre sur la même ligne de mire la tête, l'œil et le cœur."</p>
        <cite>Henri Cartier-Bresson</cite>
      </blockquote>

      <div class="about__gallery">
        {#each images as src}
          <div class="about__thumb">
            <img {src} alt="" />
          </div>
        {/each}
      </div>
    </div>

  </section>
</main>

<style>
  .about {
    padding-block: var(--size-10);
    padding-inline: var(--size-10);
    display: flex;
    flex-direction: column;
    gap: var(--size-10);
  }

  .about__intro {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--size-8);
    align-items: start;
  }

  .about__left {
    display: flex;
    flex-direction: column;
    gap: var(--size-6);
  }

  .about__right {
    /* spazio vuoto */
  }

  .about__title {
    font-size: var(--size-6);
    font-weight: 700;
    line-height: 1.3;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }

  .about__title span {
    color: var(--color-link);
  }

  .about__bio-wrap {
    display: flex;
    flex-direction: column;
    gap: var(--size-2);
    border-left: 3px solid var(--hex-brand-500);
    padding-left: var(--size-4);
  }

  .about__bio {
    font-size: var(--size-4-2);
    line-height: var(--size-5-2);
    font-family: var(--font-secondary);
    margin: 0;
  }

  .about__signature {
    font-style: italic;
    font-size: var(--size-5);
    font-family: var(--font-secondary);
    text-align: right;
    color: var(--color-link);
  }

  .about__line {
    width: 60px;
    height: 2px;
    background: red;
    align-self: flex-end;
  }

  .about__bottom {
    display: flex;
    flex-direction: column;
    gap: var(--size-7);
    align-items: center;
  }

  .about__quote {
    border: none;
    padding: 0;
    font-size: var(--size-5);
    font-family: var(--font-secondary);
    line-height: 1.3;
    display: flex;
    flex-direction: column;
    gap: var(--size-2);
    text-align: center;
    align-items: center;
    margin: 0;
    max-width: 55ch;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }

  .about__quote cite {
    font-size: var(--size-4);
    font-weight: 500;
    text-transform: none;
    letter-spacing: 0;
    color: var(--color-ink-secondary);
  }

  .about__gallery {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--size-2);
    width: 100%;
  }

  .about__thumb {
    aspect-ratio: 1/1;
    overflow: hidden;
  }

  .about__thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    .about {
      padding-inline: var(--size-7);
    }

    .about__gallery {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 767px) {
    .about {
      padding-inline: var(--size-5);
      gap: var(--size-8);
    }

    .about__intro {
      grid-template-columns: 1fr;
    }

    .about__right {
      display: none;
    }

    .about__bio {
      font-size: var(--size-4);
    }

    .about__quote {
      font-size: var(--size-4-2);
    }

    .about__gallery {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>