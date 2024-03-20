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
            <h1>Liste des attractions par catégorie: {props.name} ({attractions.length})</h1>
            <div className="description">
                Un système de réservation est mis en place dans le parc Walt Disney Studios afin de rencontrer les personnages Disney à Disneyland Paris. 
                Vous pourrez ainsi réserver votre rendez-vous à partir de l’application mobile «Lineberty», pour la trouver facilement un QRcode est présent 
                sur le programme à l’entrée.
                Les Points Selfies sont accessibles sur réservation via l’application Lineberty*.
                Disneyland Paris abrite tous vos personnages Disney préférés, et de nombreuses attractions, spectacles et parades accueillent Mickey et ses amis. 
                Vous trouverez les personnages Disney dans les deux Parcs aux lieux de rencontre dédiés et dans certains restaurants et principalement au Plaza Garden.
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