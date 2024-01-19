import './navigation.css';
import { useEffect, useState } from 'react';

export const Navigation = (props) => {
    const [navigation, setNavigation] = useState([]);
    const [show0, setShow0] = useState('show');
    const [show1, setShow1] = useState('hide');
    const [show2, setShow2] = useState('hide');
    useEffect(() => {
        const fetchData = async () => {
            const dataNavigation = await fetch('http://localhost:80/navigation');
            const navigation = await dataNavigation.json();
            setNavigation(navigation);
        };
        fetchData();
    }, []);

    function buildDatasNav() {
        const park = [];
        const univers = [[], []];
        const map = new Map();
        for (const el of navigation) {
            if (!map.has(el.pid)) {
                map.set(el.pid, true);
                park.push({ pslug: el.pslug, pname: el.pname });
            }
            for (let i = 0; i < park.length; i++) {
                if (!map.has(el.uslug) && el.pid === i + 1) {
                    map.set(el.uslug, true);
                    univers[i].push({ uslug: el.uslug, uname: el.uname });
                }
            }
        }
        for (let i = 0; i < park.length; i++) park[i].univers = univers[i];
        return park;
    }

    const buildMenus = buildDatasNav();
    console.log(buildMenus);
    return (
        <div className={'navigation' + ' ' + props.bkgNav} onClick={() => { setShow1('hide'); setShow2('hide') }}>
            <div className="slider" onClick={() => { show0 === 'show' ? setShow0('hide') : setShow0('show'); }}><i className="fa fa-bars"></i></div>
            <div className={'nav ' + show0}>
                {buildMenus.map((p) => {
                    let show = (p.pslug === 1) ? show1 : show2;
                    return (
                        <div key={p.pslug}></div>
                        // <div key={'parent' + p.pslug} className={'nav-parent'}>
                            // <a key={'p' + p.slug} id={p.id} href={'/park-' + p.slug} alt={p.name} className={'link show ' + props.bkgNav} onMouseOver={(e) => {
                                    // if (e.target.id === '1') { setShow1('show'); setShow2('hide') }
                                    // if (e.target.id === '2') { setShow2('show'); setShow1('hide')}
                                // }}>{p.name}
                                // </a>
                                // <div key={'child' + p.id} className={'nav-childs ' + show}>
                                    // {p.childs.map((u) => {
                                        // return (<a key={u.slug} className={'link'} href={'/park/' + p.slug + '/univers/' + u.slug}>{u.name}</a>)
                                    // })}
                                // </div>
                        // </div>
                    )
                })}
            </div>
        </div>
    );
}