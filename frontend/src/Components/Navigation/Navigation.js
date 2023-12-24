import './navigation.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Navigation = (props) => {
    const [slidedown,setSlidedown] = useState('slidedown show');
    const location = useLocation()
    let url = location.pathname.toLowerCase().replace('/', '');
    return (
        <div className="nav">
            <div className="slider" onClick={()=>{
                slidedown === 'slidedown show' ? setSlidedown('slidedown hide') : setSlidedown('slidedown show');
            }}><i className="fa fa-bars"></i>
            </div>
            <div className={slidedown}>
                {props.menus.map((item, i) => {
                    const active = item.url === url ? 'link active' : 'link';
                    return (
                        <a className={active} href={item.url} alt={item.name}>{item.name}</a>
                    )
                })}
            </div>
        </div>
    );
}
