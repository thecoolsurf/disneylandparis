import "../../../assets/css/public/carrousel.css";
import Card from "./Card.js";
import { useState } from "react";

/*
@require bkgNav
@requre legend
@require datas {id,name,slug,route}
*/


export const Carrousel = (props) => {
    const incr = 300;
    const marg = 0;
    const [index, setIndex] = useState(1);
    const [margX, setMargX] = useState(0);
    const [showPrev, setShowPrev] = useState('hide');
    const [showNext, setShowNext] = useState('show');
    const carrousel = document.getElementById('carrousel');
    const totalImg = document.querySelectorAll('.img').length;
    const maxInFrame = Math.round(Math.floor(carrousel / incr));
    const total = totalImg - maxInFrame;
    return (
        <section className={'carrousel ' + props.bkgNav} id="carrousel">
            <div className="legend">{props.legend}</div>
            <div className="block">
                <div className={'prev ' + showPrev} onClick={() => {
                    setIndex(index - 1);
                    setMargX(margX - (incr + marg));
                    if (margX < (incr + marg) * 2) setShowPrev('hide');
                }}>
                    <i className="fa fa-chevron-circle-left" aria-hidden="true"></i>
                </div>
                <div className={'next ' + showNext} onClick={() => {
                    setIndex(index + 1);
                    setMargX(margX + (incr + marg));
                    if (margX >= (incr + marg)) setShowPrev('show');
                    if (index === total) setShowNext('hide');
                    console.log('index',index,'total',total);
                }}>
                    <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
                </div>
                <div className="wrapper" style={{ marginLeft: -margX + 'px' }}>
                    {props.datas.map((item) => {
                        return <Card key={item.aslug} item={item} />;
                    })}
                </div>
            </div>
            <script>
                
            </script>
        </section>
    );
};
