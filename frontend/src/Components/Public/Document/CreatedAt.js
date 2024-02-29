export const CreatedAt = (props) => {
    const date = new Date(props.date);
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const created = date.toLocaleDateString('fr', options).split(' ');
    return (
        <div className="dates">
            <div className="created">Création</div>
            <div className="day">{created[1]}</div>
            <div className="month">{created[2]}</div>
            <div className="year">{created[3]}</div>
        </div>
    )
}