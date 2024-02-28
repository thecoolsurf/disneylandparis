/*
@props label string
@props datas array
*/

export const BlockCategories = (props) => {
    if (props.label === 'home-categories') {
        return (
            <li className="items-2">
                <div className="total">Categories</div>
                {props.datas.map((c) => {
                    return (
                        <div className="item" key={c.cslug}>
                            <div className="cname">{c.cname}</div>
                            <div className="tt">{c.total}</div>
                        </div>
                    )
                })}
            </li>
        )
    }
    if (props.label === 'park-categories') {
        return (
            <li className="items-2">
                <div className="total">Categories</div>
                {props.datas.map((c) => {
                    return (
                        <div className="item" key={c.cslug}>
                            <div className="tt">{c.total}</div>
                            <div className="cname">{c.cname}</div>
                        </div>
                    )
                })}
            </li>
        )
    }
    if (props.label === 'univers-categories') {
        return (
            <li className="items-2">
                <div className="total">Categories</div>
                {props.datas.map((c) => {
                    return (
                        <div className="item" key={c.cslug}>
                            <div className="tt">{c.total}</div>
                            <div className="cname">{c.cname}</div>
                        </div>
                    )
                })}
            </li>
        )
    }
}