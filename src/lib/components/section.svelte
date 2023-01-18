<script>
    /** @type string */
    export let title;

    /** @type string */
    export let subtitle = "";
</script>

<section>
    <div class="header">
        <h2>{title}</h2>
        {#if subtitle !== ""}
            <h3>{subtitle}</h3>
        {/if}
    </div>
    <slot />
</section>

<style>
    section {
        background-color: var(--bg-color);
        border: 1px solid var(--dark-blue);
        flex: 1;
    }

    .header {
        background-color: var(--medium-blue);
        border-bottom: 1px solid var(--dark-blue);
        display: flex;
        flex-direction: column;
    }

    h2 {
        color: white;
        font-family: var(--heading-font);
        font-size: var(--heading-font-size);
        font-weight: 600;
        line-height: var(--heading-line-height);
        margin: 0;
        padding: 5px 15px;
    }

    h3 {
        background-color: var(--light-blue);
        border-top: 1px solid var(--dark-blue);
        color: white;
        font-size: 16px;
        font-style: italic;
        font-weight: 500;
        margin: 0;
        padding: 5px 15px;
    }
</style>
