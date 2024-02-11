export const FilterCategory = (parent, attractions, id) => {
    let aire_de_jeu = 0;
    let decouverte = 0;
    let jeu_d_arcade = 0;
    let manege_a_theme = 0;
    let manege_fixe = 0;
    let montagnes_russes = 0;
    let parcours = 0;
    let point_d_interet = 0;
    let spectacle = 0;
    const collection = [];
    const categories = [];
    const map = new Map();
    for (const el of attractions) {
        if (parent === 'park') {
            if (!map.has(el.aslug) && el.pid === id) {
                map.set(el.aslug, true);
                collection.push({cname: el.cname,cslug: el.cslug,});
            }
        }
        if (parent === 'univers') {
            if (!map.has(el.aslug) && el.uid === id) {
                map.set(el.aslug, true);
                collection.push({cname: el.cname,cslug: el.cslug,});
            }
        }
    }
    for (const el of collection) {
        if (el.cslug === 'aire-de-jeu') aire_de_jeu++;
        if (el.cslug === 'decouverte') decouverte++;
        if (el.cslug === 'jeu-d-arcade') jeu_d_arcade++;
        if (el.cslug === 'manege-a-theme') manege_a_theme++;
        if (el.cslug === 'manege-fixe') manege_fixe++;
        if (el.cslug === 'montagnes-russes') montagnes_russes++;
        if (el.cslug === 'parcours') parcours++;
        if (el.cslug === 'point-d-interet') point_d_interet++;
        if (el.cslug === 'spectacle') spectacle++;
    }
    if (aire_de_jeu > 0) categories.push({cname: 'Aire de jeu', total: aire_de_jeu});
    if (decouverte > 0) categories.push({cname: 'Découverte', total: decouverte});
    if (jeu_d_arcade > 0) categories.push({cname: 'Jeu d\'arcade', total: jeu_d_arcade});
    if (manege_a_theme > 0) categories.push({cname: 'Manège à thème', total: manege_a_theme});
    if (manege_fixe > 0) categories.push({cname: 'Manège fixe', total: manege_fixe});
    if (montagnes_russes > 0) categories.push({cname: 'Montagnes russes', total: montagnes_russes});
    if (parcours > 0) categories.push({cname: 'Parcours', total: parcours});
    if (point_d_interet > 0) categories.push({cname: 'Point d\'intérêt', total: point_d_interet});
    if (spectacle > 0) categories.push({cname: 'Spectacle', total: spectacle});
    return categories;
}

