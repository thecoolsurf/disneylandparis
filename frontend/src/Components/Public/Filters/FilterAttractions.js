export const FilterAttractions = (attractions, pid) => {
    const collection = [];
    const map = new Map();
    for (const el of attractions) {
        if (!map.has(el.aid) && el.pid === pid) {
            map.set(el.aid, true);
            collection.push({
                pslug: el.pslug,
                uslug: el.uslug,
                aid: el.aid, 
                aslug: el.aslug, 
                aname: el.aname, 
                description: el.description
            });
        }
    }
    return collection;
}