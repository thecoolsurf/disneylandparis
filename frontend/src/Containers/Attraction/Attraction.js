import './attraction.css';
import { useState, useEffect } from 'react';

export const Attraction = (props) => {
    const [attraction, setAttraction] = useState([]);
    useEffect(() => {
        const fetchtheData = async () => {
            const dataAttraction = await fetch(`http://localhost:80/attraction_by_id?id=${props.id}`);
            const attraction = await dataAttraction.json();
            setAttraction(attraction);
        };
        fetchtheData();
    }, []);
    return (
        <div className="attraction">
            {attraction.map((el) => {
                return (
                    <section className="infos">
                        <div className="col-left">
                            <div className={'logo logo-' + el.slug} title={el.name}></div>
                            <div className="back">
                                <a className="link" href={'/park/' + props.pslug + '/univers/' + props.uslug}>
                                    Back to Univers
                                </a>
                            </div>
                        </div>
                        <div className="col-infos">
                            <div className="name">{el.name}</div>
                            <ul className="list">
                                <li><i>Park</i><div>{props.pname}</div></li>
                                <li><i>Univers</i><div>{props.uname}</div></li>
                                <li><i>Public</i><div>{el.public}</div></li>
                                <li><i>Restriction</i><div>{el.restriction}</div></li>
                            </ul>
                        </div>
                        <div className="description">{el.description}</div>
                    </section>
                )
            })}
        </div>
    )
}