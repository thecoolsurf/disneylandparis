export const Navigation = (props) => {
    return (
        <div className="navigation">
            <div className="nav">
                {props.data.map((slug) => {
                    return (
                        <a key={slug} className="link" href={'/admin/entity/collection/' + slug}>{slug}</a>
                    )
                })}
            </div>
        </div>
    )
}