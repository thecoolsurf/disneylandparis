import '../../assets/css/public/parks.css';
import { useState, useEffect } from 'react';
import { FilterParkAndUnivers } from '../../Components/Public/FilterParkAndUnivers.js';
import { FilterAttractions } from '../../Components/Public/FilterAttractions.js';
import { Carrousel } from '../../Components/Public/Carrousel.js';
import { BlockLogo } from '../../Components/Public/BlockLogo.js';
import { BlockInfos } from '../../Components/Public/BlockInfos.js';

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
    const park = FilterParkAndUnivers(parks);
    let legend = 'Liste des univers - ' + props.name;
    return (
        <div className="park">
            <Carrousel datas={parks} slugs={props.slugs} bkgNav={props.bkgNav} legend={legend} />
            <section className="infos">
                {park.map((p) => {
                    const attractions = FilterAttractions(props.navigation, props.id);
                    return (
                        <>
                            <div className="bloc-infos">
                                <BlockLogo slug={p.pslug} legend={p.pname} />
                                <BlockInfos href={'/'} univers={parks} attractions={attractions} />
                            </div>
                            <div className="description">{p.description}</div>
                        </>
                    )
                })}
            </section>
        </div>
    )
}