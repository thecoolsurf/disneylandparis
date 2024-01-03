export const Infos = (props) => {
    return (
        <section className="infos">
            <div className="col-left">
                <a href={'/park-' + props.slug} className={'logo logo-' + props.slug} alt={props.name}></a>
                <a className="link" href={'/'} alt="home">Back Home</a>
            </div>
            <div className="col-infos">
                <div className="name">{el.name}</div>
                <ul className="list">
                    <li><i>Park</i><div>{el.name}</div></li>
                    <li><i>Total univers</i><div>{props.univers.length + ' ' + str}</div></li>
                    <li><i>Names</i>
                        {props.univers.map((e) => {
                            return (
                                <div>{e.name}</div>
                            )
                        })}
                    </li>
                </ul>
            </div>
            <div className="description">{el.description}</div>
        </section>
    )
}