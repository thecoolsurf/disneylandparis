export const FilterOrigins = (parent, attractions, id) => {
    const collection = [];
    const map = new Map();

    for (const el of attractions) {
        if (parent === 'home') {
            if (!map.has(el.oslug)) {
                map.set(el.oslug, true);
                collection.push({ oid: el.oid, oname: el.oname, oslug: el.oslug, oroute: el.oroute });
            }
        }
        if (parent === 'park') {
            if (!map.has(el.cslug) && el.pid === id) {
                map.set(el.oslug, true);
                collection.push({ oid: el.oid, oname: el.oname, oslug: el.oslug, oroute: el.oroute });
            }
        }
        if (parent === 'univers') {
            if (!map.has(el.cslug) && el.uid === id) {
                map.set(el.oslug, true);
                collection.push({ oid: el.oid, oname: el.oname, oslug: el.oslug, oroute: el.oroute });
            }
        }
    }
    const origins = collection.sort(function(a, b) {
        return a.oname.localeCompare(b.oname)
    });
    return origins;
}

