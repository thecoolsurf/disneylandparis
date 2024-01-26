export const Navigation = (props) => {
    const uri = window.location.href;
    return (
        <div className="navigation">
            <div className="nav">
                {props.data.map((slug) => {
                    const active = (uri.includes(slug)) ? 'active' : '';
                    return (
                        <a key={slug} className={'link '+active} href={'/admin/entity/collection/' + slug}>{slug}</a>
                    )
                })}
            </div>
        </div>
    )
}