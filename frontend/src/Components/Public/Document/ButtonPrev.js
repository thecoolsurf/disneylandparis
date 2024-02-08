import { useState } from "react";

export const ButtonPrev = () => {
    const incr = 300;
    const marg = 0;
    const [margX, setMargX] = useState(0);
    const [showPrev, setShowPrev] = useState('hide');
    const [showNext, setShowNext] = useState('show');
      return (
        <div className={'prev ' + showPrev} onClick={() => {
            setMargX(margX - (incr + marg));
            if (margX < (incr + marg) * 2) { setShowPrev('hide'); setShowNext('show'); }
        }}>
            <i className="fa fa-chevron-circle-left" aria-hidden="true"></i>
        </div>
    )
}