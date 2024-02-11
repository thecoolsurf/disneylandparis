import '../../assets/css/public/home.css';
import { useState, useEffect } from 'react';
import { FilterHomeDatas } from '../../Components/Public/Filters/FilterHomeDatas.js';
import { FilterAttractions } from '../../Components/Public/Filters/FilterAttractions.js';
import { BlockLogo } from '../../Components/Public/Blocks/BlockLogo.js';
import { BlockInfos } from '../../Components/Public/Blocks/BlockInfos.js';

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
    console.log('hone',attraction);
    return (
        <div className="home">
            {parkAndUnivers.map((p) => {
                let park = null;
                let univers = null;
                let attractions = null;
                if (p.pid === 1) {
                    park = parkAndUnivers[0];
                    attractions = FilterAttractions(attraction, p.pid);
                    univers = parkAndUnivers[0].univers;
                } else {
                    park = parkAndUnivers[1];
                    attractions = FilterAttractions(attraction, p.pid);
                    univers = parkAndUnivers[1].univers;
                }
                return (
                    <section key={p.pid} className="infos">
                        <div className="bloc-infos">
                            <BlockLogo href={'/park-'+p.pslug} slug={p.pslug} legend={p.pname} />
                            <BlockInfos univers={univers} attractions={attractions} />
                        </div>
                    </section>
                )
            })}
        </div>
    )
}
