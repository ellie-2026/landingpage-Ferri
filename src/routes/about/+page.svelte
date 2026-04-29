<script>
const images = [
  { src: "/images/about/01.jpeg", place: "Roma" },
  { src: "/images/about/02.jpeg", place: "Iseo" },
  { src: "/images/about/03.jpeg", place: "Marsa Alam" },
  { src: "/images/about/04.jpeg", place: "Gardone Riviera" },
  { src: "/images/about/05.jpeg", place: "Gandino" },
  { src: "/images/about/06.jpeg", place: "Aosta" },
  { src: "/images/about/07.jpeg", place: "Jesolo" },
  { src: "/images/about/08.jpeg", place: "Londra" },
  { src: "/images/about/09.jpeg", place: "Trento" },
  { src: "/images/about/10.jpeg", place: "Curon" },
  { src: "/images/about/11.jpeg", place: "Bergamo" },
  { src: "/images/about/12.jpeg", place: "Morcote" },
  { src: "/images/about/13.jpeg", place: "Edinburgo" },
  { src: "/images/about/14.jpeg", place: "Agrigento" },
  { src: "/images/about/15.jpeg", place: "Rodi" },
  { src: "/images/about/16.jpeg", place: "Creta" },
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
            "Unscripted" means exactly that to me so no staging, no forced poses, just real moments as they are. Each photo becomes a small way to express how I feel in that moment.
          </p>
          <span class="about__signature">Ellie</span>
          <div class="about__line"></div>
        </div>
      </div>
      <div class="about__right"></div>
    </div>

    <div class="about__bottom">
      <blockquote class="about__quote">
        <p>"Photographier, <br>c'est mettre sur la même ligne de mire<br> la tête, l'œil et le cœur."</p>
        <cite>Henri Cartier-Bresson</cite>
      </blockquote>

      <div class="about__gallery">
      {#each images as image}
       <div class="about__thumb">
    <img src={image.src} alt={image.place} />
    <span class="about__place">{image.place}</span>
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
    
  }

  .about__title {
    font-size: var(--size-7-2);
    font-weight: 700;
    line-height: 1.3;
    margin: 0;
    text-transform: uppercase;
  }

  .about__title span {
    color: var(--color-ink-secondary);
  }

  .about__bio-wrap {
    display: flex;
    flex-direction: column;
    gap: var(--size-2);
    border-left: 3px solid var(--hex-brand-500);
    padding-left: var(--size-4-2);
  }

  .about__bio {
    font-size: var(--size-5);
    line-height: var(--size-6);
    font-family: var(--font-secondary);
    margin: 0;
  }

  .about__signature {
    font-size: var(--size-5);
    font-family: var(--font-secondary);
    font-weight: 600;
    text-align: right;
    color: var(--color-link);
  }

  .about__line {
    width: 40px;
    height: 1px;
    background: red;
    align-self: flex-end;
  }

  .about__bottom {
    display: flex;
    flex-direction: column;
    gap: var(--size-7);
    align-items: center;
    padding-top: var(--size-10);
    padding-bottom: var(--size-10);
}

  .about__quote {
    border: none;
    padding: 0;
    font-size: var(--size-7-2);
    font-family: var(--font-secondary);
    line-height: 1.3;
    display: flex;
    flex-direction: column;
    gap: var(--size-2);
    text-align: center;
    align-items: center;
    margin: 0;
    font-weight: 700;
    text-transform: uppercase;
  }

  .about__quote cite {
    font-size: var(--size-4-2);
    text-transform: none;
    color: var(--color-ink-secondary);
  }

  .about__gallery {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--size-2);
    width: 100%;
    padding-top: var(--size-10);
  }

  .about__thumb {
    aspect-ratio: 1/1;
    overflow: hidden;
    position: relative;
  }

  .about__thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: filter 0.3s ease;
  }

  .about__place {
  position: absolute;
  bottom: var(--size-3);
  left: 0;
  right: 0;
  text-align: center;
  font-size: var(--size-4-2);
  font-family: var(--font-secondary);
  color: var(--hex-neutral-50);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.about__thumb:hover .about__place {
  opacity: 1;
}

.about__thumb::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.about__thumb:hover::after {
  opacity: 1;
}

  @media (max-width: 767px) {
    .about {
      padding-inline: var(--size-7);
    }

    .about__gallery {
      grid-template-columns: repeat(2, 1fr);
    }
    
  .about__intro {
    grid-template-columns: 1fr;
  }

  .about__right {
    display: none;
  }
}

  @media (max-width: 480px) {
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

    .about__title {
    font-size: var(--size-5-2);
    font-weight: 700;
    margin: 0;
    text-transform: uppercase;
  }

    .about__bio {
      font-size: var(--size-4);
      line-height: var(--size-5);
    }

    .about__signature {
      font-size: var(--size-4);
    }

    .about__quote {
      font-size: var(--size-5-2);
    }

    .about__quote cite {
    font-size: var(--size-4);
    text-transform: none;
    color: var(--color-ink-secondary);
  }

    .about__gallery {
      grid-template-columns: repeat(2, 1fr);
    }

    .about__bottom {
    display: flex;
    flex-direction: column;
    gap: var(--size-7);
    align-items: center;
    padding-top: var(--size-7);
    padding-bottom: var(--size-7);
}

  .about__place {
  font-size: var(--size-4);
}
  }
</style>