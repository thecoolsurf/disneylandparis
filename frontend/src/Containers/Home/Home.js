import './home.css';

export const Home = (props) => {
    return (
        <div className="home">
            {props.parks.map((el) => {
                return (
                    <section className="description">
                        <h1>{el.name}</h1>
                        <p>{el.description}</p>
                    </section>
                )
            })}
        </div>
    )
}
