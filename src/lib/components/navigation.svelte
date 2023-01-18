<script>
    /** @type {Array<import("src/types/route").Route>}*/
    export let routes;

    /** @type {Array<string>}*/
    export let activeRoutes;
</script>

<ul class="routes">
    {#each routes as route}
        <li>
            <a class:active={activeRoutes.includes(route.id)} href={route.href}>
                {route.text}
            </a>

            {#if route.subroutes}
                <ul
                    class="subroutes"
                    class:show={activeRoutes.includes(route.id)}
                >
                    {#each route.subroutes as subroute}
                        <li>
                            <a
                                class:active={activeRoutes.includes(
                                    subroute.id
                                )}
                                href={subroute.href}
                            >
                                {subroute.text}
                            </a>
                        </li>
                    {/each}
                </ul>
            {/if}
        </li>
    {/each}
</ul>

<style>
    .routes,
    .subroutes {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    .subroutes {
        display: none;
    }

    .subroutes.show {
        display: flex;
        flex-direction: column;
    }

    li {
        font-family: var(--body-font);
        font-size: var(--body-font-size);
        font-weight: 500;
    }

    li a {
        display: block;
        padding: var(--padding);
    }

    li a:hover {
        background-color: var(--light-blue);
        color: white;
    }

    .routes li a.active:hover {
        background-color: var(--dark-blue);
    }

    .subroutes li a.active:hover {
        background-color: var(--medium-blue);
    }

    .routes li a.active {
        background-color: var(--medium-blue);
        color: white;
    }

    .subroutes li a.active {
        background-color: var(--light-blue);
        color: white;
    }
</style>
