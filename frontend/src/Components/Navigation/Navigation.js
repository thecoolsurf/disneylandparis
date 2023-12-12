import './navigation.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Navigation = (props) => {
    const [slidedown,setSlidedown] = useState('slidedown show');
    const location = useLocation()
    let url = location.pathname.toLowerCase().replace('/', '');
    let width = window.innerWidth;
    return (
        <div className="nav">
            <div className="slider" onClick={()=>{
                slidedown === 'slidedown show' ? setSlidedown('slidedown hide') : setSlidedown('slidedown show');
            }}><i className="fa fa-bars"></i>
            </div>
            <a className="link nav-home" href="/" onClick={()=>{
                width < 650 ? setSlidedown('slidedown hide') : setSlidedown('slidedown show');
            }}><i className="fa fa-home"></i>
            </a>
            <div className={slidedown}>
                {props.menus.map((item, i) => {
                    const active = item.url === url ? 'link active' : 'link';
                    return (
                        <a className={active} href={item.url}>{item.name}</a>
                    )
                })}
            </div>
        </div>
    );
}
