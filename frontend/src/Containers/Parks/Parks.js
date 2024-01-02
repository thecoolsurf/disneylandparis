import './parks.css';
import { useState, useEffect } from 'react';

export const Parks = (props) => {
    const [park, setPark] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const dataPark = await fetch(`http://localhost:80/park_by_id_with_univers_count?id=${props.id}`);
            const park = await dataPark.json();
            setPark(park);
        };
        fetchData();
    }, []);
    return (
        <div className="parks">
            {park.map((el) => {
                return (
                    <section className="description">
                        <div className="infos">
                            <h1>{el.name}</h1>
                            <p>{el.description}</p>
                        </div>
                        <div className={'logo logo-'+el.slug}></div>
                        <div className="list-univers">
                            <div className="total">
                                <div className="tt">{props.univers.length}</div>
                                <div className="legend">univers</div>
                            </div>
                            <ul className="list">
                                {props.univers.map((e) => {
                                    return (
                                        <li>{e.name}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="list-logos">
                            {props.univers.map((e,) => {
                                return (
                                    <a className="link" href={'/park/' + el.slug + '/univers/' + e.slug} alt={e.name}>
                                        <div className={'logos logo-'+e.slug}></div>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </div>
    )
}