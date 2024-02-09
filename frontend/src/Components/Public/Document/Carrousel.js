import "../../../assets/css/public/carrousel.css";
import { useState } from "react";
import Card from "./Card.js";
import { CountLoadedFiles } from "../Files/CountLoadedFiles.js";
import { CountCardByScreen } from "../Files/CountCardByScreen.js";

/*
@require bkgNav
@requre legend
@require datas {id,name,slug,route}
*/

export const Carrousel = (props) => {
    const uri = window.location.href;
    const incr = 300;
    const marg = 0;
    const cardsByScreen = CountCardByScreen();
    const [index, setIndex] = useState(1);
    const [margX, setMargX] = useState(0);
    const [showPrev, setShowPrev] = useState('hide');
    const [showNext, setShowNext] = useState('show');
    const [total, setTotal] = useState(0);
    return (
        <section className={'carrousel ' + props.bkgNav}>
            <div className="legend">{props.legend}</div>
            <div className="block">
                <div className={'prev ' + showPrev} onClick={() => {
                    setIndex(index - 1);
                    setMargX(margX - (incr + marg));
                    if (margX < (incr + marg) * 2) setShowPrev('hide');
                    if (index === 2) setShowNext('show')
                }}>
                    <i className="fa fa-chevron-circle-left" aria-hidden="true"></i>
                </div>
                <div className={'next ' + showNext} onClick={() => {
                    setIndex(index + 1);
                    setMargX(margX + (incr + marg));
                    if (uri.includes('attraction')) { setTotal(CountLoadedFiles) } else { setTotal(props.datas.length); }
                    if (margX >= (incr + marg)) setShowPrev('show');
                    if (index === total - cardsByScreen) { setShowNext('hide'); } 
                    console.log('next',index,total-cardsByScreen)
                }}>
                    <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
                </div>
                <div className="wrapper" style={{ marginLeft: -margX + 'px' }} id="wrapper">
                    {props.datas.map((item) => {
                        return <Card key={item.aslug} item={item} />;
                    })}
                </div>
            </div>
        </section>
    );
};
