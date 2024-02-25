export const FilterParams = (array) => {
    let params = '';
    for (let i = 0; i < array.length; i++) {
        if (i === 0) params += 'ids[]='+array[i];
        else params += '&ids[]='+array[i];
    }
    return params;
}