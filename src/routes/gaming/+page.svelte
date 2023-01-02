<script>
    import Container from "$lib/components/container.svelte";
    import Gallery from "$lib/components/gallery.svelte";
    import Navigation from "$lib/components/navigation.svelte";
    import BaseLayout from "$lib/layouts/baselayout.svelte";
    import SEO from "$lib/components/seo.svelte";

    import { routes } from "$lib/routes/routes";
    import { page } from "$app/stores";
</script>

<SEO
    title="My games list"
    description="When a game leaves such a strong impression on you that you have to make a list about it"
    url={$page.url.href}
/>
<BaseLayout>
    <h1 slot="header">Firehawk's Corner</h1>
    <div slot="sidebar">
        <Navigation title="Navigation" items={routes} />
    </div>

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
                <p>A gaming page without a list of games isn't a true gaming page.</p>
                <p>Here are the games that left a good impresison on me, or at least impacted me on ways that others havent:</p>
                <Gallery />
            </div>
        </Container>
    </div>
</BaseLayout>

<style>
    h1 {
        border: 1px solid white;
        background-color: gray;
        padding: 25px 5px 0;
        text-align: end;
        margin: 0;
    }
    
    div.content-wrapper {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    div.content {
        padding: 15px;
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
</style>
