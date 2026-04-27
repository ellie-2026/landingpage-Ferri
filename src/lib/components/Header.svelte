<script>
    import Link from "$lib/components/Link.svelte";
</script>

<header class="safe-area">
    <Link title="EF - RAW" ref="/" />

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
        font-size: var(--size-5-2);
        font-weight: 600;
    }

    nav {
        display: flex;
        gap: var(--size-6);
        align-items: center;
    }

@media (max-width: 767px) {
  header {
    padding-inline: var(--size-7);
    font-size: var(--size-5-2);
  }

  nav {
    gap: var(--size-4);
  }
}

@media (max-width: 480px) {
  header {
    padding-inline: var(--size-5);
    font-size: var(--size-4-2);
  }

  nav {
    gap: var(--size-3);
  }
}
</style>