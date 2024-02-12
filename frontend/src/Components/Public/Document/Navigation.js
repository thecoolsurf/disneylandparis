import '../../../assets/css/public/navigation.css';
import { useState } from 'react';
import { FilterBkgColor } from '../Filters/FilterBkgColor';

export const Navigation = (props) => {
    const [show0, setShow0] = useState('hide');
    const [show1, setShow1] = useState('hide');
    const [show2, setShow2] = useState('hide');
    const bkgNav = FilterBkgColor();
    const uri = window.location.href;
    if (uri.includes('admin')) {
        return (
            <div className="nav-admin">
                <div className="slider" onClick={() => { show0 === 'show' ? setShow0('hide') : setShow0('show'); }}>
                    <i className="fa fa-bars"></i>
                </div>
                <div className={'nav ' + show0}>
                    <div className="nav-parent">
                        {props.entities.map((name) => {
                            const active = (uri.includes(name)) ? 'active' : '';
                            return (
                                <a key={name} className={'link ' + active} href={'/admin/entity/collection/' + name}>{name}</a>
                            )
                        })}
                    </div>
                    <div className="nav-parent">
                        {props.selectors.map((name) => {
                            const active = (uri.includes(name)) ? 'active' : '';
                            return (
                                <a key={name} className={'link ' + active} href={'/admin/entity/collection/' + name}>{name}</a>
                            )
                        })}
                    </div>
                </div>
            </div >
        )
    } else {
        return (
            <div className={'navigation ' + bkgNav}>
                <div className="slider" onClick={() => { show0 === 'show' ? setShow0('hide') : setShow0('show'); }}>
                    <i className="fa fa-bars"></i>
                </div>
                <a className="logo" href="/" alt="Home">DisneylandParis</a>
                <div className={'nav ' + show0}>
                    {props.datas.map((p) => {
                        let show = (p.pid === 1) ? show1 : show2;
                        return (
                            <div key={'parent' + p.pid} className="nav-parent">
                                <a key={'p' + p.pid} id={p.pid} href={p.proute} alt={p.pname} className={'link show ' + bkgNav} onMouseOver={(e) => {
                                    if (e.target.id === '1') { setShow1('show'); setShow2('hide') }
                                    if (e.target.id === '2') { setShow2('show'); setShow1('hide') }
                                }}>{p.pname}
                                </a>
                                <div key={'child' + p.pid} className={'nav-childs ' + show}>
                                    {p.univers.map((u) => {
                                        return (<a key={'c' + u.uid} className={'link link-' + p.pid} href={u.uroute}>{u.uname}</a>)
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