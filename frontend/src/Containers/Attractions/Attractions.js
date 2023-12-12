import './attractions.css';
import { useState, useEffect, useContext } from 'react';
import { Attraction } from '../../Components/Attraction/Attraction.js';

export const Attractions = (props) => {
    const [search, setSearch] = useState('');
    const [datas, setDatas] = useState([]);
    const [filterDatas, setFilterDatas] = useState([]);

    /* resultat de l'API Harry Potter après filtrage serveur 'HOUSE' => 'Name' */
    useEffect(() => {
        console.log(props.url);
        const fetchData = async () => {
            const response = await fetch(
                `https://hp-api.onrender.com/api/characters/house/${props.url}`
            );
            const result = await response.json();
            setDatas(result);
        };
        fetchData();
    }, []);

    /* filtre local depuis le tableau retourné par l'API Harry Potter */
    useEffect(() => {
        if (datas) {
            const searchResult = datas.filter((el) => {
                return el.name.includes(search);
            });
            setFilterDatas(searchResult);
        } else { setFilterDatas('') }
    }, [search]);
    const result = search ? filterDatas : datas;
    return (
        <div className="houses">
            <div className="search">
                <div className="house">
                    <div className="name">{props.url}</div>
                    <div className="category">{datas.length+ ' membres'}</div>
                </div>
                <div className="searchbox">
                    <input type="text" max="50" value={search} name="search" onChange={(e) => { setSearch(e.target.value) }} />
                    <i className="fa fa-search"></i>
                </div>
            </div>
            <Attraction datas={result} url={props.url} />
            <section className="texte">
                <h2>{props.name}</h2>
                <p>Gryffondor (Gryffindor en anglais) vivait dans le village de Godric's Hollow, dans les plaines12,
                    et était le plus grand duelliste de son temps5. L'emblème des Gryffondor est le lion,
                    considéré comme la plus courageuse de toutes les créatures13.</p>
            </section>
        </div>
    )
}