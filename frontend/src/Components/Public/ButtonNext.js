import { useState } from "react";

export const ButtonNext = (props) => {
    const incr = 300;
    const marg = 0;
    const total = props.total ? props.total : 0;
    const [index, setIndex] = useState(1);
    const [margX, setMargX] = useState(0);
    const [showPrev, setShowPrev] = useState('hide');
    const [showNext, setShowNext] = useState('show');
    return (
        <div id="next" className={'next ' + showNext} onClick={(e) => {
            setIndex(index + 1);
            setMargX(margX + (incr + marg));
            if (margX > (incr + marg)) { setShowPrev('show'); setShowNext('hide'); }
            if (index === total - 1 || total < 4) { setShowNext('hide'); }
        }}>
            <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
        </div>
    )
}