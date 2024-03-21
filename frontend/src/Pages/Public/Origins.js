import { useState, useEffect } from 'react';
import { FilterHomeDatas } from '../../Components/Public/Filters/FilterHomeDatas.js';
import { FilterAttractions } from '../../Components/Public/Filters/FilterAttractions.js';
import { BlockLogo } from '../../Components/Public/Blocks/BlockLogo.js';
import { BlockInfos } from '../../Components/Public/Blocks/BlockInfos.js';
import { BlockOrigins } from '../../Components/Public/Blocks/BlockOrigins.js';
import { BreadCrumb } from '../../Components/Public/Document/Breadcrumb.js';

export const Origins = (props) => {
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
    const origins = props.origins;
    return (
        <div className="home">
            <section className="infos">
                <BreadCrumb />
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
                        <div className="bloc-infos" key={'p' + p.pid}>
                            <BlockLogo href={p.proute} slug={p.pslug} legend={p.pname} />
                            <BlockInfos univers={univers} attractions={attractions} />
                        </div>
                    )
                })}
                <div className="bloc-infos">
                    <ul className="list">
                        <BlockOrigins label="home-origins" datas={origins} />
                    </ul>
                </div>
            </section>
        </div>
    )
}
