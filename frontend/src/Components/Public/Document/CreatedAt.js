export const CreatedAt = (props) => {
    const date = new Date(props.date);
    const day = date.getDay();
    const year = date.getFullYear();
    const month = date.toLocaleDateString('fr',{month:'long'});
    return (
        <div className="dates">
            <div className="created">Création</div>
            <div className="day">{day}</div>
            <div className="month">{month}</div>
            <div className="year">{year}</div>
        </div>
    )
}