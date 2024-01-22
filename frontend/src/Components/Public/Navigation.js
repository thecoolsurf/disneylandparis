import '../../assets/css/public/navigation.css';
import { useState } from 'react';

export const Navigation = (props) => {
    const [show0, setShow0] = useState('show');
    const [show1, setShow1] = useState('hide');
    const [show2, setShow2] = useState('hide');
    return (
        <div className={'navigation' + ' ' + props.bkgNav} onClick={() => { setShow1('hide'); setShow2('hide') }}>
            <div className="slider" onClick={() => { show0 === 'show' ? setShow0('hide') : setShow0('show'); }}><i className="fa fa-bars"></i></div>
            <div className={'nav ' + show0}>
                {props.datas.map((p) => {
                    let show = (p.pid === 1) ? show1 : show2;
                    return (
                        <div key={'parent' + p.pid} className={'nav-parent'}>
                            <a key={'p' + p.pid} id={p.pid} href={'/park-' + p.pslug} alt={p.pname} className={'link show ' + props.bkgNav} onMouseOver={(e) => {
                                if (e.target.id === '1') { setShow1('show'); setShow2('hide') }
                                if (e.target.id === '2') { setShow2('show'); setShow1('hide') }
                            }}>{p.pname}
                            </a>
                            <div key={'child' + p.pid} className={'nav-childs ' + show}>
                                {p.univers.map((u) => {
                                    return (<a key={'u' + u.uid} className={'link'} href={'/park/' + p.pslug + '/univers/' + u.uslug}>{u.uname}</a>)
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}