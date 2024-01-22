export const User = (props) => {
    return (
        <>
            <input type="hidden" name="id" value={props.e.id} />
            <p className="item">
                <label>Firstname</label>
                <input type="text" name="firstname" value={props.e.firstname} />
            </p>
            <p className="item">
                <label>Lastame</label>
                <input type="text" name="lastname" value={props.e.lastname} />
            </p>
            <p className="item">
                <label>Email</label>
                <input type="text" name="email" value={props.e.email} />
            </p>
            <p className="item">
                <label>Password</label>
                <input type="text" name="password" value={props.e.password} />
            </p>
            <p className="item">
                <label>Born</label>
                <input type="text" name="born" value={props.e.born} />
            </p>
            <p className="item">
                <label>Date start</label>
                <input type="text" name="date_start" value={props.e.date_start} />
            </p>
            <p className="item">
                <label>Date end</label>
                <input type="text" name="date_end" value={props.e.date_end} />
            </p>
        </>
    )
}