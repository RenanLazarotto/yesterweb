<script>
    import Container from "$lib/components/container.svelte";
    import "../../../node_modules/normalize.css/normalize.css";
    import "../../app.css";
</script>

<section>
    <nav>
        <h1>Firehawk's Corner</h1>
    </nav>
    <main>
        <Container title="Navigation">
            <slot slot="content" name="navigation"/>
        </Container>   
        <div class="content">
            <slot name="content" />
        </div>
    </main>
    <footer>made with love and coffee in brazil</footer>
</section>

<style>
    section {
        max-width: 900px;
        margin: 16px auto;
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
        gap: var(--gap);
    }

    h1 {
        color: white;
        font-weight: normal;
        font-family: var(--heading-font);
        font-size: var(--title-font-size);
        margin: 0;
        line-height: var(--title-line-height);
        mix-blend-mode: soft-light;
        
    }

    nav {
        background-color: var(--medium-purple);
        border: 1px solid var(--dark-blue);
        padding: 25px 10px 5px;
    }

    main {
        flex-grow: 1;
        flex-direction: row;
        display: flex;
        gap: var(--gap);
    }
    main .navigation {
        min-width: 150px;
        background-color: var(--bg-color);
        border: 1px solid var(--dark-blue);
    }

    footer {
        border: 1px solid var(--dark-blue);
        background-color: var(--dark-blue);
        color: white;
        padding: 2px 10px;
        text-align: center;
    }
</style>
