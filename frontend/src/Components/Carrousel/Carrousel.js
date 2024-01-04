import "./carrousel.css";
import Card from "../Card/Card.js";
import { useState } from "react";

export const Carrousel = (props) => {
  const incr = 200;
  const marg = 20;
  const total = props.total;
  const [index, setIndex] = useState(1);
  const [margX, setMargX] = useState(0);
  const [showPrev, setShowPrev] = useState('prev hide');
  const [showNext, setShowNext] = useState('next show');
  return (
    <section className={'carrousel ' + props.bkgNav}>
      <div className={showPrev} onClick={() => {
        setMargX(margX - (incr + marg));
        if (margX < (incr + marg) * 2) setShowPrev('prev hide');
      }}>
        <i className="fa fa-chevron-circle-left" aria-hidden="true"></i>
      </div>
      <div className={showNext} onClick={() => {
        setIndex(index + 1);
        setMargX(margX + (incr + marg));
        if (margX > (incr + marg)) setShowPrev('prev show');
        if (index === total - 6) setShowNext('next hide');
      }}>
        <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
      </div>
      <div className="wrapper" style={{ marginLeft: -margX + 'px' }}>
        {props.datas.map((item) => {
          return <Card slugs={props.slugs} slug={props.slug} datas={item} />;
        })}
      </div>
    </section>
  );
};
