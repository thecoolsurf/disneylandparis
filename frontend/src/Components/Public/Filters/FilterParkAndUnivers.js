export const FilterParkAndUnivers = (navigation) => {
    const parks = [];
    const univers = [[], []];
    const map = new Map();
    for (const el of navigation) {
      /* park */
      if (!map.has(el.pid)) {
        map.set(el.pid, true);
        parks.push({
          pid: el.pid, 
          pslug: el.pslug, 
          pname: el.pname,
          proute: el.proute, 
        });
      }
      /* univers */
      for (let i = 0; i < parks.length; i++) {
        if (!map.has(el.uid) && el.pid === i + 1) {
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
    for (let i = 0; i < parks.length; i++) parks[i].univers = univers[i];
    return parks;
}