/** @type {Array<import("src/types/route").Route>} */
export let routes = [
    {
        href: "/",
        id: "home",
        text: "Home"
    },
    {
        href: "/gaming",
        id: "gaming",
        text: "Gaming",
        subroutes: [
            {
                href: "/gaming/snes",
                id: "snes",
                text: "SNES",
            },
            {
                href: "/gaming/pc",
                id: "pc",
                text: "PC"
            }
        ]
    }
];