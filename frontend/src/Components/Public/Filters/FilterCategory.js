export const FilterCategory = (parent, attractions, id) => {
    const collection = [];
    const map = new Map();

    for (const el of attractions) {
        if (parent === 'home') {
            if (!map.has(el.cslug)) {
                map.set(el.cslug, true);
                collection.push({ cid: el.cid, cname: el.cname, cslug: el.cslug, croute: el.croute });
            }
        }
        if (parent === 'park') {
            if (!map.has(el.cslug) && el.pid === id) {
                map.set(el.cslug, true);
                collection.push({ cid: el.cid, cname: el.cname, cslug: el.cslug, croute: el.croute });
            }
        }
        if (parent === 'univers') {
            if (!map.has(el.cslug) && el.uid === id) {
                map.set(el.cslug, true);
                collection.push({ cid: el.cid, cname: el.cname, cslug: el.cslug, croute: el.croute });
            }
        }
    }
    return collection;
}

