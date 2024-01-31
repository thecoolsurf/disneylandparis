import { useState, useEffect } from 'react';
import { Carrousel } from '../../Components/Public/Carrousel.js';
import { LinkToFinder } from '../../Components/Public/LinkToFinder.js';

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
    let legend = 'Liste des attractions - ' + props.uname + ' - ' + props.pname;
    return (
        <div className="univers">
            <LinkToFinder />
            <Carrousel datas={attractions} slugs={props.slugs} bkgNav={props.bkgNav} legend={legend} />
            {univers.map((el) => {
                return (
                    <section key={el.slug} className="infos">
                        <div className="col-infos">
                            <div className="col-logo">
                                <a href={'/park-' + props.slugs[2]} alt={el.name}>
                                    <div className="logo icons-disneylandparis" >
                                        <div className={'icon-' + el.slug}></div>
                                        <div className="back"><i className="fa fa-reply"></i></div>
                                    </div>
                                    <div className="name">{el.name}</div>
                                </a>
                            </div>
                            <ul className="list">
                                <li><i>Park</i><div>{props.pname}</div></li>
                                <li><i>Univers</i><div>{el.name}</div></li>
                                <li><i>Total attractions</i><div>{attractions.length + ' ' + str_attraction}</div></li>
                                <li className="list-attraction"><i>Liste des attractions</i>
                                    <ul>
                                        {attractions.map((e) => {
                                            return (
                                                <li key={e.slug} className="item">
                                                    {e.name}
                                                </li>
                                            )
                                        })}
                                    </ul>
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