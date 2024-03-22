import '../../assets/css/public/bloc-infos.css';
import '../../assets/css/public/bloc-description.css';
import { useState, useEffect } from 'react';
import { FilterRoute } from '../../Components/Public/Filters/FilterRoute.js';
import { BreadCrumb } from '../../Components/Public/Document/Breadcrumb.js';
import { Carrousel } from '../../Components/Public/Document/Carrousel.js';
import { BlockLogo } from '../../Components/Public/Blocks/BlockLogo.js';
import { BlockInfos } from '../../Components/Public/Blocks/BlockInfos.js';
import { CreatedAt } from '../../Components/Public/Document/CreatedAt.js';

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
    const cname = attraction[0] ? attraction[0].cname : '';
    const aname = attraction[0] ? attraction[0].aname : '';
    const legend = [
        `${aname}`,
        `${cname}`,
        `Galerie d'images ${aname}`,
    ];
    return (
        <div className="attraction" key="attraction">
            <Carrousel datas={attraction} slugs={props.slugs} legend={legend} />
            <section className="infos">
                {attraction.map((el) => {
                    const back = FilterRoute(el.aroute, 'attraction');
                    return (
                        <>
                            <div className="bloc-infos" key={el.aname}>
                                <BlockLogo slug={el.aslug} legend={el.aname} />
                                <BlockInfos back={back} univers={[1]} attractions={attraction} />
                            </div>
                            <div className="description" key={el.cname}>
                                <CreatedAt date={el.created} />
                                <BreadCrumb />
                                <a className="title-category" href={'/categorie/'+el.cslug} alt={el.cname}>{'Catégorie '+el.cname}</a>
                                <div className="title-name">{el.aname}</div>
                                <a className="title-origin" href={'/origine/'+el.oslug} alt={el.oname}>{'Origine '+el.oname}</a>
                                <div className="title-author">{'Création '+el.author}</div>
                                <p className="texte">{el.description}</p>
                            </div>
                        </>
                    )
                })}
            </section>
        </div>
    )
}