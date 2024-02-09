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
    if (uri.includes('cars-road-trip')) {
        return require.context('../../../assets/images/attractions/studio/cars-road-trip/img', true);
    }
    if (uri.includes('crush-s-coaster')) {
        return require.context('../../../assets/images/attractions/studio/crush-s-coaster/img', true);
    }
    if (uri.includes('disney-studio-1')) {
        return require.context('../../../assets/images/attractions/studio/disney-studio-1/img', true);
    }
    if (uri.includes('les-tapis-volants')) {
        return require.context('../../../assets/images/attractions/studio/les-tapis-volants-d-aladdin/img', true);
    }
    if (uri.includes('ratatouille')) {
        return require.context('../../../assets/images/attractions/studio/ratatouille/img', true);
    }
    if (uri.includes('rc-racer')) {
        return require.context('../../../assets/images/attractions/studio/rc-racer/img', true);
    }
    if (uri.includes('slinky-dog-zigzag-spin')) {
        return require.context('../../../assets/images/attractions/studio/slinky-dog-zigzag-spin/img', true);
    }
    if (uri.includes('spider-man-web-adventure')) {
        return require.context('../../../assets/images/attractions/studio/spider-man-web-adventure/img', true);
    }
    if (uri.includes('the-twilight-zone-tower-of-terror')) {
        return require.context('../../../assets/images/attractions/studio/the-twilight-zone-tower-of-terror/img', true);
    }
    if (uri.includes('toy-soldiers-parachutes-drop')) {
        return require.context('../../../assets/images/attractions/studio/toy-soldiers-parachutes-drop/img', true);
    }

}








