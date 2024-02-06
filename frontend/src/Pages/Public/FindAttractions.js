import { useState, useEffect } from 'react';

export const FindAttractions = (props) => {
    const [find, setFind] = useState('');
    const [findAttractions, setFindAttractions] = useState([]);
    console.log(find);
    useEffect(() => {
        const fetchtheData = async () => {
            const dataAttractions = await fetch(`http://localhost:80/find_attraction?find=${find}`);
            const findAttractions = await dataAttractions.json();
            setFindAttractions(findAttractions);
        };
        fetchtheData();
    }, [find]);
    console.log(findAttractions)
    return (
        <div className="finder">
            <form action="/find/attractions" method="get" className={'search ' + props.bkgNav}>
                <input type="text" max="50" value={find} name="find" onChange={(e) => {setFind(e.target.value);}} />
                <label>Rechercher une attraction</label>
            </form>
            <div className="infos">
                <h2>Résultat de recherche</h2>
                <ul>
                    {findAttractions.map((el) => {
                        return (
                        <li key={el.slug}>
                            <a href={el.route}>{el.name}</a>
                        </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}