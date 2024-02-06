export const FilterRoute = (route, param) => {
    return route.slice(0, route.indexOf('/'+param));
}