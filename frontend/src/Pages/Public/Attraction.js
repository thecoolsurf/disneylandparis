import { useState, useEffect } from 'react';
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
    let legend = 'Galerie d\'images - ' + props.name;
    let path = '/park/' + props.slugs[2] + '/univers/' + props.slugs[4];
    let description = attraction[0] ? attraction[0].description : '';
    return (
        <div className="attraction">
            <Carrousel datas={attraction} slugs={props.slugs} bkgNav={props.bkgNav} legend={legend} />
            <section className="infos">
                <div className="bloc-infos">
                    <BlockLogo slug={props.slugs[4]} legend={props.name} />
                    <BlockInfos href={path} univers={[1]} attractions={attraction} />
                </div>
                <div className="description">{description}</div>
            </section>
        </div>
    )
}