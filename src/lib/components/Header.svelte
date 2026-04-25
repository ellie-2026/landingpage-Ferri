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
    }

    nav {
        display: flex;
        gap: var(--size-6);
        align-items: center;
    }
</style>