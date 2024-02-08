import '../../assets/css/admin/admin.css'

export const AdminConnexion = () => {
    return (
        <div className="admin">
            <form className="form" action={'http://localhost:80/admin/connexion'} method="POST" encType="application/x-www-form-urlencoded">
                <fieldset>
                    <legend>CONNEXION</legend>
                    <p className="item">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" defaultValue="" />
                    </p>
                    <p className="item">
                        <label htmlFor="password">Password</label>
                        <input type="text" id="password" name="password" defaultValue="" />
                    </p>
                    <input type="submit" value="Connexion" />
                </fieldset>
            </form>
        </div>
    )
}