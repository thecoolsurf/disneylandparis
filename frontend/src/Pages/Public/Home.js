import '../../assets/css/public/home.css';
import { useState, useEffect } from 'react';
import { FilterHomeDatas } from '../../Components/Public/FilterHomeDatas.js';
import { FilterAttractions } from '../../Components/Public/FilterAttractions.js';
import { BlockLogo } from '../../Components/Public/BlockLogo.js';
import { BlockInfos } from '../../Components/Public/BlockInfos.js';

export const Home = (props) => {
    const [home, setDatas] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const homeDatas = await fetch('http://localhost:80/home');
            const home = await homeDatas.json();
            setDatas(home);
        };
        fetchData();
    }, []);
    const parkAndUnivers = FilterHomeDatas(home);
    const attraction = props.navigation;
    return (
        <div className="home">
            {parkAndUnivers.map((p) => {
                let univers = null;
                let attractions = null;
                if (p.pid === 1) {
                    attractions = FilterAttractions(attraction, p.pid);
                    univers = parkAndUnivers[0].univers;
                } else {
                    attractions = FilterAttractions(attraction, p.pid);
                    univers = parkAndUnivers[1].univers;
                }
                return (
                    <section className="infos">
                        <div className="bloc-infos">
                            <BlockLogo href={'/park-'+p.pslug} slug={p.pslug} legend={p.pname} />
                            <BlockInfos univers={p.univers} attractions={attractions} />
                        </div>
                    </section>
                )
            })}
        </div>
    )
}
