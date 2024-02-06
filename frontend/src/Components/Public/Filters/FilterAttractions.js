export const FilterAttractions = (attractions, pid) => {
    const collection = [];
    const map = new Map();
    for (const el of attractions) {
        if (!map.has(el.aslug) && el.pid === pid) {
            map.set(el.aslug, true);
            collection.push({
                pslug: el.pslug,
                uslug: el.uslug,
                aid: el.aid, 
                aroute: el.aroute,
                aslug: el.aslug, 
                aname: el.aname, 
                description: el.description
            });
        }
    }
    return collection;
}