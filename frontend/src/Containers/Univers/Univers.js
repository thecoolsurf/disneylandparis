import { useState, useEffect } from 'react';
import { Carrousel } from '../../Components/Carrousel/Carrousel.js';

export const Univers = (props) => {
    const [univers, setUnivers] = useState([]);
    const [attractions, setAttractions] = useState([]);
    const str_attraction = attractions.length > 1 ? 'attractions' : 'attraction';
    useEffect(() => {
        const fetchData = async () => {
            const dataUnivers = await fetch(`http://localhost:80/univers_by_id?id=${props.id}`);
            const univers = await dataUnivers.json();
            setUnivers(univers);
            const dataAttractions = await fetch(`http://localhost:80/attractions_by_univers?id=${props.id}`);
            const attractions = await dataAttractions.json();
            setAttractions(attractions);
        };
        fetchData();
    }, []);
    return (
        <div className="univers">
            <Carrousel datas={attractions} slugs={props.slugs} slug={props.slug} bkgNav={props.bkgNav} />
            {univers.map((el) => {
                return (
                    <section className="infos">
                        <div className="col-left">
                            <a href={'/park-' + props.slugs[2]} className={'logo logo-' + el.slug} title={el.name}>
                                <div className="back"><i className="fa fa-reply"></i></div>
                            </a>
                        </div>
                        <div className="col-infos">
                            <div className="name">{el.name}</div>
                            <ul className="list">
                                <li><i>Park</i><div>{props.pname}</div></li>
                                <li><i>Univers</i><div>{el.name}</div></li>
                                <li><i>Total attractions</i><div>{attractions.length + ' ' + str_attraction}</div></li>
                                <li><i>Names</i>
                                    {attractions.map((e) => {
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