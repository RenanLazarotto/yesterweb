<script>
    import "normalize.css";
    import "app.css";
    
    import Section from "$components/section.svelte";
</script>

<section>
    <nav>
        <h1>Firehawk's Corner</h1>
    </nav>
    <main class="content">
        <div class="navigation">
            <Section title="Navigation">
                <slot name="navigation" />
            </Section>
        </div>
        <div class="content">
            <slot name="content" />
        </div>
    </main>
    <footer>made with ❤️ and ☕ in 🇧🇷</footer>
</section>

<style>
    section {
        flex: 1;
        max-width: 90%;
        margin: 16px auto;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    nav {
        background-color: var(--dark-blue);
        border: 1px solid var(--dark-blue);
        padding: 50px 15px 15px;
    }

    h1 {
        color: white;
        font-weight: normal;
        
        font-size: 48px;
        margin: 0;
        line-height: 56px;
    }

    main {
        flex-grow: 1;
        flex-direction: row;
        display: flex;
        gap: 8px;
    }

    .navigation {
        flex: 2;
    }

    .content {
        flex: 10;
    }

    footer {
        border: 1px solid var(--dark-blue);
        background-color: var(--medium-blue);
        color: white;
        padding: 10px;
        text-align: center;
        font-size: 1.2rem;
    }
</style>
