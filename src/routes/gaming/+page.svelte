<script>
    import Container from "$lib/components/container.svelte";
    import BaseLayout from "$lib/layouts/baselayout.svelte";
    import SEO from "$lib/components/seo.svelte";

    import { page } from "$app/stores";
    import { routes } from "$lib/routes/routes";
    import Navigation from "$lib/components/navigation.svelte";
</script>

<SEO
    title="My games list"
    description="When a game leaves such a strong impression on you that you have to make a list about it"
    url={$page.url.href}
/>
<BaseLayout>
    <Navigation slot="navigation" {routes} activeRoutes={["gaming"]} />
    <div slot="content" class="content-wrapper">
        <Container title="Gaming">
            <div slot="content" class="content">
                <i>First Blood!</i>

                <p>
                    Gaming has always been present in my life, since I was a
                    kid.
                </p>
                <p>
                    My ever first console was the Super Nintendo (which I think
                    it was called Super Famincon on the US), which I bought with
                    my own money that I saved for quite a while.
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
        </Container>
        <Container title="Favourite games, ever!">
            <div slot="content" class="content">
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
        </Container>
    </div>
</BaseLayout>

<style>
    div.content-wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--gap);
    }

    div.content {
        padding: var(--padding);
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
