export const RequireContextStudio = () => {
    const uri = window.location.href;
    if (uri.includes('animation-academy')) {
        return require.context('../../../assets/images/attractions/studio/animation-academy/img', true);
    }
    if (uri.includes('avengers-assemble-flight-force')) {
        return require.context('../../../assets/images/attractions/studio/avengers-assemble-flight-force/img', true);
    }
    if (uri.includes('cars-quatre-roues-rally')) {
        return require.context('../../../assets/images/attractions/studio/cars-quatre-roues-rally/img', true);
    }

}






