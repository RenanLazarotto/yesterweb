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
        border: 1px solid white;
    }

    p {
        background-color: grey;
        border-bottom: 1px solid white;
        margin: 0;
        padding: 2px 10px;
        text-align: center;
    }
</style>
