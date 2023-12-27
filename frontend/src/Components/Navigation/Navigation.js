import './navigation.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Navigation = (props) => {
    const [slideDown, setSlideDown] = useState('nav show');
    const [bkgPark, setBkgPark] = useState('link');
    const [slidePark, setSlidePark] = useState('link hide');
    const [bkgStudio, setBkgStudio] = useState('link');
    const [slideStudio, setSlideStudio] = useState('link hide');
    const location = useLocation()
    let url = location.pathname.toLowerCase().replace('/', '');
    let tag = '';
    return (
        <div className="navigation">
            <div className="slider" onClick={() => {
                slideDown === 'slidedown show' ? setSlideDown('slidedown hide') : setSlideDown('slidedown show');
            }}><i className="fa fa-bars"></i>
            </div>
            <div className={slideDown}>
            {props.parks.map((el) => {
                let bkgActive = el.id === 1 ? bkgPark : bkgStudio;
                return (
                    <>
                        <div id={el.id} class={bkgActive} onClick={(e) => {
                            let id = e.target.id;
                            if (el.id === 1) {
                                setBkgPark('link active')
                                setBkgStudio('link')
                                setSlidePark('link show');
                                setSlideStudio('link hide')}
                            if (el.id === 2) {
                                setBkgPark('link')
                                setBkgStudio('link active')
                                setSlidePark('link hide');
                                setSlideStudio('link show')}
                        }}>{el.name}
                        </div>
                        {props.universPark.map((e) => {
                            tag = el.id === 1 ? <a className={slidePark} href={e.slug}>{e.name}</a> : '';
                            return tag;
                        })}
                        {props.universStudio.map((e) => {
                            tag = el.id === 2 ? <a className={slideStudio} href={e.slug}>{e.name}</a> : '';
                            return tag;
                        })}
                    </>
                )
            })
            }
            </div>
        </div>
    );
}
