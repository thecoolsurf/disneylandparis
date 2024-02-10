import '../../assets/css/public/parks.css';
import { useState, useEffect } from 'react';
import { FilterPark } from '../../Components/Public/Filters/FilterPark.js';
import { BreadCrumb } from '../../Components/Public/Document/Breadcrumb.js';
import { FilterAttractions } from '../../Components/Public/Filters/FilterAttractions.js';
import { Carrousel } from '../../Components/Public/Document/Carrousel.js';
import { BlockLogo } from '../../Components/Public/Blocks/BlockLogo.js';
import { BlockInfos } from '../../Components/Public/Blocks/BlockInfos.js';

export const Park = (props) => {
    const [parks, setParks] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const datasParks = await fetch(`http://localhost:80/park_by_id?id=${props.id}`);
            const parks = await datasParks.json();
            setParks(parks);
        };
        fetchData();
    }, []);
    const park = FilterPark(parks);
    const attractions = FilterAttractions(props.navigation, props.id);
    let legend = 'Liste des univers - ' + props.name;
    return (
        <div key="park" className="park">
            <Carrousel datas={parks} bkgNav={props.bkgNav} legend={legend} />
            <section className="infos">
                {park.map((p) => {
                    return (
                        <>
                            <div key={p.pid} className="bloc-infos">
                                <BlockLogo slug={p.pslug} legend={p.pname} />
                                <BlockInfos back={'/'} univers={parks} attractions={attractions} />
                            </div>
                            <div className="description">
                                <BreadCrumb />
                                <div className="category">Parc à thèmes</div>
                                <h2 className="title">{p.pname}</h2>
                                <p className="texte">{p.description}</p>
                            </div>
                        </>
                    )
                })}
            </section>
        </div>
    )
}