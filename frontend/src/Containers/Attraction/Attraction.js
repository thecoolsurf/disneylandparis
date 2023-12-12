import './attraction.css';
import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Infos } from '../../Components/infos/Infos.js';

import card_1 from '../../assets/images/card-1.jpg';

export const Attraction = () => {
    const [show, setShow] = useState('modal hide');
    const [datas, setDatas] = useState([]);
    const location = useLocation();
    const url = location.pathname.toLowerCase().split('/')[1];
    const params = useParams();
    let cat = '';
    function blason() {
        switch (cat) {
            case 'discoveryland': return card_1;
            default: return card_1;
        }
    }
    useEffect(() => {
        const fetchtheData = async () => {
            const response = await fetch(
                `https://hp-api.onrender.com/api/character/${params.id}`
            );
            const responseApi = await response.json();
            setDatas(responseApi);
        };
        fetchtheData();
    }, []);
    return (
        <div className={url}>
            {datas.map((item, i) => {
                cat = item.house.toLowerCase();
                let img = item.image ? item.image : blason(cat);
                return (
                    <section className="identity">
                        <modal className={show} onClick={() => setShow('modal hide')}>
                            <img src={img} title={item.name} />
                        </modal>
                        <div className="images">
                            <a className="return" href={'/' + item.house} target="_self">{'Return to ' + item.house}</a>
                            <div className="image">
                                <img src={img} title={item.name} onClick={() => {
                                    setShow('modal show');
                                }} />
                                <div className="legend">{item.name}</div>
                            </div>
                            <div className="blason">
                                <img src={blason(cat)} title={item.house} />
                            </div>
                        </div>
                        <Infos datas={item} />
                    </section>
                )
            })}
        </div>
    )
}