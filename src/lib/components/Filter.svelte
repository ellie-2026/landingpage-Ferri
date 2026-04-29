<script>
    let { group = $bindable(), value } = $props();
</script>

<label>
    <input type="radio" {value} bind:group />
    {value}
</label>

<style>
    label {
        padding-block: var(--size-2);
        padding-inline: var(--size-4);
        font-size: var(--size-5-2);
        font-weight: 600;
        border-radius: 999px;
        cursor: pointer;
        transition: background-color 0.25s var(--ease-out-quart);

        &:hover {
            background-color: var(--color-filter--hover);
            color: var(--hex-neutral-50);
        }

        &:has(input:checked) {
            background-color: var(--color-filter--selected);
            color: var(--hex-neutral-50);
        }
    }

    input {
        display: none;
    }

    @media (max-width: 480px) {
  label {
    font-size: var(--size-4-2);
  }
}
</style> 