import '../../assets/css/admin/admin.css'
import { useState, useEffect } from 'react';

export const AdminConnexion = () => {
    return (
        <div className="admin">
            <form action={'/admin/login'} method="POST" enctype="application/x-www-form-urlencoded">
                <fieldset>
                    <legend>CONNEXION:<span>admin</span></legend>
                    <p className="item">
                        <label>Admin</label>
                        <input type="text" name="admin" value="" />
                    </p>
                    <p className="item">
                        <label>Password</label>
                        <input type="text" name="password" value="" />
                    </p>
                    <input type="submit" value="Connexion" />
                </fieldset>
            </form>
        </div>
    )
}