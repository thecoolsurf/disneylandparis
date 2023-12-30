import './parks.css';
import { useState, useEffect } from 'react';

export const Parks = (props) => {
    const [park, setPark] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const dataPark = await fetch(`http://localhost:80/park_by_id?id=${props.id}`);
            const park = await dataPark.json();
            setPark(park);
        };
        fetchData();
    }, []);
    <section className="description">
        <p>{props.name}</p>
        {park.map((el) => {
            return (
                <>
                    <h1>{el.name}</h1>
                    <p>{el.description}</p>
                </>
            )
        })}
    </section>
}