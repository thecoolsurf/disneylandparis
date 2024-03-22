import '../../assets/css/public/bloc-infos.css';
import '../../assets/css/public/bloc-description.css';
import { useState, useEffect } from 'react';
import { FilterRoute } from '../../Components/Public/Filters/FilterRoute.js';
import { FilterCategory } from '../../Components/Public/Filters/FilterCategory.js';
import { BreadCrumb } from '../../Components/Public/Document/Breadcrumb.js';
import { Carrousel } from '../../Components/Public/Document/Carrousel.js';
import { BlockLogo } from '../../Components/Public/Blocks/BlockLogo.js';
import { BlockInfos } from '../../Components/Public/Blocks/BlockInfos.js';

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
    const categories = FilterCategory('univers',props.navigation, props.id);
    const uname = univers[0] ? univers[0].uname : '';
    let legend = [
        `Univers ${uname}`,
        `${categories.length} catégories`,
        `${attractions.length} attractions`,
        ``,
    ];
    return (
        <div className="univers">
            <Carrousel datas={attractions} legend={legend} />
            <section className="infos">
                {univers.map((el) => {
                    const back = FilterRoute(el.uroute, 'univers');
                    return (
                        <>
                            <div className="bloc-infos" key={el.uslug}>
                                <BlockLogo slug={el.uslug} legend={el.uname} />
                                <BlockInfos back={back} univers={univers} attractions={attractions} categories={categories} />
                            </div>
                            <div className="description">
                                <BreadCrumb />
                                <div className="title">
                                    <div className="title-category">Univers</div>
                                    <div className="title-name">{el.uname}</div>
                                </div>
                                <p className="texte">{el.description}</p>
                            </div>
                        </>
                    )
                })}
            </section>
        </div>
    )
}