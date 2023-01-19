<script>
    import Section from "$components/section.svelte";
    import Base from "$layouts/base.svelte";
    import SEO from "$components/seo.svelte";

    import { page } from "$app/stores";
    import { routes } from "$lib/routes";
    import Navigation from "$components/navigation.svelte";
</script>

<SEO
    title="My games list"
    description="When a game leaves such a strong impression on you that you have to make a list about it"
    url={$page.url.href}
/>
<Base>
    <Navigation slot="navigation" {routes} activeRoutes={["gaming"]} />
    <div slot="content" class="wrapper">
        <Section title="Gaming" subtitle="First blood!">
            <div class="content">
                <p>
                    Gaming has always been present in my life, since I was a
                    kid. My ever first console was the Super Nintendo (which I
                    think it was called Super Famincon on the US), which I
                    bought with my own money that I saved for quite a while.
                </p>
                <p>Since then, I had some gaming consoles:</p>
                <ul>
                    <li>Super Nintendo</li>
                    <li>PlayStation</li>
                    <li>PlayStation 2</li>
                    <li>PlayStation 3</li>
                    <li>Xbox 360</li>
                </ul>
                <p>
                    By the the PS3/X360 generation, I was a lot more into
                    computers - they can be more powerful and have more uses
                    than gaming.
                </p>
            </div>
        </Section>
        <Section title="Favourite games, ever!">
            <div class="content">
                <p>
                    A gaming page without a list of games isn't a true gaming
                    page.
                </p>
                <p>
                    I was going to put here a list of all the games that I
                    really enjoyed playing when I was younger, but I quickly
                    realized that the list was getting too big and the page
                    would take ages to load.
                </p>
                <p>
                    So, since like to keep things neat and somewhat organized, I
                    dediced to split the game page into platform-specific games.
                    Click on one of those to see the games.
                </p>

                <ul>
                    <li><a href="/gaming/snes">Super Nintendo</a></li>
                    <li><a href="/gaming/pc">PC</a></li>
                </ul>
            </div>
        </Section>
    </div>
</Base>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .content {
        padding: 8px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    div.content ul {
        margin: 0;
        padding-left: 22px;
    }

    p {
        text-align: justify;
        margin: 0;
    }

    i {
        font-weight: 500;
    }
</style>
