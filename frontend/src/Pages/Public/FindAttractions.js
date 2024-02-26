import { useState, useEffect } from 'react';

export const FindAttractions = () => {
    const [find, setFind] = useState('');
    const [findAttractions, setFindAttractions] = useState([]);
    useEffect(() => {
        const fetchtheData = async () => {
            const dataAttractions = await fetch(`http://localhost:80/find_attraction?find=${find}`);
            const findAttractions = await dataAttractions.json();
            setFindAttractions(findAttractions);
        };
        fetchtheData();
    }, [find]);
    return (
        <div className="finder">
            <form action="/find/attractions" method="get" className="search">
                <label>Rechercher une attraction</label>
                <input type="text" max="50" value={find} name="find" onChange={(e) => { setFind(e.target.value); }} />
            </form>
            <section className="infos">
                <h2>Résultat</h2>
                <ul className="result">
                    {findAttractions.map((el) => {
                        return (
                            <li key={el.slug}>
                                <a href={el.route}>{el.name}</a>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </div>
    )
}