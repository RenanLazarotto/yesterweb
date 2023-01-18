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
    },
    {
        href: "/android",
        id: "android",
        text: "Android stuff",
        subroutes: [
            {
                href: "/android/rom-reviews",
                id: "rom-reviews",
                text: "ROM Reviews"
            }
        ]
    }
];