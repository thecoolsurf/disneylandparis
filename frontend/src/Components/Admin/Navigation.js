export const Navigation = (props) => {
    return (
        <div className="navigation">
            <div className="nav">
                {props.entities.map((e) => {
                    return (
                        <a key={e} className="link" href={'/admin/collection/' + e}>{e}</a>
                    )
                })}
            </div>
        </div>
    )
}