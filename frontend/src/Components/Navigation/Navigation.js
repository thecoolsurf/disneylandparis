import './navigation.css';
import { useState } from 'react';

export const Navigation = (props) => {
    const [slideDown, setSlideDown] = useState('nav show');
    const [slidePark, setSlidePark] = useState('link hide');
    const [slideStudio, setSlideStudio] = useState('link hide');
    let tagPark = '';
    let tagStudio = '';
    return (
        <div className="navigation">
            <div className="slider" onClick={() => {
                slideDown === 'slidedown show' ? setSlideDown('slidedown hide') : setSlideDown('slidedown show');
            }}><i className="fa fa-bars"></i>
            </div>
            <div className={slideDown}>
                {props.parks.map((el) => {
                    return (
                        <div className="nav-parent">
                            <a href={'/park-'+el.slug} alt={el.name} id={el.id} className="link" onMouseOver={(e) => {
                                e.preventDefault()
                                if (el.id === 1) {
                                    setSlidePark('link show');
                                    setSlideStudio('link hide')
                                }
                                if (el.id === 2) {
                                    setSlidePark('link hide');
                                    setSlideStudio('link show')
                                }
                            }}>{el.name}
                            </a>
                            <div className="nav-childs">
                                {props.universPark.map((epark) => {
                                    tagPark = el.id === 1 ? <a className={slidePark} href={'/park/'+epark.pslug+'/univers/'+epark.slug}>{epark.name}</a> : '';
                                    return tagPark;
                                })}
                                {props.universStudio.map((estud) => {
                                    tagStudio = el.id === 2 ? <a className={slideStudio} href={'/park/'+estud.pslug+'/univers/'+estud.slug}>{estud.name}</a> : '';
                                    return tagStudio;
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
