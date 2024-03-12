import '../../assets/css/admin/admin.css';
import { Text } from '../../Components/Admin/Form/Inputs/Text.js';
import { Password } from '../../Components/Admin/Form/Inputs/Password.js';
import { Hidden } from '../../Components/Admin/Form/Inputs/Hidden.js';

export const AdminConnexion = () => {
    return (
        <div className="admin">
            <form className="form" action={'http://localhost:80/admin/connexion'} method="POST" encType="application/x-www-form-urlencoded">
                <fieldset>
                    <legend>Admin</legend>
                    <Text name="email" value="" />
                    <Password name="password" value="" />
                    <Hidden name="token" value="" />
                    <input type="submit" value="Connexion" />
                </fieldset>
            </form>
        </div>
    )
}