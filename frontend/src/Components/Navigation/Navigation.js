import './navigation.css';
import { useState } from 'react';

export const Navigation = (props) => {
    const childs = [];
    function buildDatasNav() {
        childs.push(props.universPark);
        childs.push(props.universStudio);
        const arr = props.parks.map((el, i) => ({
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
        <div className={'navigation' + ' ' + props.bkgNav} onClick={()=>{setShow1('hide');setShow2('hide')}}>
            <div className="slider" onClick={() => { show0 === 'show' ? setShow0('hide') : setShow0('show'); }}><i className="fa fa-bars"></i></div>
            <div className={'nav ' + show0}>
                {buildMenus.map((p) => {
                    let show = (p.id === 1) ? show1 : show2;
                    return (
                        <div key={'parent'+p.id} className={'nav-parent'}>
                            <a id={p.id} key={'p' + p.slug} href={'/park-' + p.slug} alt={p.name} className={'link show ' + props.bkgNav} onMouseOver={(e) => {
                                if (e.target.id === '1') { setShow1('show'); setShow2('hide') }
                                if (e.target.id === '2') { setShow2('show'); setShow1('hide')}
                            }}>{p.name}
                            </a>
                            <div id={'child' + p.id} className={'nav-childs ' + show}>
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
