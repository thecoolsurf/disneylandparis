export const CountCardByScreen = () => {
    const Width = window.innerWidth;
    const total = Math.round(Math.floor(Width / 300));
    return total;
}