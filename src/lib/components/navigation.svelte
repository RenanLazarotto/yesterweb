<script>
    /** @type string */
    export let title;

    /** @type Array<{text: string, href: string}> */
    export let items;

    import Container from "./container.svelte";
</script>

<Container {title}>
    <nav slot="content">
        <ul>
            {#each items as item}
                <li><a href={item.href}>{item.text}</a></li>
            {/each}
        </ul>
    </nav>
</Container>

<style>
    nav {
        padding: 5px;
    }
    ul {
        list-style-type: none;
        list-style-position: inside;
        padding: 0;
        margin: 0;
        min-height: 300px;
    }

    ul li {
        font-family: "MP16", monospace;
        text-align: center;
        margin: 5px 0;
    }
</style>
