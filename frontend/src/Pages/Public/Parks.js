import '../../assets/css/public/parks.css';
import { useState, useEffect } from 'react';
import { Carrousel } from '../../Components/Public/Carrousel.js';
import { LinkToFinder } from '../../Components/Public/LinkToFinder.js';

export const Parks = (props) => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const datasPark = await fetch(`http://localhost:80/park_by_id?id=${props.id}`);
            const datas = await datasPark.json();
            setDatas(datas);
        };
        fetchData();
    }, []);
    function filterParkAndUnivers() {
        const park = [];
        const univers = [];
        const map = new Map();
        for (const el of datas) {
            if (!map.has(el.pid)) {
                map.set(el.pid, true);
                park.push({ pid: el.pid, pslug: el.pslug, pname: el.pname, description: el.description });
            }
            if (!map.has(el.uid)) {
                map.set(el.uid, true);
                univers.push({ uid: el.uid, uslug: el.uslug, uname: el.uname });
            }
        }
        for (let i = 0; i < park.length; i++) park[i].univers = univers[i];
        return park;
    }
    const park = filterParkAndUnivers();
    let legend = 'Liste des univers - ' + props.name;
    const tt_univers = datas.length;
    return (
        <div className="parks">
            <LinkToFinder />
            <Carrousel datas={datas} slugs={props.slugs} bkgNav={props.bkgNav} legend={legend} />
            {park.map((p) => {
                return (
                    <section key={p.pslug} className="infos">
                        <div className="col-left">
                            <a href={'/'} className={'logo logo-' + p.pslug} alt={p.pname}>
                                <div className="back"><i className="fa fa-reply"></i></div>
                            </a>
                        </div>
                        <div className="col-infos">
                            <div className="name">{p.pname}</div>
                            <ul className="list">
                                <li><i>Nom du datas</i><div>{p.pname}</div></li>
                                <li><i>Total des univers</i><div>{tt_univers + ' univers'}</div></li>
                                <li><i>Liste des univers</i>
                                    {datas.map((u) => {
                                        return (
                                            <div key={u.uslug}>{u.uname}</div>
                                        )
                                    })}
                                </li>
                            </ul>
                        </div>
                        <div className="description">{p.description}</div>
                    </section>
                )
            })}
        </div>
    )
}