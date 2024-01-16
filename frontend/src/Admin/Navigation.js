export const Navigation = (props) => {
    return (
        <div className="navigation-admin">
            <div className="nav">
                {props.entities.map((e) => {
                    return (
                        <a key={e} className="link" href={'/admin/collection?uri=' + e}>{e}</a>
                    )
                })}
            </div>
        </div>
    )
}