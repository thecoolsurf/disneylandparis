import '../../assets/css/public/home.css';
import { useState, useEffect } from 'react';
import { FilterHomeDatas } from '../../Components/Public/FilterHomeDatas.js';
import { FilterAttractions } from '../../Components/Public/FilterAttractions.js';
import { LinkToFinder } from '../../Components/Public/LinkToFinder.js';

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
    const attractions = props.navigation;
    return (
        <div className="home">
            <LinkToFinder />
            {parkAndUnivers.map((p) => {
                let tt_univers = '';
                let tt_attractions = '';
                let univers = null;
                if (p.pid === 1) {
                    tt_univers = parkAndUnivers[0].univers.length + ' univers';
                    tt_attractions = FilterAttractions(attractions, p.pid).length + ' attractions';
                    univers = parkAndUnivers[0].univers;
                } else {
                    tt_univers = parkAndUnivers[1].univers.length + ' univers';
                    tt_attractions = FilterAttractions(attractions, p.pid).length + ' attractions';
                    univers = parkAndUnivers[1].univers;
                }
                return (
                    <section key={p.pslug} className="infos">
                        <div className="col-left">
                            <a href={'/park-' + p.pslug} className={'logo logo-' + p.pslug} alt={p.pname}>
                                <div className="back"><i className="fa fa-share"></i></div>
                            </a>
                        </div>
                        <div className="col-infos">
                            <div className="name">{p.pname}</div>
                            <ul className="univers">
                                <li><i>Name</i><div>{p.pname}</div></li>
                                <li><i>Total univers</i><div>{tt_univers}</div></li>
                                <li><i>Univers</i>
                                    {p.univers.map((u) => {
                                        return (
                                            <div key={u.uname}>{u.uname}</div>
                                        )
                                    })}
                                </li>
                                <li><i>Total attractions</i><div>{tt_attractions}</div></li>
                            </ul>
                        </div>
                        <div className="description">
                            <h3>{p.title}</h3>
                            <p>{p.description}</p>
                            </div>
                    </section>
                )
            })}
        </div>
    )
}
