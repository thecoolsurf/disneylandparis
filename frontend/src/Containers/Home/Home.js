import './home.css';
import park_disneyland from '../../assets/images/parks/logo-park-disneyland.svg';
import walt_disney_studios from '../../assets/images/parks/logo-walt-disney-studios.svg';

export const Home = (props) => {
    return (
        <div className="home">
            <section className="description">
                {props.parks.map((el) => {
                    let logo = el.slug === 'park-disneyland' ? park_disneyland : walt_disney_studios;
                    return (
                        <div className="link-park">
                            <a href={'/park-' + el.slug} alt={el.name} target="_self" rel="noreferrer">
                                <img src={logo} title={el.name} repeat="no-repeat" width="150px" height="auto" />
                            </a>
                            <h2>{el.name}</h2>
                            <p>{el.description}</p>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}
