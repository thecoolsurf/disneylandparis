import { FilterRoute } from "./FilterRoute";
/*
@model backend/src/Model/Public/Navigation/AttractionAndUniversAndPark.js
*/

export const FilterParkAndUnivers = (navigation) => {
    const parks = [];
    const univers = [[], []];
    const map = new Map();
    for (const el of navigation) {
      /* park */
      if (!map.has(el.pslug)) {
        map.set(el.pslug, true);
        parks.push({
          pid: el.pid, 
          pname: el.pname,
          pslug: el.pslug,
          proute: FilterRoute(el.aroute,'univers'),
        });
      }
      /* univers */
      for (let i = 0; i < parks.length; i++) {
        if (!map.has(el.uslug) && el.pid === i + 1) {
          map.set(el.uslug, true);
          univers[i].push({ 
            uid: el.uid, 
            uname: el.uname,
            uslug: el.uslug,
            uroute: FilterRoute(el.aroute, 'attraction'),
          });
        }
      }
    }
    for (let i = 0; i < parks.length; i++) parks[i].univers = univers[i];
    return parks;
}