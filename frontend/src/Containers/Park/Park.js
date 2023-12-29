import './park.css';
import { useState, useEffect } from 'react';

export const Park = (props) => {
    const [park, setPark] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const dataPark = await fetch(`http://localhost:80/park_by_id?id=${props.id}`);
            const park = await dataPark.json();
            setPark(park);
        };
        fetchData();
    }, []);
    {park.map((el) => {
        return (
            <section className="description">
                <h1>{el.name}</h1>
                <p>{el.description}</p>
            </section>
        )
    })}
}