import '../../assets/css/public/categories.css';
import { useState, useEffect } from 'react';
import { BreadCrumb } from '../../Components/Public/Document/Breadcrumb.js';

export const Categories = (props) => {
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
        <section className="categories">
            <BreadCrumb />
            <h2>Liste des attractions par catégorie: {props.name}</h2>
            <div className="list">
                {attractions.map((el) => {
                    return (
                        <a href={el.aroute} alt={el.aname} className="logo">
                            <div className="img">
                                <div className={'icon icon-'+el.aslug}></div>
                            </div>
                            <div className="park-name">{el.pname}</div>
                            <div className="univers-name">{el.uname}</div>
                            <div className="category-name">{el.cname}</div>
                            <div className="legend">{el.aname}</div>
                        </a>
                    )
                })}
            </div>
        </section>
    )
}