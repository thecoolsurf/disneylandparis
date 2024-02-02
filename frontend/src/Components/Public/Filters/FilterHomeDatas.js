export const FilterHomeDatas = (home) => {
    const park = [];
    const univers = [[], []];
    const map = new Map();
    for (const el of home) {
        if (!map.has(el.pid)) {
            map.set(el.pid, true);
            park.push({ pid: el.pid, pslug: el.pslug, pname: el.pname, title: el.title, description: el.description });
        }
        for (let i = 0; i < park.length; i++) {
            if (!map.has(el.uslug) && el.pid === i + 1) {
                map.set(el.uslug, true);
                univers[i].push({ uid: el.uid, uslug: el.uslug, uname: el.uname });
            }
        }
    }
    for (let i = 0; i < park.length; i++) park[i].univers = univers[i];
    return park;
}