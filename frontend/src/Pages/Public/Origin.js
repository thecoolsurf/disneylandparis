import '../../assets/css/public/bloc-category.css';
import '../../assets/css/public/bloc-description.css';
import { useState, useEffect } from 'react';
import { BreadCrumb } from '../../Components/Public/Document/Breadcrumb.js';

export const Origin = (props) => {
    const [attractions, setAttractions] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const datasAttractions = await fetch(`http://localhost:80/attractions_by_origin?id=${props.id}`);
            const attractions = await datasAttractions.json();
            setAttractions(attractions);
        };
        fetchData();
    }, []);
    const odescription = attractions[0] ? attractions[0].odescription : '';
    return (
        <section className="category">
            <BreadCrumb />
            <div className="title">
                <div className="title-origin">Origine</div>
                <div className="title-name">{props.name}</div>
                <div className="title-origin">Liste des attractions</div>
                <div className="title-infos">{attractions.length + ' attractions'}</div>
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
            <div className="description">
                {odescription}
            </div>
        </section>
    )
}