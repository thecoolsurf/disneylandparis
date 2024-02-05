export const FilterHomeDatas = (home) => {
    const park = [];
    const univers = [[], []];
    const map = new Map();
    for (const el of home) {
        if (!map.has(el.pid)) {
            map.set(el.pid, true);
            park.push({
                pid: el.pid,
                pslug: el.pslug,
                pname: el.pname,
                title: el.title,
            });
        }
        for (let i = 0; i < park.length; i++) {
            if (!map.has(el.uid) && el.pid === i+1) {
                map.set(el.uid, true);
                univers[i].push({
                    uid: el.uid, 
                    uslug: el.uslug, 
                    uname: el.uname, 
                    uroute: el.uroute, 
                });
            }
        }
    }
    console.log(univers);
    for (let i = 0; i < park.length; i++) {
        park[i].univers = univers[i];
    }
    return park;
}