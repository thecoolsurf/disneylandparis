import './listing.css';

export const ListAttractions = (props) => {
    let legend = props.datas.length > 1 ? 'attractions' : 'attraction';
    return (
        <div className="list-attractions">
            <div className="total">
                <div className="tt">{props.datas.length}</div>
                <div className="legend">{legend}</div>
            </div>
            <ul className="list">
                {props.datas.map((e) => {
                    return (
                        <li>{e.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}