export type Route = {
    href: string,
    id: string,
    text: string,
    subroutes?: Array<Route>
}