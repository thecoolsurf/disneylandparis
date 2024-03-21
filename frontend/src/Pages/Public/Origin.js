import '../../assets/css/public/origin.css';
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
    return (
        <section className="origin">
            <BreadCrumb />
            <h1>Liste des attractions par origine: {props.name} ({attractions.length})</h1>
            <div className="description">
                Texte de description.
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