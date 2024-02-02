import { useState, useEffect } from 'react';
import { Carrousel } from '../../Components/Public/Carrousel.js';
import { LinkToFinder } from '../../Components/Public/LinkToFinder.js';
import { BlockLogo } from '../../Components/Public/BlockLogo.js';
import { BlockInfos } from '../../Components/Public/BlockInfos.js';

export const Univers = (props) => {
    const [univers, setUnivers] = useState([]);
    const [attractions, setAttractions] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const datasUnivers = await fetch(`http://localhost:80/univers_by_id?id=${props.id}`);
            const univers = await datasUnivers.json();
            setUnivers(univers);
            const datasAttractions = await fetch(`http://localhost:80/attractions_by_univers?id=${props.id}`);
            const attractions = await datasAttractions.json();
            setAttractions(attractions);
        };
        fetchData();
    }, []);
    let legend = 'Liste des attractions - ' + props.uname + ' - ' + props.pname;
    return (
        <div className="univers">
            <LinkToFinder />
            <Carrousel datas={attractions} slugs={props.slugs} bkgNav={props.bkgNav} legend={legend} />
            <section className="infos">
                {univers.map((el) => {
                    return (
                        <>
                            <div className="bloc-infos" key={el.slug}>
                                <BlockLogo slug={el.uslug} legend={el.uname} />
                                <BlockInfos href={'/park-' + props.slugs[2]} univers={univers} attractions={attractions} />
                            </div>
                            <div className="description">{el.description}</div>
                        </>
                    )
                })}
            </section>
        </div>
    )
}