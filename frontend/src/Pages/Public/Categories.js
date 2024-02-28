import '../../assets/css/public/categories.css';
import { useState, useEffect } from 'react';
import { BreadCrumb } from '../../Components/Public/Document/Breadcrumb.js';

export const Categories = (props) => {
    console.log(props.id)
    const [attractions, setAttractions] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const datasAttractions = await fetch(`http://localhost:80/attractions_by_category?id=${props.id}`);
            const attractions = await datasAttractions.json();
            setAttractions(attractions);
        };
        fetchData();
    }, []);
    console.log(attractions)
    return (
        <section className="categories">
            <BreadCrumb />
            <div className="list">
                {attractions.map((el) => {
                    return (
                        <a href={el.aroute} alt={el.aname} className="item">
                            <div className="park-name">{el.pname}</div>
                            <div className="univers-name">{el.uname}</div>
                            <div className="logo">
                                <div className={'img icon-'+el.aslug}></div>
                            </div>
                            <div className="name">{el.aname}</div>
                        </a>
                    )
                })}
            </div>
        </section>
    )
}