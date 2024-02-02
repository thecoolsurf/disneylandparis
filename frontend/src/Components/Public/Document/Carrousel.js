import "../../../assets/css/public/carrousel.css";
import Card from "./Card.js";
import { useState } from "react";

/*
@require bkgNav
@requre legend
@require slugs
@require datas {id,slug,name}
*/

export const Carrousel = (props) => {
  const incr = 300;
  const marg = 0;
  const total = props.datas.length;
  const [index, setIndex] = useState(1);
  const [margX, setMargX] = useState(0);
  const [showPrev, setShowPrev] = useState('hide');
  const [showNext, setShowNext] = useState('show');
  return (
    <section className={'carrousel ' + props.bkgNav}>
      <div className="legend">{props.legend}</div>
      <div className={'prev ' + showPrev} onClick={() => {
        setMargX(margX - (incr + marg));
        if (margX < (incr + marg) * 2) { setShowPrev('hide'); setShowNext('show'); }
      }}>
        <i className="fa fa-chevron-circle-left" aria-hidden="true"></i>
      </div>
      <div className={'next ' + showNext} onClick={() => {
        setIndex(index + 1);
        setMargX(margX + (incr + marg));
        if (margX > (incr + marg)) { setShowPrev('show'); setShowNext('hide'); }
        if (index === total - 1 || total < 4) { setShowNext('hide'); }
      }}>
        <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
      </div>
      <div className="wrapper" style={{ marginLeft: -margX + 'px' }}>
        {props.datas.map((item) => {
          return <Card key={item.aslug} slugs={props.slugs} item={item} />;
        })}
      </div>
    </section>
  );
};
