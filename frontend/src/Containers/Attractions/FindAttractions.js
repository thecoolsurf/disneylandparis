import { useState, useEffect } from 'react';

export const FindAttractions = (props) => {
    const [find, setFind] = useState('');
    const [findAttractions, setFindAttractions] = useState([]);
    useEffect(() => {
        const fetchtheData = async () => {
            const dataAttractions = await fetch(`http://localhost:80/all_attractions?find=${find}`);
            const findAttractions = await dataAttractions.json();
            setFindAttractions(findAttractions);
        };
        fetchtheData();
    }, [find]);
    return (
        <div className="finder">
            <form action="/find/attractions" method="get" className="search">
                <input type="text" max="50" value={find} name="find" onChange={(e) => {
                    setFind(e.target.value);
                }} />
                <input type="submit" value="send" /><i className="fa fa-search"></i>
            </form>
            <div className="infos">
                <h2>Résultat de recherche</h2>
                <ul>
                    {findAttractions.map((el) => {
                        return <li key={el.slug}>{el.name}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}