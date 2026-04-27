<footer>
    <div class="cta">
        <span>LET'S CREATE SOMETHING UNSCRIPTED</span>
    </div>
    <hr />
    <div class="meta">
        <p>DDC — WebDesign — a.a.2025/2026 — Elisa Ferri</p>
        <p>© UNSCRIPTED</p>
    </div>
</footer>
 
<style>
    footer {
        padding-block: var(--size-6);
        padding-inline: var(--size-6);
        display: flex;
        flex-direction: column;
        gap: var(--size-6);
    }
 
    .cta {
        display: flex;
        align-items: center;
        font-size: var(--size-5-2);
        font-weight: 700;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        justify-content: center;
    }
 
    hr {
        border: none;
        border-top: 1px solid var(--color-ink);
        opacity: 0.3;
        margin: var(--size-7);
    }

    .meta {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--size-2);
        text-align: center;
        color: var(--color-ink-secondary);
        font-size: var(--size-5);
        font-weight: 500;
        line-height: var(--size-6);
    } 

@media (max-width: 768px) {
  footer {
    padding-block: var(--size-5);
    padding-inline: var(--size-5-2);
  }

  .cta {
    font-size: var(--size-4-2);
  }

  .meta {
    font-size: var(--size-4);
  }

  hr {
    margin: var(--size-6);
  }
}
</style>
 
