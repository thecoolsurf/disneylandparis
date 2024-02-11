export const FilterCategory = (attractions, id) => {
    const collection = [];
    const map = new Map();
    let i = 0;
    for (const el of attractions) {
        if (parent === 'park') {
            if (!map.has(el.cname) && el.pid === id) {
                i++;
                map.set(el.cname, true);
                collection.push({
                    uname: el.pname,
                    cname: el.cname,
                    total: i,
                });
            }
        }
        if (parent === 'univers') {
            if (!map.has(el.cname) && el.pid === id) {
                i++;
                map.set(el.cname, true);
                collection.push({
                    uname: el.pname,
                    cname: el.cname,
                    total: i,
                });
            }
        }
    }
    return collection;
}