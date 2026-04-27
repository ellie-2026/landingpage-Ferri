<script>
    import Icon from "./Icon.svelte";

    let { data: project } = $props();
</script>

{#if project?.link}
    <a href={project.link} target="_blank" rel="noopener noreferrer">
        {@render card()}
    </a>
{:else}
    {@render card()}
{/if}

{#snippet card()}
    <article>
        <div class="thumbnail">
            {#if project?.link}
                <div class="veil"></div>
            {/if}
            <img src={project?.thumbnail} alt={project?.title} />
        </div>

        <header>
            <hgroup>
                <h3>{project?.title}</h3>
                <span>| {project?.place}</span>
            </hgroup>

            {#if project?.link}
                <div class="arrow">
                    <Icon name="arrow-up-right" />
                </div>
            {/if}
        </header>
    </article>
{/snippet}

<style>
    article {
        font-size: var(--size-4-2);
        font-weight: 600;
        display: flex;
        flex-direction: column;
        gap: var(--size-2);
        font-family: var(--font-secondary); 
        &:hover .veil { opacity: 1; }
        &:hover .arrow { transform: translateY(0); }
    }

    .thumbnail {
        position: relative;
        aspect-ratio: 16/10;
        overflow: hidden;

        .veil {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: var(--color-image-hover);
            mix-blend-mode: color;

            transition: opacity 0.75s var(--ease-out-quart);
            opacity: 0;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: var(--size-5);

        overflow: clip;
    }

    hgroup {
        display: flex;
        align-items: center;
        gap: var(--size-2);

        span {
            color: var(--color-ink-secondary);
            font-weight: 400;
        }
    }

    .arrow {
        transition: transform 0.75s var(--ease-out-quart);
        transform: translateY(100%);
    }

    @media (max-width: 480px) {

  article {
    font-size: var(--size-3);
  }
}
</style>
