import './attraction.css';
import { useState, useEffect } from 'react';
import { Infos } from '../../Components/infos/Infos.js';
import { Logo } from '../../Components/Logo/Logo.js';

export const Attraction = (props) => {
    const [attraction, setAttraction] = useState([]);
    const slug_props = props.uslug ? props.uslug : props.slug;
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
                <Infos datas={attraction} />
                <Logo slug={slug_props} />
                <div className="list-infos">
                    <div className="total">
                        <div className="tt">i</div>
                        <div className="legend">Infos</div>
                    </div>

                    <ul className="list">
                        {attraction.map((e) => {
                            return (
                                <>
                                    <li>{e.description}</li>
                                    <li>{e.restriction}</li>
                                </>
                            )
                        })}
                    </ul>
                </div>
            </section>
        </div>
    )
}