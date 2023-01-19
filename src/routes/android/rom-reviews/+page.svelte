<script>
    import Base from "$layouts/base.svelte";
    import Navigation from "$components/navigation.svelte";
    import Section from "$components/section.svelte";
    import SEO from "$components/seo.svelte";

    import { page } from "$app/stores";
    import { routes } from "$lib/routes";
</script>

<SEO
    title="Android ROM Reviews"
    description="Reviewing every ROM I can - for the devices I have"
    url={$page.url.href}
/>
<Base>
    <Navigation
        slot="navigation"
        {routes}
        activeRoutes={["android", "rom-reviews"]}
    />
    <div slot="content" class="wrapper">
        <Section
            title="Reviewing ROMs"
            subtitle="Finding out what differs one thing from another"
        >
            <div class="content">
                <p>
                    Testing ROMs is a tricky - and time consuming - task. Over
                    the years, Android has grown quite a bit - from 200MB-ish
                    ROM files to 5-6GB for some OEMs (*cough*Samsung*cough*).
                    However, most custom ROMs I have tested so far have around
                    1GB - quite an improvement, to be honest.
                </p>
                <p>
                    Other than that, some ROMs require you to download GApps
                    (Google Apps) in order to access Play Store and/or other
                    Google services - that is, if this is your thing. Some GApps
                    packages install just the necessary to get you started,
                    while some have lots of other stuff included - its up to
                    you.
                </p>
                <p>
                    Since I like my ROMs clean, I tend to keep just the
                    bare-minimun installed, with the only exceptiom being the
                    GBoard, the Google keyboard, because it is age years ahead
                    of AOSP Keyboard.
                </p>
                <p>
                    Without further ado, lets get to the ROM review index. It'll
                    grow large over time - perhaps I can make some penny from
                    this site to buy a new device and test new ROMs?
                </p>
            </div>
        </Section>
        <Section title="ROM Index">
            <div class="content">
                <p>Here's the ROMs I've tested and reviewed so far:</p>
                <table>
                    <thead>
                        <tr>
                            <th class="left">ROM Name</th>
                            <th>ROM Version</th>
                            <th>Android Version</th>
                            <th>Device</th>
                            <th>Link to ROM</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>crDroid</td>
                            <td class="center">9.1</td>
                            <td class="center">13</td>
                            <td class="center">Galaxy S10+ (beyond2lte)</td>
                            <td class="center">Not now</td>
                        </tr>
                    </tbody>
                </table>
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
        gap: 8px;
    }
    p {
        text-align: justify;
        margin: 0;
    }

    th .center,
    tr .center {
        text-align: center;
    }

    th.left,
    tr.left {
        text-align: center;
    }


</style>
