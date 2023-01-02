<script>
    import "../../../node_modules/normalize.css/normalize.css";
    import "../../app.css";
</script>

<section>
    <slot name="header" />
    <main>
        <div class="sidebar">
            <slot name="sidebar" />
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
