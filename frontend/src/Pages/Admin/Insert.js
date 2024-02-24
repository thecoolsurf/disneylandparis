import '../../assets/css/admin/admin.css';
import '../../assets/css/admin/form.css';
import { Entities } from '../../Components/Admin/Update/Entities.js';
import { Attributes } from '../../Components/Admin/Update/Attributes.js';

export const AdminInsert = (props) => {
    return (
        <div className="admin">
            <form className="form" action={`http://localhost:80/admin/insert/${props.uri}`} method="POST">
                <fieldset>
                    <legend>INSERT:<span>{props.uri}</span></legend>
                    <Entities key={props.uri} uri={props.uri} />
                    <Attributes key={props.uri} uri={props.uri} />
                    <input type="submit" defaultValue="Insert" />
                </fieldset>
            </form>
            <a className="back" href={`/admin/entity/collection/${props.uri}`} alt="back">
                <i className="fa fa-reply"></i>
            </a>
        </div>
    )
}