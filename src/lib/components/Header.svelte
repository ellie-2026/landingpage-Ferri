<script>
    import Link from "$lib/components/Link.svelte";
</script>

<header class="safe-area">
    <span class="logo">EF - RAW</span>

    <nav>
        <Link title="ABOUT" ref="/about" />
        <Link 
            title="@elisaferriiii" 
            ref="https://www.instagram.com/elisaferriiii" 
        />
    </nav>
</header>

<style>
    header {
        padding-block: var(--size-6);
        display: flex;
        gap: var(--size-8);
        justify-content: space-between;
        align-items: center;
    }

    nav {
        display: flex;
        gap: var(--size-6);
        align-items: center;
    }

 @media (max-width: 600px) {

  header {
    flex-direction: row; /* resta orizzontale */
    align-items: center;
    justify-content: space-between;
    gap: var(--size-4);
    padding-block: var(--size-5);
  }

  .logo {
    font-size: var(--size-4);
    white-space: nowrap; /* evita che vada a capo */
  }

  nav {
    display: flex;
    gap: var(--size-3);
    align-items: center;
  }

  nav :global(a) {
    font-size: var(--size-4);
    white-space: nowrap; 
  }

}
</style>