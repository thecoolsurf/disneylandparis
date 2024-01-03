import './parks.css';
import { useState, useEffect } from 'react';
import { Carrousel } from '../../Components/Carrousel/Carrousel.js';

export const Parks = (props) => {
    const [park, setPark] = useState([]);
    const [univers, setUnivers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const dataPark = await fetch(`http://localhost:80/park_by_id_with_univers_count?id=${props.id}`);
            const park = await dataPark.json();
            setPark(park);
        };
        fetchData();
    }, []);
    const str = park.length > 1 ? 'univers' : 'univers';
    return (
        <div className="parks">
            <Carrousel datas={props.univers} slug={props.slug} />
            {park.map((el) => {
                return (
                    <section className="infos">
                        <div className="col-left">
                            <a href={'/park-' + el.slug} className={'logo logo-' + el.slug} alt={el.name}></a>
                            <a className="link" href={'/'} alt="home">Back Home</a>
                        </div>
                        <div className="col-infos">
                            <div className="name">{el.name}</div>
                            <ul className="list">
                                <li><i>Name</i><div>{el.name}</div></li>
                                <li><i>Total univers</i><div>{props.univers.length + ' ' + str}</div></li>
                                <li><i>Univers</i>
                                    {props.univers.map((e) => {
                                        return (
                                            <div>{e.name}</div>
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