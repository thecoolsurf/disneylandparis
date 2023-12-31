import "./carrousel.css";
import Card from "../Card/Card.js";
import { useState } from "react";

export const Carrousel = (props) => {
  const incr = 200;
  const marg = 0;
  const total = props.datas.length;
  const [index, setIndex] = useState(1);
  const [margX, setMargX] = useState(0);
  const [showPrev, setShowPrev] = useState('hide');
  const [showNext, setShowNext] = useState('show');
  return (
    <section className={'carrousel ' + props.bkgNav}>
      <div className={'prev '+showPrev} onClick={() => {
        setMargX(margX - (incr + marg));
        if (margX < (incr + marg) * 2) { setShowPrev('hide'); setShowNext('show'); }
      }}>
        <i className="fa fa-chevron-circle-left" aria-hidden="true"></i>
      </div>
      <div className={'next '+showNext} onClick={() => {
        setIndex(index + 1);
        setMargX(margX + (incr + marg));
        if (margX > (incr + marg)) { setShowPrev('show'); setShowNext('hide'); }
        if (index === total-1) { setShowNext('hide'); }
      }}>
        <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
      </div>
      <div className="wrapper" style={{ marginLeft: -margX + 'px' }}>
        {props.datas.map((item) => {
          return <Card key={item.slug} slugs={props.slugs} slug={props.slug} item={item} />;
        })}
      </div>
    </section>
  );
};
