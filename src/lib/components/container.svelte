<script>
    /** @type string */
    export let title;
</script>

<div>
    <p>{title}</p>
    <slot name="content" />
</div>

<style>
    div {
        border: 1px solid var(--border-color);
    }

    p {
        font-family: "MP16", monospace;
        background-color: var(--background-color);
        border-bottom: 1px solid var(--border-color);
        margin: 0;
        padding: 2px 10px;
        text-align: center;
    }
</style>
