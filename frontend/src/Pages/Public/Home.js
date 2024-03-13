import '../../assets/css/public/home.css';
import { useState, useEffect } from 'react';
import { FilterHomeDatas } from '../../Components/Public/Filters/FilterHomeDatas.js';
import { FilterAttractions } from '../../Components/Public/Filters/FilterAttractions.js';
import { BlockLogo } from '../../Components/Public/Blocks/BlockLogo.js';
import { BlockInfos } from '../../Components/Public/Blocks/BlockInfos.js';
import { BlockCategories } from '../../Components/Public/Blocks/BlockCategories.js';
import { Carrousel } from '../../Components/Public/Document/Carrousel.js';

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
    const categories = props.categories;
    const legend = `${parkAndUnivers.length} parks à thèmes - ${home.length} univers - ${attraction.length} attractions`;
    return (
        <div className="home">
            <Carrousel legend={legend} datas={attraction} />
            <section className="infos">
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
                        <div className="bloc-infos" key={'p'+p.pid}>
                            <BlockLogo href={p.proute} slug={p.pslug} legend={p.pname} />
                            <BlockInfos univers={univers} attractions={attractions} />
                        </div>
                    )
                })}
                <div className="bloc-infos">
                    <ul className="list">
                        <BlockCategories label="home-categories" datas={categories} />
                    </ul>
                </div>
            </section>
        </div>
    )
}
