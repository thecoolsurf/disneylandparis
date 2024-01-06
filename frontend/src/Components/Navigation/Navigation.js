import './navigation.css';
import { useState } from 'react';

export const Navigation = (props) => {
    const parent = props.parks;
    const childs1 = props.universPark;
    const childs2 = props.universStudio;
    const childs = [];
    function buildDatasNav() {
        childs.push(childs1);
        childs.push(childs2);
        const arr = parent.map((el, i) => ({
            id: el.id,
            name: el.name,
            slug: el.slug,
            childs: childs[i]
        }));
        return arr;
    }
    const buildMenus = buildDatasNav();
    const [show0, setShow0] = useState('show');
    const [show1, setShow1] = useState('hide');
    const [show2, setShow2] = useState('hide');
    return (
        <div className={'navigation' + ' ' + props.bkgNav}>
            <div className="slider" onClick={(e) => {
                console.log(show0)
                show0 === 'show' ? setShow0('hide') : setShow0('show');
            }}><i className="fa fa-bars"></i></div>
            <div className={'nav '+show0}>
                {buildMenus.map((p) => {
                    let show =  (p.id === 1) ? show1 : show2;
                    return (
                        <div key={p.id} className={'nav-parent'}>
                            <a key={p.slug} href={'/park-' + p.slug} alt={p.name} className={'link show ' + props.bkgNav} onMouseOver={(e) => {
                                if (show1 === 'hide') { setShow1('show'); setShow2('hide'); }
                                if (show1 === 'show') { setShow1('hide'); setShow2('show'); }
                                if (show2 === 'hide') { setShow1('hide'); setShow2('show'); }
                                if (show2 === 'show') { setShow1('show'); setShow2('hide'); }
                            }}>{p.name}
                            </a>
                            <div id={'child-'+p.id} className={'nav-childs '+show}>
                                {p.childs.map((u) => {
                                    return (<a key={u.slug} className={'link'} href={'/park/' + p.slug + '/univers/' + u.slug}>{u.name}</a>)
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
