<script>
  import Filter from "$lib/components/Filter.svelte";
  import Project from "$lib/components/Project.svelte";

  const { data } = $props();

  let currentYear = $state(data.years[0].number);

  let selectedYear = $derived.by(() =>
    data.years.find((year) => year.number == currentYear)
  );

  let projects = $derived.by(() => {
    return data.years.find((year) => {
      return year.number == currentYear;
    }).projects;
  });
</script>


<section class="safe-area hero">
  <h1 class="hero-title">UNSCRIPTED</h1>
  <p class="hero-quote">
    I don't wait for perfection;
    I find it in the in-between. <br> I don't stage anything,
    I capture them as they appear. These are
    my journeys, told through my photographs.
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

  <p class="intro__text">
    {selectedYear.description}
  </p>

  <span class="intro__coords">
    {selectedYear.coordinates}
  </span>

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
    font-size: var(--size-9);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    margin-bottom: var(--size-4);
  }

.hero-quote {
  border-left: 5px solid var(--hex-brand-500);
  padding-left: var(--size-5-2);
  font-size: var(--size-6);
  font-family: var(--font-secondary);
  line-height: 1.3;
  max-width: 45ch;
}

    h1 {
      font-size: var(--size-7);
      max-width: 35ch;
    }

  .filters {
    display: flex;
    align-items: center;
    gap: var(--size-5);
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
  min-height: 24rem;
}

.intro__label {
  font-size: var(--size-9);
  font-weight: 700;
  letter-spacing: 0.5em;
  text-align: left;
  flex: 1;
  margin-top: 0;
  line-height: 1;
}

.intro__coords {
  position: absolute;
  right: var(--size-10);
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: var(--size-7-2);
  font-weight: 700;
  color: var(--color-link);
  white-space: nowrap;
}

.intro__text {
  flex: 1;
  max-width: 45ch;
  font-size: var(--size-5);
  line-height: var(--size-6);
  color: var(--color-ink-secondary);
  font-family: var(--font-secondary);
  text-align: left;
  position: relative;
  margin-top: 0;
  margin-right: 8rem;
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

 @media (max-width: 767px) {
  .projects {
    padding-inline: var(--size-7);
    grid-template-columns: 1fr;
  }

    .filters {
    padding-inline: var(--size-7);
  }

  .hero {
    padding-block: var(--size-9);
    padding-inline: var(--size-7);
  }

  .hero-quote {
    max-width: 90%;
  }

  .intro {
    padding-inline: var(--size-7);
    flex-direction: column;
    gap: var(--size-6);
    min-height: unset;
  }

  .intro__coords {
    position: static;
    writing-mode: horizontal-tb;
    transform: none;
    text-align: right;
    align-self: flex-end;
    white-space: nowrap;
  }

  .intro__text {
    margin-right: 0;
  }

  .intro__text::after {
    margin-right: 0;
  }

}

@media (max-width: 480px) {
  .projects {
    padding-inline: var(--size-5);
  }

  article {
    font-size: var(--size-4);
  }

    .filters {
    padding-inline: var(--size-5);
  }

  label {
    font-size: var(--size-4-2);
  }

  .hero {
    padding-block: var(--size-8);
    padding-inline: var(--size-5);
  }

  .hero-title {
    font-size: var(--size-7-2);
  }

  .hero-quote {
    font-size: var(--size-4-2);
    padding-left: var(--size-4);
    border-left-width: 3px;
    max-width: 90%;
  }

  h1 {
    font-size: var(--size-6);
    max-width: 100%;
  }

  .intro {
    padding-block: var(--size-7);
    padding-inline: var(--size-5);
    gap: var(--size-5);
  }

  .intro__label {
    font-size: var(--size-7-2);
  }

  .intro__text {
    font-size: var(--size-4);
    line-height: var(--size-5);
  }

  .intro__coords {
    font-size: var(--size-5-2);
  }
}
</style>