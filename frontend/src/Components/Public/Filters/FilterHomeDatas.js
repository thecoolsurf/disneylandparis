/*
@model backend/src/Model/Public/Home/Datas.js
*/

export const FilterHomeDatas = (home) => {
    const park = [];
    const univers = [[], []];
    const map = new Map();
    for (const el of home) {
        if (!map.has(el.pslug)) {
            map.set(el.pslug, true);
            park.push({
                pid: el.pid,
                pname: el.pname,
                pslug: el.pslug,
                title: el.title,
                proute: el.proute,
            });
        }
        for (let i = 0; i < park.length; i++) {
            if (!map.has(el.uslug) && el.pid === i+1) {
                map.set(el.uslug, true);
                univers[i].push({
                    uid: el.uid, 
                    uname: el.uname, 
                    uslug: el.uslug, 
                    uroute: el.uroute, 
                });
            }
        }
    }
    for (let i = 0; i < park.length; i++) {
        park[i].univers = univers[i];
    }
    return park;
}