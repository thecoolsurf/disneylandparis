import '../../assets/css/public/parks.css';
import { useState, useEffect } from 'react';
import { Carrousel } from '../../Components/Public/Carrousel.js';
import { LinkToFinder } from '../../Components/Public/LinkToFinder.js';
import { FilterParkAndUnivers } from '../../Components/Public/FilterParkAndUnivers.js';
import { FilterAttractions } from '../../Components/Public/FilterAttractions.js';

export const Parks = (props) => {
    const [parks, setParks] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const datasParks = await fetch(`http://localhost:80/park_by_id?id=${props.id}`);
            const parks = await datasParks.json();
            setParks(parks);
        };
        fetchData();
    }, []);
    const park = FilterParkAndUnivers(parks);
    const attractions = props.navigation;
    let legend = 'Liste des univers - ' + props.name;
    const tt_univers = parks.length;
    return (
        <div className="parks">
            <LinkToFinder />
            <Carrousel datas={parks} slugs={props.slugs} bkgNav={props.bkgNav} legend={legend} />
            {park.map((p) => {
                const tt_attractions = FilterAttractions(attractions, props.id).length + ' attractions';
                return (
                    <section key={p.pslug} className="infos">
                        <div className="col-left">
                            <a href={'/'} alt={p.pname}>
                                <div className="logo icons-disneylandparis" >
                                    <div className={'icon-' + p.pslug}></div>
                                    <div className="back"><i className="fa fa-reply"></i></div>
                                </div>
                                <div className="name">{p.pname}</div>
                            </a>
                        </div>
                        <div className="col-infos">
                            <ul className="list">
                                <li><i>Nom</i><div>{p.pname}</div></li>
                                <li><i>Total des univers</i><div>{tt_univers + ' univers'}</div></li>
                                <li><i>Liste des univers</i>
                                    {parks.map((u) => {
                                        return (
                                            <div key={u.uslug}>{u.uname}</div>
                                        )
                                    })}
                                </li>
                                <li><i>Total attractions</i><div>{tt_attractions}</div></li>
                            </ul>
                        </div>
                        <div className="description">{p.description}</div>
                    </section>
                )
            })}
        </div>
    )
}