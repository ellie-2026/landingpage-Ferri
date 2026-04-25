<script>
    import Filter from "$lib/components/Filter.svelte";
    import Link from "$lib/components/Link.svelte";
    import Project from "$lib/components/Project.svelte";

    const { data } = $props();

    let currentYear = $state(data.years[0].number);
    let projects = $derived.by(() => {
    return data.years.find((year) => {
        return year.number == currentYear;
        }).projects;
    });
</script>

<section class="safe-area hero">
    <h1>
        I don’t wait for perfection; I find it in the in-between. 
        I don’t stage anything, I capture them as they appear. 
        These are my journeys, told through my photographs. 
        Each section is a new journey.
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
    }
</style>