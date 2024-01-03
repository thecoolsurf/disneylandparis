import './home.css';

export const Home = (props) => {
    const tt_univers_park = props.universPark.length;
    const tt_univers_studio = props.universPark.length;
    const tt_attractions_park = props.attractionsPark.length;
    const tt_attractions_studio = props.attractionsStudio.length;
    let tt_univers = '';
    let tt_attractions = '';
    let univers = '';
    return (
        <div className="home">
            {props.parks.map((el) => {
                if (el.slug === 'park-disneyland') {
                        tt_univers = tt_univers_park + ' univers';
                        tt_attractions = tt_attractions_park + ' attractions';
                        univers = props.universPark;
                } else {
                        tt_univers = tt_univers_studio + ' univers';
                        tt_attractions = tt_attractions_studio + ' attractions';
                        univers = props.universStudio;
                }
                return (
                    <section className="infos">
                        <div className="col-left">
                            <a href={'/park-' + el.slug} className={'logo logo-' + el.slug} alt={el.name}></a>
                        </div>
                        <div className="col-infos">
                            <div className="name">{el.name}</div>
                            <ul className="univers">
                                <li><i>Name</i><div>{el.name}</div></li>
                                <li><i>Total univers</i><div>{tt_univers}</div></li>
                                <li><i>Univers</i>
                                    {univers.map((e) => {
                                        return (
                                            <div>{e.name}</div>
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
