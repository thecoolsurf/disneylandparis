import "./carousel.css";
import Card from "../Card/Card.js";
import { useState } from "react";

export const Attraction = (props) => {
  const incr = 200;
  const marg = 20;
  const total = props.total;
  const [index,setIndex] = useState(1);
  const [margX,setMargX] = useState(0);
  const [showPrev, setShowPrev] = useState('prev hide');
  const [showNext, setShowNext] = useState('next show');
  return (
    <section className="characters">
      { total === 0 ? ('<div className="loader"></div>') : '' }
      <div className={showPrev} onClick={() => {
        setMargX(margX-(incr+marg));
        if (margX < (incr+marg)*2) setShowPrev('prev hide');
      }}>
        <i className="fa fa-chevron-circle-left" aria-hidden="true"></i>
      </div>
      <div className={showNext} onClick={() => {
        setIndex(index+1);
        setMargX(margX+(incr+marg));
        if (margX > (incr+marg)) setShowPrev('prev show');
        if (index === total-6) setShowNext('next hide');
      }}>
        <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
      </div>
      <div className="wrapper" style={{marginLeft: -margX + 'px'}}>
        {props.datas.map((item,i) => {
          return <Card id={i} url={props.url} character={item} />;
        })}
      </div>
    </section>
  );
};
