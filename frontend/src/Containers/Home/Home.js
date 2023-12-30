import './home.css';

export const Home = (props) => {
    return (
        <div className="home">
            {props.parks.map((el) => {
                return (
                    <section className="description">
                        <p>{el.name}</p>
                        <a href={'/'+el.slug} alt={el.name} target="_blank" rel="noreferrer" className="link">{el.slug}</a>
                    </section>
                )
            })}
        </div>
    )
}
