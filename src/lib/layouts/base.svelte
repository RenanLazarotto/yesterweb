<script>
    import Section from "$lib/components/section.svelte";
import "../../../node_modules/normalize.css/normalize.css";
    import "../../app.css";
</script>

<section>
    <nav>
        <h1>Firehawk's Corner</h1>
    </nav>
    <main class="content">
        <div class="navigation">
            <Section title="Navigation">
                <slot name="navigation"/>
            </Section>
        </div>
        <div class="content">
            <slot name="content" />
        </div>
    </main>
    <footer>made with love and coffee in brazil</footer>
</section>

<style>
    section {
        flex: 1;
        max-width: 90%;
        margin: 16px auto;
        display: flex;
        flex-direction: column;
        gap: var(--gap);
    }

    nav {
        background-color: var(--dark-blue);
        border: 1px solid var(--dark-blue);
        padding: 50px 15px 15px;
    }

    h1 {
        color: white;
        font-weight: normal;
        font-family: var(--heading-font);
        font-size: var(--title-font-size);
        margin: 0;
        line-height: var(--title-line-height);        
    }

    main {
        flex-grow: 1;
        flex-direction: row;
        display: flex;
        gap: var(--gap);
    }

    .navigation {
        flex: 2;
    }

    .content {
        flex: 10;
    }

    footer {
        border: 1px solid var(--dark-blue);
        background-color: var(--dark-blue);
        color: white;
        padding: 2px 10px;
        text-align: center;
    }
</style>
