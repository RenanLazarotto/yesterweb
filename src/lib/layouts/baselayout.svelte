<script>
    import "../../../node_modules/normalize.css/normalize.css";
    import "../../app.css";
    
    import { routes } from "$lib/routes/routes";
    import Navigation from "$lib/components/navigation.svelte";
</script>

<section>
    <h1>Firehawk's Corner</h1>
    <main>
        <div class="sidebar">
            <Navigation title="Navigation" items={routes} />
        </div>
        <div class="content">
            <slot name="content" />
        </div>
    </main>
    <footer>
        made with love and coffee in brazil
    </footer>
</section>

<style>
    section {
        max-width: 900px;
        margin: 16px auto;
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
        gap: 16px;
    }

    h1 {
        font-family: "MP16", monospace;
        border: 1px solid var(--border-color);
        background-color: var(--background-color);
        padding: 25px 5px 0;
        text-align: end;
        margin: 0;
    }

    main {
        flex-grow: 1;
        flex-direction: row;
        display: flex;
        gap: 16px;
    }

    main .sidebar {
        flex: 2;
    }

    main .content {
        flex: 8;
    }

    footer {
        border: 1px solid white;
        background-color: grey;
        padding: 2px 10px;
    }
</style>
