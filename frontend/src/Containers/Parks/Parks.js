import './parks.css';
import { useState, useEffect } from 'react';
import { Carrousel } from '../../Components/Carrousel/Carrousel.js';

export const Parks = (props) => {
    const [park, setPark] = useState([]);
    const tt_univers = props.univers.length;
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
            <Carrousel datas={props.univers} slugs={props.slugs} bkgNav={props.bkgNav} />
            {park.map((el) => {
                return (
                    <section key={el.slug} className="infos">
                        <div className="col-left">
                            <a href={'/'} className={'logo logo-' + el.slug} alt={el.name}>
                            <div className="back"><i className="fa fa-reply"></i></div>
                            </a>
                        </div>
                        <div className="col-infos">
                            <div className="name">{el.name}</div>
                            <ul className="list">
                                <li><i>Name</i><div>{el.name}</div></li>
                                <li><i>Total univers</i><div>{tt_univers + ' univers'}</div></li>
                                <li><i>Univers</i>
                                    {props.univers.map((e) => {
                                        return (
                                            <div key={e.slug}>{e.name}</div>
                                        )
                                    })}
                                </li>
                            </ul>
                        </div>
                        <div className="description">{el.description}</div>
                    </section>
                )
            })}
        </div>
    )
}