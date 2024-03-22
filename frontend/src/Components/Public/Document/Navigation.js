import '../../../assets/css/public/navigation.css';
import { useState } from 'react';
import { FilterBkgColor } from '../Filters/FilterBkgColor';

export const Navigation = (props) => {
    const [show0, setShow0] = useState('hide');
    const [show1, setShow1] = useState('hide');
    const [show2, setShow2] = useState('hide');
    const [show3, setShow3] = useState('hide');
    let show = '';
    const bkgNav = FilterBkgColor();
    const uri = window.location.href;
    if (uri.includes('admin')) {
        /* admin */
        return (
            <div className="nav-admin">
                <div className="slider" onClick={() => { show0 === 'show' ? setShow0('hide') : setShow0('show'); }}>
                    <i className="fa fa-bars"></i>
                </div>
                <div className="legend-entity" id="entity"></div>
                <div className={'nav ' + show0}>
                    <div className="nav-parent">
                        {props.admin[0].map((name) => {
                            const active = (uri.includes(name)) ? 'active' : '';
                            return (
                                <a key={name} className={'link ' + active} href={'/admin/entity/collection/' + name}>{name}</a>
                            )
                        })}
                    </div>
                    <div className="nav-parent">
                        {props.admin[1].map((name) => {
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
        /* public */
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
                                <div id={p.pid} className={'link show ' + bkgNav} onClick={(e) => {
                                    if (e.target.id === '1') { setShow1('show'); setShow2('hide') }
                                    if (e.target.id === '2') { setShow2('show'); setShow1('hide') }
                                }}>{p.pname}
                                </div>
                                <div key={'child' + p.pid} className={'nav-childs ' + show}>
                                    {p.univers.map((u) => {
                                        return (<a key={'c' + u.uid} className={'link link-' + p.pid} href={u.uroute}>{u.uname}</a>)
                                    })}
                                </div>
                            </div>
                        )
                    })}
                    <div className="nav-parent">
                        <div className={'link show '+ bkgNav} onClick={(e) => {
                            setShow3('show'); setShow1('hide'); setShow2('hide');
                        }}>Attractions
                        </div>
                        <div className={'nav-childs ' + show3}>
                            <a className="link link-3" href="/categories" alt="categories">par Catégories</a>
                            <a className="link link-3" href="/origines" alt="origines">par Origines</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}