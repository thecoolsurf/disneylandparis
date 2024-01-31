import { useState, useEffect } from 'react';
import { Carrousel } from '../../Components/Public/Carrousel.js';

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
    let legend = 'Galerie d\'images - ' + props.name;
    return (
        <div className="attraction">
            <Carrousel datas={attraction} slugs={props.slugs} bkgNav={props.bkgNav} legend={legend} />
            {attraction.map((el) => {
                let path = '/park/' + props.slugs[2] + '/univers/' + props.slugs[4];
                return (
                    <section key={el.slug} className="infos">
                        <div className="col-infos">
                        <div className="col-logo">
                            <a href={path} className={'logo icon-' + el.slug} title={el.name}>
                                <div className="back"><i className="fa fa-reply"></i></div>
                            </a>
                            <div className="name">{el.name}</div>
                        </div>
                            <ul className="list">
                                <li>
                                    <i>Park</i>
                                    <div>{props.pname}</div>
                                </li>
                                <li>
                                    <i>Univers</i>
                                    <div>{props.uname}</div>
                                </li>
                                <li>
                                    <i>Public</i>
                                    <div>{el.public}</div>
                                </li>
                                <li>
                                    <i>Interet</i>
                                    <div>{el.iname}</div>
                                    <div className="note">{el.idescription}</div>
                                </li>
                                <li>
                                    <i>Restriction</i>
                                    <div>{el.hname}</div>
                                    <div className="note">{el.hdescription}</div>
                                </li>
                                <li>
                                    <i>Securite</i>
                                    <div>{el.ename}</div>
                                    <div className="note">{el.edescription}</div>
                                </li>
                                <li>
                                    <i>Sensation</i>
                                    <div>{el.sname}</div>
                                    <div className="note">{el.sdescription}</div>
                                </li>
                                <li>
                                    <i>Handicap</i>
                                    <div>{el.hhname}</div>
                                    <div className="note">{el.hhdescription}</div>
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