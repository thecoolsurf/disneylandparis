import { Field } from './Field.js';

export const Administrator = (props) => {
    return (
        <>
        
            <input type="hidden" name="id" defaultValue={props.e.id} />
            <p className="item">
                <label>Admin</label>
                <input type="text" name="admin" defaultValue={props.e.name} />
            </p>
            <p className="item">
                <label>Password</label>
                <input type="text" name="password" defaultValue={props.e.password} />
            </p>
        </>
    )
}