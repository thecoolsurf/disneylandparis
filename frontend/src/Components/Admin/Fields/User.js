export const User = (props) => {
    return (
        <>
            <input type="hidden" name="id" defaultValue={props.e.id} />
            <p className="item">
                <label>Firstname</label>
                <input type="text" name="firstname" defaultValue={props.e.firstname} />
            </p>
            <p className="item">
                <label>Lastame</label>
                <input type="text" name="lastname" defaultValue={props.e.lastname} />
            </p>
            <p className="item">
                <label>Email</label>
                <input type="text" name="email" defaultValue={props.e.email} />
            </p>
            <p className="item">
                <label>Password</label>
                <input type="text" name="password" defaultValue={props.e.password} />
            </p>
            <p className="item">
                <label>Born</label>
                <input type="text" name="born" defaultValue={props.e.born} />
            </p>
            <p className="item">
                <label>Date start</label>
                <input type="text" name="date_start" defaultValue={props.e.date_start} />
            </p>
            <p className="item">
                <label>Date end</label>
                <input type="text" name="date_end" defaultValue={props.e.date_end} />
            </p>
        </>
    )
}