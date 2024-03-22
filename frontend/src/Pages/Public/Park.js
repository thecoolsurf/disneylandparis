import '../../assets/css/public/parks.css';
import '../../assets/css/public/bloc-infos.css';
import '../../assets/css/public/bloc-description.css';
import { useState, useEffect } from 'react';
import { FilterPark } from '../../Components/Public/Filters/FilterPark.js';
import { FilterAttractions } from '../../Components/Public/Filters/FilterAttractions.js';
import { FilterCategory } from '../../Components/Public/Filters/FilterCategory.js';
import { BreadCrumb } from '../../Components/Public/Document/Breadcrumb.js';
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
    const categories = FilterCategory('park',props.navigation, props.id);
    return (
        <div key={'park'+props.id} className="park">
            <Carrousel datas={parks} />
            <section className="infos">
                {park.map((p) => {
                    return (
                        <>
                            <div key={'info'+p.pid} className="bloc-infos">
                                <BlockLogo slug={p.pslug} legend={p.pname} />
                                <BlockInfos back={'/'} univers={parks} attractions={attractions} categories={categories} />
                            </div>
                            <div key={'describe'+p.pid} className="description">
                                <BreadCrumb />
                                <div className="title-category">Parc à thèmes</div>
                                <h2 className="title-name">{p.pname}</h2>
                                <p className="texte">{p.description}</p>
                            </div>
                        </>
                    )
                })}
            </section>
        </div>
    )
}