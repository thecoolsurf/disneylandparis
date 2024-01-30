export const Navigation = (props) => {
    const url = window.location.href;
    const admin = url.includes('admin');
    if (admin) {
        return (
            <div className="navigation">
                <div className="nav">
                    {props.data.map((slug) => {
                        const active = (url.includes(slug)) ? 'active' : '';
                        return (
                            <a key={slug} className={'link '+active} href={'/admin/entity/collection/' + slug}>{slug}</a>
                        )
                    })}
                </div>
            </div>
        )
    } else {
        return (
            <></>
        )
    }
}