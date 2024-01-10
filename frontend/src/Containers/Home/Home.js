import './home.css';
import { LinkToFinder } from '../../Components/Search/LinkToFinder.js';

export const Home = (props) => {
    let tt_univers = '';
    let tt_attractions = '';
    let univers = '';
    return (
        <div className="home">
            <LinkToFinder />
            {props.parks.map((el) => {
                if (el.slug === 'park-disneyland') {
                    tt_univers = props.allUnivers[0].length + ' univers';
                    tt_attractions = props.allAttractions[0].length + ' attractions';
                    univers = props.allUnivers[0];
                } else {
                    tt_univers = props.allUnivers[1].length + ' univers';
                    tt_attractions = props.allAttractions[1].length + ' attractions';
                    univers = props.allUnivers[1];
                }
                return (
                    <section key={el.slug} className="infos">
                        <div className="col-left">
                            <a href={'/park-' + el.slug} className={'logo logo-' + el.slug} alt={el.name}>
                                <div className="back"><i className="fa fa-share"></i></div>
                            </a>
                        </div>
                        <div className="col-infos">
                            <div className="name">{el.name}</div>
                            <ul className="univers">
                                <li><i>Name</i><div>{el.name}</div></li>
                                <li><i>Total univers</i><div>{tt_univers}</div></li>
                                <li><i>Univers</i>
                                    {univers.map((e) => {
                                        return (
                                            <div key={e.name}>{e.name}</div>
                                        )
                                    })}
                                </li>
                                <li><i>Total attractions</i><div>{tt_attractions}</div></li>
                            </ul>
                        </div>
                        <div className="description">{el.description}</div>
                    </section>
                )
            })}
        </div>
    )
}
