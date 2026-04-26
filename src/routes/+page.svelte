<script>
  import Filter from "$lib/components/Filter.svelte";
  import Project from "$lib/components/Project.svelte";

  const { data } = $props();

  // Stato per l'anno selezionato (inizializzato col primo anno disponibile)
  let currentYear = $state(data.years[0].number);

  let selectedYear = $derived.by(() =>
    data.years.find((year) => year.number == currentYear)
  );

  // Derivata che filtra i progetti in base all'anno selezionato
  let projects = $derived.by(() => {
    return data.years.find((year) => {
      return year.number == currentYear;
    }).projects;
  });
</script>


<section class="safe-area hero">
  <h1 class="hero-title">UNSCRIPTED</h1>
  <p class="hero-quote">
    I don't wait for perfection;<br />
    I find it in the in-between. I don't stage anything,<br />
    I capture them as they appear. These are<br />
    my journeys, told through my photographs.<br />
    Each section is a new journey.
  </p>
</section>

<nav class="safe-area filters">
  {#each data.years as year}
    <Filter bind:group={currentYear} value={year.number} />
  {/each}
</nav>

<section class="safe-area intro">
  <h2 class="intro__label">{selectedYear.label}</h2>

  <span class="intro__coords">
    {selectedYear.coordinates}
  </span>

  <p class="intro__text">
    {selectedYear.description}
  </p>
</section>

<section class="safe-area projects">
  {#each projects as project}
    <Project data={project.data} />
  {/each}
</section>

<style>
  .hero {
    padding-block: var(--size-10);
  }

  .hero-title {
    font-size: var(--size-8);
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    margin-bottom: var(--size-4);
  }

.hero-quote {
  border-left: 5px solid var(--hex-brand-500);
  padding-left: var(--size-5-2);
  font-size: var(--size-6);
  line-height: 1.5;
  max-width: 55ch;
}

    h1 {
      font-size: var(--size-7);
      max-width: 35ch;
    }

  .filters {
    display: flex;
    align-items: center;
    gap: var(--size-5);
    /* Aggiunto un po' di padding per staccarlo dai progetti */
    padding-block: var(--size-4);
  }

  .projects {
    padding-block: var(--size-7);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--size-5);
  }

.intro {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start; 
  padding-block: var(--size-10);
}

/* LABEL (titolo grande) */
.intro__label {
  font-size: var(--size-9);
  font-weight: 600;
  letter-spacing: 0.5em;
  text-align: left;
  flex: 1;
  margin-top: 0;
  line-height: 1;
}

/* COORDINATE (design element) */
.intro__coords {
  position: absolute;
  right: var(--size-10);
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: var(--size-5);
  color: var(--color-link);
  letter-spacing: 0.1em;
}

.intro__text {
  flex: 1;
  max-width: 50ch;
  font-size: var(--size-5);
  line-height: var(--size-6);
  color: var(--color-ink-secondary);
  text-align: left;
  position: relative;
  margin-top: 0;
  margin-right: 8rem;
  padding-top: 0.15em; /* ← aggiustamento ottico per allineare alla cap-height del titolo */
}

.intro__text::after {
  content: "";
  display: block;
  width: 60px;
  height: 2px;
  background: red;
  margin-top: 10px;
  margin-right: 8rem;
}

  @media (max-width: 900px) {
  .projects {
    grid-template-columns: 1fr;
    justify-items: center; 
  }

  .projects > * {
    width: 100%;
    max-width: 600px; 
  }
}

@media (max-width: 600px) {

  .hero-title {
    font-size: var(--size-6);
  }

  .hero-quote {
    font-size: var(--size-4);
    max-width: 100%;
  }

  .intro h2 {
    font-size: var(--size-5);
  }

  .intro p {
    font-size: var(--size-4);
  }

  .intro__coords {
    font-size: var(--size-2);
  }

  .projects {
    grid-template-columns: 1fr;
    gap: var(--size-4);
  }

  .projects :global(article) {
    font-size: var(--size-3);
  }

  .filters {
    flex-wrap: wrap; 
    justify-content: left;
    gap: var(--size-3);
  }

  .filters :global(button),
  .filters :global(a) {
    font-size: var(--size-4);
    padding: var(--size-2) var(--size-3);
  }

}

</style>