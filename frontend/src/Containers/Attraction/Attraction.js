import './attraction.css';
import { useState, useEffect } from 'react';

export const Attraction = (props) => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        const fetchtheData = async () => {
            const response = await fetch(`https://hp-api.onrender.com/api/character?${props.id}`);
            const responseApi = await response.json();
            setDatas(responseApi);
        };
        fetchtheData();
    }, []);
    return (
        <>
        </>
    )
}