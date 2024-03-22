import '../../assets/css/public/bloc-category.css';
import '../../assets/css/public/bloc-infos.css';
import { useState, useEffect } from 'react';
import { BreadCrumb } from '../../Components/Public/Document/Breadcrumb.js';

export const Category = (props) => {
    const [attractions, setAttractions] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const datasAttractions = await fetch(`http://localhost:80/attractions_by_category?id=${props.id}`);
            const attractions = await datasAttractions.json();
            setAttractions(attractions);
        };
        fetchData();
    }, []);
    return (
        <section className="category">
            <BreadCrumb />
            <div className="title">
                <div className="title-category">Categorie</div>
                <div className="title-name">{props.name}</div>
                <div className="title-category">Liste des attractions par categorie</div>
                <div className="title-info">Nombre des attractions: {attractions.length}</div>
            </div>
            <div className="list">
                {attractions.map((el) => {
                    return (
                        <a href={el.aroute} alt={el.aname} className="logo">
                            <div className="img">
                                <div className={'icon icon-' + el.aslug}></div>
                            </div>
                            <div className="park-name">{el.pname}</div>
                            <div className="univers-name">{el.uname}</div>
                            <div className="park-name">{'Origine'}</div>
                            <div className="univers-name">{el.oname}</div>
                            <div className="category-name">{el.cname}</div>
                            <div className="legend">{el.aname}</div>
                        </a>
                    )
                })}
            </div>
        </section>
    )
}