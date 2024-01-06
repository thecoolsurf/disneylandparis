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
    const [show1, setShow1] = useState('hide');
    const [show2, setShow2] = useState('hide');
    return (
        <div className={'navigation' + ' ' + props.bkgNav}>
            <div className="slider" onClick={(e) => {
                
            }}><i className="fa fa-bars"></i></div>
            <div className="nav">
                {buildMenus.map((p) => {
                    let show =  (p.id === 1) ? show1 : show2;
                    return (
                        <div className={'nav-parent'}>
                            <a id={p.id} href={'/park-' + p.slug} alt={p.name} className={'link show ' + props.bkgNav} onMouseOver={(e) => {
                                if (show1 === 'hide') { setShow1('show'); setShow2('hide'); }
                                if (show1 === 'show') { setShow1('hide'); setShow2('show'); }
                                if (show2 === 'hide') { setShow1('hide'); setShow2('show'); }
                                if (show2 === 'show') { setShow1('show'); setShow2('hide'); }
                            }}>{p.name}
                            </a>
                            <div id={'child-'+p.id} className={'nav-childs '+show}>
                                {p.childs.map((u) => {
                                    return (<a className={props.bkgNav + ' link'} href={'/park/' + p.slug + '/univers/' + u.slug}>{u.name}</a>)
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
