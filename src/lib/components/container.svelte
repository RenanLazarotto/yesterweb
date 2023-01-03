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
        border: 1px solid var(--dark-blue);
        background-color: var(--bg-color);
    }

    p {
        background-color: var(--medium-blue);
        border-bottom: 1px solid var(--dark-blue);
        color: white;
        font-family: var(--body-font);
        font-size: var(--heading-font-size);
        font-weight: 600;
        margin: 0;
        padding: 2px 10px;
        text-align: center;
        line-height: var(--heading-line-height);
    }
</style>
