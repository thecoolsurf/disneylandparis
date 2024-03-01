import '../../assets/css/admin/admin.css';
import '../../assets/css/admin/form.css';
import { Fields } from '../../Components/Admin/Update/Fields.js';

export const AdminInsert = (props) => {
    return (
        <div className="admin">
            <form className="form" action={`http://localhost:80/admin/insert/${props.uri}`} method="POST">
                <fieldset>
                    <legend>INSERT:<span>{props.uri}</span></legend>
                    <Fields uri={props.uri} />
                    <input type="submit" defaultValue="Insert" />
                </fieldset>
            </form>
            <a className="back" href={`/admin/entity/collection/${props.uri}`} alt="back">
                <i className="fa fa-reply"></i>
            </a>
        </div>
    )
}