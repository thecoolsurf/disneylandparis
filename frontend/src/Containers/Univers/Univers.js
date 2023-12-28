import './univers.css';
import { useState, useEffect } from 'react';
import { Attraction } from '../../Components/Carousel/Carousel.js';

export const Univers = (props) => {
    const [search, setSearch] = useState('');
    const [univers, setUnivers] = useState([]);
    const [attractions, setAttractions] = useState([]);
    const [filterDatas, setFilterDatas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const dataUnivers = await fetch(`http://localhost:80/univers_by_park`);
            const univers = await dataUnivers.json();
            setUnivers(univers);
            const dataAttractions = await fetch(`http://localhost:80/attraction_by_univers`);
            const attractions = await dataAttractions.json();
            setAttractions(attractions);
        };
        fetchData();
    }, []);
    /* filtre local depuis le tableau origine */
    useEffect(() => {
        if (attractions) {
            const searcattraction = attractions.filter((el) => {
                return el.name.includes(search);
            });
            setFilterDatas(searcattraction);
        } else { setFilterDatas('') }
    }, [search]);
    const dataForAttractions = search ? filterDatas : attractions;
    return (
        <div className="universes">
            <div className="search">
                <div className="theme">
                    <div className="park">{props.pname} ({props.id_park})</div>
                    <div className="univers">{props.name} ({props.id_univ})</div>
                    <div className="infos">{attractions.length + ' attractions'}</div>
                </div>
                <div className="searchbox">
                    <input type="text" max="50" value={search} name="search" onChange={(e) => { setSearch(e.target.value) }} />
                    <i className="fa fa-search"></i>
                </div>
            </div>
            <Attraction datas={dataForAttractions} />
            {univers.map((el) => {
                return (
                    <section className="description">
                        <h1>{el.name}</h1>
                        <p>{el.description}</p>
                    </section>
                )
            })}
        </div>
    )
}