import { useState, useEffect } from 'react';
import { FilterRoute } from '../../Components/Public/Filters/FilterRoute.js';
import { Carrousel } from '../../Components/Public/Document/Carrousel.js';
import { BlockLogo } from '../../Components/Public/Blocks/BlockLogo.js';
import { BlockInfos } from '../../Components/Public/Blocks/BlockInfos.js';

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
    const legend = attraction[0] ? 'Galerie d\'images - ' + attraction[0].aname : '';
    return (
        <div className="attraction">
            <Carrousel datas={attraction} slugs={props.slugs} bkgNav={props.bkgNav} legend={legend} />
            <section className="infos">
                {attraction.map((el) => {
                    const back = FilterRoute(el.aroute, 'attraction');
                    return (
                        <>
                            <div className="bloc-infos">
                                <BlockLogo slug={el.aslug} legend={el.aname} />
                                <BlockInfos back={back} univers={[1]} attractions={attraction} />
                            </div>
                            <div className="description">
                                <div className="category">{el.cname}</div>
                                <h2 className="title">{el.aname}</h2>
                                <p className="texte">{el.description}</p>
                            </div>
                        </>
                    )
                })}
            </section>
        </div>
    )
}