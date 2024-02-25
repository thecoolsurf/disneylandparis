export const CreatedAt = (props) => {
    const date = new Date(props.date);
    console.log(date);
    let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    const day = date.getDay();
    const year = date.getFullYear();
    const created = date.toLocaleDateString('fr',options).split(' ');
    console.log(created);
    return (
        <div className="dates">
            <div className="created">Création</div>
            <div className="day">{created[1]}</div>
            <div className="month">{created[2]}</div>
            <div className="year">{year}</div>
        </div>
    )
}