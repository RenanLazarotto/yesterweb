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
        background-color: lightgray;
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
        font-size: 1.6rem;
        font-weight: 700;
        margin: 0;
        padding: 10px;
    }

    h3 {
        background-color: #555;
        border-top: 1px solid var(--dark-blue);
        color: #ddd;
        font-size: 1.2rem;
        font-weight: 500;
        margin: 0;
        padding: 5px 10px;
    }
</style>
