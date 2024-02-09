import { RequireContextPark } from "../Files/RequireContextPark.js";
import { RequireContextStudio } from "../Files/RequireContextStudio.js";

const Card = (props) => {
    const uri = window.location.href;
    if (uri.includes('park') && !uri.includes('univers')) {
        /* page Park */
        return (
            <a className="card" href={props.item.uroute} alt={props.item.uname}>
                <div className={'img icon-' + props.item.uslug}></div>
                <div className="legend">{props.item.uname}</div>
            </a>
        );
    }
    if (uri.includes('univers') && !uri.includes('attraction')) {
        /* page Univers */
        return (
            <a className="card" href={props.item.aroute} alt={props.item.aname}>
                <div className={'img icon-' + props.item.aslug}></div>
                <div className="legend">{props.item.aname}</div>
            </a>
        );
    }
    if (uri.includes('attraction') && uri.includes('park-park-disneyland')) {
        /* page attraction park */
        const collection = RequireContextPark();
        const files = collection.keys().map(image => collection(image));
        return (
            <div className="card-collection">
                {files.map((src) => {
                    return (<img className="img" src={src} title={props.item.aname} />)
                })}
            </div>
        );
    }
    if (uri.includes('attraction') && uri.includes('walt-disney-studios')) {
        /* page attraction studio */
        const collection = RequireContextStudio();
        const files = collection.keys().map(image => collection(image));
        return (
            <div className="card-collection">
                {files.map((src) => {
                    return (<img className="img" src={src} title={props.item.aname} />)
                })}
            </div>
        );
    }
};

export default Card;