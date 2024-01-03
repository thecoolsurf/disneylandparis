import './navigation.css';
import { useState } from 'react';

export const Navigation = (props) => {
    const [slideDown, setSlideDown] = useState('nav show');
    const [slidePark, setSlidePark] = useState('link hide');
    const [slideStudio, setSlideStudio] = useState('link hide');
    let tag = '';
    let css = '';
    let href = '';
    return (
        <div className={'navigation' + ' ' + props.bkgNav}>
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
                                    setSlidePark('show');
                                    setSlideStudio('hide')
                                }
                                if (el.id === 2) {
                                    setSlidePark('hide');
                                    setSlideStudio('show')
                                }
                            }}>{el.name}
                            </a>
                            <div className="nav-childs">
                                {props.universPark.map((p) => {
                                    css = 'link'+' '+slidePark+' '+props.bkgNav;
                                    href = '/park/'+p.pslug+'/univers/'+p.slug;
                                    tag = el.id === 1 ? <a className={css} href={href}>{p.name}</a> : '';
                                    return tag;
                                })}
                                {props.universStudio.map((s) => {
                                    css = 'link'+' '+props.bkgNav+' '+slideStudio;
                                    href = '/park/'+s.pslug+'/univers/'+s.slug;
                                    tag = el.id === 2 ? <a className={css} href={href}>{s.name}</a> : '';
                                    return tag;
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
