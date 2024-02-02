import '../../../assets/css/public/navigation.css';
import { Logo } from './Logo.js';
import { useState } from 'react';

export const Navigation = (props) => {
    const url = window.location.href;
    const admin = url.includes('admin');
    const [show0, setShow0] = useState('hide');
    const [show1, setShow1] = useState('hide');
    const [show2, setShow2] = useState('hide');
    if (admin) {
        return (
            <div className="nav-admin">
                <div className="slider" onClick={() => { show0 === 'show' ? setShow0('hide') : setShow0('show'); }}>
                    <i className="fa fa-bars"></i>
                </div>
                <div className={'nav ' + show0}>
                    {props.entities.map((slug) => {
                        const active = (url.includes(slug)) ? 'active' : '';
                        return (
                            <div className="nav-parent">
                            <a key={slug} className={'link ' + active} href={'/admin/entity/collection/' + slug}>{slug}</a>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    } else {
        return (
            <div className={'navigation ' + props.bkgNav}>
                <div className="slider" onClick={() => { show0 === 'show' ? setShow0('hide') : setShow0('show'); }}>
                    <i className="fa fa-bars"></i>
                </div>
                <a className="logo" href="/" alt="Home"><Logo /></a>
                <div className={'nav ' + show0}>
                    {props.datas.map((p) => {
                        let show = (p.pid === 1) ? show1 : show2;
                        const href = '/park-' + p.pslug;
                        return (
                            <div key={'parent' + p.pid} className="nav-parent">
                                <a key={'p' + p.pid} id={p.pid} href={href} alt={p.pname} className={'link show ' + props.bkgNav} onMouseOver={(e) => {
                                    if (e.target.id === '1') { setShow1('show'); setShow2('hide') }
                                    if (e.target.id === '2') { setShow2('show'); setShow1('hide') }
                                }}>{p.pname}
                                </a>
                                <div key={'child' + p.pid} className={'nav-childs ' + show}>
                                    {p.univers.map((u) => {
                                        const href = '/park/' + p.pslug + '/univers/' + u.uslug;
                                        return (<a key={'c' + u.uid} className="link" href={href}>{u.uname}</a>)
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}