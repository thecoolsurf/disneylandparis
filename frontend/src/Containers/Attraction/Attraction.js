import './attraction.css';
import { useState, useEffect } from 'react';

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
    return (
        <div className="attraction">
            <section className="description">
                {attraction.map((el) => {
                    return (
                        <div className="infos">
                            <h1>{el.name}</h1>
                            <p>{el.description}</p>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}