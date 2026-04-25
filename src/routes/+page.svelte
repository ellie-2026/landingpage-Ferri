<script>
  import Filter from "$lib/components/Filter.svelte";
  import Project from "$lib/components/Project.svelte";

  const { data } = $props();

  // Stato per l'anno selezionato (inizializzato col primo anno disponibile)
  let currentYear = $state(data.years[0].number);

  // Derivata che filtra i progetti in base all'anno selezionato
  let projects = $derived.by(() => {
    return data.years.find((year) => {
      return year.number == currentYear;
    }).projects;
  });
</script>

<section class="safe-area hero">
  <h1>
    This archive collects the best outcomes of the Web Design Laboratory in
    Communication Design, Politecnico di Milano. The laboratory is directed by
    Umberto Tolino, Christian Mazzoleni, Francesco di Gioia and Tommaso Negri
    with love.
  </h1>
</section>

<nav class="safe-area filters">
  {#each data.years as year}
    <Filter bind:group={currentYear} value={year.number} />
  {/each}
</nav>

<section class="safe-area projects">
  {#each projects as project}
    <Project data={project.data} />
  {/each}
</section>

<style>
  .hero {
    padding-block: var(--size-11);

    h1 {
      font-size: var(--size-7);
      max-width: 35ch;
    }
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
</style>